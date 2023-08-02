export const extractDatesFromString = (str) => {
  const dateFormats = [
    /\b\d{1,2}\/\d{1,2}\/\d{4}\b/g, // dd/mm/yyyy
    /\b\d{4}-\d{2}-\d{2}\b/g, // yyyy-mm-dd
    /\b\d{2}-\d{2}-\d{4}\b/g, // dd-mm-yyyy
    /\b\d{1,2}\/\d{1,2}\/\d{2}\b/g, // dd/mm/yy
    /\b\d{2}\/\d{2}\/\d{2}\b/g, // mm/dd/yy
    /\b\d{1,2}\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{4}\b/gi, // dd Mmm yyyy (e.g., 1 Jan 2021)
    /\b(January|February|March|April|May|June|July|August|September|October|November|December)\s\d{1,2},\s\d{4}\b/gi, // Full month name (e.g., January 1, 2021)
  ];

  let allDates = [];

  dateFormats.forEach((datePattern) => {
    const matches = str.match(datePattern) || [];
    allDates = allDates.concat(matches);
  });

  return allDates.join(', ');
};
