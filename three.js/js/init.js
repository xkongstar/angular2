function init() {
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(400, 300);
	document.getElementsByTagName('body')[0].appendChild(renderer.domElement);
	renderer.setClearColor(0x0000);
	var scene = new THREE.Scene();
}