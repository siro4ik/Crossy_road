import * as THREE from "three";

export const player = Player();

function Player() {
    const body = new THREE.Mesh(
    new THREE.BoxGeometry(15, 15, 15),
    new THREE.MeshLambertMaterial({
        color: "black",
        flatShading: true,
    })
    );
    body.position.z = 10;

    return body;
}