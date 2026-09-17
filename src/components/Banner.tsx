import Image from 'next/image';

export default function Banner () {
  return (
    <div className="relative flex min-h-[320px] items-end overflow-hidden bg-emerald-950 sm:min-h-[380px]">
      <Image src={'/img/cover.jpg'}
      alt='cover'
      fill={true}
      priority
      className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-950/40 to-transparent" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-16 text-stone-50 sm:px-8 sm:py-20">
        <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-tight sm:text-7xl">where every event finds its venue</h1>
        <h3 className="mt-6 max-w-xl text-base font-normal leading-7 text-stone-200 sm:text-lg">Finding the perfect venue has never been easier. Whether it&apos;s a wedding, corporate event, or private party, we connecting people to the perfect place.</h3>
      </div>
    </div>
  );
}
