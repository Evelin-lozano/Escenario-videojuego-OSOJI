
//Scene
const scene = new THREE.Scene();
var loader = new THREE.TextureLoader()
loader.load('../Imagenes/fondo-parque.jpg', function(textura){
	scene.background = textura;
});

//Camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); 

//Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


//Carga modelo 3D Wolf
const gltfLoader = new THREE.GLTFLoader();
gltfLoader.load('../Imagenes/kawaii_roxanne_wolf/Wolf.gltf',
(gltf) =>{
    var loaderObjeto = gltf.scene;
    loaderObjeto.scale.set(0.2,0.2,0.2)
    loaderObjeto.position.y = 100;
    scene.add(loaderObjeto);
    
    console.log('carga completa');
}, ()=>{
    console.log('cargando');
}, ()=>{
    console.log(error);
}
); 
//Carga modelo 3D Monster
gltfLoader.load('../Imagenes/monster_-_day_18_-_3december/scene.gltf',
(gltf) =>{
    var loaderObjeto3 = gltf.scene;
    loaderObjeto3.scale.set(3,3,3)
    loaderObjeto3.position.z = 900; 
    loaderObjeto3.position.y = -15;
    loaderObjeto3.position.x =55;
    scene.add(loaderObjeto3);
    
    console.log('carga completa');
}, ()=>{
    console.log('cargando');
}, ()=>{
    console.log(error);
}
); 
//Carga modelo 3D Racoon
gltfLoader.load('../Imagenes/racoon_cartoon_style/Racoon.gltf',
(gltf) =>{
    var loaderObjeto2 = gltf.scene;
    loaderObjeto2.scale.set(3,3,3);
    loaderObjeto2.position.z = 935; 
    loaderObjeto2.position.y = -7;
    loaderObjeto2.position.x = 10;
    scene.add(loaderObjeto2);
    console.log('carga completa');

    //Dragcontrols
 let objects = [sphere,sphere1,sphere2,sphere3,sphere4,sphere5,sphere6]

 const DragControls = new THREE.DragControls( objects, camera, renderer.domElement );
 DragControls.enabled = true;
 
 DragControls.deactivate();
 DragControls.activate();
 
 DragControls.addEventListener("hoveron", function (event){
 
     //console.log.apply(event.object)
     event.object.material.wireframe = true;
     event.object.scale.y *=1;
 });
 
 DragControls.addEventListener("hoveroff", function (event){
 
     //console.log.apply(event.object)
      event.object.material.wireframe = false;
      event.object.scale.y /=1;
  });
  //fin Dragcontrols

}, ()=>{
    console.log('cargando');
}, ()=>{
    console.log(error);
}
); 

//Luces
const Light = new THREE.DirectionalLight( 0xffffff, 1 );
Light.position.set(6,6,6)
scene.add(Light);

const al = new THREE.AmbientLight(0xffffff,1)
scene.add(al)

//Burbujas
const geometry = new THREE.SphereGeometry( 40, 40, 40);

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('./imagenes/burbuja2.jpg');
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading;

const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );
sphere.position.set(400,100,300);

const  sphere1  = new THREE.Mesh( geometry, material );
scene.add(  sphere1  );
sphere1.position.set(700,800,880);

const  sphere2  = new THREE.Mesh( geometry, material );
scene.add(  sphere2  );
sphere2.position.set(200,100,300);

const  sphere3  = new THREE.Mesh( geometry, material );
scene.add(  sphere3  );
sphere3.position.set(300,400);

const  sphere4  = new THREE.Mesh( geometry, material );
scene.add(  sphere4  );
sphere4.position.set(500,600);

const  sphere5  = new THREE.Mesh( geometry, material );
scene.add(  sphere5  );
sphere5.position.set(1300,-200);

const  sphere6  = new THREE.Mesh( geometry, material );
scene.add(  sphere6  );
sphere6.position.set(-400,-100,400);

//Posicion camara
camera.position.z = 950;

//Animacion
function animate() {
	requestAnimationFrame( animate );
    renderer.render( scene, camera );   
}

animate();

