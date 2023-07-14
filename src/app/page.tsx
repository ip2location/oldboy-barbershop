import PromoBanner from "./components/promo-banner/promo-banner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <h1>Barbershop</h1>
      <PromoBanner />
    </main>
  );
}
