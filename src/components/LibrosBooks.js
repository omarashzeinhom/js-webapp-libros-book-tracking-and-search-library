import React from 'react';
import LibrosButton from './LibrosButton';

/*
    *
    *   LibrosBooks is just a  functional Component
    *   That contains the interactive books, and
    *   Updates the books utilizing <LibrosButton/>
    *   & Was Used for Inital Testing
    * 
*/


function LibrosBooks(props) {
    // const here added to be called as a property directly.
    const { updateLibrosShelf, book } = props;
    /*
    * Const added here incase the image doesnt exist for the thumbnail
    */
    const shownThumbnails = props.book.imageLinks ?
        props.book.imageLinks.thumbnail : ''

    return (
        <article className="libros-books">
            <h3>
                {book.title} {/*
                    calling props.title 
                */}
            </h3>
            <p>
                {book.authors} {/*
                    calling props.authors
                */}
            </p>
            <div className="book-cover" style={{
                backgroundImage:
                    `url("${shownThumbnails})`
            }}>
                <div className="libros-interactive-books">
                    <LibrosButton
                        namedShelf="Currently Reading"
                        shelf="currentlyReading"
                        book={book}
                        availableShelf={book.shelf}
                        updateLibrosShelf={updateLibrosShelf}
                    />
                    <LibrosButton
                        namedShelf="Want To Read"
                        shelf="wantToRead"
                        book={book}
                        availableShelf={book.shelf}
                        updateLibrosShelf={updateLibrosShelf}
                    />
                    <LibrosButton
                        namedShelf="Read"
                        shelf="read"
                        book={book}
                        availableShelf={book.shelf}
                        updateLibrosShelf={updateLibrosShelf}
                    />
                    <LibrosButton
                        namedShelf="None"
                        shelf="none"
                        book={book}
                        availableShelf={book.shelf}
                        updateLibrosShelf={updateLibrosShelf}
                    />
                </div>
            </div>
        </article>

    )
}


export default LibrosBooks;



