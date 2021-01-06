// probably would use lib like moment of datejs normaly
// but for sake of simplicity and time saving parse manually

export const parseShortDate = (date: string) => { 
  const chunks = date.split("/");
  return new Date(Number(chunks[2]), Number(chunks[0]) - 1, Number(chunks[1]));
};

export const formatToShortDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${month}/${day}/${year}`;
};