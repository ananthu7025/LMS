'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  useEffect(() => { router.replace('/login'); }, [router]);
  return (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'center', height:'100vh', background:'var(--page-bg)' }}>
      <div style={{ color:'var(--text-muted)', fontSize:14 }}>Redirecting...</div>
    </div>
  );
}
