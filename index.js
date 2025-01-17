const sc = document.querySelector("#sc");
const mn = document.querySelector("#mn");
const cl = document.querySelector("#cl");
const cBack = document.querySelector("#cyber_back");
const sBack = document.querySelector("#steam_back");
const zagolovok = document.querySelector(".zagolovok");
const cBackCont = document.querySelector(".cyber_back_container");
const sBackCont = document.querySelector(".steam_back_container");
const cyber = document.querySelectorAll(".cyber");
const steem = document.querySelectorAll(".steem");
const bt15 = document.querySelector("#bt15");
const bt16 = document.querySelector("#bt16");
const bt17 = document.querySelector("#bt17");
const bt18 = document.querySelector("#bt18");
const bt19 = document.querySelector("#bt19");
const bt20 = document.querySelector("#bt20");
const bt21 = document.querySelector("#bt21");
const bt22 = document.querySelector("#bt22");
const cImg = document.querySelector(".cImage");
const cA = document.querySelector(".cyber_a");
const cAP = document.querySelector(".cyber_a_p");
const cP = document.querySelector(".c_paragraph");
const sImg = document.querySelector(".sImage");
const sA = document.querySelector(".steam_a");
const sAP = document.querySelector(".steam_a_p");
const sP = document.querySelector(".s_paragraph");
const lang = document.querySelector(".lang");
const text = document.querySelector(".text");
const li1 = document.querySelector(".li1");
const li2 = document.querySelector(".li2");
const li3 = document.querySelector(".li3");
const tS = document.querySelector(".text_steem");
const tC = document.querySelector(".text_cyber");
const oblast = document.querySelector(".oblast");
const h_footer = document.querySelector(".h_footer");
const pamyatnik1s = document.querySelector(".pamyatnik1>span");
const pamyatnik2s = document.querySelector(".pamyatnik2>span");
const pamyatnik3s = document.querySelector(".pamyatnik3>span");
const pamyatnik4s = document.querySelector(".pamyatnik4>span");
const pamyatnik5s = document.querySelector(".pamyatnik5>span");
const pamyatnik6s = document.querySelector(".pamyatnik6>span");
const pamyatnik7s = document.querySelector(".pamyatnik7>span");
const pamyatnik8s = document.querySelector(".pamyatnik8>span");
const pamyatnik9s = document.querySelector(".pamyatnik9>span");
const pamyatnik10s = document.querySelector(".pamyatnik10>span");
const pamyatnik11s = document.querySelector(".pamyatnik11>span");
const pamyatnik12s = document.querySelector(".pamyatnik12>span");
const pamyatnik13s = document.querySelector(".pamyatnik13>span");
const pamyatnik14s = document.querySelector(".pamyatnik14>span");
const pamyatnik15s = document.querySelector(".pamyatnik15>span");
const pamyatnik16s = document.querySelector(".pamyatnik16>span");
const pamyatnik17s = document.querySelector(".pamyatnik17>span");
const pamyatnik18s = document.querySelector(".pamyatnik18>span");
const pamyatnik19s = document.querySelector(".pamyatnik19>span");
const pamyatnik20s = document.querySelector(".pamyatnik20>span");
const pamyatnik21s = document.querySelector(".pamyatnik21>span");
const pamyatnik22s = document.querySelector(".pamyatnik22>span");
const pamyatnik23s = document.querySelector(".pamyatnik23>span");
const pamyatnik24s = document.querySelector(".pamyatnik24>span");
const pamyatnik1 = document.querySelector(".pamyatnik1");
const pamyatnik2 = document.querySelector(".pamyatnik2");
const pamyatnik3 = document.querySelector(".pamyatnik3");
const pamyatnik4 = document.querySelector(".pamyatnik4");
const pamyatnik5 = document.querySelector(".pamyatnik5");
const pamyatnik6 = document.querySelector(".pamyatnik6");
const pamyatnik7 = document.querySelector(".pamyatnik7");
const pamyatnik8 = document.querySelector(".pamyatnik8");
const pamyatnik9 = document.querySelector(".pamyatnik9");
const pamyatnik10 = document.querySelector(".pamyatnik10");
const pamyatnik11 = document.querySelector(".pamyatnik11");
const pamyatnik12 = document.querySelector(".pamyatnik12");
const pamyatnik13 = document.querySelector(".pamyatnik13");
const pamyatnik14 = document.querySelector(".pamyatnik14");
const pamyatnik15 = document.querySelector(".pamyatnik15");
const pamyatnik16 = document.querySelector(".pamyatnik16");
const pamyatnik17 = document.querySelector(".pamyatnik17");
const pamyatnik18 = document.querySelector(".pamyatnik18");
const pamyatnik19 = document.querySelector(".pamyatnik19");
const pamyatnik20 = document.querySelector(".pamyatnik20");
const pamyatnik21 = document.querySelector(".pamyatnik21");
const pamyatnik22 = document.querySelector(".pamyatnik22");
const pamyatnik23 = document.querySelector(".pamyatnik23");
const pamyatnik24 = document.querySelector(".pamyatnik24");
const clCyber = document.querySelector(".clock_cyber");
const clSteam = document.querySelector(".clock_steam");
const clCenter = document.querySelector(".clock_center");
const t1 = document.querySelector(".title1");
const t2 = document.querySelector(".title2");
const vern = document.querySelectorAll(".vern");
const oC = document.querySelector(".oblast_cyber");
const wrap = document.querySelector(".wrapper");
const hero = document.querySelector(".hero");
const modal_text = document.querySelector(".modal_text>p");
const nameHero = document.querySelector(".nameHero");
const modal = document.getElementById("myModal");
let modal_content = document.querySelector(".modal-content");
const footerr = document.querySelector(".o_nas");
let StateNumber = 0;
let slider = document.querySelector(".slider");
const huian = document.querySelector(".close");
const cHuian = document.querySelector(".cClose");
isPrompt = false;
const images = document.querySelectorAll(".slider img");
let modal_arrows = document.querySelector(".modal_arrows");
let currentIndex = 0;
let isRealHero = false;
realHeroPath = "";
futureHeroPath = "";
const war = document.querySelectorAll(".war");
const med = document.querySelectorAll(".med");
const science = document.querySelectorAll(".science");
const sport = document.querySelectorAll(".sport");
const econom = document.querySelectorAll(".econom");
const other = document.querySelectorAll(".other");
let sound = "";
const changeCentryBtn1 = document.querySelector('.changeCentry1');
const changeCentryBtn2 = document.querySelector('.changeCentry2');
let currentOblast = "";


// Списки элементов категорий
const categories = {
  science: document.querySelectorAll(".science"),
  med: document.querySelectorAll(".med"),
  war: document.querySelectorAll(".war"),
  econom: document.querySelectorAll(".econom"),
  sport: document.querySelectorAll(".sport"),
  other: document.querySelectorAll(".other"),
};

// Универсальная функция для переключения категорий
function showCategory(categoryToShow,e=null) {

  document.querySelectorAll(".filter>button").forEach((el)=>{
    el.classList.add("filter_btn")
      el.classList.remove("filter_btn_active")
  })
  e.target.classList.remove("filter_btn")
  e.target.classList.add("filter_btn_active")
  for (const category in categories) 
    categories[category].forEach((item) => {
      if (category === categoryToShow) {
        item.style.transition =
          "opacity 1.5s ease-in-out, visibility 0s linear 0.3s";
        item.style.opacity = "1";
        item.style.visibility = "visible";
      } else {
        item.style.transition = "opacity 0.3s ease, visibility 0s linear 0s";
        item.style.opacity = "0";
        item.style.visibility = "hidden";
      }
    });
  }


