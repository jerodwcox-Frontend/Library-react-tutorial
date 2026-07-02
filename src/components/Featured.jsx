import React from "react";
import Book from "./Book";
import { books } from "../data";

const featuredBooks = books.filter((book) => !book.salePrice).slice(0, 4);

const Featured = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Books</span>
          </h2>
          <div className="books">
            {featuredBooks.map((book) => (
              <Book book={book} key={book.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
