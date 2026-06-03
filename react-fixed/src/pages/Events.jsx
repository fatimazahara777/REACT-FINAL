const events = [
  {
    title: "AI Workshop",
    color: "text-cyan-300",
    desc: "Practical coding sessions with real-world AI projects",
  },
  {
    title: "Hackathon",
    color: "text-pink-300",
    desc: "Build innovative solutions in a competitive environment",
  },
  {
    title: "Deep Learning Conference",
    color: "text-purple-300",
    desc: "Learn advanced AI and neural networks concepts",
  },
  {
    title: "Python Training",
    color: "text-emerald-300",
    desc: "Master Python from basics to advanced level",
  },

  // ➕ NEW EVENTS
  {
    title: "AI Learning Path",
    color: "text-indigo-300",
    desc: "Structured curriculum from basics to advanced machine learning concepts",
  },
  {
    title: "Cutting-edge Tech",
    color: "text-yellow-300",
    desc: "Stay updated with the latest in AI and technology",
  },
];

export default function Events() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-10">
      <div className="container mx-auto">

        <h1 className="text-4xl font-bold mb-10 text-white text-center">
          Événements
        </h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-lg hover:bg-white/10 transition duration-300"
            >
              <h2 className={`text-2xl font-bold ${event.color}`}>
                {event.title}
              </h2>

              <p className="text-gray-300 mt-3">
                {event.desc}
              </p>

              <button className="mt-5 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition">
                Join Event
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}