const validateJson = require('./validator');

const getMockData = (props) => {
  return (req, res) => {
    if (!props) {
      res.sendStatus(200);
      return;
    }

    const { json, schema, createOrUpdate } = props;
    const valid = validateJson(json, schema);

    if (valid.isValid) {
      if (createOrUpdate) {
        res.json({ id: req.params.id || json.id, ...req.body });
      } else {
        res.json(json);
      }
    } else {
      res.status(500).json({
        errors: valid.errors,
      });
    }
  };
};

module.exports = getMockData;
