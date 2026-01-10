'use client';

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();
  return (
    <header>
      <div className="main-container inner">
        <Link href="/" className="flex justify-center items-center text-2xl gap-3">
          <Image
            src="/wave.svg"
            width={42}
            height={42}
            alt="amplitude logo"
          />
          <p>Amplitude</p>
        </Link>
        <nav>
            <Link href="/" className={cn('nav-link',{'is-active':pathname==="/", 'is-home':true})}>Home</Link>
            <p>Search Modal</p>
            <Link href="/coins" className={cn('nav-link',{'is-active':pathname==="/coins"})}>All coins</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
