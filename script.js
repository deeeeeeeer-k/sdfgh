document.addEventListener('DOMContentLoaded', () => {

    const questions = [
{
    "question": "Яка компанія створила Super Mario Bros.?",
    "answers": ["SEGA", "Ubisoft", "Nintendo", "EA"],
    "correct": 2
  },
  {
    "question": "Яка гра про будівництво з блоків стала світовим хітом?",
    "answers": ["Terraria", "Minecraft", "Roblox", "LEGO Worlds"],
    "correct": 1
  },
  {
    "question": "Яка компанія створила The Legend of Zelda?",
    "answers": ["Sony", "Valve", "Ubisoft", "Nintendo"],
    "correct": 3
  },
  {
    "question": "У якій грі є Link?",
    "answers": ["Dark Souls", "Zelda: Breath of the Wild", "Elden Ring", "Skyrim"],
    "correct": 1
  },
  {
    "question": "Яка компанія створила Pokémon?",
    "answers": ["Ubisoft", "EA", "Game Freak", "Valve"],
    "correct": 2
  },
  {
    "question": "У якій грі є Pikachu?",
    "answers": ["Digimon", "Yo-Kai Watch", "Temtem", "Pokémon"],
    "correct": 3
  },
  {
    "question": "Яка компанія створила Mario Kart?",
    "answers": ["Nintendo", "SEGA", "Sony", "Ubisoft"],
    "correct": 0
  },
  {
    "question": "Яка гра має режим battle royale і будівництво?",
    "answers": ["PUBG", "Apex Legends", "Fortnite", "Warzone"],
    "correct": 2
  },
  {
    "question": "Яка компанія створила Fortnite?",
    "answers": ["Ubisoft", "Epic Games", "EA", "Valve"],
    "correct": 1
  },
  {
    "question": "У якій грі є Creeper?",
    "answers": ["Minecraft", "Terraria", "Roblox", "Rust"],
    "correct": 0
  },
  {
    "question": "Яка компанія створила GTA V?",
    "answers": ["Ubisoft", "EA", "Rockstar Games", "Valve"],
    "correct": 2
  },
  {
    "question": "У якій грі є Trevor Philips?",
    "answers": ["GTA IV", "Mafia II", "Watch Dogs", "GTA V"],
    "correct": 3
  },
  {
    "question": "Яка компанія створила Red Dead Redemption 2?",
    "answers": ["Rockstar Games", "Ubisoft", "EA", "Sony"],
    "correct": 0
  },
  {
    "question": "У якій грі є Arthur Morgan?",
    "answers": ["GTA V", "RDR2", "Mafia III", "Skyrim"],
    "correct": 1
  },
  {
    "question": "Яку відому серію ігор створила компанія Ubisoft?",
    "answers": ["GTA", "Halo", "Assassin's Creed", "Mario"],
    "correct": 2
  },
  {
    "question": "У якій грі є Ezio Auditore?",
    "answers": ["Assassin's Creed II", "Far Cry 3", "Watch Dogs", "The Division"],
    "correct": 0
  },
  {
    "question": "Яка гра про хакерів від Ubisoft?",
    "answers": ["Far Cry", "Watch Dogs", "Assassin's Creed", "Splinter Cell"],
    "correct": 1
  },
  {
    "question": "Яка компанія створила Far Cry 3?",
    "answers": ["EA", "Valve", "Sony", "Ubisoft"],
    "correct": 3
  },
  {
    "question": "У якій грі є Ваас Монтенегро?",
    "answers": ["Far Cry 5", "Watch Dogs", "Far Cry 3", "GTA V"],
    "correct": 2
  },
  {
    "question": "Яка компанія створила Rainbow Six Siege?",
    "answers": ["Ubisoft", "Valve", "EA", "Sony"],
    "correct": 0
  },
  {
    "question": "Яка компанія створила Halo?",
    "answers": ["Sony", "Microsoft", "Nintendo", "Ubisoft"],
    "correct": 1
  },
  {
    "question": "У якій грі є Master Chief?",
    "answers": ["Destiny 2", "Titanfall 2", "Halo", "Apex Legends"],
    "correct": 2
  },
  {
    "question": "Яка компанія створила Call of Duty?",
    "answers": ["Activision", "Ubisoft", "EA", "Sony"],
    "correct": 0
  },
  {
    "question": "У якій грі є Zombies mode?",
    "answers": ["Battlefield", "Valorant", "CS2", "Call of Duty"],
    "correct": 3
  },
  {
    "question": "Яка компанія створила Battlefield?",
    "answers": ["Ubisoft", "EA DICE", "Valve", "Nintendo"],
    "correct": 1
  },
  {
    "question": "Яка компанія створила The Witcher 3?",
    "answers": ["Ubisoft", "EA", "Valve", "CD Projekt Red"],
    "correct": 3
  },
  {
    "question": "У якій грі є Geralt?",
    "answers": ["The Witcher 3", "Skyrim", "Dragon Age", "Diablo IV"],
    "correct": 0
  },
  {
    "question": "Яка компанія створила Cyberpunk 2077?",
    "answers": ["Ubisoft", "CD Projekt Red", "EA", "Valve"],
    "correct": 1
  },
  {
    "question": "Яка компанія створила Elden Ring?",
    "answers": ["Ubisoft", "EA", "FromSoftware", "Valve"],
    "correct": 2
  },
  {
    "question": "У якій грі є Malenia?",
    "answers": ["Dark Souls III", "Sekiro", "Bloodborne", "Elden Ring"],
    "correct": 3
  },
  {
    "question": "Яка компанія створила Dark Souls?",
    "answers": ["FromSoftware", "Ubisoft", "EA", "Sony"],
    "correct": 0
  },
  {
    "question": "У якій грі є Ornstein і Smough?",
    "answers": ["Elden Ring", "Dark Souls", "Sekiro", "Nioh 2"],
    "correct": 1
  },
  {
    "question": "Яка компанія створила Bloodborne?",
    "answers": ["Ubisoft", "EA", "FromSoftware", "Valve"],
    "correct": 2
  },
  {
    "question": "Яка компанія створила Sekiro?",
    "answers": ["Ubisoft", "EA", "Valve", "FromSoftware"],
    "correct": 3
  },
  {
    "question": "Яка компанія створила Nioh?",
    "answers": ["Team Ninja", "Ubisoft", "EA", "Valve"],
    "correct": 0
  },
  {
    "question": "Яка компанія створила Resident Evil?",
    "answers": ["Ubisoft", "Capcom", "EA", "Valve"],
    "correct": 1
  },
  {
    "question": "У якій грі є Leon Kennedy?",
    "answers": ["Silent Hill", "Dead Space", "Resident Evil 4", "Alan Wake"],
    "correct": 2
  },
  {
    "question": "Яка компанія створила Street Fighter?",
    "answers": ["Ubisoft", "EA", "Valve", "Capcom"],
    "correct": 3
  },
  {
    "question": "У якій грі є Ryu?",
    "answers": ["Street Fighter", "Tekken", "Mortal Kombat", "Dead or Alive"],
    "correct": 0
  },
  {
    "question": "Яка компанія створила Tekken?",
    "answers": ["Ubisoft", "Bandai Namco", "EA", "Valve"],
    "correct": 1
  },
  {
    "question": "Яка компанія створила Mortal Kombat?",
    "answers": ["Ubisoft", "EA", "NetherRealm", "Valve"],
    "correct": 2
  },
  {
    "question": "У якій грі є Scorpion?",
    "answers": ["Tekken", "Street Fighter", "SoulCalibur", "Mortal Kombat"],
    "correct": 3
  },
  {
    "question": "Яка компанія створила Overwatch?",
    "answers": ["Blizzard", "Ubisoft", "EA", "Valve"],
    "correct": 0
  },
  {
    "question": "У якій грі є Tracer?",
    "answers": ["Valorant", "Overwatch", "CS2", "Apex Legends"],
    "correct": 1
  },
  {
    "question": "Яка компанія створила Diablo?",
    "answers": ["Ubisoft", "EA", "Blizzard", "Valve"],
    "correct": 2
  },
  {
    "question": "Яка компанія створила StarCraft?",
    "answers": ["Ubisoft", "EA", "Valve", "Blizzard"],
    "correct": 3
  },
  {
    "question": "Яка компанія створила Starfield?",
    "answers": ["Bethesda", "Ubisoft", "EA", "Valve"],
    "correct": 0
  },
  {
    "question": "У якій грі є Dragonborn?",
    "answers": ["Oblivion", "Skyrim", "Morrowind", "Fallout 4"],
    "correct": 1
  },
  {
    "question": "Яка компанія створила Fallout?",
    "answers": ["Ubisoft", "EA", "Bethesda", "Valve"],
    "correct": 2
  },
  {
    "question": "Яка компанія створила DOOM?",
    "answers": ["Ubisoft", "EA", "Valve", "id Software"],
    "correct": 3
  },
  {
    "question": "У якій грі є Doom Slayer?",
    "answers": ["DOOM Eternal", "Quake", "Halo", "Destiny 2"],
    "correct": 0
  },
  {
    "question": "Яка компанія створила Quake?",
    "answers": ["Ubisoft", "id Software", "EA", "Valve"],
    "correct": 1
  },
  {
    "question": "Яка компанія створила Half-Life?",
    "answers": ["Ubisoft", "EA", "Valve", "Sony"],
    "correct": 2
  },
  {
    "question": "У якій грі є Gordon Freeman?",
    "answers": ["Portal", "CS2", "Left 4 Dead", "Half-Life"],
    "correct": 3
  },
  {
    "question": "Яка компанія створила Portal?",
    "answers": ["Valve", "Ubisoft", "EA", "Nintendo"],
    "correct": 0
  },
  {
    "question": "Яка компанія створила Counter-Strike?",
    "answers": ["Ubisoft", "Valve", "EA", "Sony"],
    "correct": 1
  },
  {
    "question": "У якій грі є режим defuse bomb?",
    "answers": ["Valorant", "R6 Siege", "CS2", "Overwatch"],
    "correct": 2
  },
  {
    "question": "Яка компанія створила Valorant?",
    "answers": ["Ubisoft", "EA", "Valve", "Riot Games"],
    "correct": 3
  },
  {
    "question": "Яка компанія створила League of Legends?",
    "answers": ["Riot Games", "Ubisoft", "EA", "Valve"],
    "correct": 0
  },
  {
    "question": "У якій грі є Yasuo?",
    "answers": ["Dota 2", "League of Legends", "Valorant", "CS2"],
    "correct": 1
  },
  {
    "question": "Яка студія створила трилогію культових RPG Mass Effect?",
    "answers": ["Bethesda", "CD Projekt Red", "BioWare", "Ubisoft"],
    "correct": 2
  },
  {
    "question": "У якій грі головним героєм є шериф-кіборг Шепард?",
    "answers": ["Mass Effect", "Dead Space", "Halo", "Cyberpunk 2077"],
    "correct": 0
  },
  {
    "question": "Яка компанія розробила кооперативний зомбі-шутер Left 4 Dead?",
    "answers": ["Epic Games", "Valve", "EA", "Capcom"],
    "correct": 1
  },
  {
    "question": "Хто є головним героєм серії ігор God of War?",
    "answers": ["Thor", "Zeus", "Baldur", "Kratos"],
    "correct": 3
  },
  {
    "question": "Яка внутрішня студія Sony створила God of War (2018) та Ragnarök?",
    "answers": ["Santa Monica Studio", "Naughty Dog", "Insomniac Games", "Sucker Punch"],
    "correct": 0
  },
  {
    "question": "У якій грі ми граємо за Нейтана Дрейка, що шукає скарби?",
    "answers": ["Tomb Raider", "Uncharted", "Far Cry", "Assassin's Creed"],
    "correct": 1
  },
  {
    "question": "Яка компанія створила хітову королівську битву Apex Legends?",
    "answers": ["Infinity Ward", "Epic Games", "Respawn Entertainment", "DICE"],
    "correct": 2
  },
  {
    "question": "З якої ігрової серії походить мемна фраза «War. War never changes»?",
    "answers": ["Call of Duty", "Battlefield", "S.T.A.L.K.E.R.", "Fallout"],
    "correct": 3
  },
  {
    "question": "Яка компанія розробила симулятор виживання Subnautica?",
    "answers": ["Unknown Worlds", "Facepunch Studios", "ReLogic", "Bohemia Interactive"],
    "correct": 0
  },
  {
    "question": "Яка гра пропонує гравцям будувати та автоматизувати заводи на чужій планеті?",
    "answers": ["Satisfactory", "Factorio", "Astroneer", "Space Engineers"],
    "correct": 1
  },
  {
    "question": "Яка українська студія створила серію ігор Metro та S.T.A.L.K.E.R.?",
    "answers": ["Frogwares", "GSC Game World / 4A Games", "Crytek Kyiv", "Best Way"],
    "correct": 1
  },
  {
    "question": "У якій грі головний герой — Сем Фішер, оперативник Третього ешелону?",
    "answers": ["Hitman", "Metal Gear Solid", "Splinter Cell", "Ghost Recon"],
    "correct": 2
  },
  {
    "question": "Яка компанія є творцем легендарної серії стелс-екшенів Metal Gear?",
    "answers": ["Capcom", "Square Enix", "Sega", "Konami"],
    "correct": 3
  },
  {
    "question": "Хто є геймдизайнером Death Stranding та Metal Gear Solid?",
    "answers": ["Хідео Кодзіма", "Хідетака Міядзакі", "Сем Лейк", "Тодд Говард"],
    "correct": 0
  },
  {
    "question": "Яка фінська студія створила Max Payne, Alan Wake та Control?",
    "answers": ["Rovio", "Remedy Entertainment", "Housemarque", "Frozenbyte"],
    "correct": 1
  },
  {
    "question": "У якій грі ми граємо за агента 47, професійного кілера зі штрих-кодом на потилиці?",
    "answers": ["Max Payne", "Splinter Cell", "Hitman", "Mafia"],
    "correct": 2
  },
  {
    "question": "Яка компанія створила серію космічних хорорів Dead Space?",
    "answers": ["Capcom", "Konami", "Bloober Team", "EA Visceral Games"],
    "correct": 3
  },
  {
    "question": "Хто є головним героєм (інженером) у грі Dead Space?",
    "answers": ["Айзек Кларк", "Гордон Фрімен", "Джон Шіпхард", "Кріс Редфілд"],
    "correct": 0
  },
  {
    "question": "Яка гра стала найкращою грою року (Game of the Year) у 2023 році?",
    "answers": ["Alan Wake 2", "Baldur's Gate 3", "Zelda: Tears of the Kingdom", "Spider-Man 2"],
    "correct": 1
  },
  {
    "question": "Яка бельгійська студія розробила Baldur's Gate 3 та Divinity: Original Sin?",
    "answers": ["BioWare", "Obsidian Entertainment", "Larian Studios", "Bethesda"],
    "correct": 2
  },
  {
    "question": "Яка популярна 2D-пісочниця з копанням та босами часто називається «2D Minecraft»?",
    "answers": ["Starbound", "Don't Starve", "Stardew Valley", "Terraria"],
    "correct": 3
  },
  {
    "question": "Яка студія створила ігри Cuphead, відому своєю графікою в стилі мультфільмів 1930-х?",
    "answers": ["Studio MDHR", "Team Cherry", "Moon Studios", "Supergiant Games"],
    "correct": 0
  },
  {
    "question": "У якій метроїдванії ми граємо за маленького жука-лицаря в підземному королівстві?",
    "answers": ["Ori and the Blind Forest", "Hollow Knight", "Dead Cells", "Blasphemous"],
    "correct": 1
  },
  {
    "question": "Яка студія створила міфологічний роуглайк Hades?",
    "answers": ["Mega Crit", "Motion Twin", "Supergiant Games", "Red Hook Studios"],
    "correct": 2
  },
  {
    "question": "Яка гра популяризувала жанр автосимуляторів та має відкритий світ на базі реальних країн (Мексика, Британія)?",
    "answers": ["Need for Speed", "The Crew", "Gran Turismo", "Forza Horizon"],
    "correct": 3
  },
  {
    "question": "Яка компанія розробила кінематографічну гру The Last of Us?",
    "answers": ["Naughty Dog", "Insomniac Games", "Sucker Punch", "Santa Monica Studio"],
    "correct": 0
  },
  {
    "question": "Хто є головними героями першої частини The Last of Us?",
    "answers": ["Нейтан і Олена", "Джоел і Еллі", "Кратос і Атрей", "Артур і Джон"],
    "correct": 1
  },
  {
    "question": "Яка гра про детективів та мафію у вигаданому місті Нью-Боредо або Лост-Хевен?",
    "answers": ["GTA", "L.A. Noire", "Mafia", "Sleeping Dogs"],
    "correct": 2
  },
  {
    "question": "Яка компанія створила командний тактичний шутер Valorant?",
    "answers": ["Valve", "Blizzard", "Epic Games", "Riot Games"],
    "correct": 3
  },
  {
    "question": "Яка гра є найпопулярнішою MOBA у світі поряд з League of Legends?",
    "answers": ["Dota 2", "Smite", "Heroes of the Storm", "Mobile Legends"],
    "correct": 0
  }



        
    ];

    const startScreen = document.querySelector('#start-screen');
    const quizScreen = document.querySelector('#quiz-screen');
    const resultScreen = document.querySelector('#result-screen');

    const startBtn = document.querySelector('#start-btn');
    const restartBtn = document.querySelector('#restart-btn');

    const questionText = document.querySelector('#question-text');
    const answersContainer = document.querySelector('#answers-container');
    const resultText = document.querySelector('#result-text');

    const timerDisplay = document.querySelector('#timer');

    let questionIndex = 0;
    let score = 0;

    let timer = 15;
    let interval;

    function startTimer() {
        clearInterval(interval);

        timer = 15;
        timerDisplay.innerText = `Час: ${timer}`;

        interval = setInterval(() => {
            timer--;

            timerDisplay.innerText = `Час: ${timer}`;

            if (timer <= 0) {
                clearInterval(interval);
                nextQuestion();
            }
        }, 1000);
    }

    function showQuestion(question) {

        startTimer();

        answersContainer.innerHTML = "";
        questionText.innerText = question.question;

        question.answers.forEach((answer, i) => {

            const button = document.createElement('button');

            button.innerText = answer;
            button.classList.add('answer-btn');

            button.addEventListener('click', () => {
                checkAnswer(button, i);
            });

            answersContainer.appendChild(button);
        });
    }

    function checkAnswer(button, i) {

        clearInterval(interval);

        const correctIndex = questions[questionIndex].correct;

        if (i === correctIndex) {
            score++;
            button.classList.add('correct');
        } else {
            button.classList.add('wrong');
        }

        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.disabled = true;

            if (
                questions[questionIndex].answers.indexOf(btn.innerText)
                === correctIndex
            ) {
                btn.classList.add('correct');
            }
        });

        setTimeout(nextQuestion, 1000);
    }

    function nextQuestion() {

        questionIndex++;

        if (questionIndex < questions.length) {
            showQuestion(questions[questionIndex]);
        } else {
            showResult();
        }
    }

    function showResult() {

        const accuracy =
            Math.round((score / questions.length) * 100);

        resultText.innerText =
            `Твій результат: ${score}/${questions.length} (${accuracy}%)`;

        quizScreen.classList.add('hide');
        resultScreen.classList.remove('hide');
    }

    function startGame() {

        questionIndex = 0;
        score = 0;

        startScreen.classList.add('hide');
        resultScreen.classList.add('hide');
        quizScreen.classList.remove('hide');

        showQuestion(questions[questionIndex]);
    }

    startBtn.addEventListener('click', startGame);
    restartBtn.addEventListener('click', startGame);

});
