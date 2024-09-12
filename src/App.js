import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import requests from './requests';
import axios from 'axios';
import Nav from './components/Nav';
import Banner from './pages/Banner';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner />
      <Home title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLarge />
       <Home title="Trending"  fetchUrl={requests.fetchTrending}  />
  
  <Home title="Top Rated" fetchUrl={requests.fetchTopRated} />
   <Home title="Action Movies" fetchUrl={requests.fetchActionMovies} />
    <Home title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
    <Home title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    <Home title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    <Home title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      

   
    </div>
  );
}

export default App;
