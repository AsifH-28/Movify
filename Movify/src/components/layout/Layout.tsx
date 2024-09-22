import { Route, Routes } from "react-router-dom";
import HeaderComponent from "../header/HeaderComponent";
import LandingComponent from "../landingComponent/LandingComponent";
import SearchBar from "../searchcomponent/Search";
import { useState } from "react";
import { message } from "antd";
import { useGetMoviesQuery } from "../../services/api";

export default function Layout() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const {data, isError,isLoading,isSuccess} = useGetMoviesQuery(searchTerm, {
    skip: !searchTerm,
  });

  const onSearch = (value: string) => {
    if (!value.trim()) {
      message.error("Please enter a search term!");
      return;
    } else {
      setSearchTerm(value);
    }
  };
  console.log("data from api",data);
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<LandingComponent />} />
        <Route path="search" element={<SearchBar onSearch={onSearch} />} />
      </Routes>
    </>
  );
}
