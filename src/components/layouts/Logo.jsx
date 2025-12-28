import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link className='flex items-center gap-1' href={'/'}>
      <Image
        src={'/assets/logo.png'}
        alt='logo-herokids'
        width={40}
        height={40}
      />
      <h2 className='text-xl font-bold'>
        Hero <span className='text-primary'>Kids</span>
      </h2>
    </Link>
  );
}
