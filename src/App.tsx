import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import KoleksiPage from "./pages/KoleksiPage";
import WarnaPage from "./pages/WarnaPage";
import TentangPage from "./pages/TentangPage";
import KontakPage from "./pages/KontakPage";
import KenapaP from "./pages/kenapaP";
import ProductDetailPage from "./pages/ProductDetailPage";
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
          <Route path="/koleksi" element={<KoleksiPage />} />
          <Route path="/warna/:warna" element={<WarnaPage />} />
          <Route path="/tentang" element={<TentangPage />} />
          <Route path="/kontak" element={<KontakPage />} />
          <Route path="/kenapaP" element={<KenapaP />} />
          <Route path="/produk/:id" element={<ProductDetailPage/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;