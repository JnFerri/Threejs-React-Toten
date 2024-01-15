import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { PMREMGenerator } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';

function construtor3D(mountRef,props){
    console.log(props)
        
    // Cria a cena
    const scene = new THREE.Scene();
    scene.background = null;

    // Cria a câmera
    const camera = new THREE.PerspectiveCamera(props.productPage.perspective, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 2;
    camera.position.x = -2;
    camera.position.y = 4;
    // Cria o renderizador
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha:true, });
    mountRef.current.appendChild(renderer.domElement);
    renderer.domElement.style.borderRadius = '30px'
    renderer.setSize(mountRef.current.clientWidth ,mountRef.current.clientHeight );
    renderer.shadowMap.enabled = true
    
    // Adiciona uma geometria
    const loader = new GLTFLoader();

    
    let targetPosition = new THREE.Vector4();
    targetPosition.y += 1; // Aumenta um pouco no eixo y (por exemplo, 1 unidade)
    targetPosition.z += 6;
    camera.lookAt(targetPosition);
    
    
    const controls = new OrbitControls( camera, renderer.domElement );
    
    controls.target.setY(props.productPage.cameraY)
controls.update()
loader.load( `${props.productPage.src}` , function ( gltf ) {

scene.add( gltf.scene );



const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // cor branca, intensidade 0.5

scene.add(ambientLight);


const directionalLight = new THREE.DirectionalLight(0xffffff, 0.);
directionalLight.position.set(10, -10, 5);

scene.add(directionalLight);



const rgbeLoader = new RGBELoader();
const pmremGenerator = new PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();

rgbeLoader.load('./assets/enviroments/warewouse.hdr', function (texture) {
    const envMap = pmremGenerator.fromEquirectangular(texture).texture;
    pmremGenerator.dispose();

    // Aplica o mapa de ambiente à cena
    scene.environment = envMap;
});

const composer = new EffectComposer(renderer);
const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
composer.addPass(bloomPass);
composer.addPass(new RenderPass(scene, camera));

const colorCorrectionShader = {
    uniforms: {
        tDiffuse: { value: null },
        // Adicione outros uniforms se necessário
    },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform sampler2D tDiffuse;
        varying vec2 vUv;

        void main() {
            vec4 texture = texture2D(tDiffuse, vUv);

            // Aplicar correções de cor
            texture.rgb = pow(texture.rgb, vec3(2)); // Exemplo: ajuste de gama

            gl_FragColor = texture;
        }
    `
};

const sharpenShader = {
    uniforms: {
        "tDiffuse": { value: null },
        "amount": { value: 0.5 }
    },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float amount;
        varying vec2 vUv;
        void main() {
            vec2 uv = vUv;
            float strength = 1.0 + amount;
            // Definir os offsets para pixels vizinhos
            vec2 offset[9];
            offset[0] = vec2(-1.0, -1.0);
            offset[1] = vec2(0.0, -1.0);
            // ... (complete os outros offsets)
            // Calcule a nitidez
            vec4 color = texture2D(tDiffuse, uv);
            // ... (aplique a lógica de sharpen aqui)
            gl_FragColor = color;
        }
    `
};
const sharpenPass = new ShaderPass(sharpenShader);
composer.addPass(sharpenPass);

renderer.toneMapping = THREE.ReinhardToneMapping; // Ou outro algoritmo de sua escolha
renderer.toneMappingExposure = 1.0; // Ajuste conforme necessário
renderer.shadowMap.enabled = true;
scene.traverse((obj) => {
if (obj.material) {
  obj.material.needsUpdate = true;
}
});
const correctionPass = new ShaderPass(colorCorrectionShader);
composer.addPass(correctionPass);
renderer.setPixelRatio(window.devicePixelRatio)
gltf.scene.scale.set(props.productPage.scale, props.productPage.scale, props.productPage.scale);
})


    // Animação
    const animate = function () {
        requestAnimationFrame(animate);
        scene.rotation.y += 0.001;
        renderer.setSize(mountRef.current.clientWidth ,mountRef.current.clientHeight );
        renderer.render(scene, camera);
    };

    animate();
    return renderer

}

export default construtor3D