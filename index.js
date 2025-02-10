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
let sound = "";
const changeCentryBtn1 = document.querySelector('.changeCentry1');
const changeCentryBtn2 = document.querySelector('.changeCentry2');
let currentOblast = "";

// Универсальная функция для переключения категорий
function showCategory(categoryToShow,e=null) {
  const categories = {
    science: document.querySelectorAll(".science"),
    med: document.querySelectorAll(".med"),
    war: document.querySelectorAll(".war"),
    econom: document.querySelectorAll(".econom"),
    sport: document.querySelectorAll(".sport"),
    other: document.querySelectorAll(".other"),
  };
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
  const categories = {
    science: document.querySelectorAll(".science"),
    med: document.querySelectorAll(".med"),
    war: document.querySelectorAll(".war"),
    econom: document.querySelectorAll(".econom"),
    sport: document.querySelectorAll(".sport"),
    other: document.querySelectorAll(".other"),
  };

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

function promModal() {
  modal_arrows.style.display = 'none'
  if (!langChange) {
    setModal(
      "Промышленный комплекс формирует: почти треть создаваемого ВВП (27,1% в 2021 г.), три четверти экспорта (75-80%), значительную сумму валютных поступлений; обеспечивает рабочими местами четверть экономически активного населения страны. При этом почти половину промышленного производства формируют частные предприятия (организации без доли государства). Промышленность - одна из наиболее динамично развивающихся отраслей белорусской экономики. По итогам 2021 г. промышленность приросла на 6,5% - это один из лучших результатов среди стран Евразийского экономического союза (ЕАЭС).",
      "Промышленный комплекс - основа развития национальной экономики",
      "img/промышленность1.jpg",
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
}

function showImages() {
  pamyatnik1.style.opacity = "100";
  pamyatnik2.style.opacity = "100";
  pamyatnik3.style.opacity = "100";
  pamyatnik1.style.transition = "all 0.75s ease-in";
  pamyatnik2.style.transition = "all 0.75s ease-in";
  pamyatnik3.style.transition = "all 0.75s ease-in";
}

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

function setHero(name121) {
  fetch('heroes.json')
    .then(response => response.json())
    .then(data => {
      const heroData = data[name121]; 

      if (!heroData) {
        console.error(`Герой с именем ${name121} не найден в JSON`);
        return;
      }

      futureHeroPath = heroData.imgCyber;
      realHeroPath = heroData.imgReal;
      modal.style.display = "block";
      slider.style.display = "none";

      if (!langChange) {
        modal_text.innerHTML = heroData.textRu;
        nameHero.innerHTML = heroData.nameRu;
      } else {
        modal_text.innerHTML = heroData.textBY;
        nameHero.innerHTML = heroData.nameBy;
      }

      modal_content.style.visibility = "visible";
      hero.src = heroData.imgCyber;
      sound = heroData.sound;
    })
    .catch(error => console.error('Ошибка загрузки JSON:', error));
}

class HeroMark{
  constructor(id, name, imag, filter){
    this.id = id;
    this.name = name;
    this.imag = imag;
    this.filter = filter;
    this.spawn = this.spawm.bind(this);
  }

  spawn(){
    const div = document.createElement('div');
    div.style.position = `absolute`;
    div.style.left = `${Math.random()*100}%`;
    div.style.top = `${Math.random()*100}%`;
    div.classList.add('gallery_pamyatnik')
    div.classList.add(`${this.filter}`)
    div.title = this.name;
    div.onclick = () => setHero(this.id);
    div.innerHTML = `<img src="${this.imag}" alt="${this.name}"/>`;
    oC.appendChild(div);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  fetch('heroes.json')
    .then(response => response.json())
    .then(data => {
      for (var i = 1; i <= Object.keys(data).length; i++){
        console.log(data[i])
        var mark = new HeroMark(i, data[i].nameRu, data[i].imgCyber, data[i].filter)
        mark.spawn()
      }
    })
    .catch(error => console.error('Ошибка загрузки JSON:', error))
})

function getRandomInt(max) {
    const limit = Math.min(max, oC.clientWidth);
    return Math.floor(Math.random() * limit);
}
