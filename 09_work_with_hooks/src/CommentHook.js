import React, { useState } from "react";

export default function CommentHook() {
    const [data, setData] = useState([]);

    function selectHandler(event) {
        fetch('https://jsonplaceholder.typicode.com/users/' + event.target.value + '/posts')
            // недопонял, почему здесь после response.json идут двойные скобки и then сразу закрывается
            // а в PlaceholderPost двойной скобки нет и закрывается скобка в конце, содержа в себе второй then
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
                <b>Selected post</b>
                {data.map((el, index) => (
                    <section key={el.id}>
                        <p>{index + 1} {el.mail}</p>
                        <p>{el.body}</p>
                    </section>
                ))}
            </div>
        </div>
    )
}