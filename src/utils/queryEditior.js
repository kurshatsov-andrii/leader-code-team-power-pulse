export const queryCoder = (queryToEdit) => {
  return queryToEdit.toLowerCase().split(' ').join('-');
};

export const queryDecoder = (queryToEdit) => {
  return queryToEdit.replace("-", " ")
};
