import Nav from './Nav'
import Banner from './Banner'
import Row from "./Row";
import requests from '../Request';
import "./HomeScreen.css";

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav />
        <div className='container'>
        <Banner />
        <Row 
          title="netflix originals"
          fetchUrl={requests.fetchNetflixOriginals}
          isLarge
        />
        <Row 
          title="trending now"
          fetchUrl={requests.fetchTrending}
          isLarge={false}
        />
        <Row 
          title="top rated"
          fetchUrl={requests.fetchTopRated}
          isLarge={false}
        />
        <Row 
          title="action movies"
          fetchUrl={requests.fetchActionMovies}
          isLarge={false}
        />
        <Row 
          title="comedy movies"
          fetchUrl={requests.fetchComedyMovies}
          isLarge={false}
        />
        <Row 
          title="horror movies"
          fetchUrl={requests.fetchHorrorMovies}
          isLarge={false}
        />
        <Row 
          title="romance movies"
          fetchUrl={requests.fetchRomanceMovies}
          isLarge={false}
        />
        <Row 
          title="documentaries"
          fetchUrl={requests.fetchDocumentaries}
          isLarge={false}
        />
        </div>
    </div>
  )
}

export default HomeScreen