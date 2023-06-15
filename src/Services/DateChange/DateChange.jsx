export const convertDate = (dateString) => {
  const date = new Date(dateString);

  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = date.toLocaleString("en-US", options);

  // console.log(formattedDate);

  return formattedDate;
};
