

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


/*
    * LibrosSearch Data is resposnible for the users searchedQuery
    *  & onChange this event , updateSearchedBooks
    *
    * 
*/



class LibrosSearchData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchedQuery: ''
        }
    }

    updatedSearchQuery = (query) => {
        this.setState({ searchedQuery: query })
        this.props.updateLibrosBooksSearched(query)
    }

    render() {
        return (
            <form>
                <div className="libros-search-data">

                    <Link className="close-search" to="/">Close
                    </Link>

                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value={this.state.query}
                        className="libros-search-data-input"
                        onChange={(event) => this.updatedSearchQuery(event.target.value)
                        }
                    />
                </div>
            </form>


        )
    }
}


LibrosSearchData.propTypes = {
    updateLibrosBooksSearched: PropTypes.func.isRequired
}


export default LibrosSearchData;