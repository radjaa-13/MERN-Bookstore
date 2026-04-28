import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FeaturedProducts() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books/getBooks")
      .then((res) => res.json())
      .then((data) => setBookList(data))
      .catch((err) => console.error("Error fetching books:", err));
  }, []

);

  const featuredBooks = bookList?.filter(
    (book) => book.isfeautred === true
  );

  return (
      <div >

      <h3>Featured Products</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {featuredBooks?.slice(0, 4).map((book) => (
          <div
            key={book._id}
            className="flex flex-col items-center border border-gray p-4 rounded-lg"
          >
            <Link to={`/bookDetails/${book?._id}`}>
              <img
                className="w-full  object-contain"
                src={`http://localhost:5000/images/${book.coverImage}`}
                /*alt={book.title}*/
              />

              <h6 className="text-center my-3">{book.title}</h6>
            </Link>

            <span className="text-gray-400">{book?.author}</span>
            <strong className="text-[#F86D72]">{book?.price} $</strong>

            <div className="text-sm text-gray-500">
              Stock: {book.stock}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;