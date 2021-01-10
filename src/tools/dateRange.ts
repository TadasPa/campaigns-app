import { parseShortDate } from "./dateFormatter";

export const isDateInRange = (
  date: string | Date,
  from: string,
  to: string
) => {
  const parsedDate = typeof date === "string" ? parseShortDate(date) : date;
  const parsedFrom = from ? parseShortDate(from) : "";
  const parsedTo = to ? parseShortDate(to) : "";

  if (parsedFrom && parsedDate < parsedFrom) {
    return false;
  }
  if (parsedTo && parsedDate > parsedTo) {
    return false;
  }

  return true;
};
