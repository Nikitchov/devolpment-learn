import React, { useEffect, useState } from 'react';
import TheorySection from './TheorySection.jsx';

function Theory() {
  const [theoryData, setTheoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Загрузка данных с сервера
    fetch('http://localhost:3001/api/theory')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Ошибка сервера: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setTheoryData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Ошибка загрузки данных:', err);
        setError('Не удалось загрузить данные.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-gray-600">Загрузка данных...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 animate__animated animate__fadeInDown">Теория</h1>
      <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
        Изучите основы и продвинутые темы в React, HTML, CSS, JavaScript и TypeScript. Каждый раздел включает теорию, примеры кода, опросы и задачи.
      </p>
      {theoryData.map((section, index) => (
        <TheorySection key={index} section={section} />
      ))}
    </div>
  );
}

export default Theory;