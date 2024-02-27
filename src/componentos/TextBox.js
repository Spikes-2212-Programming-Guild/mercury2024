import {Input} from "@mui/material";
import QuestionTitle from "./QuestionTitle";
import {useEffect, useState} from "react";
import {createCookie, getCookieByEntry} from "./CookieHandler";


function TextBox(properties) {

    // const [value, setValue] = useState('hi');

    // <Input ></Input>

    let cookieString = getCookieByEntry(properties.entry)

    const [Value, setValue] = useState(cookieString);

    // This effect will run whenever the value of "Value" changes
    useEffect(() => {
        // console.log(`Input value changed to: ${Value}`);
        createCookie('entry.' + properties.entry, Value)
    }, [Value, properties.entry]);


    // let inpt = <Input type="text" onChange={funn}></Input>

    // console.log(inpt.value)

    return (
        <header>
            <QuestionTitle title={properties.title}/>
            <Input style={{color: "white"}} type="text" value={Value} onChange={event => setValue(event.target.value)}></Input>
            {/*{inpt}*/}
        </header>
    )
}

function funn(){
    console.log('yayyyyy')
}

export default TextBox
