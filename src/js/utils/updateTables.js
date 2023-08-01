import { updateMainTableBody } from '../mainTable/updateMainTableBody';
import { updateSummaryTableBody } from '../summaryTable/updateSummaryTableBody';
import { defineDataList } from './defineDataList';
import { getSummaryData } from './getSummaryData';
import { activeData, archivedData } from './tableData';

export const updateTables = () => {
  updateMainTableBody(defineDataList());
  updateSummaryTableBody(getSummaryData(activeData, archivedData));
};
