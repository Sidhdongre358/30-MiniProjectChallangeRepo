const form = document.querySelector("form");
const bookContainer = document.querySelector(".display-book");
const bookTitle = document.querySelector(".title");
const bookAuthor = document.querySelector(".author");
const bookDescription = document.querySelector(".description");
const deletebtn = document.getElementById("delete");

// url http://localhost:5000/books

const baseUrl = "http://localhost:5000";

// end points get books

// lets delete the data from the database by using the id

const removeItem = async (id) => {
  console.log(id);
  try {
    const deleteUrl = `http://localhost:5000/books/delete/${id}`;
    const response = await fetch(deleteUrl, {
      method: "DELETE",
    });
    getBooks();
  } catch (error) {
    console.log(error);
  }
};

const getBooks = async () => {
  try {
    const getBookUrl = "http://localhost:5000/books";
    const response = await fetch(getBookUrl);
    const body = await response.json();
    const data = body.data;

    console.log(data[0]);
    const allBooks = data.map((book) => {
      return `
      <div class="book-wrapper"><div class="book">
        <img src="./images/book.jpeg" alt="" class="img" />
        <div class="book-info">
          <h2 class="title">${book.title}</h2>
          <p class="book-description">
          ${book.description}
          </p>
        </div>
        <div class="author-info">
          <p class="author">Author: <span class="name">${book.author}</span></p>
        </div>
        <button id="delete" onclick="removeItem(${book.id})">
          <i class="fa fa-trash"></i>
        </button>
      </div>
      </div>`;
    });
    const output = allBooks.join("");

    bookContainer.innerHTML = output;
  } catch (error) {
    console.log(error);
    console.log("bad");
  }
};

getBooks();
console.log("Client is Running.");
// save data into the DB
const saveData = async () => {
  console.log("saved..");
  try {
    const postUrl = "http://localhost:5000/book/create";

    const book = {
      id: Date.now().toString(),
      title: bookTitle.value,
      author: bookAuthor.value,
      description: bookDescription.value,
    };
    const response = await fetch(postUrl, {
      method: `POST`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });
    console.log(book);

    console.log(response);

    // input null

    bookTitle.value = null;
    bookAuthor.value = null;
    bookDescription.value = null;
    getBooks();
  } catch (error) {
    console.log(error);
  }
};

// fetch data from the sever

// add event listener
form.addEventListener("submit", saveData);
