"use client";

import { Search } from "lucide-react";

type SearchBarProps = {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

export const SearchBar = ({
  placeholder = "Search leagues by name...",
  value,
  onChange,
}: SearchBarProps) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <Search className="w-5 h-5 text-gray-400" />
      </div>

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder-gray-400"
      />
    </div>
  );
};
