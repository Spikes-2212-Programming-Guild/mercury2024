const GoogleForm = require("./GoogleForm.json")

export function getQuestionsArray(from, until) {

    // console.log(from + ' ha? ' + until)


    const Questions = [];

    let numberOfQuestions = 0

    let QuestionsAsked = 0


    for (const subfield in GoogleForm) {
        // console.log('hi')

        for (const ques in GoogleForm[subfield]) {
            // console.log('hello again')


            if (numberOfQuestions >= from && numberOfQuestions <= until){
                // console.log('wtf2')
                Questions[QuestionsAsked] = {title: GoogleForm[subfield][ques].title}

                Questions[QuestionsAsked]["type"] = GoogleForm[subfield][ques].type
                Questions[QuestionsAsked]["options"] = GoogleForm[subfield][ques].options
                Questions[QuestionsAsked]["entry"] = GoogleForm[subfield][ques].entry
                Questions[QuestionsAsked]["index"] = GoogleForm[subfield][ques].index


                QuestionsAsked++

            }


            // console.log(Questions[numberOfQuestions]["type"])


            numberOfQuestions++;
        }
    }
    // console.log('wtf')

    console.log(Questions)
    return Questions;

}

// console.log(getArray(0, 4))
// getArray(1, 4)