// Функция для отображения всех категорий
function showAllCategories(e) {

  document.querySelectorAll(".filter>button").forEach((el)=>{
    el.classList.add("filter_btn")
      el.classList.remove("filter_btn_active")
  })
  e.target.classList.remove("filter_btn")
  e.target.classList.add("filter_btn_active")
  for (const category in categories) {
    categories[category].forEach((item) => {
      item.style.visibility = "visible";
      item.style.transition = "opacity 0.3s ease, visibility 0s linear 0s";
      item.style.opacity = "1";
    });
  }
}

// Назначение обработчиков для кнопок категорий
document.querySelectorAll(".scienceb").forEach((button) => {
  button.addEventListener("click", (e) => showCategory("science",e));
});

document.querySelectorAll(".medb").forEach((button) => {
  button.addEventListener("click", (e) => showCategory("med",e));
});

document.querySelectorAll(".warb").forEach((button) => {
  button.addEventListener("click", (e) => showCategory("war",e));
});

document.querySelectorAll(".economb").forEach((button) => {
  button.addEventListener("click", (e) => showCategory("econom",e));
});

document.querySelectorAll(".sportb").forEach((button) => {
  button.addEventListener("click", (e) => showCategory("sport",e));
});

document.querySelectorAll(".otherb").forEach((button) => {
  button.addEventListener("click", (e) => showCategory("other",e));
});

// Назначение обработчика для кнопки Show All
document.querySelectorAll(".showAll").forEach((button) => {
  button.addEventListener("click", (el) => showAllCategories(el));
});


function setActiveMicro(switch1){
  if(switch1){
document.querySelector(".micro").src="./img/micro_active.png"
  }else{
    document.querySelector(".micro").src="./img/micro.png"
  }
}

function micro(){
  playSound(sound)
}

let played = false; // Переменная состояния воспроизведения
let audio = null;   // Глобальная переменная для аудиообъекта

function playSound(modalSound) {
  // Проверяем, передан ли путь к звуку
  if (!modalSound) {
    console.error('Не указан источник звука');
    return;
  }

  // Если аудио ещё не создано, создаём новый объект
  if (!audio) {
    audio = new Audio(modalSound);
    audio.addEventListener('error', () => {
      console.error('Ошибка загрузки звука');
    });
  }

  // Проверяем, воспроизводится ли звук
  if (!audio.paused) {
    // Если звук воспроизводится, останавливаем и очищаем объект
    audio.pause();
    setActiveMicro(false)
    audio = null; // Очищаем объект для освобождения ресурсов
    console.log('Аудио остановлено и очищено');
  } else {
    // Если звук не воспроизводится, начинаем с начала
    audio.currentTime = 0; // Устанавливаем позицию воспроизведения на начало
    audio.play()
      .then(() => {
        setActiveMicro(true)
        console.log('Аудио воспроизводится');
      })
      .catch(err => console.error('Ошибка воспроизведения:', err));
  }
}



function changeHeroImage() {
  if (isRealHero) {
    modal_arrows.style.transform = "rotate(0deg)";

    hero.src = futureHeroPath;
  } else {
    modal_arrows.style.transform = "rotate(180deg)";
    hero.src = realHeroPath;
  }
  isRealHero = !isRealHero;
}

function showImage(index) {
  images[currentIndex].classList.remove("active");
  images[index].classList.add("active");
  currentIndex = index;
}

document.querySelector(".slider").addEventListener("click", function (event) {
  if (event.target.classList.contains("prev")) {
    let index = currentIndex - 1;
    if (index < 0) {
      index = images.length - 1;
    }
    showImage(index);
  } else if (event.target.classList.contains("next")) {
    let index = currentIndex + 1;
    if (index >= images.length) {
      index = 0;
    }
    showImage(index);
  }
});

document.addEventListener("keydown", (e) => {
  if ((e.key = "Escape")) {
    modal.style.display = "none";
    isRealHero = false;
   
   if(audio){ if (!audio.paused) {
      // Если звук воспроизводится, останавливаем и очищаем объект
      audio.pause();
      setActiveMicro(false)
      audio = null; // Очищаем объект для освобождения ресурсов
      console.log('Аудио остановлено и очищено');
    }
  }
    modal_arrows.style.transform = "rotate(0deg)";
  }
  if (e.key == 2) {
    StateNumber = 3;
    clCenter.style.display = "none";
    clCyber.style.display = "block";
    clSteam.style.display = "block";
    cl.click();
  }
  if (e.key == 1) {
    StateNumber = 2;
    clCenter.style.display = "block";
    clCyber.style.display = "none";
    clSteam.style.display = "none";
    cl.click();
  }
  if (e.key == 3) {
    StateNumber = 1;
    clCenter.style.display = "block";
    clCyber.style.display = "none";
    clSteam.style.display = "none";
    cl.click();
  }
});
showImage(currentIndex);

// Когда пользователь нажимает на кнопку, откройте модальный
function setModal(text, label, img1, img2, heroSound) {
  if (isPrompt == false) {
    futureHeroPath = img1;
    realHeroPath = img2;
    modal.style.display = "block";
    slider.style.display = "none";
    modal_text.innerHTML = text;
    nameHero.innerHTML = label;
    modal_content.style.visibility = "visible";
    hero.src = futureHeroPath;
    sound = heroSound;
  } else {
    modal.style.display = "block";
    slider.style.display = "block";
    modal_content.style.visibility = "hidden";
    isPrompt = false;
  }
}



function marinaModal() {
  modal_arrows.style.display = 'block'
  if (!langChange) {
    setModal(
      "Родилась 14 сентября 1990 года в Минске, в рабочей семье, отец и мать работали дворниками. Окончила среднюю школу № 151 в Минске. После окончания школы профессионально занималась бальными танцами. В 2010—2011 годах работала в Минском отделении Белорусской железной дороги, в 2011 году — в компании с дополнительной ответственностью «Сатурн-2», занимавшейся оптовой торговлей продуктами питания. С 2012 года заочно училась на экономическом факультете Минского инновационного университета по специальности «менеджмент (информационный)». В 2013—2015 годах работала в ООО «Мариана Инвест», которое занималось розничной торговлей колбасными изделиями и копченостями. С 2017 года работала бортпроводницей-инструктором авиакомпании «Белавиа» и летала в составе экипажей пассажирских самолётов Boeing и Embraer. ",
      "Марина Василевская",
      "img/marina.jpg",
      "./img/марина василевская.jpg",
      'sound/marina.mp3'
    );
  } else {
    setModal(
      "Нарадзілася 14 верасня 1990 года ў Мінску, у рабочай сям'і, бацька і маці працавалі дворнікамі. Скончыла сярэднюю школу № 151 у Мінску. Пасля заканчэння школы прафесійна займалася бальнымі танцамі. У 2010-2011 гадах працавала ў Мінскім аддзяленні Беларускай чыгункі, у 2011 годзе — у кампаніі з дадатковай адказнасцю «Сатурн-2», якая займалася аптовым гандлем прадуктамі харчавання. З 2012 года завочна вучылася на эканамічным факультэце Мінскага інавацыйнага ўніверсітэта па спецыяльнасці «менеджмент (інфармацыйны)». У 2013-2015 гадах працавала ў ТАА «Мар'яна Інвест», якое займалася рознічным гандлем каўбаснымі вырабамі і вэнджанінай. З 2017 года працавала бортправадніцай-інструктарам авіякампаніі «Белавія» і лётала ў складзе экіпажаў пасажырскіх самалётаў Boeing і Embraer.",
      "Марына Васілеўская",
      "img/marina.jpg",
      "./img/марина василевская.jpg",
      'sound/marina.mp3'
    );
  }
}

