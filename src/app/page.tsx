import Banner from '@/components/Banner';
import CardPanel from '@/components/CardPanel';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-100">
      <main>
        <Banner />
        <CardPanel />
      </main>
    </div>
  );
}
