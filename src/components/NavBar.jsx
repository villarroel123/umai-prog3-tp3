'use client'
import { useAppContext } from '@/app/contexts/AppContext';
import Link from 'next/link';
const NavBar=()=>{
    const items= [
        {
            name:"Home",
            link: "/"
        },
         {
            name:"Trending",
            link: "#trending"
        },
         {
            name:"Popular",
            link: "#popular"
        }
        ,
         {
            name:"Top Rated",
            link: "#top-rated"
        }
        ,
         {
            name:"Now Playing",
            link: "#now-playing"
        }
        ,
         {
            name:"Upcoming",
            link: "#upcoming"
        }
    ]
    // const {favoritos}=useAppContext();
    return(
        <header className="flex justify-center items-center pt-5 pb-5 bg-[#150320] shadow-md">
            <div className='flex justify-between items-center w-4/5'>
                <div className=" text-xl font-rowdies text-[#D90677] font-unbounded font-bold hover:text-[#736a6e]">
                    <Link href="/">Movies</Link>
                </div>
                <nav className='flex justify-between items-center '>
                    <button className='text-white md:hidden'>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <ul className="flex gap-6 text-white font-lexend font-light hidden md:flex">
                        {items.map((item, index) => (
                            <li key={index}>
                                <Link 
                                    href={item.link} 
                                    className="hover:text-[#736a6e] transition-colors cursor-pointer">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )

}

export default NavBar;