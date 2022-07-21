import React from 'react';
import TableItem from './TableItem';

export default function ExpensesTable() {
  return (
    <div className="min-w-full overflow-hidden align-middle relative shadow-md rounded-lg">
      <table className="min-w-full border-separate">
        <thead>
          <tr className="text-sm bg-slate-300">
            <th className="px-4 py-2 w-2">No.</th>
            <th className="px-4 py-2 w-max">Name</th>
            <th className="px-4 py-2 w-1/6">Category</th>
            <th className="px-4 py-2 w-1/6">Price</th>
            <th className="px-4 py-2 w-1/6">Date</th>
            <th className="px-4 py-2 w-3.5"></th>
          </tr>
        </thead>
        <tbody>
          <TableItem />
          <TableItem />
          <TableItem />
        </tbody>
      </table>
    </div>
  );
}
