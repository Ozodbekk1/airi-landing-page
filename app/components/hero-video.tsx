/** @format */
"use client";

interface HeroVideoEmbedProps {
  url: string;
}

export default function HeroVideoEmbed({ url }: HeroVideoEmbedProps) {
  return (
    <div className='absolute inset-0 w-full h-full z-10 overflow-hidden'>
      {/* Video Background */}
      <iframe
        src={`${url}?autoplay=1&loop=1&muted=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
        className='absolute top-1/2 left-1/2 w-[177.77vh] h-[56.25vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none'
        frameBorder='0'
        allow='autoplay; fullscreen'
        allowFullScreen
      />

      {/* Gradient Overlay for better text readability */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60' />
    </div>
  );
}
