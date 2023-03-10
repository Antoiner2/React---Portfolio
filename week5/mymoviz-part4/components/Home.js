import Movie from './Movie';
import 'antd/dist/antd.css';
import styles from '../styles/Home.module.css';
import { Popover, Button } from 'antd';
import { useState } from 'react';

const moviesData = [
    { title: 'Forrest Gump', poster: 'forrestgump.jpg', voteAverage: 9.2, voteCount: 22_705, overview: 'A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case.' },
    { title: 'The Dark Knight', poster: 'thedarkknight.jpg', voteAverage: 8.5, voteCount: 27_547, overview: 'Batman raises the stakes in his war on crime and sets out to dismantle the remaining criminal organizations that plague the streets.' },
    { title: 'Your name', poster: 'yourname.jpg', voteAverage: 8.5, voteCount: 8_691, overview: 'High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places.' },
    { title: 'Iron Man', poster: 'ironman.jpg', voteAverage: 7.6, voteCount: 22_7726, overview: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.' },
    { title: 'Inception', poster: 'inception.jpg', voteAverage: 8.4, voteCount: 31_546, overview: 'Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life.' },
  ];

function Home() {
  
const [likedMovie,setLikedMovies ] = useState ([])

  const updateLikedMovies = (movieTitle) => {
    const isLiked = likedMovies.find(movie => movie === movieTitle)

    if (isliked) {
      setLikedMovies(likedmovies.filter(movie => movie === movieTitle))
  } else {
  setLikedMovies ([...likedMovies, movieTitle])
  }
  };



  const movies = moviesData.map((data, i) => {
    const isLiked = likedMovies.find(movie => movies === data.title)
    return <Movie key={i} title={data.title} updateLikedMovies={updateLikedMovies}   overview={data.overview} poster={data.poster} voteAverage={data.voteAverage} voteCount={data.voteCount} isLiked={isLiked} />;
  });

  const likedMoviesPopover = likedMovies.map((data, i) => {
    return (
      <div className={styles.likedMoviesContainer}>
        <span key={i} className="likedMovie">{data}</span>
        <FontAwesomeIcon className={styles.crossIcon} icon={faCircleXmark} onClick={() => updateLikedMovies(data)} />
      </div>
    );
  });

  const popoverContent = (
    <div className={styles.popoverContent}>
      <span>{likedMoviesPopover} </span>
    </div>
  );
  

  
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.logocontainer}>
          <img src="logo.png" alt="Logo" />
          <img className={styles.logo} src="logoletter.png" alt="Letter logo" />
        </div>
        <Popover title="Liked movies" content={popoverContent} className={styles.popover} trigger="click">
          <Button>♥ {likedMovies.length} movie(s)  </Button>
        </Popover>
      </div>
      <div className={styles.title}>LAST RELEASES</div>
      <div className={styles.moviesContainer}>
        {movies}
      </div>
    </div>
  );
}

export default Home;