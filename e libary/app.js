//declare the variables
let newBook = document.querySelector("#inputBook");
let frm = document.querySelector("#frm");
let list = document.querySelector("ul");

frm.addEventListener("submit", addBook);

function addBook(e) {
  e.preventDefault();
  //create new book
  let newB = document.createElement("li");
  newB.className =
    "list-group-item d-flex justify-content-between align-items-center my-2";

  let newSpan = document.createElement("span");
  newSpan.className = "book-name";
  newSpan.textContent = newBook.value;
  newB.appendChild(newSpan);
  let span2 = document.createElement("span");
  span2.className = "del-btn btn btn-danger";
  span2.textContent = "DELETE";
  newB.appendChild(span2);
  list.appendChild(newB);
  storeBook(newBook.value);
  newBook.value = "";
}

//delete book

list.addEventListener("click", deleteBook);

function deleteBook(e) {
  if (e.target.parentElement.classList.contains("list-group-item")) {
    list.removeChild(e.target.parentElement);
    deleteLs(e.target.parentElement);
  }
}

//store in local storage

function storeBook(bookN) {
  let books;
  if (localStorage.getItem("books") === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem("books"));
  }

  books.push(bookN);

  localStorage.setItem("books", JSON.stringify(books));
}

//delete from ls

function deleteLs(bookItem) {
  let books;
  console.log(bookItem.firstChild.textContent);
  if (localStorage.getItem("books") === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem("books"));
  }
  books.forEach(function (book, index) {
    if (bookItem.firstChild.textContent === book) {
      books.splice(index, 1);
    }
  });
  localStorage.setItem("books", JSON.stringify(books));
}
