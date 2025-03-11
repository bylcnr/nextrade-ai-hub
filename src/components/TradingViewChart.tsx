
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown, RefreshCw } from "lucide-react";

const TradingViewChart = () => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [priceChange, setPriceChange] = useState<number>(3.24);
  const [currentPrice, setCurrentPrice] = useState<number>(42156.78);

  useEffect(() => {
    // Simulate chart loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Simulate price updates
    const priceTimer = setInterval(() => {
      const change = (Math.random() * 2 - 1) * 0.5;
      setPriceChange(prev => {
        const newValue = parseFloat((prev + change).toFixed(2));
        return newValue;
      });
      
      setCurrentPrice(prev => {
        const newPrice = prev + (prev * change / 100);
        return parseFloat(newPrice.toFixed(2));
      });
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(priceTimer);
    };
  }, []);

  const isPriceUp = priceChange >= 0;

  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">₿</span>
          </div>
          <div>
            <h3 className="font-medium text-white">BTC/USDT</h3>
            <p className="text-xs text-gray-400">Bitcoin</p>
          </div>
        </div>
        
        <div className="flex flex-col items-end">
          <div className="text-lg font-semibold text-white">${currentPrice.toLocaleString()}</div>
          <div className={`text-sm flex items-center ${isPriceUp ? 'text-green-500' : 'text-red-500'}`}>
            {isPriceUp ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            {Math.abs(priceChange)}%
          </div>
        </div>
      </div>
      
      <div className="relative" style={{ height: "300px" }}>
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-card">
            <RefreshCw className="w-8 h-8 text-nexteal-500 animate-spin" />
          </div>
        ) : (
          <div className="w-full h-full" ref={chartContainerRef}>
            {/* Simulated chart */}
            <svg className="w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="none">
              <linearGradient id="chart-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={isPriceUp ? "#10B981" : "#EF4444"} stopOpacity="0.2" />
                <stop offset="100%" stopColor={isPriceUp ? "#10B981" : "#EF4444"} stopOpacity="0" />
              </linearGradient>
              <path
                d="M0,150 C100,100 200,190 300,120 C400,50 500,180 600,140 C700,100 800,170 900,130 L1000,120 L1000,300 L0,300 Z"
                fill="url(#chart-gradient)"
                stroke={isPriceUp ? "#10B981" : "#EF4444"}
                strokeWidth="2"
              />
            </svg>
          </div>
        )}
      </div>
      
      <div className="p-4 flex items-center justify-between border-t border-white/10">
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="text-xs border-white/10 hover:bg-white/5">
            1H
          </Button>
          <Button variant="outline" size="sm" className="text-xs bg-white/5 border-nexteal-500/30 text-nexteal-400">
            1D
          </Button>
          <Button variant="outline" size="sm" className="text-xs border-white/10 hover:bg-white/5">
            1W
          </Button>
          <Button variant="outline" size="sm" className="text-xs border-white/10 hover:bg-white/5">
            1M
          </Button>
        </div>
        
        <div className="text-xs text-gray-400">
          Powered by NexTrade AI
        </div>
      </div>
    </div>
  );
};

export default TradingViewChart;
