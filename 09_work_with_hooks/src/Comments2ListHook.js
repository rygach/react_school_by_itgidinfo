import React, { useState, useEffect } from "react";

export default function Comment2Hook(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log('effect');
        if (props.data.length > 0) setData(props.data);
    }, [props])

    function onlyEven() {
        let a = data;
        
        let evenPosts = [];
        setData(a.filter((item, index) => index % 2 !== 0))
    }

    return (
        <>
            <div>
	            <div>
		            <button onClick={onlyEven}>Only even comments</button>
	            </div>
	            {data.map((el, index) => (
		            <section key={el.id}>
			            <p><b>{index + 1}. {el.email}</b></p>
			            <p>{el.body}</p>
		            </section>
	            ))}
            </div>
        </>
    )
}