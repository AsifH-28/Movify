import { Card } from "antd";
import { Movie } from "../../interface/TrendingMovie";
interface MovieProps{
   movie:Movie; 
}
const MovieCard: React.FC<MovieProps> = ({ movie }) => {
    return (
        <Card
            hoverable
            cover={
                <img
                    alt={movie.title}
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} 
                />
            }
        >
            <Card.Meta title={movie.title}  description={`Released Date ${movie.release_date}`} />

        </Card>
    );
};
export default MovieCard;