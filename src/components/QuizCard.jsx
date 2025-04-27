function QuizCard({ question, showAnswer, onToggleAnswer, onNext }) {
    if (!question) return null;
    return (
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">{question.question}</h2>
        {showAnswer && (
          <div className="mb-6 animate-fade-in">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-3">
              <p className="text-gray-700 font-medium">Ответ:</p>
              <p className="text-gray-700 mt-1">{question.answer}</p>
            </div>
            {question.explanation && (
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-gray-700 font-medium">Объяснение:</p>
                <p className="text-gray-600 mt-1">{question.explanation}</p>
              </div>
            )}
          </div>
        )}
        <div className="flex gap-4">
          <button 
            onClick={onToggleAnswer} 
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-3 rounded-lg transition-colors shadow-sm"
          >
            {showAnswer ? 'Скрыть ответ' : 'Показать ответ'}
          </button>
          <button 
            onClick={onNext} 
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-3 rounded-lg transition-colors shadow-sm"
          >
            Следующий вопрос
          </button>
        </div>
      </div>
    );
}

export default QuizCard;