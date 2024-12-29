import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box,  } from '@react-three/drei';

const RotatingBox: React.FC = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
        meshRef.current.rotation.x += delta;
        meshRef.current.rotation.y += delta * 0.5;
        }
    });

    return (
        <Box ref={meshRef} args={[1, 1, 1]}>
        <meshStandardMaterial color="hotpink" />
        </Box>
    );
    };

    const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-8">Welcome to Our 3D Tiffin Service</h1>
        <div className="w-64 h-64">
            <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <RotatingBox />
            </Canvas>
        </div>
        <p className="mt-8 text-xl text-center max-w-2xl">
            Experience the future of food delivery with our innovative 3D tiffin service. Fresh, delicious meals delivered right to your doorstep.
        </p>
        </div>
    );
};

export default Home;

