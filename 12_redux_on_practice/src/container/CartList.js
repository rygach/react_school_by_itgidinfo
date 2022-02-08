import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectGoods } from '../store/goodsSlice';
import { decrement, selectCart, del } from '../store/cartSlice';
import Cart from '../components/Cart';


export default function CartList() {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    //  переиндексирую массив товара, чтобы оптимизировать работу
    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {})

    const dispatch = useDispatch();

    let clickHandler = (event) => {
        console.log(cart);
        event.preventDefault();
        let t = event.target;
        if (t.classList.contains('minus')) {
            dispatch(decrement(t.getAttribute('data-key')));
        }
        if (t.classList.contains('del')) {
            dispatch(del(t.getAttribute('data-key')))
        }
    }

    return (
        <div>
            {/* 
            
            <ul>
                {Object.keys(cart).map(item => <li key={item + goodsObj[item]['title']}>{goodsObj[item]['title']} - {cart[item]}</li>)}
            </ul> */}
            <div className="cart-field" onClick={clickHandler}>
                < Cart />
            </div>
            
        </div>
    )
}

