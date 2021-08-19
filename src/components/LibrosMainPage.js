import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../App.css';

//Importing Components
import LibrosBookShelf from './LibrosBookShelf';


/* 
  * -------------------------------
  * LibrosMainPage.js Is Just a functional Component file
  * For Listing Books in the website as a component
  * Instead of Using the Code in app and updates LibrosBookShelf Values aswell.
  *  ----------------------------
*/


function LibrosMainPage(props) {


  const { books, updateLibrosShelf } = props;


  return (
    <div>
      <header>
        <h1>Libros
          </h1></header>
    <div className="libros-main-page">
      <LibrosBookShelf
        title= "CurrentlyReading"
        shelf="currentlyReading"
        updateLibrosShelf={updateLibrosShelf}
        books={books}
      />
      <LibrosBookShelf
        shelf="wantToRead"
        updateLibrosShelf={updateLibrosShelf}
        title="Want to Read"
        books={books}
      />
      <LibrosBookShelf
        shelf="read"
        updateLibrosShelf={updateLibrosShelf}
        title="Read"
        books={books}
      />
      <div className="open-search">
        <Link to="search">Add a book</Link>
      </div>
    </div>
    </div>

  )
}


LibrosMainPage.propTypes = {
  books: PropTypes.array.isRequired,
  updateLibrosShelf: PropTypes.func.isRequired
}


export default LibrosMainPage;

