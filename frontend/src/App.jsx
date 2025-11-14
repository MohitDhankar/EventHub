import { TooltipProvider } from "./components/Tooltip";
import { Toaster } from "./components/Toaster";
import { Toaster as Sonner } from "./components/Sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Events from "./pages/Events";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import EasyEventCreation from "./pages/EasyEventCreation";
import VenueBooking from "./pages/VenueBooking";
import GuestManagement from "./pages/GuestManagement";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import ViewDemo from "./pages/ViewDemo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/create-event" element={<EasyEventCreation />} />
          <Route path="/venue-booking" element={<VenueBooking />} />
          <Route path="/guest-management" element={<GuestManagement />} />
          <Route path="/guest-management/:eventId" element={<GuestManagement />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/view-demo" element={<ViewDemo />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
