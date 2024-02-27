// fetch('https://docs.google.com/forms/d/e/1FAIpQLScKWVyi2PGa6mAVWpVRgmafDSUgNhLeZq44u5P-TDm4A_yEqw/viewform').then((res) => {
//     console.log(res)
//     console.log(res.body)
// })

// fetch('https://docs.google.com/forms/d/e/1FAIpQLScKWVyi2PGa6mAVWpVRgmafDSUgNhLeZq44u5P-TDm4A_yEqw/viewform')
//     .then(response => response.text())
//     .then(htmlContent => {
//         // console.log(htmlContent);
//         const QuestionsParams = htmlContent.split('data-params')
//
//         for (let i = 1; i < QuestionsParams.length; i++) {
//             const hm2 = QuestionsParams[i].split('&quot;')[1]
//             console.log(hm2)
//         }
//
//
//
//
//     })
//     .catch(error => {
//         console.error('Error fetching HTML content:', error);
//     });


// fetch('https://docs.google.com/forms/d/e/1FAIpQLScKWVyi2PGa6mAVWpVRgmafDSUgNhLeZq44u5P-TDm4A_yEqw/viewform')
//     .then(response => response.text())
//     .then(htmlContent => {
//         // console.log(htmlContent);
//         const HeaderParams = htmlContent.split('aria-level="3"')
//
//         // for everything
//         for (let i = 1; i < HeaderParams.length; i++) {
//             const hm2 = HeaderParams[i].split('</')[0]
//             console.log(hm2)
//         }
//
//         // for questions
//         for (let i = 1; i < HeaderParams.length; i++) {
//             const hm2 = HeaderParams[i].split('<span class="M7eMe">')[1]
//             const hm3 = hm2.split('</span>')[0]
//             console.log(hm3)
//             // console.log('\n')
//         }
//
//
//     })
//     .catch(error => {
//         console.error('Error fetching HTML content:', error);
//     });


// let scoutingForm = {}
//
//
// fetch('https://docs.google.com/forms/d/e/1FAIpQLScKWVyi2PGa6mAVWpVRgmafDSUgNhLeZq44u5P-TDm4A_yEqw/viewform')
//     .then(response => response.text())
//     .then(htmlContent => {
//         // console.log(htmlContent);
//         const HeaderParams = htmlContent.split('aria-level="2"')
//         let Headers = [];
//         let Questions = []
//
//         // for everything
//         for (let i = 1, QuestionIndex = 0; i < HeaderParams.length; i++) {
//
//             const QuestionsParams = HeaderParams[i].split('aria-level="3"')
//
//             Headers[i] = HeaderParams[i].split('<')[0]
//
//             scoutingForm[Headers[i]] = []
//
//             // console.log(Headers[i])
//
//
//             for (let j = 1; j < QuestionsParams.length; j++, QuestionIndex++) {
//
//                 Questions[QuestionIndex] = QuestionsParams[j]
//                 Questions[QuestionIndex] = Questions[QuestionIndex].split('class="M7eMe">')[1]
//                 Questions[QuestionIndex] = Questions[QuestionIndex].split('<')[0]
//
//                 scoutingForm[Headers[i]][j-1] = Questions[QuestionIndex]
//                 // console.log(Questions[QuestionIndex])
//             }
//             // console.log()
//         }
//
//         console.log(scoutingForm)
//
//         // // for questions
//         // for (let i = 1; i < HeaderParams.length; i++) {
//         //     const hm2 = HeaderParams[i].split('<span class="M7eMe">')[1]
//         //     const hm3 = hm2.split('</span>')[0]
//         //     console.log(hm3)
//         //     // console.log('\n')
//         // }
//
//
//     })
//     .catch(error => {
//         console.error('Error fetching HTML content:', error);
//     });


const qTypes = ["number", "Number", "radio", "text", "ScoreBox", "ScoreBox", "radio", "ScoreBox", "ScoreBoxPro", "ScoreBoxPro", "ScoreBoxPro", "ScoreBoxPro", "ScoreBoxPro", "ScoreBoxPro", "ScoreBoxPro", "ScoreBoxPro", "ScoreBox", "radio", "radio", "radio", "radio", "radio", "radio", "text", "radio", "text"]

fetch('https://docs.google.com/forms/d/e/1FAIpQLScKWVyi2PGa6mAVWpVRgmafDSUgNhLeZq44u5P-TDm4A_yEqw/viewform')
    .then(response => response.text())
    .then(htmlContent => {
        let FormData = htmlContent.split('var FB_PUBLIC_LOAD_DATA_ =')[1].split(';')[0]
        FormData = JSON.parse(FormData)

        let formData = {}

        let QuestionsData = FormData[1][1]

        let QuestionCodeCounter = 0;
        let QuestionCounter = 0;

        let currentStage = "not a title, title is undefined"
        // console.log(QuestionsData)

        for (let i = 0; i < QuestionsData.length; i++) {
            // console.log(QuestionsData[i])

            let FieldTitle = QuestionsData[i][1]
            // console.log(FieldTitle)
            let QuestionEntry = null

            if (QuestionsData[i][4] !== null){
                QuestionEntry = QuestionsData[i][4][0][0]

                // console.log(QuestionsData[i][4][0][1])

                formData[currentStage][QuestionCodeCounter] = {}
                formData[currentStage][QuestionCodeCounter]['title'] = FieldTitle
                formData[currentStage][QuestionCodeCounter]['entry'] = QuestionEntry
                formData[currentStage][QuestionCodeCounter]['index'] = QuestionCounter
                formData[currentStage][QuestionCodeCounter]['answer'] = null




                if(QuestionsData[i][4][0][1] !== null){
                    // console.log(FieldTitle + '\nis multi option\n')

                    // console.log(QuestionsData[i][4][0][1])
                    formData[currentStage][QuestionCodeCounter]['type'] = "radio"

                    formData[currentStage][QuestionCodeCounter]['options'] = []

                    for (let j = 0; j < QuestionsData[i][4][0][1].length; j++){
                        // console.log(QuestionsData[i][4][0][1][j][0])
                        formData[currentStage][QuestionCodeCounter]['options'][j] = QuestionsData[i][4][0][1][j][0]

                    }


                } else {
                    formData[currentStage][QuestionCodeCounter]['type'] = qTypes[QuestionCounter]
                    // formData[currentStage][QuestionCodeCounter]['options'] = undefined
                }


                QuestionCodeCounter++
                QuestionCounter++
                // console.log('notitle')
            } else {

                currentStage = FieldTitle
                QuestionCodeCounter = 0
                formData[currentStage] = []
            }


            // formData[FieldTitle]['title'] = FieldTitle
            // formData[Q]

            // console.log(QuestionsData[i][0])
        }

        // console.log(formData)
        console.log(JSON.stringify(formData))

    })
    .catch(error => {
        console.error('Error fetching HTML content:', error);
    });