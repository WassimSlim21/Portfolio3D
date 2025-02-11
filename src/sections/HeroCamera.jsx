import { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { easing } from 'maath';

const HeroCamera = ({ isMobile, children }) => {
    const group = useRef();
    const { camera } = useThree();
    const [zoomedIn, setZoomedIn] = useState(false);

    const handleZoomToggle = () => {
        setZoomedIn((prev) => !prev);
    };

    useFrame((state, delta) => {
        const targetPosition = zoomedIn ? [0, -2, 30] : [0, 0, 30]; // Zoom-in and Zoom-out positions
        easing.damp3(camera.position, targetPosition, 0.25, delta);

       // if (!isMobile) {
            easing.dampE(group.current.rotation, [-state.pointer.y / 3, state.pointer.x / 5, 0], 0.25, delta);
        //}
    });

    return (
        <group ref={group} onClick={handleZoomToggle} >
            {children}
        </group>
    );
};

export default HeroCamera;