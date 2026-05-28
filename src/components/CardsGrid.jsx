import MovieCard from '@/components/MovieCard';

const CardsGrid = ({ items}) => {
  return (
      <div className='grid grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))] gap-4 rounded-lg w-full pb-4'>
        {items?.map(({ title, release_date, poster_path, id, vote_average }, index) => {
          return (
            <div key={id || index}>
              <MovieCard
                    title={title}
                    release_date={release_date}
                    poster_path={poster_path}
                    id={id}
                    vote_average={vote_average}
                />
            </div>
          );
        })}
      </div> 
  );
};
export default CardsGrid;