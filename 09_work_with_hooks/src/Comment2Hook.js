import React, { useState } from "react";

import Comments2ListHook from "./Comments2ListHook";

export default function Comment2Hook() {
    const [data, setData] = useState([]);

    function selectHandler(event) {
        fetch('https://jsonplaceholder.typicode.com/users/' + event.target.value + '/posts')
            .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setData(data);
            })
    }
    
    return (
        <div>
            <p>Choose post id</p>
            <select onChange={selectHandler}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <div>
                < Comments2ListHook data={data}/>
            </div>
        </div>
    )
}