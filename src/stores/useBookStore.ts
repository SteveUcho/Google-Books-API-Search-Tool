import { defineStore } from 'pinia';
import axios from 'axios';
import { Book } from '@/types/BookType';

const useBookStore = defineStore('bookStore', {
  state: () => ({
    searchTerm: '',
    booksSearchList: [] as Record<string, unknown>[],
    savedBooksData: {} as Record<string, Book>,
    savedBooksOrder: [] as string[],
  }),
  getters: {
  },
  actions: {
    callGoogleBooksAPI() {
      const temp = this.searchTerm.split(' ').join('+');
      axios({
        method: 'get',
        url: `https://www.googleapis.com/books/v1/volumes?q=${temp}`,
      })
        .then((res) => {
          this.booksSearchList = res.data.items;
        });
    },
    savedBooks(): Book[] {
      const bookObjectList: Book[] = [];
      this.savedBooksOrder.forEach((bookID) => {
        bookObjectList.push(this.savedBooksData[bookID]);
      });
      return bookObjectList;
    },
    saveBook(bookID:string, book: Book) {
      if (typeof this.savedBooksData[bookID] !== 'undefined') {
        return;
      }
      this.savedBooksData[bookID] = book;
      this.savedBooksOrder.push(bookID);
    },
    unsaveBook(index: number) {
      const [bookID] = this.savedBooksOrder.splice(index, 1);
      delete this.savedBooksData[bookID];
    },
    savedBooksAuthorSorted() {
      this.savedBooksOrder.sort((book1, book2) => {
        if (typeof this.savedBooksData[book1].authors !== 'undefined' && typeof this.savedBooksData[book2].authors !== 'undefined') {
          const book1Author = this.savedBooksData[book1].authors[0];
          const book2Author = this.savedBooksData[book2].authors[0];
          return book1Author.localeCompare(book2Author);
        }
        if (typeof this.savedBooksData[book1].authors === 'undefined') {
          return 1;
        }
        return -1;
      });
    },
    savedBooksRatingSorted() {
      this.savedBooksOrder.sort((book1, book2) => {
        if (typeof this.savedBooksData[book1].averageRating !== 'undefined' && typeof this.savedBooksData[book2].averageRating !== 'undefined') {
          const book1Rating = this.savedBooksData[book1].averageRating;
          const book2Rating = this.savedBooksData[book2].averageRating;
          return book1Rating - book2Rating;
        }
        if (typeof this.savedBooksData[book1].averageRating === 'undefined') {
          return 1;
        }
        return -1;
      });
    },
    savedBooksTitleSorted() {
      this.savedBooksOrder.sort((book1, book2) => {
        if (typeof this.savedBooksData[book1].title !== 'undefined' && typeof this.savedBooksData[book2].title !== 'undefined') {
          return this.savedBooksData[book1].title.localeCompare(this.savedBooksData[book2].title);
        }
        if (typeof this.savedBooksData[book1].title === 'undefined') {
          return 1;
        }
        return -1;
      });
    },
  },
});

export default useBookStore;
