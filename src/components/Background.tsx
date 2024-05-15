import { shaderMaterial } from '@react-three/drei'
import { Object3DNode, extend, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

import fragmentShader from './shaders/lava.frag'
import vertexShader from './shaders/lava.vert'

const NoiseMaterial = shaderMaterial(
	{
		uTime: 0,
	},
	vertexShader,
	fragmentShader
)

extend({ NoiseMaterial })

declare module '@react-three/fiber' {
	interface ThreeElements {
		noiseMaterial: Object3DNode<NoiseMaterial, typeof NoiseMaterial>
	}
}

export default function Background() {
	const materialRef = useRef(null!)

	useFrame((state) => {
		materialRef.current.uniforms.uTime.value = state.clock.elapsedTime / 4
	})
	return (
		<mesh>
			<planeGeometry args={[100, 100, 500, 500]} />
			<noiseMaterial ref={materialRef} />
		</mesh>
	)
}
