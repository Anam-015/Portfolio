'use client';

import React from 'react';

// Soft decorative leaves in shades of lavender, lilac, and soft white
export default function DecorativeLeaves() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {/* Top Left Leaf Cluster (Soft Lavender) */}
      <svg
        className="leaf-accent top-8 left-6 w-24 h-24 text-purple-300 opacity-20 transform -rotate-45"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 90 C 20 40, 60 20, 90 10 C 80 60, 40 80, 10 90 Z"
          fill="url(#lavenderGrad1)"
        />
        <path d="M10 90 Q 45 55 90 10" stroke="#f3e8ff" strokeWidth="1.5" strokeOpacity="0.4" />
        <defs>
          <linearGradient id="lavenderGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d8b4fe" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Top Right Leaf (Soft White with Lavender tint) */}
      <svg
        className="leaf-accent top-28 right-10 w-28 h-28 text-purple-200 opacity-25 transform rotate-12"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M90 90 C 80 40, 40 20, 10 10 C 20 60, 60 80, 90 90 Z"
          fill="url(#lavenderWhiteGrad)"
        />
        <path d="M90 90 Q 55 55 10 10" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.5" />
        <defs>
          <linearGradient id="lavenderWhiteGrad" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#e9d5ff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.7" />
          </linearGradient>
        </defs>
      </svg>

      {/* Middle Floating Petals / Small Leaves */}
      <svg
        className="leaf-accent top-[45%] left-4 w-16 h-16 text-purple-400 opacity-20 transform rotate-45"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 80 C 25 45, 55 30, 80 20 C 75 55, 45 70, 20 80 Z"
          fill="#d8b4fe"
        />
        <path d="M20 80 Q 50 50 80 20" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.5" />
      </svg>

      <svg
        className="leaf-accent top-[55%] right-6 w-20 h-20 text-purple-200 opacity-20 transform -rotate-12"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M80 80 C 75 45, 45 30, 20 20 C 25 55, 55 70, 80 80 Z"
          fill="#f3e8ff"
        />
        <path d="M80 80 Q 50 50 20 20" stroke="#c084fc" strokeWidth="1" strokeOpacity="0.4" />
      </svg>

      {/* Bottom Scattered Leaves */}
      <svg
        className="leaf-accent bottom-20 left-12 w-24 h-24 text-purple-300 opacity-20 transform rotate-75"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 90 C 20 40, 60 20, 90 10 C 80 60, 40 80, 10 90 Z"
          fill="url(#lavenderGrad1)"
        />
        <path d="M10 90 Q 45 55 90 10" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.4" />
      </svg>

      <svg
        className="leaf-accent bottom-10 right-16 w-20 h-20 text-purple-100 opacity-25 transform -rotate-30"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M90 90 C 80 40, 40 20, 10 10 C 20 60, 60 80, 90 90 Z"
          fill="url(#lavenderWhiteGrad)"
        />
      </svg>
    </div>
  );
}
