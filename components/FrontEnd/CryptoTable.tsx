import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { fetchCryptoData } from '@/lib/api';

const CryptoTable: React.FC = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);

  useEffect(() => {
    const fetchCryptocurrencies = async () => {
      try {
        // Directly calling the fetchCryptoData function from the endpoint
        const data = await fetchCryptoData('bitcoin,ethereum,binancecoin,cardano,solana');
        setCryptocurrencies(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCryptocurrencies();
  }, []);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Symbol</TableHead>
          <TableHead>24hr Change</TableHead>
          <TableHead>Market Cap</TableHead>
          <TableHead>Volume</TableHead>
          <TableHead className="text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cryptocurrencies.map((crypto: any, idx: number) => (
          <TableRow key={crypto.id}>
            <TableCell className="font-medium">{crypto.name}</TableCell>
            <TableCell>{crypto.symbol.toUpperCase()}</TableCell>
            <TableCell>{crypto.price_change_percentage_24h.toFixed(2)}%</TableCell>
            <TableCell>${crypto.market_cap.toLocaleString()}</TableCell>
            <TableCell>${crypto.total_volume.toLocaleString()}</TableCell>
            <TableCell className="text-right">${crypto.current_price.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter></TableFooter>
    </Table>
  );
};

export default CryptoTable;
