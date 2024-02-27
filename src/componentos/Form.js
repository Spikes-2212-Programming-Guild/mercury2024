import TextBox from "./TextBox";
import ScoreBox from "./ScoreBox";
import React from "react";
import RadioActive from "./RadioActive";
import Navbarilan from "./navbarilan";
import ScoreBoxProbiotic from "./ScoreBoxProbiotic";

const GoogleForm = require("./GoogleForm.json")


function ScoutingPage(properties) {
    const ques = getAPageOfTitles(properties.pageName)

    // let cookieString = document.cookie.split('entry.' + properties.entry)[0]
    // console.log(cookieString)
    // cookieString = cookieString.split('; ')[0]
    // console.log('what ' + cookieString)

    for (let i = 0; i < ques.length; i++) {
        if (ques[i].type === 'ScoreBoxPro') {
            delete ques[i+1]
            delete ques[i+2]
            delete ques[i+3]
            i+=3
        }
    }

    // console.log(ques)


    return (
        <>
            {/*<header className="App-header">*/}
            <h1>{properties.pageName}</h1>
            <center>
                <div align="center">
                    {ques.map((props) => (
                        <Q key={props.title} type={props.type} index={props.index} options={ques.options}
                           entry={ques.entry} {...props} />
                    ))}
                </div>
            </center>
            {/*</header>*/}
            <Navbarilan/>
        </>
    );
}


function Q(props) {

    console.log(props)

    switch (props.type) {
        case "text":
            return (
                <TextBox key={props.title} entry={props.entry} {...props}/>
            )
        case "ScoreBox":
            return (
                <ScoreBox key={props.title} entry={props.entry} {...props}/>
            )
        case "ScoreBoxPro":
            // console.log()
            return (
                // <ScoreBoxProbiotic from={props.index} until={props.index + 3} {...props}/>
                <center>
                <ScoreBoxProbiotic from={props.index} until={props.index+3} {...props}/>
                </center>
            )
        case "number":
            return (
                <TextBox key={props.title} {...props}/>
            )
        case "radio":
            return (
                <RadioActive key={props.title} options={props.options} {...props}/>
            )
        default:
            return (
                <TextBox key={props.title} {...props}/>
            )
    }
}


// function generateForm2() {
//
//     const QuestionsTitles = [];
//
//     let numberOfQuestions = 0
//
//     for (const subfield in FormInfo.Form_data) {
//
//         for (const ques in FormInfo.Form_data[subfield]) {
//
//             QuestionsTitles[numberOfQuestions] = {title: FormInfo.Form_data[subfield][ques].title}
//
//             QuestionsTitles[numberOfQuestions]["type"] = FormInfo.Form_data[subfield][ques].type
//             QuestionsTitles[numberOfQuestions]["options"] = FormInfo.Form_data[subfield][ques].options
//
//             // console.log(QuestionsTitles[numberOfQuestions]["type"])
//
//
//             numberOfQuestions++;
//         }
//     }
//
//     return QuestionsTitles;
// }
//
// function generateForm() {
//
//     const QuestionsTitles = [];
//
//     let numberOfQuestions = 0
//
//     for (const subfield in GoogleForm) {
//
//         for (const ques in GoogleForm[subfield]) {
//
//             QuestionsTitles[numberOfQuestions] = {title: GoogleForm[subfield][ques].title}
//
//             QuestionsTitles[numberOfQuestions]["type"] = GoogleForm[subfield][ques].type
//             QuestionsTitles[numberOfQuestions]["options"] = GoogleForm[subfield][ques].options
//
//             // console.log(QuestionsTitles[numberOfQuestions]["type"])
//
//
//             numberOfQuestions++;
//         }
//     }
//
//     return QuestionsTitles;
// }


function getAPageOfTitles(pageName) {

    const QuestionsData = [];

    let fieldNumber = 0

    for (const ques in GoogleForm[pageName]) {


        QuestionsData[fieldNumber] = {title: GoogleForm[pageName][ques].title}

        QuestionsData[fieldNumber]["type"] = GoogleForm[pageName][ques].type
        QuestionsData[fieldNumber]["options"] = GoogleForm[pageName][ques].options
        QuestionsData[fieldNumber]["entry"] = GoogleForm[pageName][ques].entry
        QuestionsData[fieldNumber]["index"] = GoogleForm[pageName][ques].index


        // console.log(QuestionsData[numberOfQuestions]["type"])


        fieldNumber++;
    }


    return QuestionsData;

}


export default ScoutingPage