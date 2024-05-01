import { useState, useEffect } from 'react'

const useIsMobile = (): boolean => {
	const [mobile, setMobile] = useState<boolean>(false)

	useEffect(() => {
		const handleResize = () => {
			setMobile(window.innerWidth < 720)
		}

		// Verifica o tamanho da tela quando a página é carregada
		handleResize()

		// Adiciona um listener para detectar mudanças de tamanho de tela
		window.addEventListener('resize', handleResize)

		// Remove o listener quando o componente é desmontado
		return () =>
			window.removeEventListener('resize', handleResize)
	}, [])

	return mobile
}

export default useIsMobile
