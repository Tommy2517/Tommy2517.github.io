
// regular expression for validate entered data
const regex = /^[\s\wа-яА-ЯёЁїЇєЄіІ]*=[\s\wа-яА-ЯёЁїЇєЄіІ]*$/;

// here we get form from dom structure in our page
const form = document.forms['input-item']

//get input field from form and edit pattern for check enter data
const input = document.getElementById('input');
input.attributes.pattern.value = regex.source


// get block with list and pairs
const pair_list = document.getElementById('pair-list')


// create or get array for hold ready pair object
let array_of_pairs = JSON.parse(localStorage.getItem('pairs_array')) || [];;
render(array_of_pairs)


// listen form on submit 
form.addEventListener('submit',() => {

    // get value from input and transformation
    let data = validator(form.input.value)
    data = cleaner(data).split('=')
    form.input.value = ''

    //create obj with name and value from data
    const pair = {name: data[0], value: data[1], status: true}

    // add pair to holder array
    array_of_pairs.push(pair)

    // display all pairs in the pair list
    render(array_of_pairs)

    //update base
    updateLocalData(array_of_pairs)
})

//create local mini base for save some pairs
function updateLocalData(data) {
    localStorage.setItem('pairs_array', JSON.stringify(data))
}

// get array, clear pair_list, render every pair from array holder in li and display
function render(data) {
    // clear window with pair
    pair_list.innerText = ''
    for (const element of data) {
        
        const pair = document.createElement('li') // create new element with pair data
        pair.id = data.indexOf(element)           // indexing element
        pair.innerText = `${element.name}=${element.value}` // add data in element
        pair_list.append(pair)                      // add element in window with pair
    }
    
}

//check data valid
function validator(data) {
    if (regex.test(data)) return data
    else throw new Error("invalid data");
}

// clean all spaces
function cleaner(data) {
    return data.replaceAll(' ', '');
}

// TODO - 
// 1 массив с объектами
// 2 отправка создает новый объект и пушит в массив
// 3 отрисовать все объекты массива в ли 
// 4 
// обработка ошибок
//
//
//




//get buttons and sort by select crytery
const btn_sort_by_name = document.getElementById('btn-sort-by-name')
btn_sort_by_name.addEventListener('click', ()=>{
    render(sortBy(array_of_pairs,'name'))
})

const btn_sort_by_value = document.getElementById('btn-sort-by-value')
btn_sort_by_value.addEventListener('click', ()=>{
    render(sortBy(array_of_pairs,'value'))
})

// call function with args (array_of_pairs, sort_choose) and return sorted array with pairs
function sortBy(data,critery) {
    if (critery === 'name') 
        return data.sort((a,b) => {
        if (a.name > b.name) return 1 
        if (a.name < b.name) return -1
        if (a.name === b.name) return 0
    })
    if (critery === 'value')
        return data.sort((a,b) => {
            if (a.value > b.value) return 1 
            if (a.value < b.value) return -1
            if (a.value === b.value) return 0
        }) 
}
//


// select/unselect pair
document.addEventListener('click', (e) => {
    //get target of event
    const pair = e.target;
    if (pair.tagName === 'LI' && array_of_pairs[pair.id].status === true) {
        pair.style.background = 'lightblue'
        array_of_pairs[pair.id].status = false
        
    }
    else if (pair.tagName === 'LI' && array_of_pairs[pair.id].status === false) {
        pair.style.background = ''
        array_of_pairs[pair.id].status = true
    }
    
})




// delete button

const btn_delete = document.getElementById('btn-delete')

btn_delete.addEventListener('click', ()=>{
    array_of_pairs = filter(array_of_pairs)
    updateLocalData(array_of_pairs)
    render(array_of_pairs)
})

// create array without pairs which has status false
function filter(params) {
    const remained = [];
    params.filter(pair => {
            if(pair.status === true ) remained.push(pair)
        })
    return remained
}



//delete down
// отделить сохранение в хранилище от основного задания.
// кнопка добавления списка в хранилище
// кнопка взять массив из хранилища
// добавить список массивов из хранилища
// возможность выбрать один из массивов
// добавить целый массив
// адаптировать под телефон


// выбрать все (для удаления)
// дублировать
// выделить зажатием

// copy
// navigator.clipboard.writeText(`${array_of_pairs[pair.id].name}=${array_of_pairs[pair.id].value}`)

// sizing on focus
input.addEventListener('focus', ()=>{
    document.getElementById('control-btns-block')
    .style.height = '0vh'
    document.getElementById('pair-list')
    .style.height = '30vh'
})
input.addEventListener('blur', ()=>{
    document.getElementById('pair-list')
    .style.height = ''
    document.getElementById('control-btns-block')
    .style.height = '20vh'
})

