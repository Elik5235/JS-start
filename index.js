function Book(title, author, year, price) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.price = price;

  this.getTitle = function () {
    return this.title;
  }
  this.getAuthor = function () {
    return this.author;
  }
  this.getYear = function () {
    return this.year;
  }
  this.getPrice = function () {
    return this.price;
  }
  this.setTitle = function (newTitle) {
    this.title = newTitle;
  }
  this.setAuthor = function (newAuthor) {
    this.author = newAuthor;
  }
  this.setYear = function (newYear) {
    this.year = newYear;
  }
  this.setPrice = function (newPrice) {
    this.price = newPrice;
  }
}
const book1 = new Book('ветер', 'роб', 2020, 50);
