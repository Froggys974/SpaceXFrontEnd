// three-dviewer.component.ts

import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

@Component({
  selector: 'app-three-dviewer',
  templateUrl: './three-dviewer.component.html',
  styleUrls: ['./three-dviewer.component.scss']
})
export class ThreeDViewerComponent implements OnInit, AfterViewInit {

  @ViewChild('rendererContainer') rendererContainer!: ElementRef;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.initThreeJS();
  }

  initThreeJS(): void {
    const container = this.rendererContainer.nativeElement;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 100, 600); // Déplace la caméra vers le haut et vers l'arrière
    camera.lookAt(0, 0, 0);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Ajouter une lumière directionnelle
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    // Ajouter une lumière ambiante
    const ambientLight = new THREE.AmbientLight(0x404040, 1.5); // lumière douce
    scene.add(ambientLight);

    const textureLoader = new THREE.TextureLoader();
    const loader = new FBXLoader();
    let object: THREE.Object3D;

    // Charger le modèle FBX
    loader.load('../../assets/fusee/source/rocket_ID.fbx', (loadedObject) => {
      object = loadedObject;
      object.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.material = new THREE.MeshStandardMaterial({
            map: textureLoader.load('../../assets/fusee/textures/wire_028089177_baseColor.jpg'),
            transparent: true,
            opacity: 1, 
          });
        }
      });
      
      scene.add(object);
      object.position.y -= 190;
      object.scale.set(10, 10, 10);
      animate();
    });
    
  

    camera.position.z = 500;

    const animate = () => {
      requestAnimationFrame(animate);
      
      object.rotation.y += 0.01;
    
      renderer.render(scene, camera);
    };
  }
}
