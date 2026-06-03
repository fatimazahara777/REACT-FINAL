import { Link } from "react-router-dom";
import logo from "../assets/logoAICLUB2.png";
export default function Navbar() {
  return (
    <nav className="bg-sky-100 shadow-md">
  <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

    <div className="flex items-center gap-3">
      <img
        src={logo}
        alt="Logo"
        className="w-14 h-14"
      />
    </div>

    <div className="flex gap-8 font-medium">
  <Link to="/" className="hover:text-sky-400 transition-colors">
    Accueil
  </Link>

  <Link to="/members" className="hover:text-sky-400 transition-colors">
    Membres
  </Link>

  <Link to="/events" className="hover:text-sky-400 transition-colors">
    Événements
  </Link>

  <Link to="/contact" className="hover:text-sky-400 transition-colors">
    Contact
  </Link>
  </div>

</div>
</nav>
 );
}