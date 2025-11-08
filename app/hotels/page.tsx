import React from 'react';
import Link from 'next/link';
import { FaStar, FaGlobe } from 'react-icons/fa';

// --- DATA STRUCTURE ---
interface Hotel {
  name: string;
  stars: 3 | 4 | 5; 
  link: string; 
}

interface ProvinceData {
  province: string;
  hotels: Hotel[];
}

// 🚨 HOTEL LIST DATA - Replace with your actual data
const hotelData: ProvinceData[] = [
  {
    province: "Western Province",
    hotels: [
      { name: "The Grand Colombo", stars: 5, link: "https://example.com/grand-colombo" },
      { name: "Negombo Beach Retreat", stars: 4, link: "https://example.com/negombo-retreat" },
      { name: "Mount Lavinia Residency", stars: 3, link: "https://example.com/mount-lavinia" },
    ],
  },
  {
    province: "Central Province",
    hotels: [
      { name: "Earl's Regency Kandy", stars: 5, link: "https://example.com/earls-regency" },
      { name: "Tea Garden Bungalows", stars: 4, link: "https://example.com/tea-garden" },
      { name: "Nuwara Eliya Inn", stars: 3, link: "https://example.com/nuwara-inn" },
    ],
  },
  {
    province: "Southern Province",
    hotels: [
      { name: "Weligama Bay Resort", stars: 5, link: "https://example.com/weligama-bay" },
      { name: "Galle Fort Hotel", stars: 4, link: "https://example.com/galle-fort" },
      { name: "Mirissa Cabanas", stars: 3, link: "https://example.com/mirissa-cabanas" },
    ],
  },
  {
    province: "Uva Province",
    hotels: [
      { name: "Ella Rock View", stars: 4, link: "https://example.com/ella-rock" },
      { name: "Badulla Grand Hotel", stars: 3, link: "https://example.com/badulla-hotel" },
    ],
  },
];

// --- HELPER COMPONENT ---
const StarRating: React.FC<{ count: 3 | 4 | 5 }> = ({ count }) => (
  <div className="flex items-center space-x-0.5 text-amber-500">
    {Array(count).fill(0).map((_, i) => (
      <FaStar key={i} size={16} />
    ))}
    {Array(5 - count).fill(0).map((_, i) => (
      <FaStar key={i} size={16} className="text-gray-300" />
    ))}
  </div>
);


const HotelListPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-20"> {/* Reduced vertical padding slightly for mobile */}
        
        {/* Header Section (Responsive Typography Applied) */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4">
            Handpicked Accommodation Partners
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect place to stay, categorized by Sri Lanka s beautiful provinces.
          </p>
        </div>

        {/* 🗺️ Hotel List by Province */}
        <div className="space-y-12 sm:space-y-16">
          {hotelData.map((provinceGroup) => (
            <div key={provinceGroup.province} className="border-b pb-8 last:border-b-0">
              
              {/* Province Header (Responsive Typography Applied) */}
              <h2 className="text-2xl sm:text-3xl font-bold text-teal-600 mb-6 sm:mb-8 border-l-4 border-amber-500 pl-4">
                {provinceGroup.province}
              </h2>

              {/* Hotel Cards Grid - FIX: grid-cols-1 ensures single column on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {provinceGroup.hotels.map((hotel) => (
                  <div 
                    key={hotel.name} 
                    className="bg-gray-50 p-6 rounded-xl shadow-lg border border-gray-200 transition duration-300 hover:shadow-xl hover:bg-gray-100"
                  >
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      {hotel.name}
                    </h3>
                    
                    {/* Stars and Link */}
                    <div className="flex justify-between items-center">
                      <StarRating count={hotel.stars} />
                      <Link 
                        href={hotel.link}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition duration-150"
                      >
                        Book Now
                        <FaGlobe className="ml-2" size={12} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action (Responsive Padding Applied) */}
        <div className="text-center mt-12 sm:mt-16 p-6 sm:p-8 bg-blue-50 rounded-xl border-2 border-blue-200">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Can t find what you need?
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
                Contact our concierge team for personalized accommodation recommendations based on your itinerary.
            </p>
            <Link 
                href="/contact" 
                className="inline-block py-3 px-8 rounded-full text-lg font-bold text-white bg-teal-600 hover:bg-teal-600 transition duration-300 shadow-lg"
            >
                Contact Our Team
            </Link>
        </div>

      </div>
    </div>
  );
};

export default HotelListPage;