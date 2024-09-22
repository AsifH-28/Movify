import { Col, Row, Typography } from "antd";
import { Movie } from "../../interface/TrendingMovie";
import MovieCard from "../movieCard/MovieCard";
import { Colors } from "../../utils/colors/colors";

const { Title } = Typography;

interface ContentProps {
  movies: Movie[];
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}
const Content: React.FC<ContentProps> = ({
  movies,
  isError,
  isLoading,
  isSuccess,
}) => {
  if (isError) {
    return <div>Something went wrong</div>;
  }
  if (isLoading) {
    return <div style={{ color: "white" }}>Loading</div>;
  }
  return (
    <div
      style={{
        width: "70%",
        position: "relative",
        left: "15%",
        marginTop: "20px",
      }}
    >
      <Title
        level={2}
        type="secondary"
        underline
        style={{ color: Colors.secondaryColor }}
      >
        Trending Movies
      </Title>

      <Row gutter={[24, 32]}>
        {movies.map((movie) => (
          <Col span={6} key={movie.id}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Content;
