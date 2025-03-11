import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import FeaturesSection from "@/components/FeaturesSection";
import TradingViewChart from "@/components/TradingViewChart";
import StrategyCard from "@/components/StrategyCard";
import TokenomicsSection from "@/components/TokenomicsSection";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const strategies = [
    {
      title: "KI-optimiertes Grid Trading",
      description: "Automatisierte Kauf- und Verkaufsorders in vordefinierten Preisbereichen, optimiert durch KI für maximale Effizienz.",
      type: "Mittelfristig",
      performance: { daily: 0.8, monthly: 12.5 },
      risk: "Medium" as const,
      icon: "grid" as const
    },
    {
      title: "Smart DCA Strategy",
      description: "Intelligente Dollar-Cost-Averaging-Strategie mit KI-gesteuerten Kaufzeitpunkten für optimale Preiseinstiege.",
      type: "Langfristig",
      performance: { daily: 0.4, monthly: 8.2 },
      risk: "Low" as const,
      icon: "dca" as const
    },
    {
      title: "Trend Following AI",
      description: "KI-basierte Erkennung von Markttrends mit automatischer Positionsanpassung für maximale Rendite.",
      type: "Kurzfristig",
      performance: { daily: 1.2, monthly: 18.7 },
      risk: "High" as const,
      icon: "trend" as const
    },
    {
      title: "Cross-DEX Arbitrage",
      description: "Automatische Erkennung und Ausnutzung von Preisunterschieden zwischen verschiedenen dezentralen Börsen.",
      type: "Kurzfristig",
      performance: { daily: 0.6, monthly: 14.3 },
      risk: "Medium" as const,
      icon: "arbitrage" as const
    }
  ];

  const roadmapItems = [
    {
      phase: "Alpha-Phase",
      title: "Grundlegende Infrastruktur",
      items: [
        "Entwicklung der Smart Contracts",
        "Wallet-Integration (MetaMask, Trust Wallet)",
        "Erste KI-Modelle für Marktanalyse",
        "MVP mit Basishandel"
      ],
      status: "Abgeschlossen",
      color: "bg-success-500"
    },
    {
      phase: "Beta-Launch",
      title: "Erweiterte Funktionalität",
      items: [
        "Live-Trading mit Multi-Chain-Support",
        "Mobile App Release (iOS & Android)",
        "Governance-Voting System",
        "Backtesting-Umgebung"
      ],
      status: "In Bearbeitung",
      color: "bg-warning-500"
    },
    {
      phase: "Full Launch",
      title: "Vollständige Plattform",
      items: [
        "Cross-Chain-Integration für alle wichtigen Blockchains",
        "Erweiterte KI-Optimierung mit Sentiment-Analyse",
        "Institutionelle Trading-API",
        "Dezentrale Lending-Integration"
      ],
      status: "Geplant",
      color: "bg-nexblue-500"
    },
    {
      phase: "Expansion",
      title: "Ökosystem-Wachstum",
      items: [
        "NexTrade DAO für vollständig dezentrale Governance",
        "Erweitertes DeFi-Produktangebot",
        "KI-Entwickler-Marketplace",
        "Strategien-Marketplace"
      ],
      status: "Geplant",
      color: "bg-nexteal-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <FeaturesSection />
        
        {/* Trading View Section */}
        <section className="py-16 relative">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Echtzeit <span className="text-gradient-blue">Marktanalyse</span>
              </h2>
              <p className="mt-4 text-gray-300">
                Unsere KI-Algorithmen analysieren kontinuierlich Marktdaten und identifizieren Handelsmöglichkeiten in Echtzeit.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <TradingViewChart />
            </div>
          </div>
        </section>
        
        {/* AI Strategies Section */}
        <section id="strategies" className="py-16 relative">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-40 left-1/3 w-72 h-72 bg-nexteal-500/10 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-nexpurple-500/10 rounded-full filter blur-3xl opacity-20"></div>
          </div>
          
          <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                KI-gestützte <span className="text-gradient-blue">Trading-Strategien</span>
              </h2>
              <p className="mt-4 text-gray-300">
                Unsere adaptiven Algorithmen passen sich kontinuierlich an Marktbedingungen an und maximieren Renditen bei kontrolliertem Risiko.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {strategies.map((strategy, index) => (
                <StrategyCard key={index} {...strategy} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button className="bg-gradient-to-r from-nexblue-500 to-nexteal-500 hover:from-nexblue-600 hover:to-nexteal-600 text-white">
                Mehr Strategien entdecken
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>
        
        <TokenomicsSection />
        
        {/* Roadmap Section */}
        <section id="roadmap" className="py-16 relative">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                <span className="text-gradient-blue">Entwicklungs</span>-Roadmap
              </h2>
              <p className="mt-4 text-gray-300">
                Unsere Vision für die Zukunft von NexTrade AI und die geplanten Entwicklungsschritte.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 ml-4 md:ml-0 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-700"></div>
                
                {roadmapItems.map((item, index) => (
                  <div key={index} className={`relative mb-12 md:mb-8 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'}`}>
                    <div className={`glass-card rounded-xl p-6 ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                      <div className="flex items-center mb-2">
                        <div className={`h-6 w-6 rounded-full ${item.color} mr-2 md:hidden`}></div>
                        <div>
                          <span className="text-xs font-medium text-gray-400">{item.phase}</span>
                          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        </div>
                      </div>
                      
                      <div className="mt-4 space-y-2">
                        {item.items.map((bulletItem, bulletIndex) => (
                          <div key={bulletIndex} className="flex items-start">
                            <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-nexteal-500 mt-1.5 mr-2"></div>
                            <p className="text-gray-300 text-sm">{bulletItem}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className={`mt-4 inline-block px-3 py-1 text-xs font-medium rounded-full ${
                        item.status === "Abgeschlossen" 
                          ? "bg-success-500/20 text-success-500" 
                          : item.status === "In Bearbeitung" 
                            ? "bg-warning-500/20 text-warning-500"
                            : "bg-gray-700 text-gray-300"
                      }`}>
                        {item.status}
                      </div>
                    </div>
                    
                    {/* Timeline circle marker */}
                    <div className={`absolute hidden md:block w-6 h-6 rounded-full ${item.color} top-6 ${
                      index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
                    }`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
