"use client";

import React, { useState } from "react";
import { X, Check, Link2 } from "lucide-react";
import Image from "next/image";

interface ImageUploaderProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}

export default function ImageUploader({
  value,
  onChange,
  label = "Image",
}: ImageUploaderProps) {
  const [urlInput, setUrlInput] = useState("");

  const handleUrlSubmit = () => {
    if (urlInput.trim()) {
      onChange(urlInput.trim());
      setUrlInput("");
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {label}
      </label>

      {value ? (
        <div className="relative w-full h-40 rounded-lg overflow-hidden border border-gray-200">
          <Image
            src={value}
            alt={label}
            fill
            className="object-cover"
            sizes="400px"
          />
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors cursor-pointer"
          >
            <X size={14} className="text-red-500" />
          </button>
        </div>
      ) : (
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Link2 size={14} />
            </div>
            <input
              type="url"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleUrlSubmit())}
              placeholder="Paste image URL..."
              className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00629B]/20 focus:border-[#00629B]"
            />
          </div>
          <button
            type="button"
            onClick={handleUrlSubmit}
            disabled={!urlInput.trim()}
            className="px-3 py-2.5 rounded-lg bg-[#00629B] text-white hover:bg-[#004d7a] disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            <Check size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
