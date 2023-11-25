import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books = [
    {
      bookId: 101,
      bookName: "Ramayan",
      bookAuther: "Balmiki",
      bookGener: "Relegious",
      bookImageUrl: "https://5.imimg.com/data5/QH/YI/YB/SELLER-54244914/ramayan-book-500x500.png"
    },
    {
      bookId: 102,
      bookName: "Mahabharat",
      bookAuther: "Ved viyas",
      bookGener: "Relegious",
      bookImageUrl: "https://www.prachiindia.com/ModuleFiles/Items/b340-2022.png"
    },
    {
      bookId: 103,
      bookName: "Ramcharatmanas",
      bookAuther: "Tulsi Das",
      bookGener: "Relegious",
      bookImageUrl: "https://m.media-amazon.com/images/I/91GEzvnkfbL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      bookId: 104,
      bookName: "Rig Veda",
      bookAuther: "Ved Vyasa",
      bookGener: "Relegious",
      bookImageUrl: "https://m.media-amazon.com/images/I/61hSRNhCJ9L._AC_UF1000,1000_QL80_.jpg"
    },
    {
      bookId: 105,
      bookName: "Atarva Veda",
      bookAuther: "Angirasa",
      bookGener: "Relegious",
      bookImageUrl: "https://rukminim2.flixcart.com/image/850/1000/k3khevk0/book/6/3/9/atharva-veda-hindi-in-4-volumes-original-imafmnwpterygqmb.jpeg?q=20"
    }
  ]

  deleteBook(bookId: number) {
    for (let i = 0; i < this.books.length; i++) {
      if (bookId == this.books[i].bookId) {
        this.books.splice(i, 1);
        break;
      }
    }
  }

  getAllBooks(){
    return this.books;
  }

  constructor() { }
}
