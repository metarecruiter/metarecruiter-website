/**
 * Capture UTM parameters from URL query string
 * Returns an object with utm_source, utm_medium, utm_campaign
 */
export function captureUTMParams() {
  if (typeof window === 'undefined') return {}

  const params = new URLSearchParams(window.location.search)

  return {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
  }
}

/**
 * Store UTM parameters in sessionStorage on first visit
 * This preserves the original UTM params even if user navigates to different pages
 */
export function storeUTMParams() {
  if (typeof window === 'undefined') return

  const utmParams = captureUTMParams()

  // Only store if we have at least one UTM parameter and haven't stored yet
  if ((utmParams.utm_source || utmParams.utm_medium || utmParams.utm_campaign) &&
      !sessionStorage.getItem('utm_params')) {
    sessionStorage.setItem('utm_params', JSON.stringify(utmParams))
  }
}

/**
 * Get stored UTM parameters from sessionStorage
 * Falls back to current URL params if nothing stored
 */
export function getStoredUTMParams() {
  if (typeof window === 'undefined') return { utm_source: '', utm_medium: '', utm_campaign: '' }

  const stored = sessionStorage.getItem('utm_params')
  if (stored) {
    try {
      return JSON.parse(stored)
    } catch (e) {
      console.error('Error parsing stored UTM params:', e)
    }
  }

  // Fallback to current URL params
  return captureUTMParams()
}
