const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res) {
  res.json({ data: await service.list(req.query) });
}

module.exports = {
  list: asyncErrorBoundary(list),
};
