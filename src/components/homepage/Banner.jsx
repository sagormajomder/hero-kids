import { banglaCustomFont } from '@/app/layout';
import Image from 'next/image';

export default function Banner() {
  return (
    <section className='flex justify-between items-center'>
      <div className='flex-1 space-y-5'>
        <h1 className={`text-6xl font-bold ${banglaCustomFont.className}`}>
          আপনার শিশুকে দিন একটি{' '}
          <span className='text-primary'>সুন্দর ভবিষ্যৎ</span>
        </h1>
        <p>Buy Every Toy with up to 15% Discount</p>
        <button className='btn btn-primary btn-outline'>
          Explore Products
        </button>
      </div>
      <div className='flex-1'>
        <Image
          src={'/assets/hero.png'}
          alt='Hero Image'
          width={500}
          height={400}
        />
      </div>
    </section>
  );
}
