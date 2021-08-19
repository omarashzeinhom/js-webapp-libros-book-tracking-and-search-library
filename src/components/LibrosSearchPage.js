import React from 'react';
import '../App';
import PropTypes from 'prop-types';
import LibrosBooks from './LibrosBooks';
import LibrosSearchData from './LibrosSearchData';


/*
  * Search Page is basically to Render the page to /search  
  * When the user clicks add a book and handles the searched results
  * 
*/


function LibrosSearchPage(props) {
  const { updateLibrosBooksSearched, books, updateLibrosShelf } = props;

  return (
    <div className="libros-search-page">
      <LibrosSearchData
        updateLibrosBooksSearched={updateLibrosBooksSearched}
      />
      <ul className="libros-search-page-books">
        {books.map((book) => (
          <li key={book.id}>
            <LibrosBooks
              updateLibrosShelf={updateLibrosShelf}
              book={book}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}


LibrosSearchPage.propTypes = {

  updateLibrosBooksSearched: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired


}



export default LibrosSearchPage;







