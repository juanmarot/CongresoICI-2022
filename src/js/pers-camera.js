//creating scene
let scene = new THREE.Scene();
scene.background = new THREE.Color(0x0d1e28);

//add camera
let camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    2000
);

//add new camera
let newcamera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    3,
    100
);

//This helps with visualizing what a camera contains in its frustum.
//It visualizes the frustum of a camera using a LineSegments.
//Frustum: porción resultante de un sólido
var helper = new THREE.CameraHelper(newcamera);
scene.add(helper);

//renderer
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

//Cube
let geometry = new THREE.BoxGeometry();
let material = new THREE.MeshBasicMaterial({
    color: 0xfbb845,
    wireframe: true
});
let cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = -5;

let i=0;

//Animation
let animate = function(){
    requestAnimationFrame(animate);

    camera.lookAt(newcamera.position);

    camera.position.x = Math.cos(i) * 30;
    camera.position.z = Math.sin(i) * 30;

    i += 0.01;

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);

}

animate();