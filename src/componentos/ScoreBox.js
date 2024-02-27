import QuestionTitle from "./QuestionTitle";
import React, {useState} from "react";
import {createCookie, getCookieByEntry} from "./CookieHandler";

// let counterS = 0

function ScoreBox(properties) {

    const [value, setValue] = useState(Number(getCookieByEntry(properties.entry))); // initialize state with initial value of 0

    const minus = () => {
        if(value > 0){
            setValue(value-1)
        }
    }

    console.log('value: ' + value)
    createCookie('entry.' + properties.entry, value.toString())
    // counterS++
    // const thisCount = counterS
    //
    // const wtf = () => {
    //     console.log('wtf')
    //     console.log(thisCount)
    // }

    return (
        <header>
            <QuestionTitle title={properties.title}/>
            <button className="ScoreBox-button" style={{color: "red"}} onClick={minus}>-</button>
            <input type="text" className="ScoreBox-box" value={value} readOnly></input>
            {/*<h4 content={"value"}>0</h4>*/}
            <button className="ScoreBox-button" style={{color: "green"}} onClick={() => setValue(value + 1)}>+</button>
        </header>
    )
}

// function clicked(){
//     console.log('askjndakj')
//     let txt = document.getElementById("text" + counterS)
//     // btn.textContent = "fggf"
//     console.log(txt)
//     console.log("text" + counterS)
// }

export default ScoreBox