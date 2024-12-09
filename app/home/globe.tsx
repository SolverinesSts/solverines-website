"use client";

import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Points } from "../util/data";
import { Text } from "@react-three/drei";

interface Point {
  x: number;
  y: number;
}

const Globe = () => {
  const globeRadius = 100;
  const globeWidth =  4098 / 2; 
  const globeHeight = 1968 / 2; 

  const points : Point[] =Points;

  const convertFlatCoordsToSphereCoords = (x: number, y: number) => {
    const latitude = ((x - globeWidth) / globeWidth) * -180;
    const longitude = ((y - globeHeight) / globeHeight) * -90;

    const latRad = (latitude * Math.PI) / 180;
    const lonRad = (longitude * Math.PI) / 180;

    const radius = Math.cos(lonRad) * globeRadius;
    const sphereCoords = {
      x: Math.cos(latRad) * radius,
      y: Math.sin(lonRad) * globeRadius,
      z: Math.sin(latRad) * radius,
    };

    //console.log(`Flat: (${x}, ${y}) -> Sphere:`, sphereCoords);
    return sphereCoords;
  };

  const SpherePoints = () => {
    const geometryRef = useRef<THREE.BufferGeometry>(null);
    const pointsArray: THREE.Vector3[] = points.map((point) => {
      const { x, y, z } = convertFlatCoordsToSphereCoords(point.x, point.y);
      return new THREE.Vector3(x, y, z);
    });

    useEffect(() => {
      if (geometryRef.current) {
        const vertices = new Float32Array(
          pointsArray.flatMap((point) => [point.x, point.y, point.z])
        );
        geometryRef.current.setAttribute(
          "position",
          new THREE.BufferAttribute(vertices, 3)
        );
      }
    }, [pointsArray]);

    return (
      <points>
        <bufferGeometry ref={geometryRef} />
        <pointsMaterial size={2} color="#989db5" />
      </points>
    );
  };

  const Markers = () => {
    const markerData = [
      { position: { x: 21.88, y: 20.78, z: -98 }, label: "India" },
      { position: { x: -16.0, y: 51.5, z: 87 }, label: "USA" },
      { position: { x: 59.5, y: 82.88, z: 3 }, label: "UK" },
      { position: { x: 52.7, y: 37.5, z: -78.5 }, label: "Dubai" },
      { position: { x: -57.3, y: 57.5, z: -60 }, label: "Japan" },
    ];
  
    const imageTexture = useLoader(THREE.TextureLoader, "/images/bg/pin.png");
  
    const createTextTexture = (text: string) => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
    
      canvas.width = 256;
      canvas.height = 128;
    
      if (context) {
        context.font = "bold 90px Arial";
        context.fillStyle = "#525356"; 
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.clearRect(0, 0, canvas.width, canvas.height); 
        context.fillText(text, canvas.width / 2, canvas.height / 2); 
      }
    
      return new THREE.CanvasTexture(canvas);
    };
  
    const labelTextures = useMemo(
      () => markerData.map((marker) => createTextTexture(marker.label)),
      [markerData]
    );
  
    return (
      <>
        {markerData.map((marker, index) => (
          <group key={index}>
            {/* Marker */}
            <sprite
              position={[
                marker.position.x,
                marker.position.y,
                marker.position.z,
              ]}
              scale={[10, 10, 1]}
            >
              <spriteMaterial
                attach="material"
                map={imageTexture}
                depthWrite={false}
                depthTest={false}
                opacity={0.9}
              />
            </sprite>
  
            {/* Label */}
            <sprite
              position={[
                marker.position.x,
                marker.position.y + 10, 
                marker.position.z,
              ]}
              scale={[20, 10, 1]}
            >
              <spriteMaterial
                attach="material"
                map={labelTextures[index]} 
                depthWrite={false}
                depthTest={false}
                opacity={0.9}
              />
            </sprite>
          </group>
        ))}
      </>
    );
  };

  return (
    <div style={{ width: "600px", height: "500px",position: "relative", backgroundColor: "white" }} id="globe">
      <Canvas    camera={{ position: [0, 0, 380], fov: 35}}>
        <ambientLight intensity={1} />
        <directionalLight position={[4, 4, 4]} intensity={1} />
        <SpherePoints />
        <Markers />
        <OrbitControls autoRotate enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Globe;
