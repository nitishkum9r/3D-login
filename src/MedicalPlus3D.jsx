// MedicalPlus3D.jsx
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const MedicalPlus3D = () => {
  const mountRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sceneRef = useRef(new THREE.Scene());
  const composerRef = useRef(null);

  useEffect(() => {
    // Three.js setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(180, 180);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 8;

    // Plus symbol construction
    const geometry = new THREE.BoxGeometry(1, 4, 1);
    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      emissive: 0x4f46e5,
      emissiveIntensity: 0.3,
      shininess: 100
    });

    const plusGroup = new THREE.Group();
    const vertical = new THREE.Mesh(geometry, material);
    const horizontal = vertical.clone().rotateZ(Math.PI / 2);
    plusGroup.add(vertical, horizontal);
    sceneRef.current.add(plusGroup);

    // Lighting setup for dynamic shadows
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const pointLight = new THREE.PointLight(0xffffff, 1.5);
    pointLight.position.set(5, 5, 5);
    sceneRef.current.add(ambientLight, pointLight);

    // Mouse tracking
    const handleMouseMove = (e) => {
      const rect = mountRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * -2
      });
    };

    mountRef.current.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Dynamic shadow calculation
      pointLight.position.x = mousePos.x * 10;
      pointLight.position.y = mousePos.y * 10;

      // Smooth rotation
      plusGroup.rotation.x += 0.002;
      plusGroup.rotation.y += 0.003;

      renderer.render(sceneRef.current, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      mountRef.current.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={mountRef}
      className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2
                 cursor-pointer hover:scale-105 transition-transform duration-300
                 drop-shadow-[0_0_30px_rgba(79,70,229,0.2)]"
      style={{
        width: '180px',
        height: '180px',
        filter: `brightness(${1 + Math.hypot(mousePos.x, mousePos.y) * 0.2})`
      }}
    />
  );
};

export default MedicalPlus3D;