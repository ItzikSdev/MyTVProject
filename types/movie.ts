
interface Movie {
    id: string;
    url: string;
    name: string;
    year: string;
    links: Link[];
    displayMovies: Displaymovies;
    details: Details;
    status: string;
  }
  
  interface Link {
    quality_size: string;
    magnet_link: string;
    magnet_title: string;
  }

  interface Displaymovies {
    image: string;
    name: string;
  }
  
  interface Details {
    genres: string[];
    likes: number;
    rating: number;
    imdb_url: string;
    summary: string;
    youtube_url: string;
  }

  export {
    Movie,
    Link,
    Details
  }