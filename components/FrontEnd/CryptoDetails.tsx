import React from 'react';
import { Meteors } from '../ui/meteors';

interface CryptoDetailsProps {
  name: string;
  symbol: string;
  price: number;
  priceChange24h: number;
  marketCap: number;
  volume: number;
}

const CryptoDetails: React.FC<CryptoDetailsProps> = ({
  name,
  symbol,
  price,
  priceChange24h,
  marketCap,
  volume,
}) => {
  return (
    <div className="">
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-700 transform scale-[0.30] bg-red-500 blur-3xl" />
        <div className="relative shadow-xl border px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 dark:text-gray-300 text-gray-950"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>
 
          <h1 className="font-bold text-xl dark:text-white text-black mb-4 relative z-50">
          {name} ({symbol.toUpperCase()})
          </h1>
          <p>Price: ${price.toFixed(2)}</p>
          <p>24h Change: {priceChange24h.toFixed(2)}%</p>
          <p>Market Cap: ${marketCap.toLocaleString()}</p>
          <p>Volume: ${volume.toLocaleString()}</p>
 
          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;