import React from "react";

export default function Hero({ colors }){
    return (
        <group>
            {/* Head */}
            <mesh position={[0, 2.5, 0]}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshPhongMaterial color={colors.head}/>
            </mesh>

            {/* Body */}
            <mesh position={[0, 1.25, 0]}>
                <boxGeometry args={[1, 1.5, 0.5]}/>
                <meshPhongMaterial color={colors.body}/>
            </mesh>

            {/* Hand Left */}
            <mesh position={[-0.75, 1.25, 0]}>
                <boxGeometry args={[0.5, 1.5, 0.5]}/>
                <meshPhongMaterial color={colors.hand}/>
            </mesh>

            {/* Hand Right */}
            <mesh position={[0.75, 1.25, 0]}>
                <boxGeometry args={[0.5, 1.5, 0.5]}/>
                <meshPhongMaterial color={colors.hand}/>
            </mesh>

            {/* Leg Left */}
            <mesh position={[-0.25, 0, 0]}>
                <boxGeometry args={[0.5, 1, 0.5]}/>
                <meshPhongMaterial color={colors.leg}/>
            </mesh>

            {/* Leg Right */}
            <mesh position={[0.25, 0, 0]}>
                <boxGeometry args={[0.5, 1, 0.5]}/>
                <meshPhongMaterial color={colors.leg}/>
            </mesh>
        </group>
    );
}