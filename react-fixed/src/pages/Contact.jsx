export default function Contact() {
  return (
    <main className="min-h-[calc(100vh-140px)] bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 px-6 py-12 text-white">

      <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent text-center mb-12">
        Contact
      </h1>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl text-center">
          <h2 className="text-pink-400 font-bold mb-2">Email</h2>
          <p>contactaidevcommunity@gmail.com</p>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl text-center">
          <h2 className="text-blue-400 font-bold mb-2">Facebook</h2>
          <p>Ai&Dev Community</p>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl text-center">
          <h2 className="text-pink-400 font-bold mb-2">Instagram</h2>
          <p>aidev_community fsbm</p>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl text-center">
          <h2 className="text-blue-400 font-bold mb-2">LinkedIn</h2>
          <p>AI&DEV COMMUNITY</p>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl text-center">
          <h2 className="text-pink-400 font-bold mb-2">TikTok</h2>
          <p>AI & Dev Community</p>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl text-center">
          <h2 className="text-gray-400 font-bold mb-2">Local</h2>
          <p>Faculté des Sciences Ben M'Sik</p>
        </div>

      </div>
    </main>
  );
}