function talaiModal() {
  modal_arrows.style.display = 'block'
  if (!langChange) {
    setModal(
      'Алексей Талай, выдающийся белорусский биатлонист, родился 18 декабря 1984 года. Его впечатляющая спортивная карьера принесла ему многочисленные награды и признание как на национальном, так и на международном уровне. Коронной дисциплиной Талая является индивидуальная гонка, в которой он стал чемпионом мира в 2012 году. На Олимпийских играх он дважды завоевывал медали: серебро в смешанной эстафете в 2014 году и бронзу в индивидуальной гонке в 2010 году. Кроме того, Талай является многократным чемпионом Европы и победителем этапов Кубка мира. За свои спортивные достижения Талай был удостоен звания заслуженного мастера спорта России и государственной премии Республики Беларусь. В 2014 году он был награжден орденом Почета, а в 2012 году - медалью "За трудовые заслуги".Помимо спортивной карьеры, Талай активно участвует в общественной жизни. Он является членом Белорусской федерации биатлона, послом доброй воли Международной федерации биатлона и участвует в благотворительных проектах и спортивных мероприятиях для детей и молодежи. Своим талантом и преданностью спорту Алексей Талай стал одним из самых успешных и узнаваемых биатлонистов в мире.',
      "Алексей Константинович Талай",
      "img/талаш.jpg",
      "./img/талай_реальный.jpg",
      'sound/talai.mp3'
    );
  } else {
    setModal(
      "Аляксей Талай, выбітны беларускі біятланіст, нарадзіўся 18 снежня 1984 года. Ягоная ўражлівая спартовая кар'ера прынесла яму шматлікія ўзнагароды і прызнанне як на нацыянальным, так і на міжнародным узроўні.Кароннай дысцыплінай Талая з'яўляецца індывідуальная гонка, у якой ён стаў чэмпіёнам свету ў 2012 годзе. На Алімпійскіх гульнях ён двойчы заваёўваў медалі: серабро ў змешанай эстафеце ў 2014 годзе і бронзу ў індывідуальнай гонцы ў 2010 годзе. Акрамя таго, Тала з'яўляецца шматразовым чэмпіёнам Еўропы і пераможцам этапаў Кубка свету.  За свае спартыўныя дасягненні Талай быў удастоены звання заслужанага майстра спорту Расіі і дзяржаўнай прэміі Рэспублікі Беларусь. У 2014 годзе ён быў узнагароджаны ордэнам Пашаны, а ў 2012 годзе - медалём \"За працоўныя заслугі\".Акрамя спартыўнай кар'еры, Талай актыўна ўдзельнічае ў грамадскім жыцці. Ён з'яўляецца членам Беларускай федэрацыі біятлона, паслом добрай волі Міжнароднай федэрацыі біятлона і ўдзельнічае ў дабрачынных праектах і спартыўных мерапрыемствах для дзяцей і моладзі. Сваім талентам і адданасцю спорту Аляксей Талай стаў адным з самых паспяховых і вядомых біятланістаў у свеце.",
      "Аляксей Канстанцінавіч Талай",
      "img/талаш.jpg",
      "./img/талай_реальный.jpg",
      'sound/talai.mp3'
    );
  }
}

function kisliModal() {
  modal_arrows.style.display = 'block'
  if (!langChange) {
    setModal(
      "основатель и генеральный директор компании Wargaming, известной благодаря разработке игр, включая всемирно популярную World of Tanks. Виктор начинал с небольшой команды разработчиков, но сумел превратить проект в международный успех, привлекая миллионы игроков со всего мира. Wargaming стала одной из крупнейших игровых компаний, а Виктор поддерживает IT-инициативы и образовательные проекты в Беларуси, развивая игровую индустрию и IT-культуру в стране.",
      "Виктор Кислый",
      "img/кислыйjpg.jpg",
      "./img/кислый_реальный.jpg",
      'sound/kisly.wav'
    );
  } else {
    setModal(
      "заснавальнік і генеральны дырэктар кампаніі Wargaming, вядомай дзякуючы распрацоўцы гульняў, уключаючы сусветна папулярную World Of Tanks. Віктар пачынаў з невялікай каманды распрацоўшчыкаў, але здолеў ператварыць праект у міжнародны поспех, прыцягваючы мільёны гульцоў з усяго свету. Wargaming стала адной з найбуйнейшых гульнявых кампаній, а Віктар падтрымлівае IT-ініцыятывы і адукацыйныя праекты ў Беларусі, развіваючы гульнявую індустрыю і IT-культуру ў краіне.",
      "Віктар Кіслы",
      "img/кислыйjpg.jpg",
      "./img/кислый_реальный.jpg",
      'sound/kisly.wav'
    );
  }
}
function mrochekModal() {
  modal_arrows.style.display = 'block'
  if (!langChange) {
    setModal(
      'известный белорусский кардиолог, возглавляющий республиканский научно-практический центр "Кардиология". Под его руководством центр стал одним из ведущих в области кардиохирургии и кардиологии в Восточной Европе. Александр и его команда разработали и внедрили инновационные методы диагностики и лечения сердечно-сосудистых заболеваний, включая роботизированные системы для операций. Он активно работает над улучшением качества медицинских услуг и подготовкой новых специалистов',
      "Александр Мрочек",
      "./img/кибер_мрочек.webp",
      "./img/мрочек.jpg",
      'sound/mrochak.wav'
    );
  } else {
    setModal(
      'вядомы беларускі кардыёлаг, які ўзначальвае Рэспубліканскі навукова-практычны цэнтр "Кардыялогія". Пад яго кіраўніцтвам цэнтр стаў адным з вядучых у галіне кардыяхірургіі і кардыялогіі ва Усходняй Еўропе. Аляксандр і яго каманда распрацавалі і ўкаранілі інавацыйныя метады дыягностыкі і лячэння сардэчна-сасудзістых захворванняў, у тым ліку рабатызаваных сістэмы для аперацый. Ён актыўна працуе над паляпшэннем якасці медыцынскіх паслуг і падрыхтоўкай новых спецыялістаў',
      "Аляксандр Мрочак",
      "./img/кибер_мрочек.webp",
      "./img/мрочек.jpg",
      'sound/mrochak.wav'
    );
  }
}
function gurskiModal() {
  modal_arrows.style.display = 'block'
  if (!langChange) {
    setModal(
      "соучредитель компании Flo Health, создавшей одно из самых популярных приложений для женского здоровья, использующее алгоритмы машинного обучения для персонализации рекомендаций. Flo Health помогает женщинам отслеживать свой цикл, прогнозировать овуляцию и улучшать здоровье, предлагая научные советы. Дмитрий внес большой вклад в разработку цифровых медицинских решений и привлечение международных инвестиций, что укрепило позиции Беларуси как центра инноваций в сфере цифрового здоровья",
      "Дмитрий Гурский",
      "img/кибер_гурский.webp",
      "img/гурский.jpg",
      'sound/gursci.wav'
    );
  } else {
    setModal(
      "сузаснавальнік кампаніі Flo Health, якая стварыла адно з самых папулярных прыкладанняў для жаночага здароўя, якое выкарыстоўвае алгарытмы машыннага навучання для персаналізацыі рэкамендацый. Flo Health дапамагае жанчынам адсочваць свой цыкл, прагназаваць авуляцыю і паляпшаць здароўе, прапануючы навуковыя парады. Дзмітрый унёс вялікі ўклад у распрацоўку лічбавых медыцынскіх рашэнняў і прыцягненне міжнародных інвестыцый, што ўмацавала пазіцыі Беларусі як цэнтра інавацый у сферы лічбавага здароўя.",
      "Дзмітрый Гурскі",
      "img/кибер_гурский.webp",
      "img/гурский.jpg",
      'sound/gursci.wav'
    );
  }
}
function nichiModal() {
  modal_arrows.style.display = 'block'
  if (!langChange) {
    setModal(
      "Родился 17 октября 1987 года в Поставах в семье военного лётчика-снайпера Владимира Ничипорчика. Отец 33 года своей жизни посвятил небу. Он занимался формированием пилотажной группы ВВС и войск ПВО «Белая Русь». Мама – учитель в начальной школе. Будущий герой с детства мечтал стать лётчиком.В третьем классе Андрей поступил в девятую лидскую школу. Представлял учебное заведение на различных спортивных соревнованиях, хорошо знал английский язык. В 2005 году окончил её. Затем будущий летчик поступил на авиационный факультет Военной академии Республики Беларусь.С 2016 года служил инструктором – готовил к полётам на Як-130 молодых пилотов. С 2017 года принимал участие в воздушных парадах, демонстрационных полётах. Неоднократно участвовал в учениях и международных конкурсах в Беларуси и за рубежом. За свою службу освоил Як-52, Л-39, Су-25, Як-130.",
      "Андрей Ничипорчик",
      "img/летчик.jpg",
      "./img/nichi.jpg",
      'sound/nichiporchik.wav'
    );
  } else {
    setModal(
      "Нарадзіўся 17 кастрычніка 1987 года ў Паставах у сям'і ваеннага лётчыка-снайпера Уладзіміра Нічыпорчыка. Бацька 33 гады свайго жыцця прысвяціў небе. Ён займаўся фарміраваннем пілатажнай групы ВПС і войскаў СПА «Белая Русь». Мама-настаўнік у пачатковай школе. Будучы герой з дзяцінства марыў стаць лётчыкам.У трэцім класе Андрэй паступіў у дзевятую Лідскую школу. Прадстаўляў навучальную ўстанову на розных спартыўных спаборніцтвах, добра ведаў англійскую мову. У 2005 годзе скончыў яе. Затым будучы лётчык паступіў на авіяцыйны факультэт Ваеннай акадэміі Рэспублікі Беларусь.З 2016 года служыў інструктарам – рыхтаваў да палётаў на Як-130 маладых пілотаў. З 2017 года прымаў удзел у паветраных парадах, дэманстрацыйных палётах. Неаднаразова ўдзельнічаў у вучэннях і міжнародных конкурсах у Беларусі і за мяжой. За сваю службу асвоіў Як-52, Л-39, Су-25, Як-130.",
      "Андрэй Нічыпарчык",
      "img/летчик.jpg",
      "./img/nichi.jpg",
      'sound/nichiporchik.wav'
    );
  }
}

