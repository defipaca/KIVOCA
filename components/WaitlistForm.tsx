'use client'

import { useState, useEffect } from 'react'

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

export default function WaitlistForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [accreditedInvestor, setAccreditedInvestor] = useState('')
  const [investmentAmount, setInvestmentAmount] = useState('')
  const [marketsInterested, setMarketsInterested] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false)

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''

  useEffect(() => {
    // Load reCAPTCHA script
    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
    script.async = true
    script.defer = true
    script.onload = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          setRecaptchaLoaded(true)
        })
      }
    }
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(`script[src*="recaptcha"]`)
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [siteKey])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      let recaptchaToken = ''

      // Get reCAPTCHA token if site key is configured
      if (siteKey && recaptchaLoaded && window.grecaptcha) {
        try {
          recaptchaToken = await window.grecaptcha.execute(siteKey, {
            action: 'submit_waitlist',
          })
        } catch (recaptchaError) {
          console.error('reCAPTCHA error:', recaptchaError)
          // Continue without token if reCAPTCHA fails (for development)
          if (!siteKey) {
            console.warn('reCAPTCHA site key not configured')
          }
        }
      }

      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          accreditedInvestor,
          investmentAmount,
          marketsInterested,
          recaptchaToken,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setSubmitted(true)
      setFullName('')
      setEmail('')
      setAccreditedInvestor('')
      setInvestmentAmount('')
      setMarketsInterested('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="waitlist" className="py-20 md:py-32 px-6 bg-charcoal">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Join the Waitlist
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-12">
          Be among the first to access exclusive fractional ownership opportunities
        </p>
        
        {submitted ? (
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-12 rounded-lg">
            <div className="flex flex-col items-center justify-center space-y-4">
              <svg
                className="w-16 h-16 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-2xl md:text-3xl text-white font-semibold">
                Thank you for joining!
              </p>
              <p className="text-lg text-gray-300">
                We'll be in touch soon.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 p-4 rounded">
                <p className="text-red-200 text-sm">{error}</p>
              </div>
            )}
            
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                disabled={loading}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Accredited Investor */}
            <div>
              <label htmlFor="accreditedInvestor" className="block text-sm font-medium text-gray-300 mb-2">
                Are you an accredited investor?
              </label>
              <select
                id="accreditedInvestor"
                value={accreditedInvestor}
                onChange={(e) => setAccreditedInvestor(e.target.value)}
                required
                disabled={loading}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:border-white/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="" className="bg-charcoal">Select an option</option>
                <option value="yes" className="bg-charcoal">Yes</option>
                <option value="no" className="bg-charcoal">No</option>
              </select>
            </div>

            {/* Investment Amount */}
            <div>
              <label htmlFor="investmentAmount" className="block text-sm font-medium text-gray-300 mb-2">
                How much are you looking to invest in a Japan holiday home? <span className="text-gray-400">(SGD)</span>
              </label>
              <select
                id="investmentAmount"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(e.target.value)}
                required
                disabled={loading}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:border-white/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="" className="bg-charcoal">Select an amount (SGD)</option>
                <option value="below-50k" className="bg-charcoal">Below S$50k</option>
                <option value="50k-100k" className="bg-charcoal">S$50k – S$100k</option>
                <option value="100k-500k" className="bg-charcoal">S$100k – S$500k</option>
                <option value="above-500k" className="bg-charcoal">Above S$500k</option>
              </select>
            </div>

            {/* Markets Interested */}
            <div>
              <label htmlFor="marketsInterested" className="block text-sm font-medium text-gray-300 mb-2">
                Which markets are you interested in for a holiday home, and are you open to properties outside of Japan? <span className="text-gray-400">(optional)</span>
              </label>
              <textarea
                id="marketsInterested"
                value={marketsInterested}
                onChange={(e) => setMarketsInterested(e.target.value)}
                disabled={loading}
                rows={4}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed resize-none"
                placeholder="e.g., Japan, Bali, Australia — open to others as well"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-charcoal px-10 py-4 text-lg font-semibold tracking-wide hover:bg-beige-100 transition-all duration-300 uppercase disabled:opacity-50 disabled:cursor-not-allowed mt-8"
            >
              {loading ? 'Submitting...' : 'Join Waitlist'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

