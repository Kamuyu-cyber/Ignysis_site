import React from "react";

const logoRow = [
  { name: "MoonPay", src: "https://cryptologos.cc/logos/moonpay-moonpay-logo.svg?v=026" },
  { name: "TradingView", src: "https://cryptologos.cc/logos/tradingview-tradingview-logo.svg?v=026" },
  { name: "Rainbow", src: "https://cryptologos.cc/logos/rainbow-rainbow-logo.svg?v=026" },
  { name: "0x", src: "https://cryptologos.cc/logos/0x-0x-logo.svg?v=026" },
  { name: "Magic Eden", src: "https://cryptologos.cc/logos/magic-eden-magic-eden-logo.svg?v=026" },
  { name: "BullX", src: "https://cryptologos.cc/logos/bullx-bullx-logo.svg?v=026" },
  { name: "BananaGun", src: "https://cryptologos.cc/logos/bananagun-bananagun-logo.svg?v=026" },
  { name: "defi.app", src: "https://cryptologos.cc/logos/defi-defi-logo.svg?v=026" },
  { name: "fomo", src: "https://cryptologos.cc/logos/fomo-fomo-logo.svg?v=026" },
  { name: "LFJ", src: "https://cryptologos.cc/logos/lfj-lfj-logo.svg?v=026" },
  { name: "Slingshot", src: "https://cryptologos.cc/logos/slingshot-slingshot-logo.svg?v=026" },
  { name: "vector", src: "https://cryptologos.cc/logos/vector-vector-logo.svg?v=026" },
  { name: "Defined", src: "https://cryptologos.cc/logos/defined-defined-logo.svg?v=026" },
];

const gridLogos = [
  "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=026",
  "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=026",
  "https://cryptologos.cc/logos/solana-sol-logo.svg?v=026",
  "https://cryptologos.cc/logos/cardano-ada-logo.svg?v=026",
  "https://cryptologos.cc/logos/polygon-matic-logo.svg?v=026",
  "https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=026",
  "https://cryptologos.cc/logos/binance-coin-bnb-logo.svg?v=026",
  "https://cryptologos.cc/logos/chainlink-link-logo.svg?v=026",
  "https://cryptologos.cc/logos/uniswap-uni-logo.svg?v=026",
  "https://cryptologos.cc/logos/maker-mkr-logo.svg?v=026",
  "https://cryptologos.cc/logos/aave-aave-logo.svg?v=026",
  "https://cryptologos.cc/logos/compound-comp-logo.svg?v=026",
  "https://cryptologos.cc/logos/curve-dao-token-crv-logo.svg?v=026",
  "https://cryptologos.cc/logos/yearn-finance-yfi-logo.svg?v=026",
  "https://cryptologos.cc/logos/sushiswap-sushi-logo.svg?v=026",
  "https://cryptologos.cc/logos/1inch-1inch-logo.svg?v=026",
  "https://cryptologos.cc/logos/balancer-bal-logo.svg?v=026",
  "https://cryptologos.cc/logos/ren-ren-logo.svg?v=026",
  "https://cryptologos.cc/logos/kyber-network-knc-logo.svg?v=026",
  "https://cryptologos.cc/logos/augur-rep-logo.svg?v=026",
  "https://cryptologos.cc/logos/uma-uma-logo.svg?v=026",
  "https://cryptologos.cc/logos/synthetix-network-token-snx-logo.svg?v=026",
  "https://cryptologos.cc/logos/loopring-lrc-logo.svg?v=026",
  "https://cryptologos.cc/logos/0x-0x-logo.svg?v=026",
];

export default function TrustedByPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-black flex flex-col items-center py-12 px-2">
      <h1 className="text-6xl md:text-7xl font-bold text-center mb-4 tracking-tight">INDUSTRY-LEADING<br />NETWORK SUPPORT</h1>
      <p className="text-xl text-center mb-8 mt-2">Codex powers real-time experiences for</p>
      <div className="flex flex-wrap justify-center items-center gap-8 mb-12 w-full max-w-5xl">
        {logoRow.map((logo) => (
          <div key={logo.name} className="flex flex-col items-center min-w-[120px]">
            <img src={logo.src} alt={logo.name} className="h-10 w-auto object-contain mb-2" />
            <span className="text-xs font-semibold text-gray-700 text-center">{logo.name}</span>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 flex flex-col items-center" style={{marginTop: 24}}>
        <div className="grid grid-cols-4 md:grid-cols-6 gap-6">
          {gridLogos.map((src, i) => (
            <div key={i} className="bg-gray-100 rounded-xl flex items-center justify-center p-3 shadow border border-gray-200">
              <img src={src} alt="logo" className="h-10 w-10 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 