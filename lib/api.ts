const API_URL = 'https://api.coingecko.com/api/v3';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'x-cg-demo-api-key': 'CG-rTMDc2Fdw4Rxpn9GZcoE5sXz',
  },
};

export async function fetchCryptoData(query: string) {
  const res = await fetch(`${API_URL}/coins/markets?vs_currency=usd&ids=${query}`,
    options
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export async function fetchCryptoPriceHistory(id: string) {
  const res = await fetch(`${API_URL}/coins/${id}/market_chart?vs_currency=usd&days=7`,
    options
  );
  if (!res.ok) {
    throw new Error('Failed to fetch price history');
  }
  return res.json();
}