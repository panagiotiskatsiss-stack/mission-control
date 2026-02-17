'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs font-mono font-bold rounded-lg transition-colors uppercase tracking-wide"
    >
      Logout
    </button>
  );
}
