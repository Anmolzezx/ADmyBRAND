"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";

const InteractivePricingCalculator = () => {
  const [users, setUsers] = useState(10);
  const [durationIndex, setDurationIndex] = useState(0); // 0: 3mo, 1: 6mo, 2: 9mo, 3: 1yr

  const proPlanBasePrice = 49;
  const proPlanBaseUsers = 10;
  const pricePerAdditionalUser = 5;

  const durationOptions = [
    { months: 3, label: "3 Months", discount: 0 },
    { months: 6, label: "6 Months", discount: 0.05 }, // 5% discount
    { months: 9, label: "9 Months", discount: 0.1 }, // 10% discount
    { months: 12, label: "1 Year", discount: 0.15 }, // 15% discount
  ];

  const calculatedPrice = useMemo(() => {
    let basePrice;
    if (users <= proPlanBaseUsers) {
      basePrice = proPlanBasePrice;
    } else {
      const additionalUsers = users - proPlanBaseUsers;
      basePrice = proPlanBasePrice + additionalUsers * pricePerAdditionalUser;
    }
    const discount = durationOptions[durationIndex].discount;
    const finalPrice = basePrice * (1 - discount);
    return Math.round(finalPrice);
  }, [users, durationIndex]);

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto mt-20 p-8 bg-gradient-to-br from-[#fff7f0] via-[#f3e7e9] to-[#f6f5ff] rounded-3xl shadow-2xl border border-[#f4791f]/30"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.6, 1] }}
    >
      <h3 className="text-3xl font-extrabold text-center mb-2 bg-gradient-to-r from-[#f4791f] to-[#ffbc5b] bg-clip-text text-transparent">
        Customize Your Plan
      </h3>
      <p className="text-lg text-center text-[#6D6D6D] mb-8">
        Start with our Pro plan and scale as you grow.
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Sliders */}
        <div className="space-y-8 flex flex-col justify-center h-full">
          <div>
            <label htmlFor="users-slider" className="flex justify-between items-center font-semibold text-[#2C2560] mb-2">
              <span>Number of Users</span>
              <span className="text-lg font-bold text-[#f4791f]">{users}</span>
            </label>
            <input
              id="users-slider"
              type="range"
              min="1"
              max="100"
              value={users}
              onChange={(e) => setUsers(Number(e.target.value))}
              className="w-full h-2 bg-[#ffe7d1] rounded-lg appearance-none cursor-pointer slider-thumb"
            />
            <div className="flex justify-between text-xs text-[#6D6D6D] mt-1">
              <span>1</span>
              <span>100</span>
            </div>
          </div>
          <div>
            <label htmlFor="duration-slider" className="flex justify-between items-center font-semibold text-[#2C2560] mb-2">
              <span>Commitment</span>
              <span className="text-lg font-bold text-[#f4791f]">{durationOptions[durationIndex].label}</span>
            </label>
            <input
              id="duration-slider"
              type="range"
              min="0"
              max={durationOptions.length - 1}
              value={durationIndex}
              onChange={(e) => setDurationIndex(Number(e.target.value))}
              className="w-full h-2 bg-[#ffe7d1] rounded-lg appearance-none cursor-pointer slider-thumb"
            />
            <div className="flex justify-between text-xs text-[#6D6D6D] mt-1 px-1">
              {durationOptions.map(opt => <span key={opt.months}>{opt.label.split(' ')[0]}</span>)}
            </div>
          </div>
        </div>

        {/* Price Display */}
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-inner h-full">
          <p className="text-sm font-medium text-[#6D6D6D]">Estimated Monthly Price</p>
          <p className="text-5xl font-extrabold text-[#f4791f] my-2">
            ${calculatedPrice}
          </p>
          <p className="text-sm font-medium text-[#6D6D6D]">per month</p>
          <button className="mt-4 w-full max-w-xs py-3 px-4 rounded-md font-semibold transition-all duration-300 bg-[#f4791f] text-white hover:bg-[#d96a17] hover:scale-105 shadow-lg">
            Get Started with Pro
          </button>
        </div>
      </div>
      <style jsx>{`
        .slider-thumb::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          background: #f4791f;
          cursor: pointer;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 0 5px rgba(0,0,0,0.2);
        }

        .slider-thumb::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #f4791f;
          cursor: pointer;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 0 5px rgba(0,0,0,0.2);
        }
      `}</style>
    </motion.div>
  );
};

export default InteractivePricingCalculator;
