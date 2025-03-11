
import { 
  TrendingUp, ChevronRight, GitFork, 
  BarChartHorizontal, RefreshCw, DollarSign 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface StrategyCardProps {
  title: string;
  description: string;
  type: string;
  performance: {
    daily: number;
    monthly: number;
  };
  risk: "Low" | "Medium" | "High";
  icon: "trend" | "grid" | "dca" | "arbitrage";
}

const StrategyCard = ({
  title,
  description,
  type,
  performance,
  risk,
  icon
}: StrategyCardProps) => {
  const getIcon = () => {
    switch (icon) {
      case "trend":
        return <TrendingUp className="h-6 w-6 text-nexblue-400" />;
      case "grid":
        return <BarChartHorizontal className="h-6 w-6 text-nexteal-400" />;
      case "dca":
        return <DollarSign className="h-6 w-6 text-nexpurple-400" />;
      case "arbitrage":
        return <GitFork className="h-6 w-6 text-orange-400" />;
      default:
        return <RefreshCw className="h-6 w-6 text-gray-400" />;
    }
  };

  const getRiskColor = () => {
    switch (risk) {
      case "Low":
        return "bg-success-500/20 text-success-500 border-success-500/30";
      case "Medium":
        return "bg-warning-500/20 text-warning-500 border-warning-500/30";
      case "High":
        return "bg-danger-500/20 text-danger-500 border-danger-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className="glass-card rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-nexteal-500/5">
      <div className="p-5">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="rounded-full p-2 bg-gray-800/80">
              {getIcon()}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="text-xs text-gray-400">{type}</p>
            </div>
          </div>
          <Badge className={`${getRiskColor()} text-xs font-medium`}>
            {risk} Risiko
          </Badge>
        </div>
        
        <p className="text-sm text-gray-300 mb-4">{description}</p>
        
        <div className="bg-black/20 rounded-lg p-3 mb-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col">
              <span className="text-xs text-gray-400">Tägliche Performance</span>
              <span className={`text-lg font-medium ${performance.daily >= 0 ? 'text-success-500' : 'text-danger-500'}`}>
                {performance.daily > 0 ? '+' : ''}{performance.daily}%
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-400">Monatliche Performance</span>
              <span className={`text-lg font-medium ${performance.monthly >= 0 ? 'text-success-500' : 'text-danger-500'}`}>
                {performance.monthly > 0 ? '+' : ''}{performance.monthly}%
              </span>
            </div>
          </div>
        </div>
        
        <Button variant="outline" className="w-full border-nexteal-500/30 text-white hover:bg-nexteal-500/10">
          Strategie erkunden
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default StrategyCard;
