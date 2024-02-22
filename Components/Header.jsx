'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { FaHeart, FaHome, FaUser } from "react-icons/fa";
const Header = () => {

    // pathname
    const pathName = usePathname()

    return (
        <header className='w-full flex items-center justify-between md:justify-around bg-transparent px-4 py-2 border-b'>
            <Link href='/' className='text-3xl font-extrabold text-sky-800 hover:text-sky-100 '>RD</Link>
            <nav className='flex align-middle items-center gap-4'>
                <Link href='/'
                    className={pathName === '/' ? 'text-2xl font-bold transition-all ease-linear  text-slate-100 hover:text-sky-700' : 'text-2xl font-extrabold  text-sky-700 hover:text-sky-100'}
                >
                    <FaHome />
                </Link>
                <Link href='/favs'
                    className={pathName === '/favs' ? 'text-2xl font-bold transition-all ease-linear  text-slate-100 hover:text-sky-700' : 'text-2xl font-extrabold  text-sky-700 hover:text-sky-100'}
                >
                    <FaHeart />
                </Link>
                <Link href='/account'
                    className={pathName === '/account' ? 'text-2xl font-bold transition-all ease-linear  text-slate-100 hover:text-sky-700' : 'text-2xl font-extrabold  text-sky-700 hover:text-sky-100'}
                >
                    <FaUser />
                </Link>
            </nav>
        </header>
    )
}

export default Header