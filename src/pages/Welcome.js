import { Canvas, useFrame } from '@react-three/fiber'
import WelcomeBackground from '../components/3D/WelcomeBackground'

export default function Welcome() {

    return (
        <>
            <h3 style={{ color: 'black' }}>Welcome</h3>
            <Canvas>
                <WelcomeBackground />
            </Canvas>
        </>
    )
}