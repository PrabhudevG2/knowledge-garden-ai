import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Introduction from "./pages/Introduction";
import CoreTechnologies from "./pages/CoreTechnologies";
import Frameworks from "./pages/Frameworks";
import UseCases from "./pages/UseCases";
import Future from "./pages/Future";
import CaseStudies from "./pages/CaseStudies";
import NotFound from "./pages/NotFound";
import DetailPage from "./pages/DetailPage"; // Import the new DetailPage component

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/core-technologies" element={<CoreTechnologies />} />
          <Route path="/frameworks" element={<Frameworks />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/future" element={<Future />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/:sectionId/:itemSlug" element={<DetailPage />} /> {/* Add the dynamic route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
