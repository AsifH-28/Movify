import React from "react";
import { Input } from "antd";
import "./Search.scss";
import { Outlet } from "react-router-dom";

const { Search } = Input;

interface SearchBarProps {
  placeholder?: string;
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search...",
  onSearch,
}) => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="search-bar">
          <Search
            placeholder={placeholder}
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
            required
          />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default SearchBar;
