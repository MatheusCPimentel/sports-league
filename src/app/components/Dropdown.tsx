"use client";

import { Filter, ChevronDown } from "lucide-react";

type DropdownProps = {
  value: string;
  onChange: (value: string) => void;
  options: string[];
};

export const Dropdown = ({ value, onChange, options }: DropdownProps) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <Filter className="w-5 h-5 text-gray-400" />
      </div>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-12 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 bg-white appearance-none cursor-pointer"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
        <ChevronDown className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  );
};
