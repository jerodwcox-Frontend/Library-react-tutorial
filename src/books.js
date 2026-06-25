async function getBooks() {
  const response = await fetch("https://someapi.com/books");
  const data = await response.json();
  return data;
}
import crackCoding from "./assets/crack the coding interview.png";
import atomicHabits from "./assets/atomic habits.jpg";
import deepWork from "./assets/deep work.jpeg";
import book1 from "./assets/book-1.jpeg";
import book2 from "./assets/book-2.jpeg";
import book3 from "./assets/book-3.jpeg";
import book4 from "./assets/book-4.jpeg";
import book5 from "./assets/book-5.jpeg";
import book6 from "./assets/book-6.jpeg";
import book7 from "./assets/book-7.jpg";
import book8 from "./assets/book-8.jpeg";

export function getBooks() {
  return [
    { id: 1, title: "Crack the Coding Interview", url: crackCoding, originalPrice: 49.95, salePrice: 14.95, rating: 4.5 },
    { id: 2, title: "Atomic Habits", url: atomicHabits, originalPrice: 39, salePrice: null, rating: 5 },
    { id: 3, title: "Deep Work", url: deepWork, originalPrice: 29, salePrice: 12, rating: 5 },
    { id: 4, title: "The 10X Rule", url: book1, originalPrice: 44, salePrice: 19, rating: 4.5 },
    { id: 5, title: "Be Obsessed Or Be Average", url: book2, originalPrice: 32, salePrice: 17, rating: 4 },
    { id: 6, title: "Rich Dad Poor Dad", url: book3, originalPrice: 70, salePrice: 12.5, rating: 5 },
    { id: 7, title: "Cashflow Quadrant", url: book4, originalPrice: 11, salePrice: 10, rating: 4 },
    { id: 8, title: "48 Laws of Power", url: book5, originalPrice: 38, salePrice: 17.95, rating: 4.5 },
    { id: 9, title: "The 5 Second Rule", url: book6, originalPrice: 35, salePrice: null, rating: 4 },
    { id: 10, title: "Your Next Five Moves", url: book7, originalPrice: 40, salePrice: null, rating: 4 },
    { id: 11, title: "Mastery", url: book8, originalPrice: 30, salePrice: null, rating: 4.5 },
  ];
}