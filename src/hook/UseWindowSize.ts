import { useState, useEffect } from 'react'

interface WindowSize {
	width: number
	height: number
}

const UseWindowSize = (): WindowSize => {
	const [windowSize, setWindowSize] = useState<WindowSize>({
		width:
			typeof window !== 'undefined' ? window.innerWidth : 0,
		height:
			typeof window !== 'undefined'
				? window.innerHeight
				: 0,
	})

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			})
		}

		// Adiciona o event listener quando o componente é montado
		window.addEventListener('resize', handleResize)

		// Remove o event listener quando o componente é desmontado
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, []) // O array vazio faz com que o efeito só seja executado uma vez, sem depender de quaisquer valores

	return windowSize
}

export default UseWindowSize
