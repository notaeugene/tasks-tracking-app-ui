const Ajv = require('ajv').default;

const validateJson = (json, schema) => {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const isValid = validate(json);
  return { isValid, errors: validate.errors };
};

module.exports = validateJson;
