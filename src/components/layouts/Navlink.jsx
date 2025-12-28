'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navlink({ href, children }) {
  const pathname = usePathname();
  return (
    <li>
      <Link className={`${pathname === href && 'active'}`} href={href}>
        {children}
      </Link>
    </li>
  );
}
