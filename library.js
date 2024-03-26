const myLibrary = [];

let showFormBtn = document.querySelector(".addBook");
let formContainer = document.querySelector(".form");







showFormBtn.addEventListener("click",function(){
formContainer.classList.toggle("active")
})

// Constructor function for Book
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// Function to add a new book to the library
function addBookToLibrary() {
  // Get input values
  const title = document.getElementById("book").value;
  const author = document.getElementById("author").value;
  const pages = parseInt(document.getElementById("pages").value);

  // Create a new Book object
  const newBook = new Book(title, author, pages);

  // Add the new book to the library
  myLibrary.push(newBook);

  // Create a new book element in the HTML
  createBookElement(newBook);

  // Reset form fields
  document.getElementById("book").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
}

// Function to create a book element in the HTML
function createBookElement(book) {
  const bookContainer = document.querySelector(".book-container");

  // Create div element for the new book
  const newBookDiv = document.createElement("div");
  newBookDiv.classList.add("book-content");

  // Populate the div with book information
  newBookDiv.innerHTML = `
    <h2 class="author-title">${book.author}</h2>
    <h2>${book.title}</h2>
    <h2>${book.pages} pages</h2>
    <button class="read">Read</button>
    <button class="delete">Delete</button>
  `;
  let isRead = newBookDiv.querySelector(".read");
  let deleteBook = newBookDiv.querySelector(".delete");

  deleteBook.addEventListener("click", function(){
    newBookDiv.remove();
  })

  isRead.addEventListener("click", function(){
    if(isRead.innerHTML === "Read"){
      isRead.style.color = "red";
      isRead.innerHTML = "Not Read"
    }else{
      isRead.style.color = "green";
      isRead.innerHTML = "Read";
    }
    
  })
  // Append the new book element to the book container
  bookContainer.appendChild(newBookDiv);
}

// Event listener for the "Add Book" button
document.querySelector(".send").addEventListener("click", addBookToLibrary);


