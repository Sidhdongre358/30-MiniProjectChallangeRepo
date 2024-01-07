import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 5000;

//dummy DB
let books = [
  {
    id: "1",
    title: "Book of magic",
    author: "john",
    description:
      "By reading this book you will be able to understand how you can control your emotions",
  },
  {
    id: "2",
    title: "motivation for daily life",
    author: "xevior",
    description:
      "This book will help you be successfull in your life by following few smalls tips and tricks ",
  },
];

// Route for Home

app.get("/", (req, res) => {
  console.log("Home.");
  res.json({ status: "Success!", message: "Welcome to the Home page." });
});

// Route for getting books
app.get("/books", (req, res) => {
  res.json({ status: "success", message: "get books", data: books });
});

// Route to  get single Book

app.get("/book/:id", (req, res) => {
  const id = req.params.id;
  const bookFound = books.find((book) => {
    return book.id === id;
  });
  console.log(bookFound);
  res.json(bookFound);
});

// route to create data

app.post("/book/create", (req, res) => {
  const data = req.body;
  console.log(data);
  res.send("sent...");

  books.unshift(data);
});

//let's delete the books

app.delete("/books/delete/:id", (req, res) => {
  console.log("Delete method");

  console.log();
  try {
    const id = req.params.id;
    const bookFound = books.find((book) => {
      return book.id === id;
    });
    if (bookFound) {
      books = books.filter((book) => {
        return book.id !== id;
      });
      res.send("deleted!");
    } else {
      res.send("failed to delete.");
    }
  } catch (error) {
    console.log(error);
  }
});

//listens at 5000
app.listen(port, () => {
  try {
    console.log(`server is Running...at ${port}`);
  } catch (error) {
    console.log(error);
  }
});
