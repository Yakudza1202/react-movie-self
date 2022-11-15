import Movie from "./Movie";

export default function Movies(props) {
  const { movies = [] } = props;

  return (
    <div className="movies">
      {movies.length ? movies.map(movie => (
        <Movie key={movie.imdbID} {...movie} />
      )) : 
      <div>
         <div class="content">
            <h2 class="header" data-text="404">
               404
            </h2>
            <h4 data-text="Opps! Page not found">
               Opps! Page not found
            </h4>
            <p>Sorry, the page you're looking for doesn't exist. </p>  
         </div>
      </div>
      }
    </div>
  ); 
}
