const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res) {
  res.json({ data: await service.list(req.query) });
}

async function doesMovieExist(req, res, next) {
  foundMovie = await service.read(req.params);
  if (!foundMovie) {
    next({ status: 404, message: `Movie id not found: ${req.params.movieId}` });
  }
  res.locals.movie = foundMovie;
  next();
}

async function read(req, res) {
  res.json({ data: res.locals.movie });
}

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(doesMovieExist), asyncErrorBoundary(read)],
  doesMovieExist: asyncErrorBoundary(doesMovieExist),
};
