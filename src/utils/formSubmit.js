/**
 * Centralized form submission utility for N8N webhook integration
 *
 * All forms route through a single N8N webhook with formType routing.
 * N8N then routes to Go High Level based on formType.
 */

/**
 * Capitalize the first letter of single-word string values in form data.
 * Ensures values like "yes"/"no" become "Yes"/"No" for GoHighLevel compatibility.
 * Skips emails, dates, multi-word strings, URLs, and non-string values.
 */
function capitalizeFormValues(data) {
  const result = {}
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      const trimmed = value.trim()
      // Skip emails, dates (YYYY-MM-DD), URLs, and empty strings
      if (trimmed.includes('@') || trimmed.includes('/') || /^\d{4}-\d{2}-\d{2}$/.test(trimmed) || trimmed === '') {
        result[key] = value
      } else if (!trimmed.includes(' ') || trimmed.split(' ').length <= 3) {
        // Capitalize first letter of each word for single-word or short values
        result[key] = trimmed.replace(/\b\w/g, c => c.toUpperCase())
      } else {
        result[key] = value
      }
    } else if (Array.isArray(value)) {
      result[key] = value.map(v =>
        typeof v === 'string' ? v.replace(/\b\w/g, c => c.toUpperCase()) : v
      )
    } else {
      result[key] = value
    }
  }
  return result
}

/**
 * Submit form data to N8N webhook
 * @param {string} formType - The type of form being submitted (apply-driver, owner-operator, hire-drivers, contact)
 * @param {object} formData - The form data to submit
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function submitToN8N(formType, formData) {
  const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL
  const webhookSecret = import.meta.env.VITE_WEBHOOK_SECRET

  // If no webhook URL is configured, return success (fallback behavior in forms will handle it)
  if (!webhookUrl) {
    console.warn('N8N webhook URL not configured. Skipping webhook submission.')
    return { success: false, error: 'WEBHOOK_NOT_CONFIGURED' }
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(webhookSecret && { 'X-Webhook-Secret': webhookSecret })
      },
      body: JSON.stringify({
        formType,
        timestamp: new Date().toISOString(),
        source: 'metarecruiter-website',
        ...capitalizeFormValues(formData)
      })
    })

    if (!response.ok) {
      throw new Error(`Webhook request failed: ${response.status}`)
    }

    return { success: true }
  } catch (error) {
    console.error('Form submission error:', error)
    return { success: false, error: error.message }
  }
}

/**
 * Map form types to Go High Level tags
 */
export const FORM_TYPE_TAGS = {
  'apply-driver': 'driver-applicant',
  'owner-operator': 'owner-operator',
  'hire-drivers': 'hiring-interest',
  'contact': 'general-contact'
}
