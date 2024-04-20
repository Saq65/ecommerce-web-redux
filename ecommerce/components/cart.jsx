import React from 'react';
import './cartstyle.css';
import { Cart2, Trash3, Trash3Fill } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { EmptyCart, RemoveSingleIteam, RemoveToCart, addToCart } from '../redux/cartSlice';
import toast from 'react-hot-toast';

const Cart = () => {
    const { carts } = useSelector(state => state.allCart);
    const dispatch = useDispatch();

    const handleIncrement = (item) => {
        dispatch(addToCart(item));
    };

    const handleRemove = (itemId) => {
        dispatch(RemoveToCart(itemId));
        toast.success("Iteam remove from your cart")
    };

    const handleSingleItemDecrement = (item) => {
        dispatch(RemoveSingleIteam(item));
    };

    const handleEmpty = () => {
        dispatch(EmptyCart());
        toast.success("Your Cart Is Empty")
    };

    return (
        <div className="row justify-content-center m-0">
            <div className="card-md-8 mt-5 mb-5 cardsdetails">
                <div className="card">
                    <div className="card-header bg-dark text-white p-3">
                        <div className="card-header-flex">
                            <h5 className="text-white">Cart Calculation {carts.length > 0 ? `(${carts.length})` : ""}</h5>
                            {carts.length > 0 && (
                                <button onClick={handleEmpty} className="btn btn-danger mt-0 btn-sm">
                                    <Trash3Fill className="" /> Empty
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="card-body p-0">
                        {carts.length === 0 ? (
                            <table className="table cart-table mb-0">
                                <tbody>
                                    <tr>
                                        <td colSpan={6}>
                                            <div className="cart-empty">
                                                <h1><Cart2/></h1>
                                                <p>Your Cart is Empty</p>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        ) : (
                            <table className="table cart-table mb-0 table-responsive-sm">
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Product</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th className="text-right">
                                            <span id="amount" className="amount">
                                                Total Amount
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {carts.map((item, index) => (
                                        <tr key={index}>
                                            <td>
                                                <button onClick={() => handleRemove(item.id)} className="prdct-delete">
                                                    <Trash3 />
                                                </button>
                                            </td>
                                            <td>
                                                <div className="product-img">
                                                    <img src={item.imgdata} alt="" />
                                                </div>
                                            </td>
                                            <td>{item.dish}</td>
                                            <td>{item.price}</td>
                                            <td>
                                                <div className="prdct-qty-container">
                                                    <button onClick={() => handleSingleItemDecrement(item)} className="prdct-qty-btn" type="button">
                                                        -
                                                    </button>
                                                    <input type="text" name="" value={item.qnty} className="qty-input-box" />
                                                    <button onClick={() => handleIncrement(item)} className="prdct-qty-btn" type="button">
                                                        +
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="text-right">{item.qnty * item.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>&nbsp;</th>
                                        <th colSpan={3}>&nbsp;</th>
                                        <th>
                                            Items in Cart <span className="ml-2 mr-2">:</span>{" "}
                                            <span className="text-danger">{carts.length}</span>
                                        </th>
                                        <th className="text-right">
                                            Total Price <span className="ml-2 mr-2">:</span>{" "}
                                            <span className="text-danger">
                                                {carts.reduce((total, item) => total + item.qnty * item.price, 0)}
                                            </span>
                                        </th>
                                    </tr>
                                </tfoot>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
