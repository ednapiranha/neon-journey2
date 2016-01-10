// Borrowed and mangled from http://threejs.org/examples/#canvas_camera_orthographic

(function () {
  var height = window.innerHeight;
  var width = window.innerWidth;

  var container;
  var camera, scene, renderer;

  init();
  animate();

  function init() {
    container = document.createElement('div');
    document.body.appendChild(container);

    camera = new THREE.PerspectiveCamera(185, width / height, 10, 3500);
    scene = new THREE.Scene();

    scene.fog = new THREE.FogExp2('#00e6ff', 0.009);

    // grids

    var size = 1200, step = 5;
    var geometry = new THREE.Geometry();

    for (var i =- size; i <= size; i += step) {
      geometry.vertices.push( new THREE.Vector3(i - 300, -size, i));
      geometry.vertices.push( new THREE.Vector3(-i - 300, size, i));
    }

    var material = new THREE.LineBasicMaterial({
      color: '#fff',
      opacity: 0.9
    });

    var line = new THREE.LineSegments(geometry, material);
    scene.add(line);

    var geometry2 = new THREE.Geometry();

    for (var i =- size; i <= size; i += step) {
      geometry2.vertices.push( new THREE.Vector3(i + 900, -size, i));
      geometry2.vertices.push( new THREE.Vector3(-i + 900, size, i));
    }

    var line2 = new THREE.LineSegments(geometry2, material);
    scene.add(line2);

    // bars

    var geometry = new THREE.BoxGeometry(100, 20, 1050);
    var material = new THREE.MeshLambertMaterial({
      color: '#b509c2',
      transparent: true,
      opacity: 0.5
    });
    var material2 = new THREE.MeshLambertMaterial({
      color: '#007bcb',
      transparent: true,
      opacity: 0.5
    });

    for (var i = 0; i < 20; i ++) {
      var cube2 = new THREE.Mesh(geometry, material);

      cube2.scale.y = 3;
      cube2.scale.x = 3;
      cube2.position.x = -1200 + (i * 10);
      cube2.position.y = 1000 + (i * -100);
      cube2.position.z = 10;

      scene.add(cube2);
    }

    for (var i = 0; i < 20; i ++) {
      var cube2 = new THREE.Mesh(geometry, material2);

      cube2.scale.y = 3;
      cube2.scale.x = 3;
      cube2.position.x = -800 + (i * 10);
      cube2.position.y = 1000 + (i * -100);
      cube2.position.z = 10;

      scene.add(cube2);
    }

    for (var i = 0; i < 20; i ++) {
      var cube2 = new THREE.Mesh(geometry, material);

      cube2.scale.y = 3;
      cube2.scale.x = 3;
      cube2.position.x = -400 + (i * 10);
      cube2.position.y = 1000 + (i * -100);
      cube2.position.z = 10;

      scene.add(cube2);
    }

    for (var i = 0; i < 20; i ++) {
      var cube2 = new THREE.Mesh(geometry, material2);

      cube2.scale.y = 3;
      cube2.scale.x = 3;
      cube2.position.x = 0 + (i * 10);
      cube2.position.y = 1000 + (i * -100);
      cube2.position.z = 10;

      scene.add(cube2);
    }

    for (var i = 0; i < 20; i ++) {
      var cube2 = new THREE.Mesh(geometry, material);

      cube2.scale.y = 3;
      cube2.scale.x = 3;
      cube2.position.x = 400 + (i * 10);
      cube2.position.y = 1000 + (i * -100);
      cube2.position.z = 10;

      scene.add(cube2);
    }

    for (var i = 0; i < 20; i ++) {
      var cube2 = new THREE.Mesh(geometry, material2);

      cube2.scale.y = 3;
      cube2.scale.x = 3;
      cube2.position.x = 800 + (i * 10);
      cube2.position.y = 1000 + (i * -100);
      cube2.position.z = 10;

      scene.add(cube2);
    }

    for (var i = 0; i < 20; i ++) {
      var cube2 = new THREE.Mesh(geometry, material);

      cube2.scale.y = 3;
      cube2.scale.x = 3;
      cube2.position.x = 1200 + (i * 10);
      cube2.position.y = 1000 + (i * -100);
      cube2.position.z = 10;

      scene.add(cube2);
    }

    // Lighting

    var light = new THREE.AmbientLight('#fff');
    scene.add(light);

    var light2 = new THREE.DirectionalLight('#fff', 0.1);
    light2.position.set(100, 100, 0);
    scene.add(light2);

    var light3 = new THREE.DirectionalLight('#fff', 0.3);
    light3.position.set(-100, -100, 0);
    scene.add(light3);

    renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });

    renderer.setClearColor('#fff', 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);
  }

  function onWindowResize() {
    camera.left = window.innerWidth / -2;
    camera.right = window.innerWidth / 2;
    camera.top = window.innerHeight / 2;
    camera.bottom = window.innerHeight / - 2;

    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
  }

  function animate() {
    requestAnimationFrame(animate);
    render();
  }

  function render() {

    var timer = Date.now() * 0.0003;
    var timer2 = Date.now() * 0.0006;
    camera.position.x = Math.sin(timer) * 700;
    camera.position.y = Math.sin(timer2) * 400;
    camera.position.z = Math.cos(timer) * 500;

    renderer.render(scene, camera);
  }
})();