function domrachevaModal() {
  modal_arrows.style.display = 'block'
  if (!langChange) {
    setModal(
      "Дарья Домрачева родилась 3 августа 1986 года. Белорусская биатлонистка, олимпийская чемпионка. Участница трёх Олимпиад. В Ванкувере 2010 года завоевала бронзовую медаль, в Сочи 2014 года — три золотые медали. В Пхёнчхане 2018 года выиграла серебро в масс-старте и золото в эстафете. После рождения дочери в 2016 году вернулась в спорт и завершила карьеру в 2018 году..",
      "Дарья Домрачева",
      "img/cyber_domracheva.webp",
      "./img/domracheva.jpg",
      'sound/domracheva.wav'
    );
  } else {
    setModal(
      "Дар'я Домрачава нарадзілася 3 жніўня 1986 года. Беларуская біятланістка, алімпійская чэмпіёнка. Удзельніца трох Алімпіяд. У Ванкуверы 2010 года заваявала бронзавы медаль, у Сочы 2014 года — тры залатыя медалі. У Пхёнчхане 2018 года выйграла срэбра ў мас-старце і золата ў эстафеце. Пасля нараджэння дачкі ў 2016 годзе вярнулася ў спорт і завяршыла кар'еру ў 2018 годзе..",
      "Дар'я Домрачава",
      "img/cyber_domracheva.webp",
      "./img/domracheva.jpg",
      'sound/domracheva.wav'
    );
  }
}

function cyperModal() {
  modal_arrows.style.display = 'block'
  if (!langChange) {
    setModal(
      "Алла Цупер родилась 28 декабря 1983 года. Белорусская фристайлистка, олимпийская чемпионка. Обладательница Кубка мира по фристайлу в акробатике сезона 2001/02, в общем зачёте заняла второе место. В сезоне 2000/01 была второй в зачёте акробатики, в 2007/08 — третьей. За карьеру выиграла 8 этапов Кубка мира. На Олимпийских играх в Сочи 2014 года, несмотря на трудности в квалификации, стала олимпийской чемпионкой в акробатике, выполнив сложный прыжок и опередив конкуренток.",
      "Алла Цупер",
      "img/cyber_cyper.webp",
      "./img/cyper.jpg",
      'sound/cyper.wav'
    );
  } else {
    setModal(
      "Ала Цупер нарадзілася 28 снежня 1983 года. Беларуская фрыстайлістка, алімпійская чэмпіёнка. Уладальніца Кубка свету па фрыстайле ў акрабатыцы сезона 2001/02, у агульным заліку заняла другое месца. У сезоне 2000/01 была другой у заліку акрабатыкі, у 2007/08 — трэцяй. За кар'еру выйграла 8 этапаў Кубка свету. На Алімпійскіх гульнях у Сочы 2014 года, нягледзячы на цяжкасці ў кваліфікацыі, стала алімпійскай чэмпіёнкай у акрабатыцы, выканаўшы складаны скачок і апярэдзіўшы канкурэнтак.",
      "Ала Цупер",
      "img/cyber_cyper.webp",
      "./img/cyper.jpg",
      'sound/cyper.wav'
    );
  }
}

