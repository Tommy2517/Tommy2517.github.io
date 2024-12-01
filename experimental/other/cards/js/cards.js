const dom = {
    div: () => document.createElement('div'),
    btn: () => document.createElement('button'),
    li: () => document.createElement('li'),
    addToBody: (item) => document.body.append(item),
}
const norge = [
    'kjøper', 'selger', 'lager', 'hører', 'ser', 'jobber', 'åpner', 'lukker', 'går', 'står', 
    'sitter', 'spiser', 'drikker', 'løper', 'svømmer', 'finner', 'mister', 'gir', 'tar', 'kjører',
    'flyr', 'venter', 'betaler', 'låner', 'kjøper', 'ringer', 'skjærer', 'leser', 'skriver', 'snakker',
    'tenker', 'forstår', 'lærer', 'sover', 'våkner', 'gråter', 'ler', 'danser', 'synger', 'spør',
    'forteller', 'kjenner', 'treffer', 'bygger', 'ødelegger', 'velger', 'sparer', 'bruker', 'sletter', 'kopierer',
    'lager', 'ønsker', 'brenner', 'rydder', 'maler', 'tegner', 'skifter', 'hjelper', 'gjemmer', 'rører',
    'ødelegger', 'betyr', 'krever', 'trenger', 'skremmer', 'elsker', 'hater', 'frykter', 'ønsker', 'foretrekker',
    'ser', 'lytter', 'kaster', 'viser', 'forklarer', 'føler', 'vinner', 'taper', 'redder', 'tilgir',
    'feirer', 'ser på', 'gir opp', 'beveger', 'forlater', 'returnerer', 'låser', 'organiserer', 'trener', 'reiser',
    'diskuterer', 'planlegger', 'starter', 'slutter', 'husker', 'glemmer', 'forsøker', 'nekter', 'aksepterer', 'inkluderer'
  ];
const rus = [
  'покупать', 'продавать', 'готовить', 'слышать', 'видеть', 'работать', 'открывать', 'закрывать', 'идти', 'стоять',
  'сидеть', 'есть', 'пить', 'бегать', 'плавать', 'находить', 'терять', 'давать', 'брать', 'водить',
  'летать', 'ждать', 'платить', 'одалживать', 'покупать', 'звонить', 'резать', 'читать', 'писать', 'говорить',
  'думать', 'понимать', 'учиться', 'спать', 'просыпаться', 'плакать', 'смеяться', 'танцевать', 'петь', 'спрашивать',
  'рассказывать', 'знать', 'встречать', 'строить', 'ломать', 'выбирать', 'экономить', 'использовать', 'удалять', 'копировать',
  'создавать', 'желать', 'сжигать', 'убирать', 'красить', 'рисовать', 'менять', 'помогать', 'прятать', 'трогать',
  'разрушать', 'значить', 'требовать', 'нуждаться', 'пугать', 'любить', 'ненавидеть', 'бояться', 'хотеть', 'предпочитать',
  'смотреть', 'слушать', 'бросать', 'показывать', 'объяснять', 'чувствовать', 'выигрывать', 'проигрывать', 'спасать', 'прощать',
  'праздновать', 'смотреть на', 'сдаваться', 'двигать', 'покидать', 'возвращаться', 'запирать', 'организовывать', 'тренироваться', 'путешествовать',
  'обсуждать', 'планировать', 'начинать', 'заканчивать', 'помнить', 'забывать', 'пытаться', 'отказываться', 'принимать', 'включать'
];

// функція поєднює масиви двох мов
function pc(ru,en) {
    const pairs = []
    for (let i = 0; i < ru.length; i++) {
        pairs.push(
            {
                ru:ru[i],
                en:en[i]
            }
        )
    }
    return pairs
}
//
const words = dom.div()
words.classList.add('words')
dom.addToBody(words)
//відмальовує картку 
function rend(q,c) {
    let toggler = 1

    words.append(q[c].en)
    words.addEventListener('click',()=>{
        
        if (toggler) {
            words.textContent = ''
            words.append(q[c].ru)
            toggler = 0
        }
        else {
            words.textContent = ''
            words.append(q[c].en)
            toggler = 1
        }
    })
    return words
}
//

//comapre words
const arrwords = pc(norge,rus)
//counter for pagination
let counter = 0

// click PREW
const prewBtn = dom.btn()
prewBtn.classList.add('prewBtn')
prewBtn.textContent = 'prewBtn'

dom.addToBody(prewBtn)
prewBtn.addEventListener('click',()=>{
    const doc = document.getElementsByClassName('words')[0];
    console.log(doc);
    doc.innerText = '';
    
    counter--
if (counter > 99) {
    counter = 0
}
else if (counter < 0){
    counter = 99
}
    rend(arrwords,counter)
})
//

