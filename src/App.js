import React, { useState } from "react";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";
import "./styles.css";

function App() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSearch = (query) => {
    const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.items || []);
      })
      .catch((error) => console.error("Error fetching books:", error));
  };

  const handleCardClick = (book) => {
    setSelectedBook(book);
  };

  const closePopup = () => {
    setSelectedBook(null);
  };

  return (
    <div className="app">
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to Book App</h1>
          <p>Discover books, explore details, and find your next great read.</p>
          <SearchBar onSearch={handleSearch} />
        </div>
      </header>

      <main className="content">
        {books.length > 0 ? (
          <BookList books={books} onCardClick={handleCardClick} />
        ) : (
          <div className="no-books">
            <h2>Start your search to explore amazing books!</h2>
          </div>
        )}
      </main>

      {selectedBook && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-btn" onClick={closePopup}>
              &times;
            </button>
            <img
              src={selectedBook.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150"}
              alt={selectedBook.volumeInfo.title}
            />
            <div className="popup-details">
              <h2>{selectedBook.volumeInfo.title}</h2>
              <p><strong>Authors:</strong> {selectedBook.volumeInfo.authors?.join(", ") || "Unknown"}</p>
              <p>{selectedBook.volumeInfo.description || "No description available."}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
