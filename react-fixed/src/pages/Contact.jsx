export default function Contact() {
  return (
    <main className="min-h-[calc(100vh-140px)] bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex flex-col items-center justify-center text-center px-6 text-white">

      <div className="bg-white/5 backdrop-blur-md p-10 rounded-2xl shadow-lg max-w-xl w-full">

        <h1 className="text-4xl font-bold mb-8 text-cyan-300">
          Contact
        </h1>

        <div className="space-y-4 text-lg">

          <p className="text-pink-400">
            Email : <span className="text-white">contactaidevcommunity@gmail.com</span>
          </p>

          <p className="text-blue-400">
            Facebook : <span className="text-white">Ai&Dev Community</span>
          </p>

          <p className="text-pink-400">
            Instagram : <span className="text-white">aidev_community fsbm</span>
          </p>

          <p className="text-blue-400">
            LinkedIn : <span className="text-white">AI&DEV COMMUNITY</span>
          </p>

          <p className="text-gray-400">
            Local : <span className="text-white">Faculté des Sciences Ben M'Sik</span>
          </p>

        </div>
      </div>
    </main>
  );
}