// click NEXT
const nextBtn = dom.btn();
nextBtn.classList.add('nextBtn')
nextBtn.textContent = 'nextBtn'
dom.addToBody(nextBtn)

nextBtn.addEventListener('click',()=>{
    const doc = document.getElementsByClassName('words')[0];
    console.log(doc);
    doc.innerText = '';
    counter++
if (counter > 99) {
    counter = 0
}
    rend(arrwords,counter)
})
//





//sliders
const sliderBody= dom.div()
sliderBody.classList.add('words','sliderBody')


for (let i = 0; i < 7; i++) {
    
    const slide = dom.div()
    slide.classList.add('slide')
    slide.style.left = `${i*200 -550}px`
    slide.innerText = `${arrwords[i].en}`
    let toggle = 0
    slide.obj = arrwords[i]
    slide.addEventListener('click',()=>{
        console.log(slide.obj);
        console.log('123');
        
        
        if (toggle) {
            slide.textContent = ''
            slide.append(slide.obj.en)
            toggle = 0
        }
        else {
            slide.textContent = ''
            slide.append(slide.obj.ru)
            toggle = 1
        }
    })


    sliderBody.append(slide)


    

}

dom.addToBody(sliderBody)


function right (){
    slideNum++
    if (toggler) {
        slideNum+=6
    }
    toggler = 0
    if (slideNum > 99) {
        slideNum = 1
    }
    for (const element of document.getElementsByClassName('slide')) {
        let toggle = 0
        element.obj = arrwords[slideNum-3]
        element.addEventListener('click',()=>{
            console.log(element.obj);
            console.log('123');
            
            
            if (toggle) {
                element.textContent = ''
                element.append(element.obj.en)
                toggle = 0
            }
            else {
                element.textContent = ''
                element.append(element.obj.ru)
                toggle = 1
            }
        })


        let i = parseInt(element.style.left)
        element.style.left = `${i-=200}px`
        if (parseInt(element.style.left) < -550) {

            element.textContent = `${arrwords[slideNum].en}`

            element.style.left = '650px'
            element.style.display = 'none'

        }
        else element.style.display = 'flex'
    }
}



function left() {
    slideNum--
    if (!toggler) {
        slideNum-=6
    }
    toggler = 1
    if (slideNum < 0) {
        slideNum = 99
    }
    for (const element of document.getElementsByClassName('slide')) {
        let toggle = 0
        element.obj = arrwords[slideNum+3]
        element.addEventListener('click',()=>{
            console.log(element.obj);
            console.log('123');
            
            
            if (toggle) {
                element.textContent = ''
                element.append(element.obj.en)
                toggle = 0
            }
            else {
                element.textContent = ''
                element.append(element.obj.ru)
                toggle = 1
            }
        })



        let i = parseInt(element.style.left)
        element.style.left = `${i+=200}px`
        if (parseInt(element.style.left) > 650) {
            console.log(arrwords[slideNum].en);
            element.textContent = `${arrwords[slideNum].en}`
            element.style.display = 'none'
            element.style.left = '-550px'
        }
        else element.style.display = 'flex'
    }
}

let slideNum = 7
let toggler = 0
document.addEventListener('keydown', (e) =>{


    if (e.key === 'ArrowRight') {
       right()
    }



    if (e.key === 'ArrowLeft') {
       left()
    }
    console.log(slideNum);
    console.log(toggler);
    
})




let startX = 0; // Начальная позиция касания
let endX = 0;   // Конечная позиция касания
let isSwipe = false; // Флаг, указывающий, был ли это свайп

// Контейнер слайдера
const slider = document.querySelector('.sliderBody');

slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX; // Сохраняем начальную позицию X
    isSwipe = false; // Сбрасываем флаг свайпа
});

slider.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX; // Обновляем позицию X во время движения
    const deltaX = Math.abs(endX - startX); // Вычисляем длину движения

    // Если движение больше минимального порога, устанавливаем флаг свайпа
    if (deltaX > 10) { // Минимальный порог, чтобы считать это свайпом
        isSwipe = true;
    }
});

slider.addEventListener('touchend', () => {
    if (!isSwipe) return; // Если это не свайп, ничего не делаем

    const deltaX = endX - startX; // Разница между начальной и конечной позицией

    if (Math.abs(deltaX) > 50) { // Минимальная длина свайпа
        if (deltaX > 0) {
            console.log('Свайп вправо');
            left(); // Вызов функции для движения вправо
        } else {
            console.log('Свайп влево');
            right(); // Вызов функции для движения влево
        }
    }

    // Сброс значений
    startX = 0;
    endX = 0;
    isSwipe = false;
});


