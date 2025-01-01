import React from "react";

const BookCard = ({ book, onCardClick }) => {
  const { volumeInfo } = book;
  const { title, imageLinks, authors } = volumeInfo;

  return (
    <div className="book-card" onClick={onCardClick}>
      <img src={imageLinks?.thumbnail || "https://via.placeholder.com/150"} alt={title} />
      <h3>{title}</h3>
      <p>{authors ? authors.join(", ") : "Unknown Author"}</p>
    </div>
  );
};

export default BookCard;