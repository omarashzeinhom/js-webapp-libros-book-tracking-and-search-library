import React from 'react'
import PropTypes from 'prop-types'
//import LibrosBookShelf from './LibrosBookShelf';

/*
*   LibrosButton is responsible for passing the props
*   On the shelfs classname and the currently used shelf
*   it also controls the active state where books are 
*   Shown on the button what current active state  they are
*   In 'Currently Reading',
*        'Want To Read',
*        'Read',
*        'None'
*
*/


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