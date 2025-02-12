import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import * as THREE from 'three';

const PowerBi = (props) => {
    const powerBIRef = useRef();
    const { nodes, materials } = useGLTF('/models/powerBILogo.glb');
    nodes.Text.material.color.setHex(0xffffff); // Set text color to white
    nodes.Text.material.emissive.setHex(0xaaaaaa); // Add slight glow
    useGSAP(() => {
        /*gsap.to(powerBIRef.current.position, {
            y: powerBIRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });*/

        gsap.to(powerBIRef.current.rotation, {
            y: Math.PI * 2, // Full rotation on X-axis
            duration: 2,
            repeat: -1,
            ease: "power1.inOut"
        });
    });

    return (
        <group ref={powerBIRef} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={materials['Material.003']}
                position={[1.1, 4.3, -2.2]}
                scale={[0.85, 2.52, 1]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube001.geometry}
                material={materials['Material.002']}
                position={[-0.07, 3.75, -1.73]}
                scale={[0.85, 1.98, 1]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube002.geometry}
                material={materials['Material.001']}
                position={[-1.27, 3.23, -1.28]}
                scale={[0.85, 1.47, 1]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Text.geometry}
                material={nodes.Text.material}
                position={[-2.53, 0.54, -1.32]}
                rotation={[1.58, -0.02, 0.4]}
                scale={1.26}
            />
        </group>
    );
};

useGLTF.preload('/models/powerBILogo.glb');

export default PowerBi;