console.log('here')
const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    let mesh3;
    const audio = new Audio('never.mp3');
		const renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(renderer.domElement);

		const spotLight = new THREE.SpotLight(0xffffff, 1);
		spotLight.position.set(-5, 4, 0);
		const ambLight = new THREE.AmbientLight(0xffffff, 1);
		const box2Texture = document.getElementById('boxtex');
    box2Texture.play();
		const geometry = new THREE.BoxGeometry();
		const geometry2 = new THREE.ConeGeometry()
		const material = new THREE.MeshStandardMaterial({ color: 0xff6f3e });
		const cube = new THREE.Mesh(geometry, material);
		const cone = new THREE.Mesh(geometry2, new THREE.MeshStandardMaterial({ color: 0xB5D9F4 }))
		const cube2 = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: 0x506A7E }));
		cube.position.x = 3;
		cone.position.z = -15;
		scene.background = new THREE.Color(0x212121);
		scene.add(cube, cube2, cone, spotLight, ambLight);

		camera.position.x = 2;
		camera.position.z = 5;

		function animate() {
			requestAnimationFrame(animate);

			cube.rotation.y += 0.01;
			cube2.rotation.y -= 0.01;
			cone.rotation.x += 0.01;
      if (mesh3 !== undefined) {
        mesh3.position.x = 1.7;
        mesh3.rotation.y += .01;
      }
			renderer.render(scene, camera);
		};
		animate();