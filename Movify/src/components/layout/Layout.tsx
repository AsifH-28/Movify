import { Route, Routes } from "react-router-dom";
import HeaderComponent from "../header/HeaderComponent";
import LandingComponent from "../landingComponent/LandingComponent";
import SearchBar from "../searchcomponent/Search";
import { useState } from "react";
import { message } from "antd";
import { useGetTrndingMoviesQuery } from "../../services/api";
import Content from "../content/Content";
import { Movie } from "../../interface/TrendingMovie";

export default function Layout() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { data, isError, isLoading, isSuccess } = useGetTrndingMoviesQuery();

  const onSearch = (value: string) => {
    if (!value.trim()) {
      message.error("Please enter a search term!");
      return;
    } else {
      setSearchTerm(value);
    }
  };
  console.log("data from api", data?.results);
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<LandingComponent />} />
        <Route path="search" element={<SearchBar onSearch={onSearch} />}>
          <Route
            index
            element={
              <Content
                movies={data?.results as Movie[]}
                isError={isError}
                isLoading={isLoading}
                isSuccess={isSuccess}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}
