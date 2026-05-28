const Hero = ()=>{

    return(
        <section className="relative flex justify-center items center h-screen w-full  bg-[url('/assets/images/fondo-hero.png')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-black/60 to-transparent z-10" />
            <div className="flex flex-col justify-center items-start text-white gap-4 w-4/5 z-20 ">
                <h1 className="text-4xl font-bold font-unbounded md:text-6xl md:w-3/5 ">Stories that move you.</h1>
                <p className="text-base font-lexend md:text-xl md:w-4/5 ">Your ultimate companion for movie night. Stay up to date with now-playing titles, browse global trends, and build your perfect watchlist with thousands of movies across every genre.</p>
                <button className="py-2 px-10 rounded-4xl bg-[#D90677] font-lexend mt-3 hover:border hover:border-[#D90677] hover:bg-transparent hover:text-[#D90677] transition-colors cursor-pointer">Start</button>
            </div>
        </section>
    )
}
  export default Hero;