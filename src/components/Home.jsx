import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 to-purple-100 flex flex-col items-center p-8">
      {/* Шапка */}
      <header className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tight">Frontend Interview Prep</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">Подготовьтесь к собеседованию на фронтенд-разработчика через тесты, теорию и практику</p>
      </header>

      {/* Карточки */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Карточка Тесты */}
        <Link
          to="/quiz"
          className="group bg-white bg-opacity-80 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 border border-transparent hover:border-blue-400 flex flex-col items-center text-gray-700 backdrop-blur"
        >
          <div className="bg-blue-200 p-5 rounded-full mb-6 group-hover:bg-blue-300 transition-all">
            <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold mb-3">Тесты</h3>
          <p className="text-gray-500 text-center">Проверьте свои знания с помощью коротких тестов</p>
        </Link>

        {/* Карточка Теория */}
        <Link
          to="/theory"
          className="group bg-white bg-opacity-80 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 border border-transparent hover:border-green-400 flex flex-col items-center text-gray-700 backdrop-blur"
        >
          <div className="bg-green-200 p-5 rounded-full mb-6 group-hover:bg-green-300 transition-all">
            <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold mb-3">Теория</h3>
          <p className="text-gray-500 text-center">Изучите основы и расширьте свои знания</p>
        </Link>

        {/* Карточка Практика */}
        <Link
          to="/practice"
          className="group bg-white bg-opacity-80 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 border border-transparent hover:border-purple-400 flex flex-col items-center text-gray-700 backdrop-blur"
        >
          <div className="bg-purple-200 p-5 rounded-full mb-6 group-hover:bg-purple-300 transition-all">
            <svg className="w-10 h-10 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold mb-3">Практика</h3>
          <p className="text-gray-500 text-center">Решайте реальные задачи и укрепляйте навыки</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
