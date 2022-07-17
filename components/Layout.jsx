import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Header from './header/Header';
import {useRouter} from 'next/router';

export default function Layout({children}) {
  const router = useRouter();
  if (
    router.pathname.includes('/login') ||
    router.pathname.includes('/register')
  ) {
    return <div className="min-h-screen bg-slate-100">{children}</div>;
  } else {
    return (
      <div className="flex min-h-screen bg-slate-100">
        <Sidebar />
        <main className="flex-1 flex flex-col">
          <Header />
          <div className="flex-1">{children}</div>
        </main>
      </div>
    );
  }
}
