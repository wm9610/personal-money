import React from 'react';
import MenuItem from './MenuItem';

export default function Sidebar() {
  return (
    <>
      <div className="bg-teal-700 w-52 xl:w-64">
        <div className="text-stone-50 text-xl font-bold text-center py-7 mb-5 bg-teal-900">
          PERSONAL MONEY
        </div>
        <div className="flex flex-col">
          <MenuItem title="Home" icon="home" route="/" />
          <MenuItem title="Expenses" icon="cash" route="./expenses" />
        </div>
      </div>
    </>
  );
}
