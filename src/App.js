import './App.css';
import WelcomePage from "./componentos/welcome";
import ScoutingPage from "./componentos/Form";
import AnswerPage from "./componentos/AnswerPage";
import UpperNav from "./componentos/UpperNav";


function App() {

    console.log(document.cookie)

    let page

    if (window.location.pathname.startsWith('/scout')) {
        if (window.location.pathname.split('/scout')[1] === '') {
            page = <ScoutingPage pageName="Pre-Game"/>
        } else {
            page = <ScoutingPage pageName={window.location.pathname.split('/scout')[1]}/>
        }

    } else if (window.location.pathname === '/answer') {
        page = <AnswerPage/>
    } else {
        page = <WelcomePage/>
        return (
            <header className="App-header">
                {page}
            </header>
        )
    }

    return (
        <header className="App-header">
            <UpperNav/>
            {page}
            <p>


            </p>
            {/*<Navbarilan/>*/}
        </header>
    )
    // return (
    // <div className="App">
    //     <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo"/>
    //         <p>
    //             Edit <code>src/App.js</code> and save to reload.
    //         </p>
    //         {/*<p>*/}
    //         {/*    wkdkdkj*/}
    //         {/*</p>*/}
    //         <a
    //             className="App-link"
    //             href="https://reactjs.org"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //         >
    //             Learn React
    //         </a>
    //         {/*<button> relkrjj</button>*/}
    //         {/*<buttonPro></buttonPro>*/}
    //         {/*<whyyyy></whyyyy>*/}
    //         <Profile/>
    //         <Wtf/>
    //         <Whyyyy/>
    //         <ButtonPro/>
    //     </header>
    // </div>
    // <WelcomePage/>
    // <ScoutingForm/>
    // <HomePage/>
    //     <ScoutingPage/>
    // );
}


function Whyyyy() {
    return (
        <button>
            why would it ever be built like that
        </button>
    )
}

function Wtf() {
    return (
        <button>
            wtf
        </button>
    );
}

function Profile() {
    return (
        <img
            src="https://i.imgur.com/MK3eW3As.jpg"
            alt="Katherine Johnson"
        />
    );
}

export default App;
