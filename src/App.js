import React from 'react'
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowMovies from './Components/RowMovies/RowMovies';
import { netflixOrginals, action, comedy, horror, documenteries, romance } from './urls'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <br></br>
      <RowMovies title={'Netflix Orginals'} url={netflixOrginals}></RowMovies>
      <RowMovies title={'Action'} isSmall url={action}></RowMovies>
      <RowMovies title={'Comedy'} isSmall url={comedy}></RowMovies>
      <RowMovies title={'Horror'} isSmall url={horror}></RowMovies>
      <RowMovies title={'Documenteries'} isSmall url={documenteries}></RowMovies>
      <RowMovies title={'Romance'} isSmall url={romance}></RowMovies>


    </div>
  );
}

export default App;
