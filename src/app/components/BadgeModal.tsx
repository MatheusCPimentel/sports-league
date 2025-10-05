"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import Image from "next/image";

type BadgeModalProps = {
  isOpen: boolean;
  onClose: () => void;
  badgeUrl: string | null;
  leagueName?: string;
  season?: string;
  isLoading: boolean;
};

export const BadgeModal = ({
  isOpen,
  onClose,
  badgeUrl,
  leagueName,
  season,
  isLoading,
}: BadgeModalProps) => {
  useEffect(() => {
    const onEscPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", onEscPress);
    }

    return () => {
      document.removeEventListener("keydown", onEscPress);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/20 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="flex flex-col items-center space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              {leagueName}
            </h2>

            {!isLoading && season && (
              <p className="text-sm text-gray-600">Season: {season}</p>
            )}
          </div>

          <div className="w-full flex justify-center items-center min-h-[200px]">
            {isLoading ? (
              <div className="text-gray-600">Loading badge...</div>
            ) : badgeUrl ? (
              <div className="relative w-full h-[400px]">
                <Image
                  src={badgeUrl}
                  alt={`${leagueName} ${season || ""} badge`}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            ) : (
              <div className="text-gray-600">No badge available</div>
            )}
          </div>

          <button
            onClick={onClose}
            className="w-full py-3 px-6 bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
