export const conditional = (condition, fnTrue) => {
  return condition ? fnTrue : null;
};

export const deepPick = (fields, object = {}) => {
  const [first, ...remaining] = fields.split(".");
  return remaining.length
    ? deepPick(remaining.join("."), object[first])
    : object[first];
};
