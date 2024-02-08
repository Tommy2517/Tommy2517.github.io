const gameSection = {
    height:'33%',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
}

const fieldStyle = {
    maxWidth: '300px',
    minWidth: '200px',
    width: '90vw',
    height: '500px',

    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap:'20px',

    backgroundColor: '#999999',
    borderRadius: '20px',
    border:'5px solid'+'#444444'
}

const btnStyle = {
    minWidth: '100px',
    height: '40px',
    margin:'10px',
    paddingLeft:'10px',
    paddingRight:'10px',

    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#444444',
    borderRadius: '20px',
    fontWeight: 'bold',

    fontSize: '1.3em'
}
const gameStyle = {
    width: '100%',
    height: '100%',

    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'blue',
    borderRadius: '20px',
}

///////////////////card styles////////////////
const card1 = {

}
const card2 = {
}

const styleTotalScore = {
    width: '90%',
    height: '90%',
    backgroundColor: 'gold',
    opacity:'50',

    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

}
export {
    styleTotalScore,
    card1,
    card2,
    fieldStyle,
    btnStyle,
    gameStyle,
    gameSection,
}
