import {Button} from "@mui/material";
import {navTo} from "./navigate";

function UpperNav() {
    return (
        // <header className="App-header">
        <>
            <div>
                <Button onClick={goHome}>Home</Button>
                <Button onClick={goScout}>Scouting</Button>
                <Button onClick={goReport}>Answer</Button>
                <Button onClick={goFuckYourselfZuck}>History</Button>

            </div>
        </>
        // </header>
    )
}

function notFunAtAll(){
    console.log(window.location.href)
}

function goHome() {
    // window.location.href = '/'
    // sessionStorage.setItem('page', '/')
    // window.location.reload()
    navTo('/')
}

function goScout() {
    // window.location.href = '/scout'
    // sessionStorage.setItem('page', '/scout')
    // window.location.reload()
    navTo('/scout')
}

function goReport() {
    // window.location.href = '/answer'
    // sessionStorage.setItem('page', '/answer')
    // window.location.reload()
    navTo('/answer')
}

function goFuckYourselfZuck() {
    // window.location.href = '/answer'
    // sessionStorage.setItem('page', '/answer')
    // window.location.reload()
    navTo('/history')
}

// function goHome() {
//     window.location.href = '/hi'
// }
//
// function goBig() {
//     window.location.href = '/scoutAutonomous'
// }
//
// function goFYourself() {
//     window.location.href = '/'
// }

export default UpperNav