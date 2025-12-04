import PropertyCard from './PropertyCard'

const properties = [
  {
    id: 1,
    name: 'Tokyo Minato-ku Penthouse',
    value: '¥285,000,000',
    beds: '3 Beds',
    size: '1,720 sq ft',
    location: 'Minato-ku, Tokyo',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
  },
  {
    id: 2,
    name: 'Kyoto Traditional Estate',
    value: '¥185,000,000',
    beds: '4 Beds',
    size: '2,150 sq ft',
    location: 'Higashiyama-ku, Kyoto',
    imageUrl: 'https://travel.rakuten.com/contents/sites/contents/files/styles/max_1300x1300/public/2024-05/heritage-hotels-kyoto_1.jpg?itok=P4ps2lCr',
  },
  {
    id: 3,
    name: 'Osaka Luxury Apartment',
    value: '¥125,000,000',
    beds: '2 Beds',
    size: '1,350 sq ft',
    location: 'Chuo-ku, Osaka',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 4,
    name: 'Shibuya Modern Loft',
    value: '¥245,000,000',
    beds: '2 Beds',
    size: '1,480 sq ft',
    location: 'Shibuya-ku, Tokyo',
    imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 5,
    name: 'Hakone Mountain Villa',
    value: '¥325,000,000',
    beds: '5 Beds',
    size: '3,200 sq ft',
    location: 'Hakone, Kanagawa',
    imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 6,
    name: 'Ginza Premium Suite',
    value: '¥395,000,000',
    beds: '3 Beds',
    size: '1,950 sq ft',
    location: 'Chuo-ku, Tokyo',
    imageUrl: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2025/11/25134950/Fufu-Tokyo-Ginza-Premium-Suite_6.jpg',
  },
]

export default function PropertyGrid() {
  return (
    <section className="py-20 md:py-32 px-6 bg-beige-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
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

