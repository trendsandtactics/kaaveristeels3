import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X } from "lucide-react";


export const AdmissionPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds on every page load
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-screen h-screen md:w-auto md:h-auto max-w-none md:max-w-[85vw] lg:max-w-4xl p-0 border-none overflow-hidden bg-transparent shadow-none focus:outline-none flex items-center justify-center">
        <div className="relative flex flex-col items-center w-full h-full md:w-auto md:h-auto">
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 md:top-3 md:right-3 z-20 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110 backdrop-blur-sm"
          >
            <X className="h-6 w-6 text-gray-700" />
          </button>
          
          {/* Image - Clickable to redirect */}
          <Link to="/apply-now" onClick={() => setOpen(false)} className="block w-full h-full md:h-auto">
            <img
              src="/image/certificate.jpg"
              alt="Admissions Open - Bridge Course at JOIS Feb-Mar 2026"
              className="w-full h-full md:max-h-[85vh] md:w-auto object-contain md:rounded-2xl shadow-2xl"
            />
          </Link>
          
          {/* CTA Buttons */}
          <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 w-full justify-center px-4 z-10">
            <Link to="/apply-now" className="flex-1 sm:flex-none max-w-[200px]">
              <Button
                onClick={() => setOpen(false)}
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-sm md:text-lg h-10 md:h-auto px-4 md:px-8 md:py-6 shadow-xl animate-pulse-soft whitespace-nowrap"
              >
                🚀 Apply Now
              </Button>
            </Link>
            <Button
              onClick={() => setOpen(false)}
              variant="outline"
              className="flex-1 sm:flex-none max-w-[200px] bg-white/90 hover:bg-white text-gray-800 font-bold text-sm md:text-lg h-10 md:h-auto px-4 md:px-8 md:py-6 shadow-xl border-none backdrop-blur-sm whitespace-nowrap"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdmissionPopup;
