'use client'

import { fetchCryptoData, fetchCryptoPriceHistory } from "@/lib/api";
import SearchInput from "./SearchInput"
import { useState } from "react";
import CryptoDetails from "./CryptoDetails";
import PriceChart from "./PriceChart";
import CryptoTable from "./CryptoTable";



export default function Hero() {
  const [cryptoData, setCryptoData] = useState<any>(null);
  const [priceHistory, setPriceHistory] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);

  //Handling search logic from the api endpoint
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
    <div className="">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className=" absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] dark:bg-gradient-to-r dark:from-slate-500 dark:to-slate-300 dark:opacity-20 dark:sm:left-[calc(50%-30rem)] dark:sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-20 sm:py-48 lg:py-56">
          <div className="flex flex-col gap-10 items-center">
            {/* Search Bar With returned Cryptodata on Search */}
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
          <div className="py-8">
            <PriceChart prices={priceHistory} labels={labels} />
          </div>
        </div>
          )}
          </div>
        </div>
        <div>
        <CryptoTable />  
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-50 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] dark:bg-gradient-to-r dark:from-slate-500 dark:to-slate-300 dark:opacity-30 dark:sm:left-[calc(50%-30rem)] dark:sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}