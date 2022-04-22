import {useEffect} from 'react';
import * as THREE from 'three/src/Three.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import styles from './styles.module.css'
let camera
let scene
let renderer
let controls
let model
let skeleton



function init() {
  

  camera = new THREE.PerspectiveCamera(
    15.10,
    window.innerWidth / window.innerHeight,
    0.01,
    50000
  )
  camera.position.y = 25 * Math.sin(0.8 * Math.PI)
  camera.position.x = 15 * Math.cos(1.2 * Math.PI)
  camera.position.z = 10 
  camera.lookAt(new THREE.Vector3(0, 0, 0))
  console.log('camera:', camera)

  scene = new THREE.Scene()

  const groundMaterial = new THREE.ShadowMaterial({
    transparent: true,
    color: 0x3c3c3c
  })
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(50, 50), groundMaterial)
  plane.rotation.x = -Math.PI / 2
  plane.receiveShadow = true
  scene.add(plane)

  const light = new THREE.DirectionalLight(0xdfebff, 1.0)
  light.position.set(300 * 1.5, 400 * 1.5, 500 * 1.5)
  light.position.set(10, 30, 10)
  light.castShadow = true
  const d = 5
  light.shadow.camera.visible = true
  light.shadow.camera.left = -d
  light.shadow.camera.right = d
  light.shadow.camera.top = d
  light.shadow.camera.bottom = -d
  light.shadow.radius = 5
  light.shadow.mapSize.width = 1024
  light.shadow.mapSize.height = 1024
  // light.shadow.camera.near = 0.5
  light.shadow.camera.far = 2000
  scene.add(light)

  const ambientLight = new THREE.AmbientLight(0xcccccc, 0.1)
  scene.add(ambientLight)



  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.outputEncoding = THREE.sRGBEncoding
  renderer.shadowMap.enabled = true

  //document.body.appendChild(renderer.domElement)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.autoRotate = true
  const mtlLoader = new THREE.MaterialLoader();

  mtlLoader.load('dog.mtl',(materials)=>{
    materials.preload();
    
 
  })
  const loader  = new GLTFLoader();
 
  loader.load( 'dog.glb', function ( gltf ) {

    model = gltf.scene;
    scene.add( model );
    model.traverse( function ( object ) {

      if ( object.isMesh ) object.castShadow = true;

    } );

    skeleton = new THREE.SkeletonHelper( model );
    skeleton.visible = false;
    scene.add( skeleton );
  })
  return renderer.domElement;
}

function animate() {
  controls.update()
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}


// const LazyVoxelDog = dynamic(() =>{}, {
//   ssr: false,
//   loading: () => <VoxelDogLoader />
// })
const Render =  ()=>{

    
    useEffect(()=>{
      
        
       document.getElementById('Render').appendChild(init());
       animate();
    },[])
    return(
    <div id="Render" className={styles.voxel}>
      
    </div>
       )
}


export default Render;