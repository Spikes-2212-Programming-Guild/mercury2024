import QuestionTitle from "./QuestionTitle";
import {Input} from "@mui/material";
import {useEffect, useState} from "react";
import {createCookie, getCookieByEntry} from "./CookieHandler";

function NumBox(properties) {

    const [Value, setValue] = useState(getCookieByEntry(properties.entry));

    // This effect will run whenever the value of "Value" changes
    useEffect(() => {
        // console.log(`Input value changed to: ${Value}`);
        createCookie('entry.' + properties.entry, Value)
    }, [Value, properties.entry]);

    return (
        <header>
            <QuestionTitle title={properties.title}/>
            <Input type="number" value={Value} onChange={event => setValue(event.target.value)}></Input>

            {/*<Input type="number"></Input>*/}
        </header>
    )
}

export default NumBox