function kushnirModal() {
  modal_arrows.style.display = 'block'
  if (!langChange) {
    setModal(
      "Антон Кушнир родился 27 октября 1989 года. Белорусский фристайлист, олимпийский чемпион. Участник Олимпийских игр 2006 и 2010 годов. На Олимпиаде в Ванкувере 2010 года, несмотря на лидерство после первого прыжка, неудачно приземлился во втором и не смог пройти в финал. В 2013 году выиграл бронзу на чемпионате мира в Дир-Вэлли, но пропустил чемпионат мира 2013 года из-за травм. На Олимпийских играх 2014 года в Сочи стал олимпийским чемпионом в лыжной акробатике, выполнив сложнейший тройной сальто с пятью пируэтами и набрав 134,5 балла, что стало рекордом Олимпиады.",
      "Антон Кушнир",
      "img/cyber_kyshnir.webp",
      "./img/kushnir.jpg",
      'sound/kushnir.wav'
    );
  } else {
    setModal(
      "Антон Кушнір нарадзіўся 27 кастрычніка 1989 года. Беларускі фрыстайліст, алімпійскі чэмпіён. Удзельнік Алімпійскіх гульняў 2006 і 2010 гадоў. На Алімпіядзе ў Ванкуверы 2010 года, нягледзячы на лідарства пасля першага скачка, няўдала прызямліўся ў другім і не змог прайсці ў фінал. У 2013 годзе выйграў бронзу на чэмпіянаце свету ў дыр-Вэлі, але прапусціў чэмпіянат свету 2013 года з-за траўмаў. На Алімпійскіх гульнях 2014 года ў Сочы стаў алімпійскім чэмпіёнам у лыжнай акрабатыцы, выканаўшы найскладанейшы патройны сальта з пяццю піруэтамі і набраўшы 134,5 бала, што стала рэкордам Алімпіяды.",
      "Антон Кушнір",
      "img/cyber_kyshnir.webp",
      "./img/kushnir.jpg",
      'sound/kushnir.wav'
    );
  }
}
function goncharovModal() {
  modal_arrows.style.display = 'block'
  if (!langChange) {
    setModal(
      "Владислав Гончаров родился 15 марта 1990 года. Белорусский прыгун в воду, олимпийский чемпион. На чемпионате мира 2013 года в индивидуальных соревнованиях занял 8-е место, а в синхронных прыжках — 6-е место. На чемпионате Европы 2014 года в Гимарайнш завоевал золото в индивидуальных прыжках и бронзу в командных, а также пятое место в синхронных прыжках. На чемпионате мира 2014 года в Дейтона-Бич стал серебряным призёром в синхронных прыжках и бронзовым в индивидуальных. Серебряный призёр Европейских игр 2015 года в Баку в индивидуальных и синхронных прыжках. В том же году на чемпионате мира в Оденсе завоевал серебро в индивидуальных и синхронных прыжках и бронзу в командных соревнованиях. На чемпионате Европы 2016 года в Вальядолиде выиграл золото в индивидуальных и синхронных прыжках и серебро в командных соревнованиях. На Олимпийских играх 2016 года в Рио-де-Жанейро завоевал золотую медаль в индивидуальных прыжках, став единственным олимпийским чемпионом для Белоруссии на этих Играх.",
      "Владислав Гончаров",
      "./img/cyber_goncharov.webp",
      "./img/goncharov.jpg",
      'sound/goncharov.wav'
    );
  } else {
    setModal(
      "Уладзіслаў Ганчароў нарадзіўся 15 сакавіка 1990 года. Беларускі скакун у ваду, алімпійскі чэмпіён. На чэмпіянаце свету 2013 года ў індывідуальных спаборніцтвах заняў 8-е месца, а ў сінхронных скачках — 6-е месца. На чэмпіянаце Еўропы 2014 года ў Гімарайнш заваяваў золата ў індывідуальных скачках і бронзу ў камандных, а таксама пятае месца ў сінхронных скачках. На чэмпіянаце свету 2014 года ў Дэйтана-Біч стаў сярэбраным прызёрам у сінхронных скачках і бронзавым у індывідуальных. Сярэбраны прызёр Еўрапейскіх гульняў 2015 года ў Баку ў індывідуальных і сінхронных скачках. У тым жа годзе на чэмпіянаце свету ў Адэнсе заваяваў срэбра ў індывідуальных і сінхронных скачках і бронзу ў камандных спаборніцтвах. На чэмпіянаце Еўропы 2016 года ў Вальядалідзе выйграў золата ў індывідуальных і сінхронных скачках і срэбра ў камандных спаборніцтвах. На Алімпійскіх гульнях 2016 года ў Рыа-дэ-Жанейра заваяваў залаты медаль у індывідуальных скачках, стаўшы адзіным алімпійскім чэмпіёнам для Беларусі на гэтых гульнях.",
      "Уладзіслаў Ганчароў",
      "./img/cyber_goncharov.webp",
      "./img/goncharov.jpg",
      'sound/goncharov.wav'
    );
  }
}
function litvinModal() {
  modal_arrows.style.display = 'block'
  if (!langChange) {
    setModal(
      "Иван Литвинович родился 5 ноября 2001 года. Белорусский прыгун на батуте, олимпийский чемпион. В 2018 году на чемпионате Европы в Баку завоевал золото в юниорском разряде. На III юношеских Олимпийских играх 2018 года в Буэнос-Айресе занял 4-е место. В 2019 году на чемпионате мира в Токио выиграл серебро в индивидуальном зачёте и золото в командном. В 2020 году на этапе Кубка мира в Баку стал серебряным призёром в индивидуальном зачёте. На чемпионате Европы 2020 (перенос на 2021 год в Сочи) завоевал золото в командном зачёте и занял 22-е место в индивидуальном. На Олимпийских играх в Токио 2021 года стал олимпийским чемпионом в индивидуальном зачёте.",
      "Иван Литвинович",
      "img/cyber_litvin.webp",
      "img/litvin.jpg",
      'sound/litvin.wav'
    );
  } else {
    setModal(
      "Іван Літвіновіч нарадзіўся 5 лістапада 2001 года. Беларускі скакун на батуце, алімпійскі чэмпіён. У 2018 годзе на чэмпіянаце Еўропы ў Баку заваяваў золата ў юніёрскім разрадзе. На III юнацкіх Алімпійскіх гульнях 2018 года ў Буэнас-Айрэсе заняў 4-е месца. У 2019 годзе на чэмпіянаце свету ў Токіа выйграў срэбра ў індывідуальным заліку і золата ў камандным. У 2020 годзе на этапе Кубка свету ў Баку стаў сярэбраным прызёрам у індывідуальным заліку. На чэмпіянаце Еўропы 2020 (перанос на 2021 год у Сочы) заваяваў золата ў камандным заліку і заняў 22-е месца ў індывідуальным. На Алімпійскіх гульнях у Токіа 2021 года стаў алімпійскім чэмпіёнам у індывідуальным заліку.",
      "Іван Літвіновіч",
      "img/cyber_litvin.webp",
      "img/litvin.jpg",
      'sound/litvin.wav'
    );
  }
}
function guskovaModal() {
  modal_arrows.style.display = 'block'
  if (!langChange) {
    setModal(
      "Анна Гуськова родилась 1 марта 1995 года. Белорусская фристайлистка, олимпийская чемпионка. В сезоне 2017/18 одержала свою первую победу на этапе Кубка мира в Китае и по итогам сезона заняла второе место в зачёте акробатики, уступив только китаянке Сю Ментао. На Олимпийских играх в Пхенчхане 2018 года успешно прошла квалификацию и в суперфинале продемонстрировала прыжок, который принес ей 96,14 балла и золотую медаль.",
      "Анна Гуськова",
      "img/cyber_guskova.webp",
      "./img/guskova.jpg",
      'sound/guskova.wav'
    );
  } else {
    setModal(
      "Ганна Гуськова нарадзілася 1 сакавіка 1995 года. Беларуская фрыстайлістка, алімпійская чэмпіёнка. У сезоне 2017/18 атрымала сваю першую перамогу на этапе Кубка свету ў Кітаі і па выніках сезона заняла другое месца ў заліку акрабатыкі, саступіўшы толькі кітаянцы Сю Ментао. На Алімпійскіх гульнях у Пхёнчхане 2018 года паспяхова прайшла кваліфікацыю і ў суперфінале прадэманстравала скачок, які прынёс ёй 96,14 бала і залаты медаль.",
      "Ганна Гуськова",
      "img/cyber_guskova.webp",
      "./img/guskova.jpg",
      'sound/guskova.wav'
    );
  }
}


