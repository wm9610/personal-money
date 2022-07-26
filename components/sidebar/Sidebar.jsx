import React from 'react';
import MenuItem from './MenuItem';

export default function Sidebar() {
  return (
    <>
      <div className="bg-teal-700 w-52 xl:w-64">
        <div
          style={{fontFamily: 'Mochiy Pop One, sans-serif'}}
          className="text-stone-50 text-3xl font-bold text-center py-10 mb-5 bg-teal-900"
        >
          Ka-ching!
        </div>
        <div className="flex flex-col">
          <MenuItem title="Home" icon="home" route="/" />
          <MenuItem title="Expenses" icon="cash" route="./expenses" />
        </div>
      </div>
    </>
  );
}
