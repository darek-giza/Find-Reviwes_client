import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import './Home.css';
import SearchForm from "../components/SearchForm";

const Home = () => {

  return (
    <Container>
      <form className="root" noValidate autoComplete="off">
        <Typography variant="h4" component="h2" className="header">
          Search for restaurants nearby
        </Typography>
        <SearchForm/>
      </form>
    </Container>
  )
    ;
};
export default Home;
