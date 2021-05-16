const knex = require("../db/connection");

function list({ movieId }) {
  if (!movieId) {
    return knex("theaters as t")
      .select("*")
      .join("movies_theaters as mt", "mt.theater_id", "t.theater_id")
      .join("movies as m", "m.movie_id", "mt.movie_id");
  }

  return knex("theaters as t")
    .select("*")
    .join("movies_theaters as mt", "mt.theater_id", "t.theater_id")
    .join("movies as m", "m.movie_id", "mt.movie_id")
    .where({ "m.movie_id": movieId });
}

module.exports = {
  list,
};
