"use client";

import React from 'react';
// Assuming you have 'react-icons' installed
import { FaCheckCircle, FaStar, FaUserFriends } from 'react-icons/fa';
import Link from 'next/link';

// Data structure definition (keeping it here for demonstration)
const packagesData = [
  {
    id: 1,
    type: "Platinum Package",
    tag: "VIP Experience",
    price: "$1,200",
    color: "text-blue-600",
    hover: "hover:bg-blue-50",
    buttonBg: "bg-blue-600",
    buttonHover: "hover:bg-teal-600",
    features: [
      { name: "Package Type", value: "VIP Experience" },
      { name: "Price (per person)", value: "$1,200" },
      { name: "Duration", value: "7 Days / 6 Nights" },
      { name: "Accommodation", value: "5-star Hotels & Resorts", check: true },
      { name: "Transportation", value: "Private Transfers", check: true },
      { name: "Meals", value: "All-inclusive Gourmet Dining", check: true },
      { name: "Activities & Tours", value: "Personalized Private Tours, Exclusive Experiences", check: true },
      { name: "Guide Service", value: "Dedicated Personal Tour Guide", check: true },
      { name: "Travel Insurance", value: "Comprehensive Premium Insurance", check: true },
      { name: "24/7 Support", value: "Dedicated Concierge", check: true },
    ],
  },
  {
    id: 2,
    type: "Gold Package",
    tag: "Classic Journey",
    price: "$750",
    color: "text-amber-600",
    hover: "hover:bg-amber-50",
    buttonBg: "bg-amber-600",
    buttonHover: "hover:bg-amber-700",
    features: [
      { name: "Package Type", value: "Classic Journey" },
      { name: "Price (per person)", value: "$750" },
      { name: "Duration", value: "5 Days / 4 Nights" },
      { name: "Accommodation", value: "4-star Hotels", check: true },
      { name: "Transportation", value: "Shared Group Transfers", check: true },
      { name: "Meals", value: "Breakfast & Dinner Included", check: true },
      { name: "Activities & Tours", value: "Curated Group Tours, Popular Attractions", check: true },
      { name: "Guide Service", value: "Experienced Group Tour Leader", check: true },
      { name: "Travel Insurance", value: "Standard Travel Insurance", check: true },
      { name: "24/7 Support", value: "Priority Support Line", check: true },
    ],
  },
  {
    id: 3,
    type: "Silver Package",
    tag: "Budget Explorer",
    price: "$400",
    color: "text-gray-600",
    hover: "hover:bg-gray-50",
    buttonBg: "bg-gray-600",
    buttonHover: "hover:bg-gray-700",
    features: [
      { name: "Package Type", value: "Budget Explorer" },
      { name: "Price (per person)", value: "$400" },
      { name: "Duration", value: "3 Days / 2 Nights" },
      { name: "Accommodation", value: "3-star Hotels & Guesthouses", check: true },
      { name: "Transportation", value: "Public Transport Options", check: true },
      { name: "Meals", value: "Breakfast Included", check: true },
      { name: "Activities & Tours", value: "Self-guided, Basic Sightseeing", check: true },
      { name: "Guide Service", value: "Local Map & Itinerary", check: true },
      { name: "Travel Insurance", value: "Optional Add-on", check: false },
      { name: "24/7 Support", value: "Email Support", check: true },
    ],
  },
];

// Reusable component for the Feature Row (Header or Data)
interface FeatureRowProps {
    featureName: string;
    isHeader: boolean;
    platinumValue: string | boolean;
    goldValue: string | boolean;
    silverValue: string | boolean;
}

const FeatureRow: React.FC<FeatureRowProps> = ({
  featureName,
  isHeader,
  platinumValue,
  goldValue,
  silverValue,
}) => {
  
  // NOTE: min-w-[700px] ensures the grid always takes up enough space for scrolling on small devices.
  const baseClasses = "py-4 px-4 sm:px-6 border-b border-gray-200 transition duration-150";
  
  // Dynamic classes for styling
  const rowClasses = isHeader 
    ? "bg-gray-100 font-semibold text-lg" 
    : "bg-white text-gray-700";

  // Helper to render value or checkmark
  const renderCellContent = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <FaCheckCircle className="text-green-500 mx-auto" size={20} />
      ) : (
        <span className="text-gray-400 italic">N/A</span>
      );
    }
    return value;
  };
  
  return (
    // Applied min-w-[700px] here to enforce width and ensure scrolling
    <div className={`grid grid-cols-4 min-w-[700px] ${rowClasses}`}> 
      {/* Feature Name Column */}
      <div className={`${baseClasses} text-left ${isHeader ? 'text-gray-800' : 'text-gray-600'}`}>
        {featureName}
      </div>
      
      {/* Package Columns */}
      <div className={`${baseClasses} text-center font-medium ${packagesData[0].color} ${isHeader ? '' : packagesData[0].hover}`}>
        {renderCellContent(platinumValue)}
      </div>
      <div className={`${baseClasses} text-center font-medium ${packagesData[1].color} ${isHeader ? '' : packagesData[1].hover}`}>
        {renderCellContent(goldValue)}
      </div>
      <div className={`${baseClasses} text-center font-medium ${packagesData[2].color} ${isHeader ? '' : packagesData[2].hover}`}>
        {renderCellContent(silverValue)}
      </div>
    </div>
  );
};


