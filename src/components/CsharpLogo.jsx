import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const CsharpLogo = (props) => {
    const csharpRef = useRef();
    const { nodes, materials } = useGLTF('/models/csharp.glb')

    useGSAP(() => {
        gsap.to(csharpRef.current.position, {
            y: csharpRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        gsap.to(csharpRef.current.rotation, {
            y: -Math.PI * 10, // Full rotation on Y-axis
            duration: 4,
            repeat: -0.5,
            ease: "power1.inOut"
        });
    });
    return (
        <group ref={csharpRef} {...props} dispose={null}>
            <group scale={0.01}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['C#_C#_0'].geometry}
                    material={materials.material}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/models/csharp.glb')
export default CsharpLogo
