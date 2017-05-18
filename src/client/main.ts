import {BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer} from "three";
import "../config/environment";
import "./style.css";

window.addEventListener('DOMContentLoaded', () => {

  const canvas = <HTMLCanvasElement>document.getElementById('game-canvas');

  const scene = new Scene();
  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.z = 1000;

  const mesh = new Mesh(new BoxGeometry(200, 200, 200), new MeshBasicMaterial({color: 0xff0000, wireframe: true}));
  scene.add(mesh);

  const renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  render();

  function render() {
    requestAnimationFrame(render);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

});
