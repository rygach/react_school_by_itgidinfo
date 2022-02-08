export default function List(data) {
    console.log(data.user);

    return (
        <div>
            <ul>
                {data.user.map((elem,index) => <li key={index}>Pass:{elem.passport} Name:{elem.name} Age:{elem.age}</li>)}
            </ul>
        </div>
    )
}