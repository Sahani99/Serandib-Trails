"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// PLACEHOLDER DATA: Replace these URLs with your actual review screenshots
const reviewScreenshots = [
    // ... (Your review screenshots data remains the same)
    "https://images.unsplash.com/photo-1542838132-752a781b0a79?auto=format&fit=crop&w=400&q=80", 
    "https://images.unsplash.com/photo-1587825313364-ff88981f422b?auto=format&fit=crop&w=400&q=80", 
    "https://images.unsplash.com/photo-1590439474765-a8c9b9b0f026?auto=format&fit=crop&w=400&q=80", 
    "https://images.unsplash.com/photo-1557871239-16b7f9b7c8f4?auto=format&fit=crop&w=400&q=80", 
    "https://images.unsplash.com/photo-1594904037145-66795f550577?auto=format&fit=crop&w=400&q=80", 
    "https://images.unsplash.com/photo-1517457210348-b7c11f7c0a9e?auto=format&fit=crop&w=400&q=80", 
];

const CustomerReviews: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const reviewRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    
    // Configuration for centering
    // w-64 is 256px
    const CARD_WIDTH = 256; 
    // space-x-6 is 24px
    const GAP_WIDTH = 24; 

    // Auto-Transition Logic (Kept the same)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                (prevIndex + 1) % reviewScreenshots.length
            );
        }, 5000); 
        return () => clearInterval(interval);
    }, []);
    
    // 💡 UPDATED Scroll/Translate Logic for Precise Centering
    useEffect(() => {
        if (reviewRef.current && containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            
            // 1. Calculate the total offset to reach the LEFT edge of the current card
            const offsetToCardLeft = currentIndex * (CARD_WIDTH + GAP_WIDTH);
            
            // 2. Calculate the amount needed to shift the card from its left edge to the viewport center
            // Center Shift = (Container Width - Card Width) / 2
            const centerShift = (containerWidth / 2) - (CARD_WIDTH / 2);
            
            // 3. Final translation: Shift left to the card's position, then shift right by the center amount
            const finalTranslateX = offsetToCardLeft - centerShift;
            
            reviewRef.current.style.transform = `translateX(-${finalTranslateX}px)`;
        }
        // Dependency array: only re-run when index changes or screen size changes (via containerRef.current.offsetWidth changes)
    }, [currentIndex, reviewScreenshots.length]);
    

    return (
        <section className="py-20 bg-gray-50 text-gray-800">
            <div className="max-w-7xl mx-auto px-6">
                
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900">
                        What Our Adventurers Say
                    </h2>
                    <p className="mt-3 text-gray-600 text-lg">
                        Verified screenshots from happy travelers across the globe.
                    </p>
                </div>

                {/* 📸 Carousel Container (The fixed viewport) */}
                <div 
                    ref={containerRef} 
                    // Crucial: This container defines the viewport and hides overflow
                    className="relative overflow-hidden mx-auto max-w-full md:max-w-6xl"
                >
                    <div 
                        ref={reviewRef} 
                        // Removed justify-center as translation handles positioning now
                        className="flex space-x-6 transition-transform duration-700 ease-in-out"
                    >
                        {reviewScreenshots.map((src, index) => (
                            <div 
                                key={index} 
                                // Set a consistent fixed width for all screen sizes below md
                                className="shrink-0 w-64 h-96 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden group cursor-pointer"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={src}
                                        alt={`Customer Review Screenshot ${index + 1}`}
                                        fill
                                        className="object-cover object-top"
                                    />
                                    <div className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-10 transition duration-300"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Navigation Dots */}
                    <div className="flex justify-center space-x-2 mt-6">
                        {reviewScreenshots.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                    currentIndex === index ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                                aria-label={`Go to review ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;