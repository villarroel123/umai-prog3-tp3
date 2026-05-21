'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const PopularesCard=({title, overview, poster_path,id, popularity})=>{
    return(
        <article>
            <div className='max-w-sm overflow-hidden rounded-xl shadow-lg'>
                <Image 
                    src={poster_path}
                    width={0}
                    height={0} 
                    alt={title}
                    sizes="50vw"
                    className="w-full h-auto object-cover"
                />
                <div>
                    <h3>
                        {title}
                    </h3>
                    <p>
                        {overview}
                    </p>
                    <p>
                        {popularity}
                    </p>
                    <div className='flex justify-center items-center mt-6 w-full border border-[#9B6A6C] rounded-lg hover:border-transparent hover:bg-[#9B6A6C] p-1  hover:text-white text-[#9B6A6C] group-hover:text-white group-hover:border-white'>
                        <Link
                        href={`/recipe/${id}`}
                        >
                        See more
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    )

}
export default PopularesCard;