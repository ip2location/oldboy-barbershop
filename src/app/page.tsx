import Image from 'next/image';
import { Header } from '@/components/Header/Header';
import { PromoBanner } from './components/promo-banner/promo-banner';

export default function Home() {
  return (
    <main className="overflow-hidden flex min-h-screen flex-col p-24 bg-slate-600">
      <Header />
      <h1>Barbershop icon</h1>
      <PromoBanner />
    </main>
  );
}
