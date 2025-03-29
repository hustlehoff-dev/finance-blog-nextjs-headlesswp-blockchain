"use client"; //  needed only for Next.js App Router (if using `app/`)

import React, { useEffect, useState } from "react";
import styles from "./cryptobar.module.scss";

interface Crypto {
  id: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const FETCH_INTERVAL = 60000; // 1min
const STALE_THRESHOLD = 600000; // 10min

export default function CryptoBar() {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);

  const fetchCrypto = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
      );
      const data: Crypto[] = await response.json();

      // Filter out stablecoins & wrappedd
      const filteredData = data.filter(
        (crypto) =>
          ![
            "usd-coin",
            "tether",
            "usds",
            "true-usd",
            "paxos-standard",
            "gemini-dollar",
            "staked-ether",
            "wrapped-bitcoin",
            "wrapped-steth",
            "weth",
            "wrapped-eeth",
            "ethena-usde",
          ].includes(crypto.id)
      );

      // Save to localStorage
      const timestamp = Date.now();
      localStorage.setItem(
        "cryptodata",
        JSON.stringify({ data: filteredData, timestamp })
      );

      setCryptos(filteredData);
    } catch (err) {
      console.error("Error fetching crypto data:", err);
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem("cryptodata");

    if (storedData) {
      const { data, timestamp } = JSON.parse(storedData);

      if (Date.now() - timestamp < STALE_THRESHOLD) {
        setCryptos(data);
      } else {
        fetchCrypto();
      }
    } else {
      fetchCrypto();
    }

    const interval = setInterval(fetchCrypto, FETCH_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.cryptoSlider}>
      <div className={styles.cryptoSliderTrack}>
        {cryptos.map((crypto) => (
          <div className={styles.cryptoCoin} key={crypto.id}>
            <span>{crypto.symbol.toUpperCase()}</span>
            <p>${crypto.current_price.toFixed(2)}</p>
            <span
              className={`${styles.priceChange} ${
                crypto.price_change_percentage_24h > 0
                  ? styles.positive
                  : styles.negative
              }`}>
              {crypto.price_change_percentage_24h > 0 ? "▲" : "▼"}{" "}
              {crypto.price_change_percentage_24h.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
