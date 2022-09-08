const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 400;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x212121);

const spotLight = new THREE.SpotLight(0xffffff, 1);
spotLight.position.set(0, 1, 0);
const ambLight = new THREE.AmbientLight(0xffffff, 1);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new THREE.TextureLoader();
loader.load('newLogo2.png', function (texture) {
  const geometry = new THREE.BoxGeometry(115, 115, 115);
  const material = [
    new THREE.MeshStandardMaterial({
      color: '#364652', //left
    }),
    new THREE.MeshStandardMaterial({
      color: 'blue', //right
    }),
    new THREE.MeshStandardMaterial({
      map: texture, //top
    }),
    new THREE.MeshStandardMaterial({
      map: texture, //bottom
    }),
    new THREE.MeshStandardMaterial({
      color: 'red', //front
    }),
    new THREE.MeshStandardMaterial({
      color: '#506A7E', //back
    }),
  ];

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  scene.add(spotLight);
  scene.add(ambLight);

  mesh.position.y = 25;
  mesh.position.x = -7.5;
  mesh.rotateX(-15.3);
  mesh.rotateY(145.3);
  mesh.rotateZ(-0.0001);

  console.log(scene)
  console.log(camera)
  function animation() {
    requestAnimationFrame( animation )

    renderer.render(scene, camera);
  }
  animation();
});

