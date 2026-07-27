import React, { useEffect, useRef } from 'react';

// A slowly drifting node graph behind the hero — nodes connected to their nearest
// neighbours, which is roughly what a pipeline DAG looks like and beats a generic
// spinning cube.
//
// Constraints this respects, because a decorative background should never cost
// anything a visitor notices:
//   - three.js is imported dynamically, so it lands in its own chunk after paint
//   - nothing renders at all under prefers-reduced-motion
//   - the loop stops when the hero scrolls out of view or the tab is hidden
//   - pixel ratio is capped at 2

const NODE_COUNT = 70;
const LINK_DISTANCE = 2.4;
const FIELD = 9;

function HeroBackground({ theme }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    let disposed = false;
    let cleanup = () => {};

    import('three')
      .then((THREE) => {
        if (disposed) return;

        // Read the accent from CSS rather than hardcoding it, so changing the
        // token in one place recolours the graph too.
        const accentVar = getComputedStyle(document.documentElement)
          .getPropertyValue('--accent')
          .trim();
        const parsed = /^#([0-9a-f]{6})$/i.exec(accentVar);
        const accent = parsed ? parseInt(parsed[1], 16) : 0xfb923c;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          60,
          mount.clientWidth / mount.clientHeight,
          0.1,
          100
        );
        camera.position.z = 11;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        mount.appendChild(renderer.domElement);

        // Nodes scattered through a flattened box, each with a slow drift velocity.
        const positions = new Float32Array(NODE_COUNT * 3);
        const velocities = new Float32Array(NODE_COUNT * 3);
        for (let i = 0; i < NODE_COUNT; i += 1) {
          positions[i * 3] = (Math.random() - 0.5) * FIELD * 1.6;
          positions[i * 3 + 1] = (Math.random() - 0.5) * FIELD;
          positions[i * 3 + 2] = (Math.random() - 0.5) * FIELD * 0.5;
          velocities[i * 3] = (Math.random() - 0.5) * 0.0055;
          velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.0055;
          velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.0035;
        }

        const nodeGeometry = new THREE.BufferGeometry();
        nodeGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const nodeMaterial = new THREE.PointsMaterial({
          color: accent,
          size: 0.11,
          transparent: true,
          opacity: 0.85,
          sizeAttenuation: true,
        });
        const nodes = new THREE.Points(nodeGeometry, nodeMaterial);

        // Links are rebuilt each frame from the current positions. At 70 nodes the
        // pairwise check is ~2.4k iterations, which is nothing.
        const maxLinks = (NODE_COUNT * (NODE_COUNT - 1)) / 2;
        const linkPositions = new Float32Array(maxLinks * 6);
        const linkGeometry = new THREE.BufferGeometry();
        linkGeometry.setAttribute('position', new THREE.BufferAttribute(linkPositions, 3));
        const linkMaterial = new THREE.LineBasicMaterial({
          color: accent,
          transparent: true,
          opacity: 0.22,
        });
        const links = new THREE.LineSegments(linkGeometry, linkMaterial);

        const group = new THREE.Group();
        group.add(nodes);
        group.add(links);
        scene.add(group);

        // Pointer parallax, eased rather than tracking directly.
        const pointer = { x: 0, y: 0 };
        const target = { x: 0, y: 0 };
        const onPointerMove = (event) => {
          target.x = (event.clientX / window.innerWidth - 0.5) * 0.35;
          target.y = (event.clientY / window.innerHeight - 0.5) * 0.35;
        };
        window.addEventListener('pointermove', onPointerMove, { passive: true });

        const onResize = () => {
          if (!mount.clientWidth || !mount.clientHeight) return;
          camera.aspect = mount.clientWidth / mount.clientHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(mount.clientWidth, mount.clientHeight);
        };
        const resizeObserver = new ResizeObserver(onResize);
        resizeObserver.observe(mount);

        // Only animate while the hero is actually on screen and the tab is visible.
        let onScreen = true;
        const visibilityObserver = new IntersectionObserver(
          ([entry]) => {
            onScreen = entry.isIntersecting;
          },
          { threshold: 0 }
        );
        visibilityObserver.observe(mount);

        const renderFrame = () => {
          const pos = nodeGeometry.attributes.position.array;
          for (let i = 0; i < NODE_COUNT; i += 1) {
            for (let axis = 0; axis < 3; axis += 1) {
              const index = i * 3 + axis;
              pos[index] += velocities[index];
              // Bounce off the edges of the field so the cloud stays put.
              const bound = axis === 0 ? FIELD * 0.8 : axis === 1 ? FIELD * 0.5 : FIELD * 0.25;
              if (pos[index] > bound || pos[index] < -bound) velocities[index] *= -1;
            }
          }
          nodeGeometry.attributes.position.needsUpdate = true;

          let linkIndex = 0;
          for (let i = 0; i < NODE_COUNT; i += 1) {
            for (let j = i + 1; j < NODE_COUNT; j += 1) {
              const dx = pos[i * 3] - pos[j * 3];
              const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
              const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
              if (dx * dx + dy * dy + dz * dz < LINK_DISTANCE * LINK_DISTANCE) {
                linkPositions[linkIndex++] = pos[i * 3];
                linkPositions[linkIndex++] = pos[i * 3 + 1];
                linkPositions[linkIndex++] = pos[i * 3 + 2];
                linkPositions[linkIndex++] = pos[j * 3];
                linkPositions[linkIndex++] = pos[j * 3 + 1];
                linkPositions[linkIndex++] = pos[j * 3 + 2];
              }
            }
          }
          linkGeometry.setDrawRange(0, linkIndex / 3);
          linkGeometry.attributes.position.needsUpdate = true;

          pointer.x += (target.x - pointer.x) * 0.04;
          pointer.y += (target.y - pointer.y) * 0.04;
          group.rotation.y = pointer.x;
          group.rotation.x = pointer.y;

          renderer.render(scene, camera);
        };

        let frame;
        const tick = () => {
          frame = requestAnimationFrame(tick);
          // Browsers already throttle rAF in background tabs; this also covers the
          // hero simply being scrolled past.
          if (!onScreen || document.hidden) return;
          renderFrame();
        };

        // Paint one frame up front. Without this, a page opened in a background tab
        // has a blank canvas until it is focused, because rAF never fires there.
        renderFrame();
        tick();

        cleanup = () => {
          cancelAnimationFrame(frame);
          window.removeEventListener('pointermove', onPointerMove);
          resizeObserver.disconnect();
          visibilityObserver.disconnect();
          nodeGeometry.dispose();
          nodeMaterial.dispose();
          linkGeometry.dispose();
          linkMaterial.dispose();
          renderer.dispose();
          if (renderer.domElement.parentNode === mount) {
            mount.removeChild(renderer.domElement);
          }
        };
      })
      .catch(() => {
        // A decorative background is not worth surfacing an error for.
      });

    return () => {
      disposed = true;
      cleanup();
    };
  }, [theme]);

  return <div className="heroCanvas" ref={mountRef} aria-hidden="true" />;
}

export default HeroBackground;
