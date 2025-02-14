import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";
import { interval } from "rxjs";
import { map } from "rxjs/operators";

const GlobeWithRxJS = () => {
    const globeRef = useRef(null);
    const [rings, setRings] = useState([]);

    useEffect(() => {
        if (!globeRef.current) return;

        // Automatically rotate the globe
        globeRef.current.controls().autoRotate = true;
        globeRef.current.controls().autoRotateSpeed = 0.5;

        // Set initial position to Tunisia
        globeRef.current.pointOfView({ lat: 33.8869, lng: 9.5375, altitude: 1.5 });

        const ringObservable = interval(1000).pipe(
            map(() => ({
                lat: 36.8792,
                lng: 10.2413,
                maxR: 20 + Math.random() * 10,
                propagationSpeed: 5,
                repeatPeriod: 2000,
                color: ["green", "yellow", "red"][Math.floor(Math.random() * 3)],
            }))
        );

        const subscription = ringObservable.subscribe((newRing) => {
            setRings((prevRings) => [...prevRings, newRing]);
            setTimeout(() => {
                setRings((prevRings) => prevRings.slice(1));
            }, 2000);
        });

        return () => subscription.unsubscribe();
    }, []);

    return (
        <div className="w-full h-full flex justify-center items-center">
            <Globe
                ref={globeRef}
                height={400}
                width={400}
                backgroundColor="rgba(0, 0, 0, 0)"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                ringsData={rings}
                ringColor={(d) => d.color}
                ringMaxRadius={(d) => d.maxR}
                ringPropagationSpeed={(d) => d.propagationSpeed}
                ringRepeatPeriod={(d) => d.repeatPeriod}
                animateIn={true}
                autoRotate={true}
                autoRotateSpeed={0.3}
                objectsData={[{ lat: 36.8792, lng: 10.2413, size: 300, color: "red" }]}
                objectLabel="My Location"
                objectThreeObject={(d) => {
                    const geometry = new THREE.BoxGeometry(0.3, d.size, 1);
                    const material = new THREE.MeshLambertMaterial({ color: d.color });
                    const bar = new THREE.Mesh(geometry, material);
                    bar.position.y = d.size / 2000;
                    bar.lookAt(new THREE.Vector3(0, 0, 0));
                    return bar;
                }}
                onGlobeReady={() => {
                    if (globeRef.current) {
                        const scene = globeRef.current.scene();
                        scene.add(new THREE.AmbientLight(0x404040, 3)); // Ambient light
                        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
                        directionalLight.position.set(5, 3, 5);
                        scene.add(directionalLight);
                    }
                }}
            />
        </div>
    );
};

export default GlobeWithRxJS;
