export default function JoinForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <form className="bg-slate-800 p-8 rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Rejoindre le Club
        </h2>

        <input
          type="text"
          placeholder="Nom complet"
          className="w-full p-3 mb-4 rounded-lg"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg"
        />

        <textarea
          placeholder="Informations"
          rows="4"
          className="w-full p-3 mb-4 rounded-lg"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-cyan-500 text-white py-3 rounded-lg hover:bg-cyan-600"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}