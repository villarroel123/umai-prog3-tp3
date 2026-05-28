'use client'
import {useState, useEffect} from 'react';
import axios from 'axios';
import Image from 'next/image';

const MovieContainer=({id})=>{
    const [item,setItem]=useState({})
    const[notFound, setNotFound]= useState(false)
    const [loading, setLoading] = useState(true);


    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    const handleGetMovie=async()=>{
        try{
            const response=await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
            const data=response.data;
            setItem(data);
            setLoading(false);
        }catch(error){
            console.log(error)
            setNotFound(true);
        }
    };
     useEffect(()=>{
        // eslint-disable-next-line react-hooks/set-state-in-effect
        handleGetMovie();
    },[]);

    return(
    <div className='bg-[#150320] min-h-screen'>
        {notFound && (
                    <div className='w-full flex items-center justify-center'>
                        <div className='w-4/5'>
                            <h2 className='text-white pt-5 font-lexend'>NOT FOUND</h2>
                        </div> 
                    </div>
        )}
        {loading && (
            <div className='w-full flex items-center justify-center'>
                <div className='w-4/5'>
                    <p className='text-white pt-5 font-lexend'>Loading movie..</p>
                </div>
            </div>
        )}
        {!loading && <section className='min-h-screen relative w-full  flex flex-col'>
        <Image 
            src={`https://image.tmdb.org/t/p/w1280${item.backdrop_path}`}
            fill
            alt={item.title}
            className="object-cover" 
            priority 
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
   
        <div className='relative w-full text-white flex items-center justify-center py-12 px-4 z-20 flex-grow'>
            <div className='p-6 max-w-4xl w-full bg-black/40 backdrop-blur-sm rounded-xl'>
                
                <div className='mb-4'>
                    <h2 className='text-5xl font-bold font-lexend mb-2'>{item.title}</h2>
                    <div className='flex flex-col gap-1 text-sm '>
                        <p className='font-rubik'>Fecha de estreno: {item.release_date}</p>
                        <div className='flex items-center'>
                            <p className='font-rubik'>Puntuación:</p>
                            <i className="fa-solid fa-star mx-1 text-[#FFC62B]"></i>
                             <p className='font-rubik'>{item.vote_average}</p>
                        </div>
                        <p className='font-rubik'>Popularidad: {item.popularity}</p>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-6 items-start'>
                    <div className='flex-shrink-0 mx-auto md:mx-0 w-[200px] h-[300px] relative'>
                        <Image
                            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} 
                            width={200} 
                            height={300}
                            alt={item.title}
                            className="w-full h-full object-cover rounded-lg shadow-lg" 
                            
                        />
                    </div>
                    
                    <div className='flex flex-col gap-2'>
                        <h3 className='font-rubik text-xl'>Género:</h3>
                        <div className='flex flex-wrap gap-2'>
                            {item.genres?.map((g) => (
                                <p 
                                    key={g.id || g.name} 
                                    className='text-sm  border border-/40 px-3 py-1 rounded-md font-rubik text-[#D90677]'
                                >
                                    {g.name}
                                </p>
                            ))}
                        </div>
                        <h3 className='font-rubik mt-3 text-xl'>Descripción:</h3>
                        <p className='leading-relaxed  font-rubik text-sm'>{item.overview}</p>
                    </div>
                </div>

            </div>      
        </div>
        </section>}
    </div>
        
    )
}
export default MovieContainer