import {Button} from "@mui/material";

function Navbarilan() {
    return (
        // <header className="App-header">
        <>
            <div>
                <Button onClick={goPreGame}>Pre</Button>
                <Button onClick={goAutonomous}>Auto</Button>
                <Button onClick={goTeleop}>Tele</Button>
                <Button onClick={goEndgame}>Endgame</Button>
                <Button onClick={goPostGame}>Post</Button>
                {/*<Button onClick={goHome}>Home</Button>*/}
            </div>
        </>
        // </header>
    )
}

function goHome() {
    window.location.href = '/'
}

function goAutonomous() {
    window.location.href = '/scoutAutonomous'
}

function goPreGame() {
    window.location.href = '/scoutPre-Game'
}

function goTeleop() {
    window.location.href = '/scoutTeleop'
}

function goEndgame() {
    window.location.href = '/scoutEndgame'
}

function goPostGame() {
    window.location.href = '/scoutPost-Game'
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

export default Navbarilan