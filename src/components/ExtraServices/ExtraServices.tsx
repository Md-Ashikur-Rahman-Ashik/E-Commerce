import Image from 'next/image';
import React from 'react';

type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
};

const extraServices: Service[] = [
  { id: 1, title: 'Source from Industry Hubs', description: 'Source from Industry Hubs', image: '/images/Box.png', icon: '🔍' },
  { id: 2, title: 'Customize Your Products', description: 'Customize Your Products', image: '/images/Color.png', icon: '📦' },
  { id: 3, title: 'Fast, reliable shipping by ocean or air', description: 'Fast, reliable shipping by ocean or air', image: '/images/Plane.png', icon: '✈️' },
  { id: 4, title: 'Product monitoring and inspection', description: 'Product monitoring and inspection', image: '/images/Checker.png', icon: '🛡️' },
];

const ExtraServices: React.FC = () => {
  return (
    <section className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Our extra services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {extraServices.map((service) => (
          <div key={service.id} className="relative border rounded-lg overflow-hidden">
            <Image width={1000} height={1000} src={service.image} alt={service.title} className="w-full h-32 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-medium">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
            <div className="absolute bottom-4 right-4 bg-blue-100 text-blue-600 rounded-full p-2">
              {service.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExtraServices;
