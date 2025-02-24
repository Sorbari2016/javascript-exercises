function getTheTitles(books) {
    return books.map(function(book) {
      return book.title;
    });
  }
  
  // Example usage:
  const books = [
    { title: 'Book', author: 'Name' },
    { title: 'Book2', author: 'Name2' }
  ];

// Do not edit below this line
module.exports = getTheTitles;
