'use client';

import Image from 'next/image';

function Offer() {
  const offers = [
    { id: 1, icon: '/images/icon1.png', title: '24/7 Support', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' },
    { id: 2, icon: '/images/icon2.png', title: '24/7 Support', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' },
    { id: 3, icon: '/images/icon3.png', title: '24/7 Support', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' },
    { id: 4, icon: '/images/icon4.png', title: '24/7 Support', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' },
  ];

  return (
    <div className="w-full bg-white py-20">
      {/* Section Heading */}
      <h2 className="text-[#3F509E] text-4xl font-bold text-center mb-12">What Shopex Offer!</h2>

      {/* Offer Boxes */}
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="flex flex-col items-center text-center border border-gray-200 p-6 rounded-lg shadow-lg"
          >
            {/* Icon */}
            <div className="w-16 h-16 mb-4">
              <Image src={offer.icon} alt={offer.title} width={64} height={64} className="object-contain" />
            </div>
            {/* Heading */}
            <h3 className="text-[#3F509E] font-bold text-lg mb-2">{offer.title}</h3>
            {/* Description */}
            <p className="text-gray-600 text-sm">{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offer;
