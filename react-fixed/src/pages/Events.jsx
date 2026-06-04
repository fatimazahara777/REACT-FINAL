import React from "react";

const events = [
  {
    title: "Formation Python 2024",
    color: "text-cyan-300",
    image: "/image-event/event1.jpeg",
    desc: "Dans le cadre de ses activités de formation, le Club AI & Dev Community a eu le plaisir d’accueillir M. Taoufik Amzil pour animer une session dédiée à l’initiation au langage Python.",
  },
  {
    title: "Atelier : Poster scientifique",
    color: "text-pink-300",
    image: "/image-event/event2.png",
    desc: "Le Club AI & Dev Community et le Club Soft Skills ont organisé le PFA Day autour du thème Révolutions par l’IA.",
  },
  {
    title: "Conference : AI & Ses domaines d’application",
    color: "text-purple-300",
    image: "/image-event/event3.jpeg",
    desc: "Le Club AI & Dev Community a tenu une conférence sur les applications concrètes de l’IA dans différents domaines.",
  },
  {
    title: "Atelier: Machine Learning",
    color: "text-emerald-300",
    image: "/image-event/event4.png",
    desc: "Nous avons organisé des séances interactives de Machine Learning axées sur la découverte des concepts de base.",
  },
  {
    title: "Formation langue chinoise",
    color: "text-indigo-300",
    image: "/image-event/event5.jpeg",
    desc: "Une formation destinée à découvrir les bases de la langue chinoise et encourager l’ouverture culturelle.",
  },
  {
    title: "Data Analysis Training",
    color: "text-yellow-300",
    image: "/image-event/event6.jpeg",
    desc: "Une session pratique pour apprendre le nettoyage des données, la visualisation et les bases de l’analyse statistique avec Python et Excel.",
  },
];

export default function Events() {
  return (
    <div id ="events"className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-10">
      <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-10 text-center">
        Événements
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-6">
              <h2 className={`text-xl font-bold ${event.color}`}>
                {event.title}
              </h2>

              <p className="text-slate-300 mt-3">
                {event.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}