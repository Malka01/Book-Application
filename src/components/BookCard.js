import React from 'react';

const BookCard = ({ book }) => {
    const { title, authors, description, image } = book;

    return (
        <div className="book-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p><strong>Authors:</strong> {authors?.join(', ') || 'Unknown'}</p>
            <p>{description || 'No description available'}</p>
        </div>
    );
};

export default BookCard;
