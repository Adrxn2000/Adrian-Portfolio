import React, {useMemo} from "react";
import { useTexture} from "@react-three/drei";
import Ball from "./canvas/Ball";

const BallsScene = ({ balls}) =>{
    const imageUrls = useMemo(() => balls.map((ball) => ball.icon), [balls]);
    const decals = useTexture([imageUrls]);

    return (
        <>
            {balls.map((ball, i) => (
                <Ball 
                    key={i}
                    decal={decals[i]}
                    position={ball.position || [(i % 5) * 3 - 6, Math.floor(i/5 ) * 3 -3, 0]}
                />
            ))}
        </>
    );
}

export default BallsScene;