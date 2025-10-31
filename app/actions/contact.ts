'use server'

import { cosmic } from '@/lib/cosmic'

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return {
        success: false,
        error: 'All fields are required'
      }
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: 'Please enter a valid email address'
      }
    }

    // Create contact submission in Cosmic CMS
    await cosmic.objects.insertOne({
      title: `Contact from ${name}`,
      type: 'contact-submissions',
      metadata: {
        name,
        email,
        subject,
        message,
        status: 'New',
        submission_date: new Date().toISOString()
      }
    })

    return { success: true }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return {
      success: false,
      error: 'Failed to submit form. Please try again later.'
    }
  }
}