const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Пути к файлам
const questionsFilePath = path.join(__dirname, 'src', 'components', 'questions.json');
const theoryFilePath = path.join(__dirname, 'src', 'components', 'theory.json');

// Корневой маршрут
app.get('/', (req, res) => {
  res.send('Сервер работает! Используйте /api/questions или /api/theory для получения данных.');
});

// Маршрут для получения вопросов
app.get('/api/questions', (req, res) => {
  fs.readFile(questionsFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла вопросов:', err);
      return res.status(500).json({ error: 'Ошибка сервера при чтении вопросов' });
    }
    res.json(JSON.parse(data));
  });
});

// Маршрут для сохранения вопросов
app.post('/api/questions', (req, res) => {
  const newQuestions = req.body;

  fs.writeFile(questionsFilePath, JSON.stringify(newQuestions, null, 2), (err) => {
    if (err) {
      console.error('Ошибка записи файла вопросов:', err);
      return res.status(500).json({ error: 'Ошибка сервера при сохранении вопросов' });
    }
    res.json({ message: 'Вопросы успешно сохранены' });
  });
});

// Маршрут для получения данных из theory.json
app.get('/api/theory', (req, res) => {
  fs.readFile(theoryFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла теории:', err);
      return res.status(500).json({ error: 'Ошибка сервера при чтении теории' });
    }
    res.json(JSON.parse(data));
  });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});