import * as THREE from 'three'
import { createTexturedMaterial } from './loadTextures.js';

async function createBorder(position, camera) {
    const geometry = new THREE.BoxGeometry( 100, 2, 1 );
    const material = new THREE.MeshPhysicalMaterial( { color: 0xffffff } );
    material.metalness = 1;
    const cube = new THREE.Mesh( geometry, material );
    cube.position.set(position.x, position.y, position.z).unproject(camera);
    const box = new THREE.Box3().setFromObject(cube);
    return {
        "mesh": cube,
        "box": box
    };
}

async function createField() {
    const geometry = new THREE.PlaneGeometry(500, 500, 512, 512);
    const material = await createTexturedMaterial("metal_plate_scifi");
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, -30);
    mesh.scale.set(0.1, 0.1, 0.1);
    return (mesh);
}

export { createField, createBorder }