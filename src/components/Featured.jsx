import React from "react";
import BestBooks from "./ui/BestBooks";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    img: "https://m.media-amazon.com/images/I/81wgcld4wxL.jpg",
    rating: 4,
    price: "$39.00",
  },
  {
    id: 2,
    title: "Can't Hurt Me",
    author: "David Goggins",
    img: "https://m.media-amazon.com/images/I/81nTVMBr2BL.jpg",
    rating: 5,
    price: "$29.00",
  },
  {
    id: 3,
    title: "The 10X Rule",
    author: "Grant Cardone",
    img: "https://m.media-amazon.com/images/I/71XrAVFkJ6L.jpg",
    rating: 5,
    price: "$32.00",
  },
  {
    id: 4,
    title: "Sell Or Be Sold",
    author: "Grant Cardone",
    img: "https://m.media-amazon.com/images/I/71jU-+3ZGQL.jpg",
    rating: 4,
    price: "$12.50",
    originalPrice: "$70.00",
  },
];

const Featured = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Books</span>
          </h2>
          <div className="books">
            {books.map((book) => (
              <div key={book.id} className="book">
                <a href={`/books/${book.id}`}>
                  <figure className="book__img--wrapper">
                    <img
                      src={book.img}
                      alt={book.title}
                      className="book__img"
                    />
                  </figure>
                </a>
                <div className="book__title">{book.title}</div>
                <div className="book__author">{book.author}</div>
                <div className="book__ratings">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={i < book.rating ? "star star--filled" : "star"}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <div className="book__price">
                  {book.originalPrice && (
                    <span className="book__price--original">
                      {book.originalPrice}
                    </span>
                  )}
                  <span className="book__price--current">{book.price}</span>
                </div>
              </div>
            ))}
          </div>
          <BestBooks />
        </div>
      </div>
    </section>
  );
};

export default Featured;