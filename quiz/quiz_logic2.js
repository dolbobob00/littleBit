const quizData = [
    {
        "question": "Вопрос 1 / 17: Кто был крупнейшим отрядом петропавловского пролетариата к 1906 году?",
        "answers": ["ткачи", "железнодорожники", "металлурги", "строители"],
        "correct": 1
    },
    {
        "question": "Вопрос 2 / 17: Что изучалось в марксистских кружках Петропавловска?",
        "answers": ["биология", "история Римской империи", "география", "марксистская литература"],
        "correct": 3
    },
    {
        "question": "Вопрос 3 / 17: Кто возглавил объединённый социал-демократический кружок в Петропавловске?",
        "answers": ["Иван Семенович Ружейников", "А. В. Федулин", "Н. Васильев", "Георгий Северинович Нагорничевский"],
        "correct": 3
    },
    {
        "question": "Вопрос 4 / 17: Какое событие активизировало деятельность социал-демократического кружка в Петропавловске в начале XX века?",
        "answers": ["падение Римской империи", "начало русско-японской войны", "французская революция", "первое собрание ООН"],
        "correct": 1
    },
    {
        "question": "Вопрос 5 / 17: Какое крупное политическое выступление произошло на станции Петропавловск в октябре 1905 года?",
        "answers": ["всеобщая забастовка", "революция", "экономическая забастовка", "голодовка"],
        "correct": 0
    },
    {
        "question": "Вопрос 6 / 17: Кто был направлен Омским комитетом в Петропавловск в мае 1907 года для восстановления разрушенной организации РСДРП?",
        "answers": ["Георгий Северинович Нагорничевский", "Иван Семенович Ружейников", "Валериан Владимирович Куйбышев", "А. В. Федулин"],
        "correct": 2
    },
    {
        "question": "Вопрос 7 / 17: Какие группы сохранились после разгрома петропавловской социал-демократической организации в конце 1907 года?",
        "answers": ["большие партийные организации", "отдельные группы", "профессиональные ассоциации", "специализированные кружки"],
        "correct": 1
    },
    {
        "question": "Вопрос 8 / 17: Какое важное событие произошло в Петропавловске 27 февраля 1917 года?",
        "answers": ["победа Февральской революции", "введение восьмичасового рабочего дня", "создание Совета рабочих и солдатских депутатов", "митинг рабочих и солдат"],
        "correct": 0
    },
    {
        "question": "Вопрос 9 / 17: Какой жесточайший террор свирепствовал в Петропавловске и его уезде в 1918-1919 годах?",
        "answers": ["Красный террор", "Белый террор", "Социальный террор", "Экономический террор"],
        "correct": 1
    },
    {
        "question": "Вопрос 10 / 17: Какое наименование было присвоено 314-й стрелковой дивизии в феврале 1944 года?",
        "answers": ["Выборгская", "Ленинградская", "Маннергейма", "Кингисеппская"],
        "correct": 3
    },
    {
        "question": "Вопрос 11 / 17: Какое имя у бронепоезда что был построен в Петропавловске и был отправлен на фронт?",
        "answers": ["Североказахстанец", "Поездок", "Скрытый лист", "Североармеец"],
        "correct": 0
    },
    {
        "question": "Вопрос 12 / 17: Какой орган был создан в январе 1918 года для управления промышленностью, транспортом и банками?",
        "answers": ["Совет народного хозяйства (СОВНАРХОЗ)", "Ревтрибунал", "Судебно-следственная комиссия", "Красная гвардия"],
        "correct": 0
    },
    {
        "question": "Вопрос 13 / 17: Кто возглавил милицию в Петропавловске после установления советской власти?",
        "answers": ["И. Я. Филиппенко", "Ф. К. Юрасов", "Исидор Дмитриевич Дубынин", "Карим Сутюшев"],
        "correct": 1
    },
    {
        "question": "Вопрос 14 / 17: Какое важное событие произошло в Петропавловске в ночь на 31 мая 1918 года?",
        "answers": ["Белочехословацкий мятеж", "Национализация крупнейших промышленных предприятий", "Введение восьмичасового рабочего дня", "Создание Совета народного хозяйства"],
        "correct": 0
    },
    {
        "question": "Вопрос 15 / 17: Ранним утром 10 июня 1918 кто из упомянутых борцов идя на казнь, нашла в себе силы сорвать несколько незабудок и спрятать записки в букетике?",
        "answers": ["Настя Прокофичева", "А. И. Быстрицкий", "И. Дубынин", "В. С. Трацевский"],
        "correct": 0
    },
    {
        "question": "Вопрос 16 / 17: Какое важное событие произошло в Петропавловске 2 марта 1917 года?",
        "answers": [
            "Произошла стихийная демонстрация трудящихся",
            "Создан Петропавловский Совет рабочих и солдатских депутатов",
            "Прошёл митинг рабочих и солдат, на котором решили арестовать старую администрацию и распустить полицию",
            "Объявлена победа Октябрьской революции"
        ],
        "correct": 2
    },
    {
        "question": "Вопрос 17 / 17: Каким было одно из революционных мероприятий Петропавловского Совета?",
        "answers": [
            "Введение восьмичасового рабочего дня",
            "Проведение переписи населения",
            "Запрет частной торговли",
            "Установление рабочих праздников"
        ],
        "correct": 0
    },
];

let currentQuestion = 0;
let selectedAnswer = null;
let results = [];
let correctPicked = 0;
function selectAnswer(element, index) {
    const answers = document.querySelectorAll('.answer');
    answers.forEach(answer => answer.classList.remove('selected'));
    element.classList.add('selected');
    selectedAnswer = index;
}

function nextQuestion() {
    if (selectedAnswer === null) {
        alert("Пожалуйста, выберите ответ.");
        return;
    }
    if (selectedAnswer == quizData[currentQuestion].correct) {
        correctPicked++;
    }
    results.push({
        question: quizData[currentQuestion].question,
        selected: quizData[currentQuestion].answers[selectedAnswer],
        correct: quizData[currentQuestion].answers[quizData[currentQuestion].correct]
    });

    currentQuestion++;
    selectedAnswer = null;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showSummary();
    }
}

function loadQuestion() {
    const questionEl = document.getElementById('question');
    const answersEl = document.querySelectorAll('.answer');
    questionEl.textContent = quizData[currentQuestion].question;
    answersEl.forEach((answerEl, index) => {
        answerEl.textContent = quizData[currentQuestion].answers[index];
        answerEl.classList.remove('selected');
    });
}

function showSummary() {
    document.getElementById('quiz').classList.add('hidden');
    const summaryEl = document.getElementById('result-text');
    let summaryHTML = `<h2>Результаты: ${correctPicked} / ${quizData.length} </h2>`;
    results.forEach((result) => {
        summaryHTML += ` <h2>${result.question} </h2><br>Ваш ответ: <h2>${result.selected}</h2><br>Правильный ответ: <green>${result.correct}</green><br><br>`;
    });
    summaryEl.innerHTML = summaryHTML;
    document.getElementById('summary').classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', function () {
    loadQuestion();  // Загрузка первого вопроса при открытии страницы
});
