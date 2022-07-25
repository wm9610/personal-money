import React from 'react';
import {useRouter} from 'next/router';
import Sidebar from './sidebar/Sidebar';
import Header from './header/Header';

export default function Layout({children}) {
  const router = useRouter();
  if (
    router.pathname.includes('/login') ||
    router.pathname.includes('/register')
  ) {
    return (
      <div className="min-h-screen bg-slate-100 text-neutral-800 dark:bg-slate-800 dark:text-slate-400">
        {children}
      </div>
    );
  } else {
    return (
      <div className="flex min-h-screen bg-slate-100 text-neutral-800 dark:bg-slate-800 dark:text-slate-400 ">
        <Sidebar />
        <main className="flex-1 flex flex-col">
          <Header />
          <div className="flex-1 p-5 pt-3">{children}</div>
        </main>
      </div>
    );
  }
}
