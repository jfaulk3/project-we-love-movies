const knex = require("../db/connection");

function list({ is_showing = false }) {
  if (is_showing) {
    console.log(is_showing);
    return knex("movies as m")
      .join("movies_theaters as mt", "m.movie_id", "=", "mt.movie_id")
      .where({ is_showing: true })
      .select("*")
      .groupBy("m.movie_id");
  }
  return knex("movies").select("*");
}

module.exports = {
  list,
};
