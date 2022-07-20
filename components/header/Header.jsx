import React from 'react';
import Searchbar from './Searchbar';
import ToggleModeButton from './ToggleModeButton';

export default function Header() {
  return (
    <div className="flex justify-between p-2 shadow-md">
      <Searchbar />
      <div className="flex gap-2">
        <ToggleModeButton />
        <p>Account</p>
      </div>
    </div>
  );
}
