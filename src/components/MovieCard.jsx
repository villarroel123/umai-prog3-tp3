'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const  MovieCard=({title, poster_path,id, vote_average,release_date})=>{
    return(
        <article className=''>
            <div className='max-w-sm overflow-hidden  shadow-lg relative group hover:scale-101 transition-transform duration-200' >
                    <Image 
                        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        width={0}
                        height={0} 
                        alt={title}
                        sizes="50vw"
                        className="w-full h-auto object-cover rounded-xl"
                        priority
                    /> 
                    <div className="inset-0 flex flex-col  items-start pt-2">
                        <h4 className='text-lg font-lexend text-white'>
                        {title}
                        </h4>
                        <p className='text-sm font-rubik font-light text-white'> {release_date}</p>
                        <div className='flex justify-between w-full'>
                            <div className='flex'>
                                <i className="fa-solid fa-star mr-1 text-[#FFC62B]"></i>
                                <p className='text-sm font-rubik text-white font-light'> {vote_average}</p>
                            </div>
                            <Link href={`/movie/${id}`}className="text-[#D90677] font-lexend rounded-lg hover:scale-105 transition-transform duration-200 text-sm shadow-md font-light"
                            >
                            See more
                            </Link>
                        </div>
                        
                    </div>   
                </div>
 
        </article>
    )

}
export default MovieCard;