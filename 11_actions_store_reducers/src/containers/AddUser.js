import { useDispatch } from 'react-redux';
import { addNewUser } from '../action/index';

const AddUser = () => {
    const dispatch = useDispatch();

    const formHandler = (event) => {
        event.preventDefault();
        // console.log(event.target.elements);
        let data = event.target.elements;
        dispatch(addNewUser(data.passport.value, data.name.value, data.age.value));
    }

    return (
        <div>
            <form onSubmit={formHandler}>
                <div>
                    <input type="text" name='passport' defaultValue='h3b24jhb23'/>
                </div>
                <div>
                    <input type="text" name='name' defaultValue='Sara Connor'/>
                </div>
                <div>
                    <input type="text" name='age' defaultValue='22'/>
                </div>
                <button type='submit'>Add new goods</button>
            </form>
        </div>
    )
}

export default AddUser;