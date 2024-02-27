import QuestionTitle from "./QuestionTitle";
import React, {useState} from "react";
import {createCookie, getCookieByEntry} from "./CookieHandler";

function RadioActive(properties) {

    const [selection, setSelectionValue] = useState(getCookieByEntry(properties.entry));

    // console.log(properties.options)
    const wtf = properties.options



    return (
        <header>
            <div align="left">
                <QuestionTitle title={properties.title}/>

                {/*<RadioOption value={properties.options[0]} group={properties.title}/>*/}
                {/*<RadioOption value={properties.options[1]} group={properties.title}/>*/}

                {wtf.map((item, index) => (
                    <RadioOption key={index}  selection={selection} entry={properties.entry} value={item} group={properties.title} set={setSelectionValue}/>
                ))}

            </div>
        </header>
    )
}

function RadioOption(props) {

    // const [Value, setValue] = useState(getCookieByEntry(props.entry));
    //
    // // const [isCheck, setCheck] = useState(Value === props.value)
    //
    //
    // // let wtf = isCheck
    //
    // let isChecked = (Value === props.value)
    //
    // const wtf = (() => {
    //     isChecked = !isChecked
    // })
    //
    //
    // // This effect will run whenever the value of "Value" changes
    // useEffect(() => {
    //     Cookies.set('entry.' + props.entry, Value, {sameSite: 'none', secure: true})
    //     console.log(`Input value changed to: ${Value}`);
    //
    //     wtf()
    // }, [Value, wtf, props.entry]);
    //
    // // console.log(Value)
    //
    // console.log(Value)
    // console.log(props.value)
    // console.log(Value === props.value)
    //
    //
    // // let thingy =
    //
    // // console.log('hmmm' + thingy.value)
    // // thingy.checked = (Value === props.value)
    //
    //
    // return (
    //     <h5><input type="radio" onChange={event => setValue(event.target.value)} name={props.group} value={props.value} checked={isChecked}/> {props.value}</h5>
    // )

    // const yTho = (() => {
    //     wtfff(props.value, props.entry)
    // })
    //
    // if (getCookieByEntry(props.entry) === props.value){
    //     return (
    //         <h5><input type="radio" onChange={yTho} name={props.group} value={props.value} checked/> {props.value}</h5>
    //     )
    // }
    //
    // return (
    //     <h5><input type="radio" onChange={yTho} name={props.group} value={props.value} /> {props.value}</h5>
    // )



    // const [cookies, setCookie] = useCookies(['selectedRadio']);

    // // Initialize selectedValue state based on existing cookie
    // const [selectedValue, setSelectedValue] = useState(document.cookies.selectedRadio || 'option1');
    //
    // const handleChange = (event) => {
    //     const newValue = event.target.value;
    //     setSelectedValue(newValue);
    //
    //     // Set the cookie with the selected option so it persists across sessions
    //     // setCookie('selectedRadio', newValue, { path: '/' });
    // };

    console.log(document.cookie)

    const cookieYay = (() => {
        // Cookies.set('entry.' + props.entry, props.value, {sameSite: 'none', secure: true})

        createCookie('entry.' + props.entry, props.value)
        // let expires = "";
        // const days = 69
        // if (days) {
        //     let date = new Date();
        //     date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        //     expires = "; expires=" + date.toUTCString();
        // }
        // document.cookie = 'entry.' + props.entry + "=" + (props.value || "") + expires + "; SameSite=none; secure=true";

        // props.onChange()
        // window.location.reload()
        props.set(props.value)
    })

    // console.log(props.value)
    // console.log(getCookieByEntry(props.entry))

    return (
        <h5><input type="radio" onChange={cookieYay} name={props.group} value={props.value} checked={props.selection === props.value}/> {props.value}</h5>
    )


    // const [selectedValue, setSelectedValue] = useState(null);
    //
    // // Update the selected value whenever the user clicks on the radio button
    // const handleClick = () => {
    //     setSelectedValue(props.value);
    //     // onSelect(props.value);
    //     Cookies.set("entry." + props.entry, props.value, { sameSite: "none", secure: true });
    //     window.location.reload()
    // };
    //
    // // Determine whether the current radio button should be checked or not
    // // const isChecked = selectedValue === props.value;
    //
    // return (
    //     <h5><input type="radio" onClick={handleClick} name={props.entry} value={props.value} checked={selectedValue === getCookieByEntry(props.entry)} />{" "}{props.value}</h5>
    // )

}

// function wtfff(lol, entry1) {
//     console.log('wjehdn')
//     console.log(lol)
//     Cookies.set('entry.' + entry1, lol, {sameSite: 'none', secure: true})
// }

export default RadioActive