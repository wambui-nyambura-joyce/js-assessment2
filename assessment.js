const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
    ];


// Write a JavaScript program that performs the following tasks:
// Create a function called getAvailableBooks that returns an array of all available
// books.
  
  function getAvailableBooks() {
    return books.filter(book => book.isAvailable === true);
  }
  
  console.log(getAvailableBooks());
  
//   Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.
  function getBooksByAuthor(authorName) {
    return books.filter(book => book.author === authorName);
  }
  
  console.log(getBooksByAuthor('Charles Dickens'));
  

//   Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).
  function addNewBook(book) {
    const requiredProps = ['title', 'author', 'publicationYear', 'isAvailable'];
  
   
    for (let prop of requiredProps) {
      if (!book.hasOwnProperty(prop)) {
        console.error(`Error: ${prop} is a required property.`);
        return;
      }
    }
  
    books.push(book);
    console.log(`The book "${book.title}" by ${book.author} has been added to the library.`);
  }
  
  const newBook = { title: 'Javascript', author: 'Nyambura', publicationYear: 2000, isAvailable: true };
  addNewBook(newBook);
  console.log(books);
  

//   Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.
  function checkoutBook(title) {
    for (let book of books) {
      if (book.title === title) {
        if (book.isAvailable) {
          book.isAvailable = false;
          console.log(`The book "${book.title}" is available.`);
        } else {
          console.log(`The book "${book.title}" is not available.`);
        }
        return;
      }
    }
    console.log(`The book "${title}" is not available.`);
  }
  
  checkoutBook('The Catcher in the Rye');
  checkoutBook('Nyambura');
  checkoutBook('The Odyssey')
//   console.log(books);


// Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.

function returnBook(bookTitle) {
    for (let book of books) {
        if (book.bookTitle === bookTitle) {
            if (bookTitle.isAvailable) {
                bookTitle.isAvailable = true;
                console.log(`The book "${book.bookTitle}" is avilable.`);
            }
        }
    }
}