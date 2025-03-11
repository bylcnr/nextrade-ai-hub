
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wallet, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface WalletConnectProps {
  compact?: boolean;
}

const WalletConnect = ({ compact = false }: WalletConnectProps) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const { toast } = useToast();

  const formatAddress = (address: string) => {
    if (!address) return "";
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  const handleConnect = () => {
    // Simulate wallet connection
    toast({
      title: "Wallet Connection",
      description: "This is a demo. Real wallet connection will be implemented in the beta version.",
    });
    
    // Mock address for demo purposes
    const mockAddress = "0x" + Math.random().toString(16).substring(2, 42);
    setWalletAddress(mockAddress);
    setIsConnected(true);
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setWalletAddress("");
    setIsDropdownOpen(false);
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected",
    });
  };

  if (!isConnected) {
    return (
      <Button
        variant="default"
        className="bg-gradient-to-r from-nexblue-500 to-nexteal-500 hover:from-nexblue-600 hover:to-nexteal-600 text-white"
        onClick={handleConnect}
      >
        <Wallet className="w-4 h-4 mr-2" />
        {compact ? "Connect" : "Connect Wallet"}
      </Button>
    );
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        className="border-nexteal-500/50 text-white flex items-center space-x-1"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <Wallet className="w-4 h-4 mr-2 text-nexteal-400" />
        <span>{formatAddress(walletAddress)}</span>
        {isDropdownOpen ? (
          <ChevronUp className="w-4 h-4 ml-1" />
        ) : (
          <ChevronDown className="w-4 h-4 ml-1" />
        )}
      </Button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg glass-card divide-y divide-gray-700 z-50">
          <div className="py-1">
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm text-gray-200 hover:bg-white/5"
            >
              <span className="mr-2">View on Explorer</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm text-gray-200 hover:bg-white/5"
            >
              <span className="mr-2">Copy Address</span>
            </a>
          </div>
          <div className="py-1">
            <button
              onClick={handleDisconnect}
              className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-white/5"
            >
              Disconnect
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletConnect;
