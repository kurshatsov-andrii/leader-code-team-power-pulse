export const queryEditior = (queryToEdit) => {
  return queryToEdit.toLowerCase().split(' ').join('-');
};
