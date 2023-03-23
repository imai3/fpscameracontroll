const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  1,
  10000
);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xaaaaaa, 1);
document.body.appendChild(renderer.domElement);


const cube = {
  geometry: new THREE.BoxGeometry(1, 1, 1),
  material: new THREE.MeshBasicMaterial({ color: 0x00ff00 })
};

cube.mesh = new THREE.Mesh(cube.geometry, cube.material);

scene.add(cube.mesh);

camera.position.z = 5;

function render() {
  renderer.render(scene, camera);

  cube.mesh.rotation.x += 0.05;
  cube.mesh.rotation.y -= 0.05;

  requestAnimationFrame(render);
}

render();