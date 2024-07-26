import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';
import { SynapseLogo } from '../public/logo/Synapselogo'
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <SynapseLogo />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Synapse
        </p>
      </Link>
      <div className="flex-between">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
