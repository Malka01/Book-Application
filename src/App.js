import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import axios from 'axios';
import './styles.css';

const App = () => {
    const [books, setBooks] = useState([]);

    const fetchBooks = async (query) => {
        try {
            const response = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${query}`
            );
            const fetchedBooks = response.data.items.map((item) => ({
                id: item.id,
                title: item.volumeInfo.title,
                authors: item.volumeInfo.authors,
                description: item.volumeInfo.description,
                image: item.volumeInfo.imageLinks?.thumbnail,
            }));
            setBooks(fetchedBooks);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    return (
        <div className="app">
            <h1>See Your Favourite Books</h1>
            <SearchBar onSearch={fetchBooks} />
            <BookList books={books} />
        </div>
    );
};

export default App;
