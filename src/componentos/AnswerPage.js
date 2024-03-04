import {Button} from "@mui/material";
import {deleteAllCookies, getCookieByEntry} from "./CookieHandler";
import {navTo} from "./navigate";

function AnswerPage() {

    // console.log(generateLink())
    return (
        <header className="App">
            <h2>Save data</h2>
            <Button onClick={sendData} style={{color: "green"}}>send data</Button>
            <Button onClick={saveData}>save data</Button>
        </header>
    )
}

function saveData() {

    const baselink = generateLink()

    let historySize = localStorage.getItem('historySize')
    if (historySize !== null) {
        historySize = Number(historySize)
    } else {
        historySize = 0
    }

    const historyItem = {}


    const gameNumberEntry = 1505388104
    historyItem['formLink'] = baselink
    historyItem['gameName'] = getCookieByEntry(gameNumberEntry)

    localStorage.setItem('linkNum' + historySize, JSON.stringify(historyItem))


    localStorage.setItem('historySize', (historySize + 1).toString())

    deleteAllCookies()
    // window.location.href = '/'
    navTo('/')

}

function sendData() {

    window.open(generateLink())

    saveData()

}

function generateLink() {
    let baselink = 'https://docs.google.com/forms/d/e/1FAIpQLScKWVyi2PGa6mAVWpVRgmafDSUgNhLeZq44u5P-TDm4A_yEqw/formResponse?'
    const cookieString = document.cookie
    const getThemAll = cookieString.split('; ')
    // const theChosenOnes = []

    for (let i = 0; i < getThemAll.length; i++) {

        const cookie = getThemAll[i]
        // console.log(i)
        // console.log(cookie)

        if (cookie.startsWith('entry.')) {
            // theChosenOnes.push(cookie)
            // console.log('hmmm')
            baselink += '&' + cookie
        }
    }
    // baselink = encodeURI(baselink)

    // console.log('what. ' + baselink)

    return baselink;

    // window.open(encodeURI(baselink))
}

export default AnswerPage