import eraqi from "../assets/eraqi.jpeg";
import mohamed from "../assets/mohamed.jpeg";
import wiam from "../assets/wiam.jpeg";
import sara from "../assets/sara.jpeg";
import fatima from "../assets/fatima.jpeg";
import amzil from "../assets/amzil.jpeg";

export default function Members() {
  const members = [
    {
      name: "Fatima Zahrae Er-raqi",
      role: "PRESIDENT",
      image: eraqi,
    },
    {
      name: "Mohamed BEN DIFI",
      role: "Head of the Design Unit",
      image: mohamed,
    },
    {
      name: "Wiam boulif",
      role: "General Secretary",
      image: wiam,
    },
    {
      name: "SARA RIZK",
      role: "Events Manager",
      image: sara,
    },
    {
      name: "Fatima Ez-zahraa HAJARI",
      role: "Human Resources Manager",
      image: fatima,
  
    },
    {
  name: "Taoufik AMZIL",
  role: "Speaker",
  image: amzil,
  description:
    "Ph.D student in Computer Science at FSBM and Mentor.",
},
];
 return (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-10">
    <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-10 text-center">
  Members of AI Dev Community
</h1>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {members.map((member, index) => (
        <div
          key={index}
          className="bg-slate-800 rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-cyan-400"
          />

          <h2 className="text-xl font-bold text-white">
            {member.name}
          </h2>

          <p className="text-cyan-400 font-semibold mt-2">
            {member.role}
          </p>

          <p className="text-slate-300 mt-3">
            {member.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);
}
