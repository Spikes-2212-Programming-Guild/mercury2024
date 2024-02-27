import {Button} from "@mui/material";
import {deleteAllCookies} from "./CookieHandler";

function AnswerPage() {

    // console.log(generateLink())
    return (
        <header className="App">
            <h1>Send data</h1>
            <Button onClick={generateLink}>click here</Button>
        </header>
    )
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

    console.log('what. ' + baselink)

    window.open(encodeURI(baselink))
    deleteAllCookies()
    window.location.href = '/'
}

export default AnswerPage