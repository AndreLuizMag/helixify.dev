import { useState, useEffect } from 'react'

declare global {
	interface Window {
		// @ts-ignore
		dataLayer?: Record<string, unknown>[]
		gtag?: (...args: unknown[]) => void
	}
}

export const useCookieConsent = () => {
	const [checkAdStorage, setCheckAdStorage] = useState(false)
	const [checkAdUserData, setCheckAdUserData] = useState(false)
	const [checkAdPersonalization, setCheckAdPersonalization] = useState(false)
	const [checkAnalyticsStorage, setCheckAnalyticsStorage] = useState(true)
	const [hasCookieConsent, setHasCookieConsent] = useState(false)

	const setCookieConsent = (
		adStorage: boolean,
		adUserData: boolean,
		adPersonalization: boolean,
		analyticsStorage: boolean,
		expirationDays = 7
	) => {
		const consent = {
			ad_storage: adStorage ? 'granted' : 'denied',
			ad_user_data: adUserData ? 'granted' : 'denied',
			ad_personalization: adPersonalization ? 'granted' : 'denied',
			analytics_storage: analyticsStorage ? 'granted' : 'denied',
		}

		// Calcula a data de expiração
		const date = new Date()
		date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000))
		const expires = `expires=${date.toUTCString()}`

		// Atualiza o cookie
		document.cookie = `CookieConsent=${JSON.stringify(consent)}; Path=/; Max-Age=31536000; SameSite=Lax; Secure`

		// Verifica se dataLayer existe e envia o evento
		if (window.dataLayer) {
			window.dataLayer.push({
				event: 'cookieConsentUpdate',
				consent, // Envia o objeto diretamente
			})
		}

		// Verifica se gtag está disponível e atualiza o consentimento no GTM
		if (typeof window.gtag === 'function') {
			window.gtag('consent', 'update', consent)
		} else {
			console.warn('gtag function is not available.')
		}
	}

	const grant = () => {
		setHasCookieConsent(true)
		setCookieConsent(
			checkAdStorage,
			checkAdUserData,
			checkAdPersonalization,
			checkAnalyticsStorage,
			7
		)
	}

	useEffect(() => {
		const cookies = document.cookie
			.split('; ')
			.find((row) => row.startsWith('CookieConsent='))
		if (cookies) {
			setHasCookieConsent(true)
		} else {
			setHasCookieConsent(false)
		}
	}, [])

	// return {
	// 	checkAdStorage,
	// 	setCheckAdStorage,
	// 	checkAdUserData,
	// 	setCheckAdUserData,
	// 	checkAdPersonalization,
	// 	setCheckAdPersonalization,
	// 	checkAnalyticsStorage,
	// 	setCheckAnalyticsStorage,
	// 	grant,
	// 	hasCookieConsent,
	// }
	return {
		checkAnalyticsStorage,
		setCheckAnalyticsStorage,
		grant,
		hasCookieConsent,
	}
}
