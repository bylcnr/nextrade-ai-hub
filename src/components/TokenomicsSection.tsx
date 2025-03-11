
import { PieChart, Flame, Users, BarChart4, Coins } from "lucide-react";

const TokenomicsSection = () => {
  const tokenAllocation = [
    { category: "Community & Ecosystem", percentage: 40, color: "bg-nexteal-500" },
    { category: "Team & Advisors", percentage: 20, color: "bg-nexblue-500" },
    { category: "Liquidity Pool", percentage: 15, color: "bg-nexpurple-500" },
    { category: "Development Fund", percentage: 15, color: "bg-warning-500" },
    { category: "Marketing", percentage: 10, color: "bg-success-500" }
  ];

  const tokenUtilities = [
    {
      title: "Governance",
      description: "Stimmberechtigung für Plattform-Entscheidungen und Feature-Priorisierung",
      icon: <Users className="w-6 h-6 text-nexblue-400" />
    },
    {
      title: "Staking & Rewards",
      description: "Verdienen Sie passive Einnahmen durch Token-Staking und Liquidity Mining",
      icon: <Coins className="w-6 h-6 text-nexteal-400" />
    },
    {
      title: "Fee Discounts",
      description: "Reduzierte Trading-Gebühren für $NXT Token-Inhaber",
      icon: <BarChart4 className="w-6 h-6 text-nexpurple-400" />
    },
    {
      title: "Token Burning",
      description: "Regelmäßige Token-Burning-Events zur Wertsteigerung",
      icon: <Flame className="w-6 h-6 text-warning-500" />
    }
  ];

  return (
    <section id="tokenomics" className="py-16 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-nexblue-500/10 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-nexteal-500/10 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            <span className="text-gradient-blue">$NXT</span> Tokenomics
          </h2>
          <p className="mt-4 text-gray-300">
            Der NexTrade Token ($NXT) kombiniert Utility und Governance-Funktionen mit langfristiger Wertschöpfung.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center mb-6">
              <PieChart className="w-6 h-6 text-nexteal-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">Token Allocation</h3>
            </div>
            
            <div className="space-y-4">
              {tokenAllocation.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">{item.category}</span>
                    <span className="text-white font-medium">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div 
                      className={`${item.color} h-2.5 rounded-full`} 
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-black/20 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-400">Max Supply</p>
                  <p className="text-xl font-semibold text-white">100,000,000 $NXT</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Initial Circulating Supply</p>
                  <p className="text-xl font-semibold text-white">25,000,000 $NXT</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-white mb-6">Token Utility</h3>
            
            <div className="space-y-6">
              {tokenUtilities.map((utility, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/80">
                      {utility.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">{utility.title}</h4>
                    <p className="text-gray-300 text-sm">{utility.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-nexblue-500/20 to-nexteal-500/20 rounded-lg">
              <h4 className="text-white font-medium mb-2">Token Burning Mechanism</h4>
              <p className="text-sm text-gray-300">
                10% aller Plattform-Einnahmen werden verwendet, um $NXT-Token zu kaufen und aus dem Umlauf zu entfernen, 
                was die Knappheit erhöht und langfristig zur Wertsteigerung beiträgt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
