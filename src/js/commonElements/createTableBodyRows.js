export const createTableBodyRows = (data, fnCreateRow) => {
  return data.map((item) => {
    return fnCreateRow(item);
  });
};
