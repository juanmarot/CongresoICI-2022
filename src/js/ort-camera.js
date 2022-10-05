//creating scene
let scene = new THREE.Scene();
scene.background = new THREE.Color(0x0d1e28);

//add camera
let camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight
);

//add new camera
let newcamera = new THREE.OrthographicCamera(
    5,
    -5,
    5,
    -5,
    3,
    10
);

//helper
let helper = new THREE.CameraHelper(newcamera);
scene.add(helper);

//renderer
var renderer = new THREE.WebGLRenderer();
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

camera.position.z = 5;

renderer.render(scene,camera);

//Animation
let i = 0;
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

//addEventListener: attaches an event handler to the specified element.
window.addEventListener('resize', ()=>{
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
});

animate();