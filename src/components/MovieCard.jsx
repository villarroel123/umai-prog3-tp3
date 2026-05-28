'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const  MovieCard=({title, poster_path,id, vote_average,release_date})=>{
    return(
        <article className=''>
            <div className='max-w-sm overflow-hidden rounded-xl shadow-lg relative group hover:scale-101 transition-transform duration-200' >
                    <Image 
                        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        width={0}
                        height={0} 
                        alt={title}
                        sizes="50vw"
                        className="w-full h-auto object-cover"
                        priority
                    /> 
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center">
                        <h4 className='text-lg font-lexend text-white'>
                        {title}
                    </h4>
                    <p className='text-lg font-lexend text-white'> Fecha de publicación: {release_date}</p>
                    <p className='text-lg font-lexend text-white'>Puntuación: {vote_average}</p>
                        <Link href={`/movie/${id}`}className="text-[#D90677] font-lexend font-semibold px-5 py-2 rounded-lg hover:scale-105 transition-transform duration-200 text-sm shadow-md "
                        >
                        See more
                        </Link>
                    </div>   
                </div>
 
        </article>
    )

}
export default MovieCard;