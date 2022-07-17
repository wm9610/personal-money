import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Header from './header/Header';

export default function Layout({children}) {
  return (
    <div className="flex min-h-screen relative">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1">{children}</div>
      </main>
    </div>
  );
}
