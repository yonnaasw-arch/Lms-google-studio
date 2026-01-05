
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // In a real app, check auth/role here
    router.replace('/borrower');
  }, [router]);

  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-pulse text-indigo-600 font-bold">Initializing Portal...</div>
    </div>
  );
}
