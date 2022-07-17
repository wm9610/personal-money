import React from 'react';
import MenuItem from './MenuItem';

export default function Sidebar() {
  return (
    <>
      <div className="bg-violet-700 w-64">
        <div className="text-white text-xl font-bold text-center py-3 mb-5 bg-violet-800">
          PERSONAL MONEY
        </div>
        <div className="flex flex-col">
          <MenuItem title="Home" icon="home" />
          <MenuItem title="Expenses" icon="cash" />
        </div>
      </div>
    </>
  );
}
