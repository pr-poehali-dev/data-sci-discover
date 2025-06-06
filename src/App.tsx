import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Fortnite from "./pages/Fortnite";
import Standoff from "./pages/Standoff";
import FortniteVBucks from "./pages/FortniteVBucks";
import RobloxRobux from "./pages/RobloxRobux";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fortnite" element={<Fortnite />} />
          <Route path="/standoff" element={<Standoff />} />
          <Route path="/fortnite-vbucks" element={<FortniteVBucks />} />
          <Route path="/roblox-robux" element={<RobloxRobux />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
