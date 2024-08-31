"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const token = getCookie('auth_token');
    if (!token) {
      router.push('/others/login');
    }
  }, [router]);

  return <>{children}</>;
};

export default ProtectedRoute;