import React from "react";
import {Button} from "@mui/material";

function HistoryPage() {

    const things = []
    for (let i = 0; i < Number(localStorage.getItem('historySize')); i++) {
        try {

            let historyThingy = localStorage.getItem('linkNum' + i)
            let parsedHistoryThingy = JSON.parse(historyThingy)
            console.log(parsedHistoryThingy)
            things[i] = []
            things[i][0] = parsedHistoryThingy.formLink
            things[i][1] = i
            things[i][2] = parsedHistoryThingy.gameName

        } catch (e){
            console.log(i + ': ' + e)
        }

        // console.log(i)
    }

    // console.log(localStorage.getItem('waaaaaaa'))

    return (
        <>
            <h2>History</h2>
            {things.map((thing) => (
                <LinkButton formLink={thing[0]} key={thing[1]} index={thing[1]} name={thing[2]}></LinkButton>
            ))}

            <Button onClick={clearHistory} style={{color: "red"}}>clear history</Button>
        </>
    )
}

// function openLink(properties) {
//     console.log()
//     window.open(properties.formLink)
// }

function LinkButton(properties) {


    // const [value, setValue] = useState(0);
    const openLink = (() => {
        window.open(properties.formLink)
        console.log(properties.formLink)
        // setValue(value+1)
    })
    return (
        <Button onClick={openLink}>send {properties.name} ({properties.index})</Button>
    )
}

function clearHistory(){
    localStorage.clear()
    window.location.reload()
}

export default HistoryPage