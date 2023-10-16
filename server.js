const express = require("express");
const path = require("path");
const fs = require("fs");
const uuid = require("./helpers/uuid");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

app.post("/notes", (req, res) => {
  const { noteTitle, noteText } = req.body;

  if (noteTitle && noteText) {
    const newNote = {
      id: uuid(),
      title,
      note,
    };

    readAndAppend(newNote, "./db/db.json");

    const response = {
      status: "success",
      body: newFeedback,
    };

    res.json(response);
  } else {
    res.json("Error in posting feedback");
  }
});

app.delete("/api/notes/${id}", (req, res) => {});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
