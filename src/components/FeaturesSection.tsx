
import { Brain, ChartBar, Shield, Wallet, BarChart, Zap, Terminal, AreaChart } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      title: "KI-gestützte Algorithmen",
      description: "Adaptive Machine Learning Modelle, die kontinuierlich aus Marktdaten lernen und Strategien optimieren.",
      icon: <Brain className="w-6 h-6 text-nexteal-400" />
    },
    {
      title: "Wallet-Integration",
      description: "Direkte Verbindung mit Metamask, Trust Wallet, Ledger und mehr ohne Übertragung von Private Keys.",
      icon: <Wallet className="w-6 h-6 text-nexblue-400" />
    },
    {
      title: "DEX-Integration",
      description: "Nahtlose Integration mit führenden DEXs wie Uniswap, Curve und PancakeSwap für optimales Order-Matching.",
      icon: <BarChart className="w-6 h-6 text-nexpurple-400" />
    },
    {
      title: "Non-Custodial Architektur",
      description: "Volle Kontrolle über Ihre Assets zu jeder Zeit - Ihre Keys, Ihre Coins.",
      icon: <Shield className="w-6 h-6 text-success-500" />
    },
    {
      title: "Echtzeit-Trading",
      description: "Sofortige Ausführung von Trades mit minimaler Slippage und transparenten Gebühren.",
      icon: <Zap className="w-6 h-6 text-warning-500" />
    },
    {
      title: "Smart Contract Trading",
      description: "Trading direkt über auditierte Smart Contracts für maximale Sicherheit und Transparenz.",
      icon: <Terminal className="w-6 h-6 text-nexblue-400" />
    },
    {
      title: "Technische Analyse",
      description: "Fortschrittliche technische Indikatoren und Chart-Muster, erkannt und interpretiert durch KI.",
      icon: <ChartBar className="w-6 h-6 text-nexteal-400" />
    },
    {
      title: "Multi-Chain Support",
      description: "Unterstützung für Ethereum, BSC, Solana und weitere führende Blockchains für maximale Flexibilität.",
      icon: <AreaChart className="w-6 h-6 text-nexpurple-400" />
    }
  ];

  return (
    <section id="features" className="py-16 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-1/3 w-72 h-72 bg-nexblue-500/10 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-nexteal-500/10 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            <span className="text-gradient-blue">Hauptmerkmale</span> & Vorteile
          </h2>
          <p className="mt-4 text-gray-300">
            Die NexTrade AI Plattform kombiniert leistungsstarke Technologien für ein sicheres und effizientes Trading-Erlebnis.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-nexteal-500/10"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/80 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
