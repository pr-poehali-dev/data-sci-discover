import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Gamepad2, DollarSign } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Gamepad2 className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">ИгроСкины</span>
        </Link>
        
        <nav className="flex items-center space-x-4">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              <span>Главная</span>
            </Button>
          </Link>
          <Link to="/fortnite">
            <Button variant="ghost">Fortnite</Button>
          </Link>
          <Link to="/standoff">
            <Button variant="ghost">Standoff 2</Button>
          </Link>
          <Link to="/fortnite-vbucks">
            <Button variant="ghost" className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              <span>V-Bucks</span>
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
