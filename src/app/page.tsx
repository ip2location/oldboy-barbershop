import { PromoBanner } from "./components/promo-banner/promo-banner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 bg-slate-600">
      <h1>Barbershop icon</h1>
      <PromoBanner />
    </main>
  );
}
