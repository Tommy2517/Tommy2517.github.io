const field = document.getElementById('field')
const exit = document.createElement('button')
exit.innerText = 'exit'
exit.id = 'exit'
exit.onclick = () =>{
    // document.getElementById('tap').innerHTML = ''
    document.getElementById('tap').remove()
    document.getElementById('exit').remove()
}
const funk = () => {
    field.append(exit)
}
export {funk}