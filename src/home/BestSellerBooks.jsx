import { useEffect, useState } from "react";
import BookCard from "../component/BookCard";

const BestSellerBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('https://backend-book-5gk7.onrender.com/all-books')
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            console.log("Fetched books:", data);  // Debug API response
            setBooks(data.slice(0,8));  
          })
          .catch(error => console.error("Error fetching books:", error));
    }, []);
    
      
  

    return (
        <div>
            <BookCard  books={books} headline="Best seller Book"/>
        </div>
    );
};

export default BestSellerBooks;
