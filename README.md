# Libros -Book Tracking Application


## Libros Required Tasks Done

1. Application starts with npm install and npm start 

2. Updated ReadME.MD File 

3. Main Page Shows 3 shelves for Books
    & each book is shown on the correct shelf with its title and all of its authors.

4. Allowing The User to move between 
    Book Shelves (Read,CurrentlyReading and Want to read)

5. When the Browser is refereshed 
    the same info is displayed on the page

6. Search Page has an input field ,
    and behaves correctly, while user types into search field.
    and invalid queries are handled and prior search results are not shown 

7. Main Page Contains A Link to the Search Page , and the URL in the browsers address is /search

9. Active state of books is shown on the LibrosMainpage.js and LibrosSearchpage.js


## JavaScript Changes Made in /src/App.js 

1. Added Component For LibrosBookShelf as a new file /src/LibrosBookShelf.js

2. Added Component For LibrosSearch Page as a new file /src/components/LibrosSearchPage.js &
Changed Search Page from a state variable to an URL:localhost:3000/search  to allow users for better navigation and be able to bookmark it.

    - 2.1 Added /search route and link
    - 2.2 Added BooksAPI FetchedBooks and Displayed Them aswell as handling error when 
    Results are not shown.

3. Added Component For Fetching SearchQuery Data as LibrosSearchData 

4. Added Component For LibrosMainPage 

5. Added Component For LibrosBooks 
   
6. Added Component For LibrosBookShelf

7. Added Route For Components and exact path .
 

### Changes Made in /src/index.js 

1. Imported {BrowserRouter} from 'react-router-dom'


#### CSS3 Styles Added in /src/index.css and /src/App.cs


1. Added Linear Gradients as Background

2. Changed Font to Clicker Script & sizes were set to vw for website to be repsonsive

3. Changed bookcover radius to be a little more rounded
   
4. Changed Active State 
   
5. Added Responsive elements of css vw for text , width = 100% and so on
   
6. Active state is recorded as JS 1st then the animation is just displayed in css and the active state is updated utilizing functional components

##### HTML5 Changes Done in /public/index.html/

1. Changed Title of Page from MyReads to Libros
 
##### Errors Handled 

1. Wrapped getAll in async function 
   To allow books to be updated directly without refreshing the page

2. Updated getall with await in terms of BOOKsAPI.update()  since its an async function to await response from API.

3. Added dynamic active state - to 'Read', 'Currently Read' , 'None' 
When user clicks on the button 
from Libros Button the data will be recorded on LibrosBookShelf and LibrosMainPage .


## References Used.

1. (Googlefonts,2021) https://fonts.google.com/

2. (StackOverFlow, 2017) Pass props in Link react-router - © 2021 Stack Exchange Inc; user contributions licensed under cc by-sa. rev 2021.8.13.39972 - From : https://stackoverflow.com/questions/30115324/pass-props-in-link-react-router

3. (Facebook, 2021) - Forms - Copyright © 2021 Facebook Inc. From : https://reactjs.org/docs/forms.html

4. (SMACCS, 2021) Scalable and Modular Architecture  - Categorizing CSS Rules - © Snook.ca Web Development, Inc. All rights reserved. - From : http://smacss.com/book/categorizing

5. (MDN,2021) Mozilla Developers - Graceful asynchronous programming with Promises From : https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises 
   
6.  (MDN.2021) Mozilla Developers - Array.prototype.map() - From : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

7. (W3Schools, 2021) - How TO - Button Group From : https://www.w3schools.com/howto/howto_css_button_group.asp  

8. (Facebook, 2021) React.Component Life Cycle - From : https://reactjs.org/docs/react-component.html
   
9. (Facebook, 2021) -  Typechecking With PropTypes- Copyright © 2021 Facebook Inc. - From: https://reactjs.org/docs/typechecking-with-proptypes.html 
    
10. (BitsofCode , 2017) -Asynchronous Functions 101 - bitsofcode - From : https://bitsofco.de/asynchronous-functions-101/
