import {Button} from "@mui/material";

function UpperNav() {
    return (
        // <header className="App-header">
        <>
            <div>
                <Button onClick={goHome}>Home</Button>
                <Button onClick={goScout}>Scouting</Button>
                <Button onClick={goReport}>Answer</Button>

            </div>
        </>
        // </header>
    )
}

function goHome() {
    window.location.href = '/'
}

function goScout() {
    window.location.href = '/scout'
}

function goReport() {
    window.location.href = '/answer'
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