import React from 'react';
import Searchbar from './Searchbar';

export default function Header() {
  return (
    <div className="flex justify-between p-2 shadow-md">
      <Searchbar />
      <div className="flex gap-2">
        <p>Icon</p>
        <p>Account</p>
      </div>
    </div>
  );
}
