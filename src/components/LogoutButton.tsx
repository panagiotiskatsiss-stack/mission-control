'use client';

import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/login' })}
      className="w-full text-left px-4 py-3 rounded-lg text-red-400 hover:bg-red-900/20 transition-colors text-sm font-medium"
    >
      🚪 Logout
    </button>
  );
}
