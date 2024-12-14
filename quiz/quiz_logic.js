const quizData = [
    {
        question: "Вопрос 1 / 17: Кто из легенды о Петропавловске отмерил землю воловьей шкурой?",
        answers: ["Аблай и Даулеткельдей", "Петр и Павел", "Сабит Муканов и хан Аблай", "Русские братья"],
        correct: 1
    },
    {
        question: "Вопрос 2 / 17: Какое название носил город, построенный Петром и Павлом по легенде?",
        answers: ["Петропавловск", "Атыгай", "Боровом", "Ишим"],
        correct: 0
    },
    {
        question: "Вопрос 3 / 17: Кому принадлежали земли, на которых строили город Петр и Павел?",
        answers: ["Баю Даулеткельдею", "Хану Аблаю", "Русским братьям", "Ивану Чусовитину"],
        correct: 0
    },
    {
        question: "Вопрос 4 / 17: Какая протяженность Ишимской линии в верстах?",
        answers: ["600 верст", "9285 верст", "985 верст", "800 верст"],
        correct: 2 // Правильный ответ — "985 верст"
    },
    {
        question: "Вопрос 5 / 17: Какие два проекта по изменению Ишимской линии были представлены Сенату?",
        answers: ["Проект Киндермана и проект Сухарева", "Проект Кутузова и проект Киндермана", "Проект Новоселова и проект Сташкеева", "Проект Шишкова и Сташкеева и проект Кутузова"],
        correct: 3 // Правильный ответ — "Проект Шишкова и Сташкеева и проект Кутузова"
    },
    {
        question: "Вопрос 6 / 17: Почему подполковник Кутузов возражал против проекта Шишкова и Сташкеева?",
        answers: ["Опасность набегов Киргизов", "Излишняя протяженность линии", "Недостаток ресурсов", "Недостаток пресной воды и неудобство местности"],
        correct: 3 // Правильный ответ — "Недостаток пресной воды и неудобство местности"
    },
    {
        question: "Вопрос 7 / 17: Какой проект был одобрен Сенатом для новой линии?",
        answers: ["Проект Шишкова", "Проект Кутузова", "Проект Сташкеева", "Проект Киндермана"],
        correct: 3 // Правильный ответ — "Проект Киндермана"
    },
    {
        question: "Вопрос 8 / 17: Сколько человек из регулярных и нерегулярных войск должны были участвовать в строительстве Новой линии?",
        answers: ["2000 человек", "5000 человек", "3000 человек", "3642 человека"],
        correct: 3 // Правильный ответ — "3642 человека"
    },
    {
        question: "Вопрос 9 / 17: Как называлась местность где был основан Петропавловск?",
        answers: ["Семиречье", "Красный Яр", "Бекеонбай", "Ак Яр"],
        correct: 1 //red yar
    }, {
        question: "Вопрос 10 / 17: Какое основное укрепление было построено во время строительства?",
        answers: ["Квадратное укрепление", "Круглое укрепление", "Семиугольное укрепление", "Шестиугольное укрепление"],
        correct: 3 // Правильный ответ — "Шестиугольное укрепление"
    },
    {
        question: "Вопрос 11 / 17: Какие трудности испытывали солдаты и казаки при строительстве крепости?",
        answers: ["Плохое питание и ранние холода", "Отсутствие оружия", "Недостаток строительных материалов", "Отсутствие подходящей земли"],
        correct: 0 // Правильный ответ — "Плохое питание и ранние холода"
    },
    {
        question: "Вопрос 12 / 17: Какой указ был издан 22 декабря 1759 года в отношении торговли в крепости Святого Петра?",
        answers: ["Об открытии торгового поста для русских купцов", "О создании торгового центра в Петропавловске", "О проведении ярмарок в Петропавловске", "Об открытии торга со степными народами"],
        correct: 3 // Правильный ответ — "Об открытии торга со степными народами"
    },
    {
        question: "Вопрос 13 / 17: Какое географическое расположение крепости Святого Петра способствовало развитию торговли?",
        answers: ["На пересечении караванных путей из России в Западную Сибирь, в центральные районы Казахстана и Среднюю Азию", "Вблизи крупных рек и торговых путей", "В центре российской империи", "На берегу крупного озера"],
        correct: 0 // Правильный ответ — "На пересечении караванных путей из России в Западную Сибирь, в центральные районы Казахстана и Среднюю Азию"
    },
    {
        question: "Вопрос 14 / 17: Какие товары обычно обменивались на меновой площади Петропавловской крепости?",
        answers: ["Сухие фрукты, меха, овчины", "Мануфактурный товар, железные изделия", "Шелковые ткани, платки, иглы", "Холст, конопля, масло"],
        correct: 0 // Правильный ответ — "Сухие фрукты, меха, овчины"
    }, {
        question: "Вопрос 15 / 17: В каком году крепость Святого Петра была переименована в город Петропавловск?",
        answers: ["1805", "1807", "1810", "1812"],
        correct: 1 // Правильный ответ — "1807"
    },
    {
        question: "Вопрос 16 / 17: Сколько человек проживало в Петропавловске по переписи 1897 года?",
        answers: ["15 000", "19 688", "20 000", "25 000"],
        correct: 1 // Правильный ответ — "19 688"
    },

    {
        question: "Вопрос 17 / 17: Какие отличия в облике Петропавловска наблюдались до революции?",
        answers: [
            "Все районы города были застроены современными зданиями",
            "Купеческо-чиновничий центр был застроен кирпичными зданиями, а окраины были убогими и грязными",
            "Город был полностью благоустроен и имел только новые здания",
            "Окраины были хорошо благоустроены, а центр города оставался неразвитыми"
        ],
        correct: 1 // Правильный ответ — "Купеческо-чиновничий центр был застроен кирпичными зданиями, а окраины были убогими и грязными"
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
    loadQuestion(); // Загрузка первого вопроса при открытии страницы
    
    // Добавляем обработчики кликов и касаний для ответов
    document.querySelectorAll('.answer').forEach(answer => {
        answer.addEventListener('click', function() {
            selectAnswer(this, Array.from(answer.parentNode.children).indexOf(answer));
        });

        // Добавляем событие для касания на мобильных устройствах
        answer.addEventListener('touchstart', function() {
            selectAnswer(this, Array.from(answer.parentNode.children).indexOf(answer));
        });
    });
});
