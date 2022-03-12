import React from 'react'
import '../App.css'
import '../App.js'
import LibrosBooks from './LibrosBooks';
import PropTypes from 'prop-types';


/* 
  *  -------------------------------
  *  LibrosBookShelf.js Is Just a Component file
  *  For ListingBook shelves in the website as a component
  *  Instead of Using the Code in app.
  * as well as it handles the books
  *  ----------------------------
*/


function LibrosBookShelf(props) {

// props Librosshelf , books , and shelf
  const { updateLibrosShelf, books, shelf } = props;
 
  
  return (
   <section className="libros-book-shelf">
       <header>
         <h2>
         {props.title}
       </h2>
       </header>
        {/*
        ul added here to apply to standards as well
        as to remove numbering from the LibrosSearchPage 
        As well book is mapped to shelf and passed through book.id 
        For Comparision*/}
      <ul className="libros-books-area-container">
      { books.filter((book) => book.shelf === shelf).map(
                  (book) => (
                    <li key={book.id}>
                      <LibrosBooks
                        book={book}
                        updateLibrosShelf={updateLibrosShelf}
                      />
                    </li>
                  ))}

      </ul>
      
   </section>
  )
}



LibrosBookShelf.propTypes = {
  title: PropTypes.oneOf([
    'CurrentlyReading',
    'Want to Read',
    'Read'
  ]).isRequired,
  books: PropTypes.array.isRequired,
  shelf: PropTypes.oneOf([
    'currentlyReading',
    'wantToRead',
    'read'
  ]).isRequired,
  updateLibrosShelf: PropTypes.func.isRequired
}


export default LibrosBookShelf;



/*Initial BookShelf*/

/*
                *OnChangeMethod to
                Update the search with an event


<select

                onChange={(event) => props.updateLibrosShelf(
                  props.book, event.target.value
                )}
                value={props.availableShelf}
              >
                <option value="none">Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
*/

/*
<article>
<div>
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ backgroundImage: `url("${shownThumbnails})` }}></div>
      <div className="book-shelf-changer">
        <div className="bookshelf-title">
        </div>
            </div>
            
          </div>
        </div>
      </div>
    </article>
*/
