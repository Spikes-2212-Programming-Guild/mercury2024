import './App.css';
import WelcomePage from "./componentos/welcome";
import ScoutingPage from "./componentos/Form";
import AnswerPage from "./componentos/AnswerPage";
import UpperNav from "./componentos/UpperNav";


const baseURL = '/mercury2024'

function App() {

    // console.log(document.cookie)

    let page

    let currentPage = sessionStorage.getItem('page')

    // const appURL = window.location.pathname.split(baseURL)[1]
    // console.log(appURL)

    if (currentPage !== null && currentPage.startsWith('/scout')) {
        if (currentPage.split('/scout')[1] === '') {
            page = <ScoutingPage pageName="Pre-Game"/>
        } else {
            page = <ScoutingPage pageName={currentPage.split('/scout')[1]}/>
        }

    } else if (currentPage === '/answer') {
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
