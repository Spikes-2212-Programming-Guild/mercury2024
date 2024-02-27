import {Button} from "@mui/material";
import {navTo} from "./navigate";

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
    // window.location.href = '/'
    navTo('/')
}

function goAutonomous() {
    // window.location.href = '/scoutAutonomous'
    navTo('/scoutAutonomous')
}

function goPreGame() {
    // window.location.href = '/scoutPre-Game'
    navTo('/scoutPre-Game')
}

function goTeleop() {
    // window.location.href = '/scoutTeleop'
    navTo('/scoutTeleop')
}

function goEndgame() {
    // window.location.href = '/scoutEndgame'
    navTo('/scoutEndgame')
}

function goPostGame() {
    // window.location.href = '/scoutPost-Game'
    navTo('/scoutPost-Game')
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