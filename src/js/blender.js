let scene, camera, renderer;

scene = new THREE.Scene();
scene.background = new THREE.Color(0x0d1e28);

camera = new THREE.PerspectiveCamera(
	40,
	window.innerWidth/window.innerHeight,
	1,
	5000
);

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({
	color: 0x0d1e28,
	wireframe: true
});
var cube = new THREE.Mesh(geometry, material);
cube.position.z = -5;

scene.add(cube);

camera.position.z = 100;

hlight = new THREE.AmbientLight(0x404040,100);
//scene.add(hlight);

//directionalLight = new THREE.DirectionalLight(0xffffff, 100);
//directionalLight.position.set(0, 1, 0);
//directionalLight.castShadow = true;
//scene.add(directionalLight);

light = new THREE.PointLight(0xD569EF, 10);
light.position.set(0, 100, 0);
scene.add(light);

light2 = new THREE.PointLight(0xABEF69, 10);
light2.position.set(0, 0, 0);
scene.add(light2);

light3 = new THREE.PointLight(0x7469EF, 10);
light3.position.set(0, 0, 100);
scene.add(light3);

light4 = new THREE.PointLight(0x69EFC9, 10);
light4.position.set(0, 0, 100);
scene.add(light4);

renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let loader = new THREE.GLTFLoader();
loader.load('src/models/fantasmas.glb', (gltf)=>{
	fantasmas = gltf.scene.children[0];
	scene.add(gltf.scene);
	renderer.render(scene, camera);
});


//addEventListener: attaches an event handler to the specified element.
window.addEventListener('resize', ()=>{
	camera.aspect = window.innerWidth/window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.render(scene, camera);
});

let i = 0;
var animate = function(){
	requestAnimationFrame(animate);

	camera.lookAt(cube.position);
	
	camera.position.x = Math.cos(i) * 30;
	camera.position.z = Math.sin(i) * 30;

	i += 0.01;

	renderer.render(scene, camera);

}

animate();