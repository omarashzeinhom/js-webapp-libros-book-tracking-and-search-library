import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';


/* 
  * ---------------------
  * Import All Components
  * ---------------------
*/


import LibrosSearchPage from './components/LibrosSearchPage';
import LibrosMainPage from './components/LibrosMainPage';
//import LibrosBookShelf from './components/LibrosBooks';


/*
  *
  * BooksApp is the main app.js component
  * 
*/


class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /*
      *                 --> List of Books -> /App.js
      * State Structure --> Query(Search) -> /components/SearchPage       
      *                 --> List of Books Searched -> /components/SearchPage 
      */
      //books:[] Array is added to the state {}

      booksSearched: [],
      booksonDisplay: [],
    }
  }





  async componentDidMount() {
    const books = await BooksAPI.getAll()
    this.setState({ booksonDisplay: books })
  }



  /*
  *         
  * updateLibrosBooksSearched is an arrow function which handles Errors
  * If there is an error in booksSearched
  * Display Empty array booksSearched instead 
  * Of Giving TypeError
  */
  

  updateLibrosBooksSearched = (query) => {
    let LibrosSearchedShelf
    if (query) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          this.setState({ booksSearched: [] })
        } else {
          LibrosSearchedShelf = books.map(book => {
            book.shelf = this.librosSyncedShelf(book);
            return book;
          })
          this.setState({ booksSearched: LibrosSearchedShelf })
        }
      })
    } else {
      this.setState({ booksSearched: [] })
    }
  }


  /*  
       *
       *  updateLibrosShelf is used to Update State and passed through the LibrosMainPage
       *  then through LibrosBookShelf.js
       * 
   */


  updateLibrosShelf = (book, shelf) => {

    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState({ booksonDisplay: books })
      })
    })
  }


  librosSyncedShelf = (book) => {
    let updatedMatchedShelf = this.state.booksonDisplay.filter(bookonDisplay => 
      book.id === bookonDisplay.id
    )
    return updatedMatchedShelf.length ? updatedMatchedShelf[0].shelf : undefined
  }








  /*
    * Rendering Components <SearchPage/>
    * <LibrosBookShelf>, & <LibrosMainPage/>
    * With exact path added to <Route> 
    * to let user go to URL localhost:3000/search
    * Book mark it and return to / when being at
    * the home page or at the component 
    * BookListed.js
  */


  //exact path added here to make sure its directing to the exact directories

  render() {
    const { booksonDisplay, booksSearched } = this.state;
    //console.log(this.state.books);
    /*
    * Route Structure Hiearchy
    * <App/>
    *   <LibrosMainPage/>
    *     <LibrosBookShelf/>
    *       <SearchPage/>
    *         
    * 
    */
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <LibrosMainPage
            books={booksonDisplay}
            updateLibrosShelf={this.updateLibrosShelf}
          />
        )}>
        </Route>
        <Route exact path="/search" render={() => (
          <LibrosSearchPage
            books={booksSearched}
            updateLibrosBooksSearched={this.updateLibrosBooksSearched}
            updateLibrosShelf={this.updateLibrosShelf}
          />
        )}>
        </Route>
      </div>
    );
  }
}


export default BooksApp;


