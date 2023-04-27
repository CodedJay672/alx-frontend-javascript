import RowID from './interface.ts';
import RowElement from './interface.ts';

type insertRow(row: RowElement) = number;
type deleteRow(rowId: RowID) = void;
type updateRow(rowId: RowID, row: RowElement) = number;
