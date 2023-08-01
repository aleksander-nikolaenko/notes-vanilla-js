export const getSummaryData = (activeNotes, archivedNotes) => {
  const activeNotesCategory = activeNotes.reduce((acc, obj) => {
    const key = obj.category;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const archivedNotesCategory = archivedNotes.reduce((acc, obj) => {
    const key = obj.category;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const uniqueCategoryArr = new Set([
    ...Object.keys(activeNotesCategory),
    ...Object.keys(archivedNotesCategory),
  ]);

  const uniqueObjectsWithCount = Array.from(uniqueCategoryArr, (category) => ({
    category,
    active: activeNotesCategory[category] || 0,
    archive: archivedNotesCategory[category] || 0,
  }));
  return uniqueObjectsWithCount;
};
