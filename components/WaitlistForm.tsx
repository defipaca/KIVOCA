'use client'

export default function WaitlistForm() {
  // Replace this URL with your Tally or Google Form URL
  const formUrl = process.env.NEXT_PUBLIC_FORM_URL || 'https://tally.so/r/your-form-id'

  return (
    <section id="waitlist" className="py-20 md:py-32 px-6 bg-charcoal">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Join the Waitlist
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-12">
          Be among the first to access exclusive fractional ownership opportunities
        </p>
        
        <a
          href={formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full bg-white text-charcoal px-10 py-4 text-lg font-semibold tracking-wide hover:bg-beige-100 transition-all duration-300 uppercase"
        >
          Join Waitlist
        </a>
      </div>
    </section>
  )
}

