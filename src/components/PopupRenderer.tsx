"use client";

import { useEffect, useState } from "react";
import { resolveMediaUrl } from "@/lib/media";

type PopupItem = {
  id: number;
  title: string;
  cover_image?: string | null;
  file_url?: string | null;
};

export default function PopupRenderer() {
  const [popup, setPopup] = useState<PopupItem | null>(null);
  const [open, setOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("/image/certificate.jpg");

  const isPdf = imageSrc.toLowerCase().includes(".pdf");

  useEffect(() => {
    fetch("/api/public/content/popups?limit=1", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        const item = (data.data ?? [])[0];
        if (item) {
          setPopup(item);
          setImageSrc(
            resolveMediaUrl(
              item.file_url ?? item.cover_image,
              "/image/certificate.jpg"
            )
          );
          setOpen(true);
        }
      })
      .catch(() => {});
  }, []);

  if (!popup || !open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-3">
      
      {/* Close Button */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-black text-white flex items-center justify-center text-lg shadow-lg"
      >
        ✕
      </button>

      {/* Certificate */}
      <div className="w-full max-w-3xl max-h-[90vh] flex items-center justify-center">
        <div
          className="w-full bg-white rounded-xl overflow-hidden shadow-2xl"
          style={{ aspectRatio: "210 / 297" }}
        >
          {isPdf ? (
            <iframe
              src={imageSrc}
              className="w-full h-full"
              title="Certificate"
            />
          ) : (
            <img
              src={imageSrc}
              alt="Certificate"
              className="w-full h-full object-contain"
              onError={() => setImageSrc("/image/certificate.jpg")}
            />
          )}
        </div>
      </div>
    </div>
  );
}
