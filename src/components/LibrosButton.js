import React from 'react'
import PropTypes from 'prop-types'
//import LibrosBookShelf from './LibrosBookShelf';


function LibrosButton(props){
    const { namedShelf , shelf , book , availableShelf, updateLibrosShelf } = props;
    const shelfCN = (availableShelf === shelf || 
        (availableShelf === undefined && shelf === 'none')) ?
        ' active ' : '';

        return(
            <button
            className={`libros-button${shelfCN}`}
            onClick={() => updateLibrosShelf( book,shelf)}
            >
                {namedShelf}
            </button>
        )
}

LibrosButton.propTypes = {
    namedShelf: PropTypes.oneOf([
        'Currently Reading',
        'Want To Read',
        'Read',
        'None'
    ]).isRequired,
    availableShelf: PropTypes.oneOf([
        'currentlyReading',
        'wantToRead',
        'read',
        undefined
    ]),
    shelf: PropTypes.oneOf([
        'currentlyReading',
        'wantToRead',
        'read',
        'none'
    ]),
    book: PropTypes.object.isRequired,
    updateLibrosShelf: PropTypes.func.isRequired
}


export default LibrosButton;