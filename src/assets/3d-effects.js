// Directory: src/assets
// File: 3d-effects.js

// Import the Three.js library
import * as THREE from 'three';

// Initialize the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add hover effect placeholder (no cube)
document.querySelectorAll('.hover-container').forEach(container => {
  container.addEventListener('mouseenter', () => {
    container.style.transform = 'scale(1.1)';
    container.style.transition = 'transform 0.3s ease-in-out';
  });

  container.addEventListener('mouseleave', () => {
    container.style.transform = 'scale(1)';
  });
});

// Handle resizing
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
