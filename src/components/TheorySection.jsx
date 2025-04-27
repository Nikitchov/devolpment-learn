import React, { useState } from 'react';

function TheorySection({ section }) {
  // Проверка на наличие данных
  if (!section) {
    return <div>Данные для раздела отсутствуют.</div>;
  }

  const { basics, advanced, quiz, tasks } = section;

  // Состояние для хранения ответов пользователя
  const [userAnswers, setUserAnswers] = useState({});

  // Обработчик изменения ответа
  const handleAnswerChange = (index, value) => {
    setUserAnswers((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6 max-w-3xl mx-auto animate__animated animate__fadeInUp">
      <h2 className="text-2xl font-bold text-gray-800">{section.topic || 'Без названия'}</h2>

      {/* Основы */}
      {basics && (
        <>
          <h3 className="text-xl font-semibold mt-4 text-gray-700">{basics.title || 'Основы'}</h3>
          <p className="my-4 text-gray-600">{basics.content || 'Описание отсутствует.'}</p>
          {basics.codeExample && (
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              {basics.codeExample.code || 'Пример кода отсутствует.'}
            </pre>
          )}
        </>
      )}

      {/* Продвинутые темы */}
      {advanced && (
        <>
          <h3 className="text-xl font-semibold mt-4 text-gray-700">{advanced.title || 'Продвинутые темы'}</h3>
          <p className="my-4 text-gray-600">{advanced.content || 'Описание отсутствует.'}</p>
          {advanced.codeExample && (
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              {advanced.codeExample.code || 'Пример кода отсутствует.'}
            </pre>
          )}
        </>
      )}

      {/* Опрос */}
      {quiz && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Опрос</h3>
          <ul className="list-disc pl-6">
            {quiz.map((q, index) => (
              <li key={index} className="mb-4">
                <p className="text-gray-700">{q.question || 'Вопрос отсутствует.'}</p>
                <div className="flex items-center gap-4 mt-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value="true"
                      checked={userAnswers[index] === 'true'}
                      onChange={(e) => handleAnswerChange(index, e.target.value)}
                      className="cursor-pointer"
                    />
                    True
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value="false"
                      checked={userAnswers[index] === 'false'}
                      onChange={(e) => handleAnswerChange(index, e.target.value)}
                      className="cursor-pointer"
                    />
                    False
                  </label>
                </div>
                {userAnswers[index] !== undefined && (
                  <p
                    className={`mt-2 flex items-center gap-2 ${
                      String(userAnswers[index]) === String(q.answer) ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {String(userAnswers[index]) === String(q.answer) ? '✔ Верно!' : '✖ Неверно!'}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Задачи */}
      {tasks && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Задачи</h3>
          <ul className="list-disc pl-6">
            {tasks.map((task, index) => (
              <li key={index}>{task || 'Задача отсутствует.'}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TheorySection;