import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books, onCardClick }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onCardClick={() => onCardClick(book)}
        />
      ))}
    </div>
  );
};

export default BookList;
