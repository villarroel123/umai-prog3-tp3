import TendenciasCard from '@/components/TendenciasCard';
import CarteleraCard from '@/components/CarteleraCard';
import MejorPunteadasCard from '@/components/MejorPunteadasCard';
import PopularesCard from '@/components/PopularesCard';
import ProxEstrenosCard from '@/components/ProxEstrenosCard';

const CardsGrid = ({ items, titulo }) => {
  return (
    <section className='flex items-center flex-col gap-10 px-10 py-20 max-w-6xl mx-auto '>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 '>
        {items?.map(({ title, overview, poster_path, id, popularity }, index) => {
          return (
            <div key={id || index}>
              {titulo === "Peliculas en tendencia" && (
                <TendenciasCard
                    title={title}
                    overview={overview}
                    poster_path={poster_path}
                    id={id}
                    popularity={popularity}
                />
              )}
              {titulo === "Peliculas populares" && (
                <PopularesCard 
                    title={title}
                    overview={overview}
                    poster_path={poster_path}
                    id={id}
                    popularity={popularity}
                />)}
                {titulo === "Peliculas mejor punteadas" && (
                <MejorPunteadasCard 
                    title={title}
                    overview={overview}
                    poster_path={poster_path}
                    id={id}
                    popularity={popularity}
                />)}
                {titulo === "Peliculas en cartelera" && (
                    
                <CarteleraCard 
                    title={title}
                    overview={overview}
                    poster_path={poster_path}
                    id={id}
                    popularity={popularity}
                />)}
                {titulo === "Proximos estrenos" && (
                <ProxEstrenosCard 
                    title={title}
                    overview={overview}
                    poster_path={poster_path}
                    id={id}
                    popularity={popularity}
                />)}
            </div>
          );
        })}
      </div>
    </section>
      
    
  );
};
export default CardsGrid;