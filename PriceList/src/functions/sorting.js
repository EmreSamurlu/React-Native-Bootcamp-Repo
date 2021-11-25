const sortAscending = (data, setData) => {
  data.sort((a, b) => a.price - b.price);
  setData([...data]);
};
const sortDescending = (data, setData) => {
  data.sort((a, b) => b.price - a.price);
  setData([...data]);
};
const regular = (data, setData) => {
  data.sort((a, b) => b.id - a.id);
  setData([...data]);
};

export {sortAscending, sortDescending, regular};
