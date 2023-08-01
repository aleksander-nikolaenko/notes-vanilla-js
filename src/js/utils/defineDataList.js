import { activeData, archivedData } from './tableData';

export const defineDataList = () => {
  const data = {
    'Active notes': activeData,
    'Archived notes': archivedData,
  };

  const dataKey = document.querySelector('.tableCaption').textContent;

  return data[dataKey];
};
