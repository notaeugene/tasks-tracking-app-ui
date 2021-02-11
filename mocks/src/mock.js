const validateJson = require('./validator');

const getMockData = (json, schema) => {
  return (req, res) => {
    const valid = validateJson(json, schema);

    if (valid.isValid) {
      res.json(json);
    } else {
      res.status(500).json({
        errors: valid.errors,
      });
    }
  };
};

module.exports = getMockData;
