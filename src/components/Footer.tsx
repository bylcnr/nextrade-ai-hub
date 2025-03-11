import { Github, Twitter, MessageSquare, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-nexteal-400 to-nexblue-500">
                <div className="absolute inset-0.5 rounded-full bg-background"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-nexteal-500 to-nexblue-600"></div>
              </div>
              <span className="text-xl font-bold tracking-tight ml-2">
                <span className="text-white">Nex</span>
                <span className="text-gradient-blue">Trade</span>
                <span className="text-xs ml-1 text-nexteal-400">AI Hub</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4 max-w-md">
              NexTrade AI kombiniert adaptive KI-Algorithmen, direkte Wallet-Verbindung und 
              On-Chain-Trading über DeFi-Protokolle für ein sicheres und effizientes Trading-Erlebnis.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Plattform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Backtesting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Trading-Strategien</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Mobile App</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Ressourcen</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Dokumentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Whitepaper</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Github</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} NexTrade AI | Alle Rechte vorbehalten
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Datenschutz</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Nutzungsbedingungen</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Cookie-Richtlinie</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
