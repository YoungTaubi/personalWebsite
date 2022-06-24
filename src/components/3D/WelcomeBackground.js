import { Box } from "@react-three/drei";




export default function WelcomeBackground() {

    console.log(window.innerWidth);

    return (
        <>
            <Box position={[0, 0, 4.5]} args={[1, 1, 1]}>
                <meshNormalMaterial />
            </Box>
        </>
    )
}