class Book {
    book_name;
    author;
    constructor(book_name, author) {
        this.book_name = book_name;
        this.author = author;
    }
    getBookInfo() {
        return `Book: ${this.book_name} by ${this.author}`;
    }
}

const book = new Book("Harry Potter", "Joanne Rowling");
console.log(book.getBookInfo());