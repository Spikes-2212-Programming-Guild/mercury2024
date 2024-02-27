import {Button} from "@mui/material";


function WelcomePage() {

    return (
        <header className="App-header">
            <h1>Welcome!</h1>
            <p>to start scouting,
                use the button below
            </p>
            {/*<StartButton/>*/}
            <Button onClick={openScouting}>Start</Button>

            {/*<ScoreBoxProbiotic titles={['hi', 'hello']} entrys={['1515395388', '951971913']}/>*/}
        </header>
    )
}

function openScouting(){
    window.location.href = '/scout'
}

function StartButton() {
    return (
        <button className="Next-button">
            yyyyyyyy
        </button>
    )
}

export default WelcomePage