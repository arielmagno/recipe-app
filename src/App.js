import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Form, FormGroup, Label, Input, InputGroup } from 'reactstrap';

const App = () => {
  const APP_ID = '3983404c';
  const APP_KEY = 'af3f39c83f0fde7928a9d302627e4055';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  //fetch data only once from the API 
  //only when counter changes when useeffect runs
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);

  }

  //get event
  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">

      <Container fluid>
        <Row className="form-row justify-content-center">
          <Form className="search-form" onSubmit={getSearch}>
            <FormGroup >
              <InputGroup >
                <Input type="text" value={search} onChange={updateSearch} placeholder="Search Recipe"  className="form-group col-lg-12"/>
                <Button type="submit"
                  className="btn btn-primary" >Search</Button>
              </InputGroup>
            </FormGroup>
          </Form>
        </Row>
        <Row className="row-fluid">
          {recipes.map(
            recipe => (
              <Col lg="3">
                <Recipe
                  key={recipe.recipe.label}
                  title={recipe.recipe.label}
                  calories={recipe.recipe.calories}
                  image={recipe.recipe.image}
                  ingredients={recipe.recipe.ingredients} />
              </Col>
            )
          )}
        </Row>
      </Container>
    </div>

  )
}

export default App;