const PackagesPage: React.FC = () => {
  
  // Extracting feature names to ensure row order consistency
  const featureNames = packagesData[0].features.map(f => f.name);
  
  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        
        {/* Main Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Find Your Perfect Adventure
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare our meticulously crafted travel packages designed to fit every budget and desire. From luxurious escapes to adventurous explorations, your journey begins here.
          </p>
        </div>

        {/* 🗺️ Packages Comparison Grid - FIX APPLIED HERE */}
        {/* Add overflow-x-auto to the container holding the fixed-width table */}
        <div className="shadow-2xl rounded-xl overflow-hidden border border-gray-300 relative">
          <div className="overflow-x-auto w-full">
            
            {/* Table Header Row */}
            {/* Added min-w-[700px] to ensure fixed width for scrolling */}
            <div className="grid grid-cols-4 min-w-[700px] bg-teal-600 text-white font-extrabold text-xl sticky left-0">
              <div className="py-5 px-6 text-left">Feature</div>
              <div className="py-5 px-6 text-center">Platinum Package</div>
              <div className="py-5 px-6 text-center">Gold Package</div>
              <div className="py-5 px-6 text-center">Silver Package</div>
            </div>

            {/* Feature Rows (Iterating through the data) */}
            <div className="divide-y divide-gray-200">
              {featureNames.map((name, rowIndex) => {
                
                // Helper function to find the corresponding value/check for each package
                const findValue = (pkgId: number) => {
                  const pkg = packagesData.find(p => p.id === pkgId);
                  const feature = pkg?.features.find(f => f.name === name);
                  
                  // Special handling for rows where the value is a price/duration
                  if (name === "Price (per person)" || name === "Duration" || name === "Package Type") {
                    return feature?.value || "";
                  }
                  
                  // Default handling for feature inclusion (check)
                  return feature?.check ?? false;
                };
                
                return (
                  <FeatureRow
                    key={name}
                    featureName={name}
                    isHeader={name === "Package Type" || name === "Price (per person)" || name === "Duration"}
                    platinumValue={findValue(1)}
                    goldValue={findValue(2)}
                    silverValue={findValue(3)}
                  />
                );
              })}
            </div>
          </div>
        </div>
        
        {/* 🤝 Travel Style Section (No change needed here for responsiveness) */}
        <div className="text-center mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">
                Who Are You Traveling With?
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
                {/* Family */}
                <div className="p-6 rounded-xl border-2 border-green-200 bg-green-50 shadow-md">
                    <FaUserFriends className="text-green-600 mx-auto mb-3" size={30} />
                    <h4 className="text-xl font-semibold mb-2">Family</h4>
                    <p className="text-sm text-gray-600">
                        Tailored itineraries with children and extended family in mind.
                    </p>
                </div>
                
                {/* Couple */}
                <div className="p-6 rounded-xl border-2 border-pink-200 bg-pink-50 shadow-md">
                    <FaStar className="text-pink-600 mx-auto mb-3" size={30} />
                    <h4 className="text-xl font-semibold mb-2">Couple</h4>
                    <p className="text-sm text-gray-600">
                        Romantic getaways and intimate experiences for two.
                    </p>
                </div>

                {/* Group */}
                <div className="p-6 rounded-xl border-2 border-purple-200 bg-purple-50 shadow-md">
                    <FaUserFriends className="text-purple-600 mx-auto mb-3" size={30} />
                    <h4 className="text-xl font-semibold mb-2">Group</h4>
                    <p className="text-sm text-gray-600">
                        Adventures with friends or organized, customizable tours.
                    </p>
                </div>
                
                {/* Solo */}
                <div className="p-6 rounded-xl border-2 border-yellow-200 bg-yellow-50 shadow-md">
                    <FaStar className="text-yellow-600 mx-auto mb-3" size={30} />
                    <h4 className="text-xl font-semibold mb-2">Solo</h4>
                    <p className="text-sm text-gray-600">
                        Independent exploration and personal journeys with full support.
                    </p>
                </div>
            </div>
            
            <Link 
                href="/contact" 
                className="inline-block mt-10 py-3 px-8 rounded-full text-lg font-bold text-white bg-teal-600 hover:bg-teal-600 transition duration-300 shadow-lg"
            >
                Customize Your Trip
            </Link>
        </div>
        
      </div>
    </div>
  );
};

export default PackagesPage;