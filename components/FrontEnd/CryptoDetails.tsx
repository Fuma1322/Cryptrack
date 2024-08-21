import React from 'react';

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
    <div className="p-4 border rounded-md bg-white dark:bg-black shadow-md">
      <h2 className="text-2xl font-bold mb-4">{name} ({symbol.toUpperCase()})</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Price</label>
        <input
          type="text"
          value={`$${price.toFixed(2)}`}
          readOnly
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 dark:bg-gray-800 dark:border-gray-600 text-gray-900 dark:text-gray-100"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">24h Change</label>
        <input
          type="text"
          value={`${priceChange24h.toFixed(2)}%`}
          readOnly
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 dark:bg-gray-800 dark:border-gray-600 text-gray-900 dark:text-gray-100"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Market Cap</label>
        <input
          type="text"
          value={`$${marketCap.toLocaleString()}`}
          readOnly
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 dark:bg-gray-800 dark:border-gray-600 text-gray-900 dark:text-gray-100"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Volume</label>
        <input
          type="text"
          value={`$${volume.toLocaleString()}`}
          readOnly
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 dark:bg-gray-800 dark:border-gray-600 text-gray-900 dark:text-gray-100"
        />
      </div>
    </div>
  );
};

export default CryptoDetails;
