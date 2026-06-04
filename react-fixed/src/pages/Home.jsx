import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main
      id="home"className="h-screen flex flex-col items-center justify-center text-center px-6 bg-cover bg-center relative"
      style={{ backgroundImage: "url(/ensemble.jpeg)" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Welcome to AI Dev Community
        </h1>

        <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto text-center">
          Join us in exploring the future of artificial intelligence and machine learning
        </p>

        <div className="mt-16">
          <Link to="/join">
            <button className="bg-cyan-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-cyan-600 transition">
              Rejoindre le Club
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}