const db = require("../models");
const Movie = db.movies;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const movie = new Movie({
    title: req.body.title,
    duration: req.body.duration,
  });

  movie
    .save(movie)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Movie."
      });
    });
};

exports.readAll = (req, res) => {
  const id = req.query.id;

  Movie
    .find(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Movies."
      });
    });
};

exports.read = (req, res) => {
  const id = req.params.id;

  Movie
    .findById(id)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: "Not found Movie with id " + id });
      }
      else {
        res.send(data);
      }
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Movie with id=" + id });
    });
};
