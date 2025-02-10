import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { BoxGeometry, TorusGeometry, MeshStandardMaterial } from 'three';

export function AzureSynapseLogo(props) {
    const logoRef = useRef();

    // Animation: Floating & Rotation
    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        logoRef.current.position.y = Math.sin(t) * 0.3; // Floating effect
        logoRef.current.rotation.x += 0.02; // Rotating on X-axis
    });

    return (
        <group ref={logoRef} {...props}>
            {/* Hexagonal Frame (Torus) */}
            <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1.5, 0.15, 16, 6]} />
                <meshStandardMaterial color="#0078D4" metalness={0.7} roughness={0.2} />
            </mesh>

            {/* Inner Cube for Data Representation */}
            <mesh position={[0, 0, 0.2]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#00A4EF" metalness={0.5} roughness={0.3} />
            </mesh>
        </group>
    );
}

export default AzureSynapseLogo;