function promModal() {
  modal_arrows.style.display = 'none'
  if (!langChange) {
    setModal(
      "Промышленный комплекс формирует: почти треть создаваемого ВВП (27,1% в 2021 г.), три четверти экспорта (75-80%), значительную сумму валютных поступлений; обеспечивает рабочими местами четверть экономически активного населения страны. При этом почти половину промышленного производства формируют частные предприятия (организации без доли государства). Промышленность - одна из наиболее динамично развивающихся отраслей белорусской экономики. По итогам 2021 г. промышленность приросла на 6,5% - это один из лучших результатов среди стран Евразийского экономического союза (ЕАЭС).",
      "Промышленный комплекс - основа развития национальной экономики",
      "img/img/промышленность1.jpg",
      "./img/промышленность1.jpg",
      'sound/prom.wav'
    );
  } else {
    setModal(
      "Нарадзілася 14 верасня 1990 года ў Мінску, у рабочай сям'і, бацька і маці працавалі дворнікамі. Скончыла сярэднюю школу № 151 у Мінску. Пасля заканчэння школы прафесійна займалася бальнымі танцамі. У 2010-2011 гадах працавала ў Мінскім аддзяленні Беларускай чыгункі, у 2011 годзе — у кампаніі з дадатковай адказнасцю «Сатурн-2», якая займалася аптовым гандлем прадуктамі харчавання. З 2012 года завочна вучылася на эканамічным факультэце Мінскага інавацыйнага ўніверсітэта па спецыяльнасці «менеджмент (інфармацыйны)». У 2013-2015 гадах працавала ў ТАА «Мар'яна Інвест», якое займалася рознічным гандлем каўбаснымі вырабамі і вэнджанінай. З 2017 года працавала бортправадніцай-інструктарам авіякампаніі «Белавія» і лётала ў складзе экіпажаў пасажырскіх самалётаў Boeing і Embraer.",
      "Марына Васілеўская",
      "img/img/промышленность1.jpg",
      "./img/промышленность1.jpg",
      'sound/prom.wav'
    );
  }
}

function scienceModal() {
  modal_arrows.style.display = 'none'
  if (!langChange) {
    setModal(
      "В ряду крупных новейших достижений - искусственное выращивание органов и тканей, разработка нанолекарств с заданными свойствами, создание искусственного интеллекта, по ряду параметров превосходящего человеческий. По всем названным мировым достижениям наша наука находится на передовых позициях, а в некоторых разработках - даже лидирует. Машиностроители разрабатывают новейшие электротранспортные средства и компоненты; физики и электронщики создают высококонкурентные лазеры и схемы, востребованные в США, Японии. Созданы комплекс автоматизированного составления цифровых карт, суперкомпьютер для геологических исследований и офисный суперкомпьютер с супервысокой для этого класса машин производительностью - 100 терафлопс (1 триллион операций в секунду).",
      "Наука — фундамент нашей государственности",
      "img/наука.jpg",
      "./img/наука.jpg",
      'sound/science.wav'
    );
  } else {
    setModal(
      "Нарадзілася 14 верасня 1990 года ў Мінску, у рабочай сям'і, бацька і маці працавалі дворнікамі. Скончыла сярэднюю школу № 151 у Мінску. Пасля заканчэння школы прафесійна займалася бальнымі танцамі. У 2010-2011 гадах працавала ў Мінскім аддзяленні Беларускай чыгункі, у 2011 годзе — у кампаніі з дадатковай адказнасцю «Сатурн-2», якая займалася аптовым гандлем прадуктамі харчавання. З 2012 года завочна вучылася на эканамічным факультэце Мінскага інавацыйнага ўніверсітэта па спецыяльнасці «менеджмент (інфармацыйны)». У 2013-2015 гадах працавала ў ТАА «Мар'яна Інвест», якое займалася рознічным гандлем каўбаснымі вырабамі і вэнджанінай. З 2017 года працавала бортправадніцай-інструктарам авіякампаніі «Белавія» і лётала ў складзе экіпажаў пасажырскіх самалётаў Boeing і Embraer.",
      "Марына Васілеўская",
      "img/наука.jpg",
      "./img/наука.jpg",
      'sound/science.wav'
    );
  }
}

function promptModal() {
  isPrompt = true;
  setModal("", "", "", "", "");
}

// Когда пользователь нажимает на <span> (x), закройте модальное окно
huian.addEventListener("click", () => {
    if (!audio.paused) {
    // Если звук воспроизводится, останавливаем и очищаем объект
    audio.pause();
    setActiveMicro(false)
    audio = null; // Очищаем объект для освобождения ресурсов
    console.log('Аудио остановлено и очищено');
  }
  modal.style.display = "none";
  isRealHero = false;
  modal_arrows.style.transform = "rotate(0deg)";
});
cHuian.addEventListener("click", () => {
  if (!audio.paused) {
    setActiveMicro(false)
    // Если звук воспроизводится, останавливаем и очищаем объект
    audio.pause();
    audio = null; // Очищаем объект для освобождения ресурсов
    console.log('Аудио остановлено и очищено');
  }
  modal.style.display = "none";
});

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function (event) {

  if (event.target == modal) {

    modal.style.display = "none";
    modal_arrows.style.transform = "rotate(0deg)";

   if(audio) 
   {if (!audio.paused) {
    setActiveMicro(false)
      // Если звук воспроизводится, останавливаем и очищаем объект
      audio.pause();
      audio = null; // Очищаем объект для освобождения ресурсов
      console.log('Аудио остановлено и очищено');
    }}

  }
};

let rotated = false; // Флаг для чередования состояpamyatnik1Span = document.queяySelectorа".pamний
let langChange = false; //изменение языка
let lastSteamButton = bt15; //последняя нажатая кнопка(прошлое)
let refType = 1;
let refTypeS = 1;

function clearMonuments() {
  for (i of document.querySelectorAll(".pamyatnik")) {
    i.style.display = "none";
  }
}
function hideImages() {
  pamyatnik1.style.opacity = "0";
  pamyatnik2.style.opacity = "0";
  pamyatnik3.style.opacity = "0";
  pamyatnik1.style.transition = "all 0s ease-in";
  pamyatnik2.style.transition = "all 0s ease-in";
  pamyatnik3.style.transition = "all 0s ease-in";
}

function showImages() {
  pamyatnik1.style.opacity = "100";
  pamyatnik2.style.opacity = "100";
  pamyatnik3.style.opacity = "100";
  pamyatnik1.style.transition = "all 0.75s ease-in";
  pamyatnik2.style.transition = "all 0.75s ease-in";
  pamyatnik3.style.transition = "all 0.75s ease-in";
}

