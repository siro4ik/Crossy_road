import * as THREE from "three";
import { Grass } from "./Grass";

export const map = new THREE.Group();

export function initializeMap() {
  const grass = Grass(0);
  map.add(grass);
}

export const metadata = [
  {
    type: "forest",
    trees: [
      {tileIndex: -3, height: 40},
      {tileIndex: 3, height: 30},
      {tileIndex: 6, height: 50}
    ],
  },
];