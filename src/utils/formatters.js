export const formatNumberWithSpaces = (num) => {
  try {
    return num.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1 ");
  } catch (e) {
    console.error(e);
    return num;
  }
};
