import { Link } from "lucide-react";

const Footer=()=>{
    const redes = [
        { name: "facebook", icon: "fa-facebook", link: "https://facebook.com" },
        { name: "whatsapp", icon: "fa-whatsapp", link: "https://wa.me/tu-numero" },
        { name: "instagram", icon: "fa-instagram", link: "https://instagram.com" },
    ];

    return(
        <footer className="bg-[#150320] py-10 flex justify-center items-center">
            <div className="w-4/5 flex flex-col gap-2 flex justify-center items-center">
                <h3 className="text-white text-xl font-unbounded">Movies</h3>
                <ul className="flex gap-6">
                    {redes.map((red, index) => (
                        <li key={index}>
                            <a 
                                href={red.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-xl hover:text-[#736a6e] transition-colors text-white"
                            >
                                <i className={`fa-brands ${red.icon}`}></i>
                            </a>
                        </li>
                    ))}
                </ul>
                <p className="text-xs text-white font-rubik leading-relaxed max-w-md text-center">
                     This product uses the TMDB API but is not endorsed or certified by TMDB.
                </p>
            </div>

        </footer>
    )
}
export default Footer;