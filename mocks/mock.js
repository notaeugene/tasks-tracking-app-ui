const faker = require('faker');

module.exports = (db) => {
  const isFulfilled = !!db.find({}).value();

  if (!isFulfilled) {
    const projects = [];

    for (let i = 0; i < 8; i++) {
      projects.push({
        id: faker.random.number(),
        name: faker.lorem.words(3),
      });
    }

    db.defaults({ projects }).write();
  }

  return {
    mockPost: (entity) => (req, res) =>
      res.json(
        db
          .get(entity)
          .push({ id: faker.random.number(), ...req.body })
          .write()
      ),

    mockGetSingle: (entity) => (req, res) =>
      res.json(db.get(entity).find({ id: req.params.id }).value()),

    mockGetAll: (entity) => (req, res) => res.json(db.get(entity).value()),

    mockPut: (entity) => (req, res) =>
      res.json(db.get(entity).set(req.body).write()),

    mockDelete: (entity) => (req, res) =>
      res.json(db.get(entity).remove({ id: req.params.id }).write()),
  };
};
