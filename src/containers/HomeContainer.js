'use client'
import CardsGrid from '@/components/CardsGrid'
import axios from 'axios';
import {useState, useEffect} from "react";

const HomeContainer =()=>{
    const [error, setError]= useState (false);
    const [tendencias, setTendencias]=useState([]);
    const [populares, setPopulares]=useState([]);
    const [mejorPunteadas, setMejorPunteadas]=useState([]);
    const [cartelera, setCartelera]=useState([]);
    const [proxEstrenos, setProxEstrenos]=useState([]);

    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

    
    const handleGetItems= async()=>{
        try{
            const urlTendencias=`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;
            const urlPopulares=`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
            const urlMejorPunteadas=`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
            const urlCartelera=`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
            const urlProxEstrenos=`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;


            //hago destructuring
            const [resTendencias,resPopulares, resMejorPunteadas, resCartelera, resProxEstrenos]= await Promise.all([
                axios.get(urlTendencias),
                axios.get(urlPopulares),
                axios.get(urlMejorPunteadas),
                axios.get(urlCartelera),
                axios.get(urlProxEstrenos)
            ])
            //agrego info
            setTendencias(resTendencias.data.results);
            setPopulares(resPopulares.data.results);
            setMejorPunteadas(resMejorPunteadas.data.results);
            setCartelera(resCartelera.data.results);
            setProxEstrenos(resProxEstrenos.data.results);

            } catch(error){
                console.log('Hubo un error', error)
                setError(true);
            }
        };

        useEffect(()=>{
            // eslint-disable-next-line react-hooks/set-state-in-effect
            handleGetItems();
        },[]);
        
        return(
            <div>
                <section>
                    <CardsGrid items={tendencias} titulo="Peliculas en tendencia"/>
                </section>
                <section>
                    <CardsGrid items={populares} titulo="Peliculas populares"/>
                </section>
                <section>
                    <CardsGrid items={mejorPunteadas} titulo="Peliculas mejor punteadas"/>
                </section>
                <section>
                    <CardsGrid items={cartelera} titulo="Peliculas en cartelera"/>
                </section>
                <section>
                    <CardsGrid items={proxEstrenos} titulo="Proximos estrenos"/>
                </section>
            </div>
        )
    }
export default HomeContainer;

