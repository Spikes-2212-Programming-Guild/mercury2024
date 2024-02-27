import QuestionTitle from "./QuestionTitle";
import React, {useState} from "react";
import {createCookie, getCookieByEntry} from "./CookieHandler";
import {getQuestionsArray} from "./getFormsData";

function ScoreBoxProbiotic(properties) {

    // console.log(properties.entry)
    // console.log('from ' + properties.from)
    // console.log('until ' + properties.until)
    const questionsArray = getQuestionsArray(Number(properties.from), Number(properties.until))
    // console.log(questionsArray)

    let entrys = []
    let titles = []

    // console.log(questionsArray)

    for (let i = 0; i < questionsArray.length; i++) {
        entrys[i] = questionsArray[i].entry
        titles[i] = questionsArray[i].title
    }

    console.log(titles[3])
    console.log(entrys[2])


    return (
        <>

            <QuestionTitle title={properties.title}/>

            <div className="horizontal-container">

                <VerticalScoreBox title={titles[0]} entry={entrys[0]}/>

                <VerticalScoreBox title={titles[1]} key={titles[1]} entry={entrys[1]}/>

                <VerticalScoreBox title={titles[2]} key={titles[2]} entry={entrys[2]}/>

                <VerticalScoreBox title={titles[3]} key={titles[3]} entry={entrys[3]}/>

            </div>

        </>
    )
}


function VerticalScoreBox(properties) {

    const [value, setValue] = useState(Number(getCookieByEntry(properties.entry))); // initialize state with initial value of 0

    const minus = () => {
        if(value > 0){
            setValue(value-1)
        }
    }

    // console.log('value: ' + value)
    createCookie('entry.' + properties.entry, value.toString())

    return (
        <center>

            <table>
                {/*<QuestionTitle title={properties.title}/>*/}
                <tbody>
                <tr>
                    <th>
                        <button className="vertical-score-more"
                                onClick={() => setValue(value + 1)}>+
                        </button>

                    </th>
                </tr>
                <tr>
                    <th>
                        <input type="text" className="ScoreBox-box" value={value} readOnly></input>
                    </th>
                </tr>
                {/*<h4 content={"value"}>0</h4>*/}
                <tr>
                    <th>
                        <button className="vertical-score-less" onClick={minus}>-
                        </button>
                    </th>
                </tr>
                </tbody>

            </table>
        </center>
    )
}


export default ScoreBoxProbiotic