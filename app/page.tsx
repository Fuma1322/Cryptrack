"use client"

import React, { useState } from 'react';
import CryptoDetails from '@/components/FrontEnd/CryptoDetails';
import PriceChart from '@/components/FrontEnd/PriceChart';
import SearchInput from '@/components/FrontEnd/SearchInput';
import { fetchCryptoData, fetchCryptoPriceHistory } from '@/lib/api';
import Hero from '@/components/FrontEnd/Hero';

const Home: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<any>(null);
  const [priceHistory, setPriceHistory] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const data = await fetchCryptoData(query);
      if (data && data.length > 0) {
        const crypto = data[0];
        setCryptoData(crypto);

        const history = await fetchCryptoPriceHistory(crypto.id);
        setPriceHistory(
          history.prices.map((price: [number, number]) => price[1])
        );
        setLabels(
          history.prices.map((price: [number, number]) =>
            new Date(price[0]).toLocaleDateString()
          )
        );
      } else {
        setCryptoData(null);
        setPriceHistory([]);
        setLabels([]);
        console.warn('No cryptocurrency data found for the search query.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setCryptoData(null);
      setPriceHistory([]);
      setLabels([]);
    }
  };

  return (
    <div className="container mx-auto">
      <Hero />
      <SearchInput onSearch={handleSearch} />
      {cryptoData && (
        <div>
          <CryptoDetails
            name={cryptoData.name}
            symbol={cryptoData.symbol}
            price={cryptoData.current_price}
            priceChange24h={cryptoData.price_change_percentage_24h}
            marketCap={cryptoData.market_cap}
            volume={cryptoData.total_volume}
          />
          <PriceChart prices={priceHistory} labels={labels} />
        </div>
      )}
    </div>
  );
};

export default Home;
