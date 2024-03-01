const formatDate = (dates) => {
  const date = new Date(dates);
  return date.toLocaleString("es-Ve", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
};

export default formatDate;
