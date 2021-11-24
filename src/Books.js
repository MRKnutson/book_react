import { useState, useEffect } from "react"
import axios from 'axios'
import NewBook from "./NewBook";

const Books = (props) => {
  const [books, setBooks] = useState([]);

  useEffect(()=>{
    // do stuff when component mounts
    console.log("mounted");
    getBooks();
  }, []);

  const getBooks= async () => {
    let response= await axios.get('https://fakerapi.it/api/v1/books?_quantity=5');
    console.log(response.data.data);
    setBooks(response.data.data);
  };

  const renderBooks = () => {
    if(books.length === 0) {
      return <p>No Books Available</p>
    }
    return books.map((book)=>{
      return (
        <div key = {book.isbn} className = "book-box">
          <h3>{book.title}</h3>
          <h4>{book.author}</h4>
          <p>Book Genre: {book.genre}</p>
          <p>{book.description}</p>
          <p>ISBN: {book.isbn}</p>
          <button onClick= {() => deleteBook(book.isbn)}>Delete Book</button>
        </div>
      );
    });
  };


  const newBook = (book)=>{
    // STEP 1 add user (from Form) to DB: skip for now
    // STEP 2 is update the UI
    let newBooksArray = [book,...books];
    setBooks(newBooksArray);
  };

  const deleteBook = (isbn)=>{
    let filteredBooks = books.filter(book=>book.isbn !== isbn)
    setBooks(filteredBooks)
  };


  return (
    <div className="contain-all">
      <h1>Books below:</h1>
      <NewBook new ={newBook}/>
      {renderBooks()}
    </div>
  );




};

export default Books;