// function hideButtons() {
//     bt2.style.display = "none";
//     bt3.style.display = "none";
//     bt4.style.display = "none";
//     bt13.style.display = "none";
//     bt14.style.display = "none";
// }
// function showButtons(num) {
//   if (num >= 1) {
//     bt1.style.display = "block";
//   }
//   if (num >= 2) {
//     bt2.style.display = "block";
//   }
//   if (num >= 3) {
//     bt3.style.display = "block";
//   }
//   if (num >= 4) {
//     bt4.style.display = "block";
//   }
//   if (num >= 5) {
//     bt13.style.display = "block";
//   }
//   if (num >= 6) {
//     bt14.style.display = "block";
//   }
// }
// document.addEventListener("DOMContentLoaded", () => {
//     // hideButtons();
//     showButtons(3);
//     bt15.click();
// });
lang.addEventListener("click", () => {
  if (!langChange) {
    lang.innerHTML = 'BY <img class="" src="./img/globus.png"/>';
  } else {
    lang.innerHTML = 'RU <img class="" src="./img/globus.png"/>';
  }

  langChange = !langChange;

  if (!langChange) {
    for (i of vern) {
      i.innerHTML = "Вернуться";
    }
    text.innerHTML = "Нажмите чтобы начать";
    bt16.innerHTML = "Гомельская область";
    bt15.innerHTML = "Минская область";
    bt19.innerHTML = "Бресткая область";
    bt20.innerHTML = "Могилевская область";
    bt21.innerHTML = "Витебская область";
    bt22.innerHTML = "Гродненнская область";
    h_footer.innerHTML = "Как связаться с нами?";
    li3.innerHTML = "Номер телефона: 8 (0232) 50-12-73";
    li2.innerHTML = "Адрес: г. Гомель, ул. Объездная, 2";
    pamyatnik1s.innerHTML = 'Мемориальный <br />комплекс<br/>"Хатынь"';
    pamyatnik2s.innerHTML = "курган славы";
    pamyatnik3s.innerHTML = "Мемориальный <br/>косплекс<br />Шталаг 342";
    pamyatnik4s.innerHTML = 'Мемориал<br/>"Яма"';
    pamyatnik5s.innerHTML = "Мемориал <br/>вечный огонь";
    pamyatnik6s.innerHTML = "Памятник <br />ополченцам-подпольщикам<";
    pamyatnik7s.innerHTML = "Памятник узникам <br />концлагеря";
    pamyatnik8s.innerHTML = "Памятник войнам<br />освободителям";
    pamyatnik9s.innerHTML = "Памятник<br />жертвам <br />холокоста";
    pamyatnik10s.innerHTML =
      "Мемориальный комплекс <br />осводбодителям пинска";
    pamyatnik11s.innerHTML = "Монумент<br />с танком";
    pamyatnik12s.innerHTML = "Памятник <br />урбановичу";
    pamyatnik13s.innerHTML =
      "Памятник-танк<br />на могиле генерала <br />Б.С.Бахарова";
    pamyatnik14s.innerHTML =
      "Памятник<br />воинам<br />-интернационалист-<br />ам";
    pamyatnik15s.innerHTML = "Памятник битве при лесной";
    pamyatnik17s.innerHTML = "Курган славы";
    pamyatnik18s.innerHTML = "Памятник десантникам";
    pamyatnik19s.innerHTML = "Комплекс<br/> холокоста";
    pamyatnik20s.innerHTML = 'Мемориальный комплекс <br />"Прорыв"';
    pamyatnik21s.innerHTML = "Памятник Памяти <br />Узников Гетто";
    pamyatnik22s.innerHTML = "Мемориал <br/>Курган <br />Славы";
    pamyatnik23s.innerHTML = "Вечный огонь";
    pamyatnik24s.innerHTML = "комплекс <br />холокоста";
    if (StateNumber == 1) {
      t2.innerHTML = "Память о прошлом";
    } else if (StateNumber == 0 || StateNumber == 3) {
      t2.innerHTML = "Параллели времени";
      t1.innerHTML = "Интерактивные часы";
    } else {
      t2.innerHTML = "Запечатлеем памятники в истории";
    }
  } else {
    for (i of vern) {
      i.innerHTML = "Вярнуцца";
    }
    text.innerHTML = "Націсніце каб пачаць";
    bt16.innerHTML = "Гомельская вобласць";
    bt15.innerHTML = "Мінская вобласць";
    bt19.innerHTML = "Брэсцкая вобласць";
    bt20.innerHTML = "Магілёўская вобласць";
    bt21.innerHTML = "Віцебская вобласць";
    bt22.innerHTML = "Гродзенская вобласць";
    h_footer.innerHTML = "Як звязацца з намі?";
    li3.innerHTML = "Нумар тэлефона: 8 (0232) 50-12-73";
    li2.innerHTML = "Адрас: г. Гомель, вул. Аб'язная, 2";
    pamyatnik1s.innerHTML = 'Мемарыяльны<br/> комплекс <br/>"Хатынь"';
    pamyatnik2s.innerHTML = "Курган славы";
    pamyatnik3s.innerHTML = "Мемарыяльны <br/>комплекс<br />Шталаг 342";
    pamyatnik4s.innerHTML = 'Мемарыял<br />"Яма"';
    pamyatnik5s.innerHTML = "Мемарыял <br/>вечны агонь";
    pamyatnik6s.innerHTML = "Помнік апалчэнцам<br/>-падпольшчыкам";
    pamyatnik7s.innerHTML = "Помнік<br/> вязням<br/> канцлагера";
    pamyatnik8s.innerHTML = "Помнік войнам<br />вызваліцелям";
    pamyatnik9s.innerHTML = "Помнік<br />ахвярам<br />халакоста";
    pamyatnik10s.innerHTML =
      "Мемарыяльны комплекс <br />азвадбадзіцелям Пінска";
    pamyatnik11s.innerHTML = "Манумент<br />з танкам";
    pamyatnik12s.innerHTML = "Помнік <br/>урбановічу";
    pamyatnik13s.innerHTML =
      "Помнік-танк<br />на магіле генерала <br />Б.С.Бахарава";
    pamyatnik14s.innerHTML =
      "Помнік<br />воінам<br />-інтэрнацыяналіст-<br />ам";
    pamyatnik15s.innerHTML = "Помнік бітве пры лясной";
    pamyatnik17s.innerHTML = "Курган <br/>славы";
    pamyatnik18s.innerHTML = "Помнік дэсантнікам";
    pamyatnik19s.innerHTML = "Комплекс<br/>халакоста";
    pamyatnik20s.innerHTML = 'Мемарыяльны комплекс <br />"Прарыў"';
    pamyatnik21s.innerHTML = "Помнік Памяці <br />Вязняў Гета";
    pamyatnik22s.innerHTML = "Мемарыял<br/> Курган <br />Славы";
    pamyatnik23s.innerHTML = "Вечны агонь";
    pamyatnik24s.innerHTML = "Комплекс <br />халакоста";
    if (StateNumber == 1) {
      t2.innerHTML = "Памяць аб мінулым";
    } else if (StateNumber == 0 || StateNumber == 3) {
      t2.innerHTML = "Паралелі часу";
      t1.innerHTML = "Інтэрактыўны гадзіннік";
    } else {
      t2.innerHTML = "Захапім помнікі ў гісторыі";
    }
  }
  lastSteamButton.click();
});

// Функция для управления отображением элементов
function toggleVisibility(elements, isVisible) {
  elements.forEach((el) => {
    el.style.visibility = isVisible ? "visible" : "hidden";
    el.style.zIndex = isVisible ? 999 : 0;
    el.style.opacity = isVisible ? "0.8" : "0";
  });
}

// Обработчики событий
clSteam.addEventListener("click", () => {
  StateNumber = 1;
  clCenter.style.display = "block";
  clCyber.style.display = "none";
  clSteam.style.display = "none";
  cl.click();
});

clCyber.addEventListener("click", () => {
  StateNumber = 2;
  clCenter.style.display = "block";
  clCyber.style.display = "none";
  clSteam.style.display = "none";
  cl.click();
});

clCenter.addEventListener("click", () => {
  StateNumber = 3;
  clCenter.style.display = "none";
  clCyber.style.display = "block";
  clSteam.style.display = "block";
  cl.click();
});

