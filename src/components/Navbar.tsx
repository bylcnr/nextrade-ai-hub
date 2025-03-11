
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import WalletConnect from "./WalletConnect";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-background/90 backdrop-blur-lg border-b border-white/10">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-nexteal-400 to-nexblue-500">
              <div className="absolute inset-0.5 rounded-full bg-background"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-nexteal-500 to-nexblue-600"></div>
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-white">Nex</span>
              <span className="text-gradient-blue">Trade</span>
              <span className="text-xs ml-1 text-nexteal-400">AI Hub</span>
            </span>
          </a>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <div className="flex space-x-6">
            <a href="#features" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
              Features
            </a>
            <a href="#strategies" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
              AI Strategies
            </a>
            <a href="#tokenomics" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
              Tokenomics
            </a>
            <a href="#roadmap" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
              Roadmap
            </a>
          </div>
          <WalletConnect />
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <WalletConnect compact />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 ml-4 text-gray-200 rounded-md hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span className="sr-only">{isMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
            {isMenuOpen ? (
              <X className="block w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="block w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-card">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#features" 
              className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-nexteal-500/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#strategies" 
              className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-nexteal-500/10"
              onClick={() => setIsMenuOpen(false)}
            >
              AI Strategies
            </a>
            <a 
              href="#tokenomics" 
              className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-nexteal-500/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Tokenomics
            </a>
            <a 
              href="#roadmap" 
              className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-nexteal-500/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Roadmap
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
