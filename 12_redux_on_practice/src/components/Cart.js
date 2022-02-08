import React from "react";
import { useSelector } from 'react-redux';
import { selectGoods } from '../store/goodsSlice';

import { selectCart } from "../store/cartSlice";
import goodsArr from '../data/goods.json';

export default function Cart () {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    console.log('================');
    console.log(cart);
    console.log('================');
    //  переиндексирую массив товара, чтобы оптимизировать работу
    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {})

    let sumCart = Object.keys(cart).reduce(
        (accum, articul) => (accum += goodsObj[articul]['cost'] * cart[articul]),
        0
    );
    console.log('================');
    console.log(goodsObj);
    console.log('================');
    
    return (
        <>
            <div className="cart-field">
                <h1>Корзина</h1>
                <table className="cart-table">
                    <tbody>
                        <tr><td>Name</td><td>Cost</td><td>Amount</td><td>Sum</td><td>Image</td><td>...</td><td>...</td></tr>
                        {Object.keys(cart).map(item =>
                            <tr key={item + goodsObj[item]['title']}>
                                <td>{goodsObj[item]['title']}</td>
                                <td>{goodsObj[item]['cost']}</td>
                                <td>{cart[item]}</td>
                                <td>{goodsObj[item]['cost']* cart[item]}</td>
                                <td><img src={goodsObj[item]['image']} alt="" /></td>
                                <td>
                                    <button className="minus" data-key={goodsObj[item]['articul']}>
                                        -
                                    </button>
                                </td>
                                <td>
                                    <button className="del" data-key={goodsObj[item]['articul']}>
                                        Delete
                                    </button>
                                </td>
                            </tr>)}
                            <tr>
                                <td colSpan={6}></td><td>Всего:</td>
                                <td>{sumCart}</td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}