cl.addEventListener("click", () => {
  let m, s;
  t1.innerHTML = "<span style='visibility:hidden'>fds</span>";

  switch (StateNumber) {
    case 1:
      m = Math.random() * 170;
      s = Math.random() * 170;
      sBackCont.style.flex = 1;
      cBackCont.style.flex = 0;

      toggleVisibility(cyber, false);
      toggleVisibility(steem, true);

      sBack.src = "img/sBack.png";
      zagolovok.style.backgroundImage = "url(./style/szagolovok.png)";
      footerr.style.backgroundImage = "url(./style/sfoot.png)";
      t2.innerHTML = langChange ? "Памяць аб мінулым" : "Память о прошлом";
      text.style.display = "none";
      document.querySelector(".clock").style.marginLeft = "10%";
      break;

    case 2:
      sBackCont.style.flex = 0;
      cBackCont.style.flex = 1;
      toggleVisibility(cyber, true);
      toggleVisibility(steem, false);

      cBack.src = "img/future_phone.png";
      m = 360 + 190 + Math.random() * 170;
      s = 360 + 190 + Math.random() * 170;

      zagolovok.style.backgroundImage = "url(./img/cyber_header.png)";
      footerr.style.backgroundImage = "url(./img/cyber_footer.png)";
      t2.innerHTML = langChange
        ? "Захапім помнікі ў гісторыі"
        : "Запечатлеем памятники в истории";
      document.querySelector(".clock").style.marginLeft = "calc(90% - 250px)";
      text.style.display = "none";
      break;

    case 3:
      zagolovok.style.backgroundImage = "url(style/header_image.png)";
      sc.style.transform = `rotate(0deg)`;
      mn.style.transform = `rotate(0deg)`;
      t1.style.visibility = "visible";
      t1.innerHTML = langChange
        ? "Інтэрактыўны гадзіннік"
        : "Интерактивные часы";
      t2.innerHTML = langChange ? "Паралелі часу" : "Параллели времени";
      cBack.src = "img/centralbackground.png";
      sBack.src = "img/centralbackground.png";
      footerr.style.backgroundImage = "none";

      toggleVisibility(cyber, false);
      toggleVisibility(steem, false);

      document.querySelector(".clock").style.marginLeft = "calc(48% - 125px)";
      setTimeout(() => {
        text.style.display = "block";
      }, 10);
      break;
  }

  // Анимация стрелок
  sc.style.transform = `rotate(${s}deg)`;
  mn.style.transform = `rotate(${m}deg)`;
});


function setActiveSteemButton(e){
  document.querySelectorAll(".sButton>button").forEach((el)=>{
  el.classList.add("sButton_attachment")
  el.classList.remove("sButton_attachment_active")
 } )
  e.classList.add("sButton_attachment_active")
}

bt15.addEventListener("click", () => {
  setActiveSteemButton(bt15)
  oblast.style.backgroundImage = "url(./style/минская.png)";
  if (langChange) {
    sAP.innerHTML = "Мінская вобласць";
  } else {
    sAP.innerHTML = "Минская область";
  }
  sImg.src = "./img/allBelarusMinsk.png";
  if (lastSteamButton != bt15) {
    clearMonuments();
    pamyatnik1.style.display = "inline-block";
    pamyatnik2.style.display = "inline-block";
    pamyatnik3.style.display = "inline-block";
    pamyatnik4.style.display = "inline-block";
  }
  lastSteamButton = bt15;
  currentArea = 'area1'
});

bt16.addEventListener("click", () => {
  setActiveSteemButton(bt16)
  oblast.style.backgroundImage = "url(./style/гомельская.png)";

  if (langChange) {
    sAP.innerHTML = "Гомельская вобласць";
  } else {
    sAP.innerHTML = "Гомельская область";
  }
  sImg.src = "img/allBelarusHomel.png";
  if (lastSteamButton != bt16) {
    clearMonuments();
    pamyatnik5.style.display = "inline-block";
    pamyatnik6.style.display = "inline-block";
    pamyatnik7.style.display = "inline-block";
    pamyatnik8.style.display = "inline-block";
  }
  lastSteamButton = bt16;
  currentArea = 'area2'
});

bt19.addEventListener("click", () => {
  setActiveSteemButton(bt19)
  if (langChange) {
    sAP.innerHTML = "Брэсцкая вобласць";
  } else {
    sAP.innerHTML = "Брестская область";
  }
  sImg.src = "./img/allBelarusBrest.png";
  oblast.style.backgroundImage = "url(./style/брестская.png)";

  if (lastSteamButton != bt19) {
    clearMonuments();
    pamyatnik9.style.display = "inline-block";
    pamyatnik10.style.display = "inline-block";
    pamyatnik11.style.display = "inline-block";
    pamyatnik12.style.display = "inline-block";
  }
  lastSteamButton = bt19;
  currentArea = 'area3'
});

bt20.addEventListener("click", () => {
  setActiveSteemButton(bt20)
  oblast.style.backgroundImage = "url(./style/могилёвская.png)";
  if (langChange) {
    sAP.innerHTML = "Магілёўская вобласць";
  } else {
    sAP.innerHTML = "Могилёвская область";
  }
  sImg.src = "./img/allBelarusMogilev.png";
  if (lastSteamButton != bt20) {
    clearMonuments();
    pamyatnik13.style.display = "inline-block";
    pamyatnik14.style.display = "inline-block";
    pamyatnik15.style.display = "inline-block";
  }
  lastSteamButton = bt20;
  currentArea = 'area4'
});

bt21.addEventListener("click", () => {
  setActiveSteemButton(bt21)
  oblast.style.backgroundImage = "url(./style/витебская.png)";
  if (langChange) {
    sAP.innerHTML = "Віцебская вобласць";
  } else {
    sAP.innerHTML = "Витебская область";
  }
  sImg.src = "./img/allBelarusVitebsk.png";
  if (lastSteamButton != bt21) {
    clearMonuments();
    pamyatnik17.style.display = "inline-block";
    pamyatnik18.style.display = "inline-block";
    pamyatnik19.style.display = "inline-block";
    pamyatnik20.style.display = "inline-block";
  }
  lastSteamButton = bt21;
  currentArea = 'area5'
});

bt22.addEventListener("click", () => {
  setActiveSteemButton(bt22)
  oblast.style.backgroundImage = "url(./style/гродненская.png)";
  if (langChange) {
    sAP.innerHTML = "Гродзенская вобласць";
  } else {
    sAP.innerHTML = "Гродненская область";
  }
  sImg.src = "./img/allBelarusGrodno.png";
  if (lastSteamButton != bt22) {
    clearMonuments();
    pamyatnik21.style.display = "inline-block";
    pamyatnik22.style.display = "inline-block";
    pamyatnik23.style.display = "inline-block";
    pamyatnik24.style.display = "inline-block";
  }
  lastSteamButton = bt22;
  currentArea = 'area6'
});



let centryNumber = 20;
let currentArea = 'area1';
const centry = document.querySelector('.centry')
const pamyatniks = document.querySelectorAll('.pamyatnik');

function updateCentury(increment) {
  const newCenturyNumber = centryNumber + increment;
  if (newCenturyNumber >= 0 && newCenturyNumber <= 20) {
    centryNumber = newCenturyNumber;
    centry.innerHTML = `${centryNumber} век`;

    const allPamyatniks = document.querySelectorAll('.pamyatnik');
    allPamyatniks.forEach((elem) => {
      elem.style.display = 'none';
    });

    const currentPamyatniks = document.querySelectorAll(`.century${centryNumber}.${currentArea}`);
    currentPamyatniks.forEach((elem) => {
        elem.style.display = 'block';
    });
  }
  setTimeout(lastSteamButton.click(), 100)
};

changeCentryBtn1.addEventListener('click', () => updateCentury(1));
changeCentryBtn2.addEventListener('click', () => updateCentury(-1));
