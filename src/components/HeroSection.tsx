
import { Button } from "@/components/ui/button";
import { ArrowRight, LineChart, Cpu, Lock, Wallet } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative pt-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-nexblue-900/50 to-background"></div>
        <div className="absolute top-40 left-1/3 w-72 h-72 bg-nexteal-500/20 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-nexpurple-500/20 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="container relative z-10 px-4 py-16 mx-auto sm:px-6 lg:py-24 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center px-3 py-1 mb-4 text-xs font-medium text-nexteal-400 rounded-full bg-nexteal-400/10 border border-nexteal-400/20">
              <span className="mr-1 h-2 w-2 rounded-full bg-nexteal-400 animate-pulse"></span>
              100% Dezentralisierte KI-Trading-Plattform
            </div>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Next Generation</span>
              <span className="block text-gradient-blue">KI-gestütztes</span>
              <span className="block">Crypto Trading</span>
            </h1>
            <p className="max-w-2xl mb-6 text-lg text-gray-300">
              NexTrade AI kombiniert adaptive KI-Algorithmen, direkte Wallet-Verbindung und On-Chain-Trading über DeFi-Protokolle für ein sicheres und effizientes Trading-Erlebnis.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-nexblue-500 to-nexteal-500 hover:from-nexblue-600 hover:to-nexteal-600 text-white">
                App starten
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="border-nexteal-500/30 text-white hover:bg-nexteal-500/10">
                Mehr erfahren
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8 sm:grid-cols-2">
              <div className="flex items-center">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 rounded-full bg-nexblue-500/20">
                  <Wallet className="w-4 h-4 text-nexblue-400" />
                </div>
                <p className="text-sm text-gray-300">Direkte Wallet-Verbindung</p>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 rounded-full bg-nexteal-500/20">
                  <Cpu className="w-4 h-4 text-nexteal-400" />
                </div>
                <p className="text-sm text-gray-300">Adaptive KI-Algorithmen</p>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 rounded-full bg-nexpurple-500/20">
                  <Lock className="w-4 h-4 text-nexpurple-400" />
                </div>
                <p className="text-sm text-gray-300">Non-Custodial Sicherheit</p>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 rounded-full bg-nexblue-500/20">
                  <LineChart className="w-4 h-4 text-nexblue-400" />
                </div>
                <p className="text-sm text-gray-300">DEX-Integration</p>
              </div>
            </div>
          </div>

          <div className="relative hidden h-full lg:block">
            <div className="relative glass-card rounded-xl overflow-hidden p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-nexblue-500/20 to-nexteal-500/20 animate-pulse-slow"></div>
              <div className="relative bg-card rounded-lg overflow-hidden p-6">
                <div className="aspect-[4/3] w-full h-auto rounded-lg overflow-hidden border border-white/10">
                  <img 
                    src="https://storage.googleapis.com/lovable-user-assets/5b92a96c-5d26-41be-ada4-b9fdea8e2fb4.webp"
                    alt="Trading Platform Preview" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="mt-4 space-y-3">
                  <div className="h-4 bg-white/5 rounded animate-pulse"></div>
                  <div className="h-4 bg-white/5 rounded animate-pulse"></div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="h-8 bg-nexblue-500/20 rounded animate-pulse"></div>
                    <div className="h-8 bg-nexteal-500/20 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
