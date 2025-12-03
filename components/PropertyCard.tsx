'use client'

import Image from 'next/image'

interface PropertyCardProps {
  name: string
  value: string
  beds: string
  size: string
  location: string
  imageUrl: string
}

export default function PropertyCard({
  name,
  value,
  beds,
  size,
  location,
  imageUrl,
}: PropertyCardProps) {
  const formUrl = process.env.NEXT_PUBLIC_FORM_URL || 'https://tally.so/r/your-form-id'

  return (
    <div className="group relative bg-white overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
      {/* Image */}
      <div className="relative h-64 md:h-80 overflow-hidden bg-gray-200">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3 className="font-serif text-xl md:text-2xl font-bold mb-3 text-charcoal">
          {name}
        </h3>
        <p className="text-xl md:text-2xl font-semibold text-charcoal mb-4">
          {value}
        </p>
        <div className="space-y-2 mb-6 text-gray-600">
          <p className="text-sm md:text-base">{beds}</p>
          <p className="text-sm md:text-base">{size}</p>
          <p className="text-sm md:text-base font-medium">{location}</p>
        </div>
        <a
          href={formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-charcoal text-white py-3 px-6 text-sm font-semibold tracking-wide hover:bg-charcoal/90 transition-all duration-300 uppercase text-center"
        >
          Join Waitlist
        </a>
      </div>
    </div>
  )
}

