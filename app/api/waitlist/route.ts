import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      email, 
      fullName, 
      accreditedInvestor, 
      investmentAmount, 
      marketsInterested,
      recaptchaToken 
    } = body

    // Validate required fields
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    if (!fullName || fullName.trim().length === 0) {
      return NextResponse.json(
        { error: 'Full name is required' },
        { status: 400 }
      )
    }

    if (!accreditedInvestor) {
      return NextResponse.json(
        { error: 'Please indicate if you are an accredited investor' },
        { status: 400 }
      )
    }

    if (!investmentAmount) {
      return NextResponse.json(
        { error: 'Please select an investment amount range' },
        { status: 400 }
      )
    }

    if (!marketsInterested || marketsInterested.trim().length === 0) {
      return NextResponse.json(
        { error: 'Please tell us about your market interests' },
        { status: 400 }
      )
    }

    // Verify reCAPTCHA if token is provided
    if (recaptchaToken) {
      const secretKey = process.env.RECAPTCHA_SECRET_KEY
      
      if (secretKey) {
        const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`
        
        try {
          const recaptchaResponse = await fetch(verifyUrl, {
            method: 'POST',
          })
          
          const recaptchaData = await recaptchaResponse.json()
          
          if (!recaptchaData.success) {
            return NextResponse.json(
              { error: 'reCAPTCHA verification failed. Please try again.' },
              { status: 400 }
            )
          }

          // Optional: Check score (v3 returns score 0.0-1.0, where 1.0 is very likely human)
          // You can adjust this threshold (0.5 is a common threshold)
          if (recaptchaData.score < 0.5) {
            return NextResponse.json(
              { error: 'reCAPTCHA verification failed. Please try again.' },
              { status: 400 }
            )
          }
        } catch (recaptchaError) {
          console.error('reCAPTCHA verification error:', recaptchaError)
          // Continue if reCAPTCHA verification fails (for development)
          // In production, you might want to reject the request
        }
      }
    }

    // Initialize Supabase client
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('Supabase credentials not configured')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Check if email already exists
    const { data: existingData, error: checkError } = await supabase
      .from('waitlist_submissions')
      .select('email')
      .eq('email', email)
      .single()

    if (checkError && checkError.code !== 'PGRST116') {
      // PGRST116 is "not found" which is fine
      console.error('Error checking existing email:', checkError)
    }

    if (existingData) {
      return NextResponse.json(
        { error: 'This email is already on the waitlist.' },
        { status: 400 }
      )
    }

    // Store in database
    const { data: dbData, error: dbError } = await supabase
      .from('waitlist_submissions')
      .insert([
        {
          email,
          full_name: fullName,
          accredited_investor: accreditedInvestor,
          investment_amount: investmentAmount,
          markets_interested: marketsInterested,
          submitted_at: new Date().toISOString(),
        },
      ])
      .select()

    if (dbError) {
      console.error('Supabase error:', dbError)
      return NextResponse.json(
        { error: 'Failed to save submission. Please try again.' },
        { status: 500 }
      )
    }

    // Log successful submission
    console.log('New waitlist submission saved:', { 
      email, 
      fullName, 
      accreditedInvestor, 
      investmentAmount,
      id: dbData?.[0]?.id 
    })

    return NextResponse.json(
      { success: true, message: 'Thank you for joining the waitlist!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}


