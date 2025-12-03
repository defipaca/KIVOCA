import PropertyCard from './PropertyCard'

const properties = [
  {
    id: 1,
    name: 'Tokyo Minato-ku Penthouse',
    value: '¥145,000,000',
    beds: '3 Beds',
    size: '1,720 sq ft',
    location: 'Minato-ku, Tokyo',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
  },
  {
    id: 2,
    name: 'Kyoto Traditional Estate',
    value: '¥98,000,000',
    beds: '4 Beds',
    size: '2,150 sq ft',
    location: 'Higashiyama-ku, Kyoto',
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80',
  },
  {
    id: 3,
    name: 'Osaka Luxury Apartment',
    value: '¥78,000,000',
    beds: '2 Beds',
    size: '1,350 sq ft',
    location: 'Chuo-ku, Osaka',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 4,
    name: 'Shibuya Modern Loft',
    value: '¥125,000,000',
    beds: '2 Beds',
    size: '1,480 sq ft',
    location: 'Shibuya-ku, Tokyo',
    imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 5,
    name: 'Hakone Mountain Villa',
    value: '¥165,000,000',
    beds: '5 Beds',
    size: '3,200 sq ft',
    location: 'Hakone, Kanagawa',
    imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 6,
    name: 'Ginza Premium Suite',
    value: '¥195,000,000',
    beds: '3 Beds',
    size: '1,950 sq ft',
    location: 'Chuo-ku, Tokyo',
    imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
]

export default function PropertyGrid() {
  return (
    <section className="py-20 md:py-32 px-6 bg-beige-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Featured Properties
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Curated selection of premium Japanese real estate
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              name={property.name}
              value={property.value}
              beds={property.beds}
              size={property.size}
              location={property.location}
              imageUrl={property.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

