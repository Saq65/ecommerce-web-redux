import React, { useState } from 'react';
import "../style.css";
import Cardsdata from '../cardData';
import { Card, CardImg } from 'react-bootstrap';
import { StarFill } from 'react-bootstrap-icons';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

const Home = () => {
    const [CartData] = useState(Cardsdata);
    const dispatch = useDispatch();

    function HandleClick(e){
        dispatch(addToCart(e))
        toast.success("Iteam added in your cart")
    }
    return (
        <div className='container-fluid'>
            <section className='iteam_section mt-4 container'>
                <h2 className='px-4' style={{ fontWeight: 400 }}>Resturents in Ahmedabad Open now</h2>
                <div className="row mt-2 d-flex justify-content-around align-items-center">
                    {
                        CartData.map((element, index) => {
                            return <>
                                <Card style={{ width: '22rem' }} className='hove mb-4 border-0 '>
                                    <CardImg variant='top' className='cd' src={element.imgdata} />
                                    <div className="card-body">
                                        <div className="upper_data d-flex justify-content-between align-items-center">
                                            <h4 className='mt-2'>{element.dish}</h4>
                                            <span>{element.rating} &nbsp;<StarFill /></span>
                                        </div>
                                        <div className="lower_data d-flex justify-content-between">
                                            <h5>{element.address}</h5>
                                            <span>{element.price}</span>
                                        </div>
                                        <div className="extra"></div>
                                        <div className="last_data mt-2 d-flex justify-content-between align-items-center">
                                            <img src={element.arrimg} className='limg' alt="" />
                                            <button onClick={()=>HandleClick(element)} className="btn btn-warning">Add to Cart</button>
                                            <img src={element.delimg} className='laimg' alt="" />
                                        </div>
                                    </div>
                                </Card>
                            </>
                        })
                    }

                </div>
            </section>
        </div>
    );
}

export default Home;
