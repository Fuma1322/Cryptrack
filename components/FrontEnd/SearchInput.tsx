"use client";

import React, { useState, useEffect } from "react";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const placeholders = [
    "Search for a cryptocurrency by name or symbol...",
    "Search for a cryptocurrency by name or symbol...",
    "Search for a cryptocurrency by name or symbol...",
  ];

  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const query = queryParams.get("q");
    if (query) {
      setSearchQuery(query);
      handleSearch();
    }
  }, []);

  return (
    <div>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={(event) => setSearchQuery(event.target.value)}
        onSubmit={handleSearch} // Trigger search when submitted
      />
    </div>
  );
};

export default SearchInput;
