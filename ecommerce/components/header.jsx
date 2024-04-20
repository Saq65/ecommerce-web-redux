import React from 'react';
import { Cart4 } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const { carts } = useSelector(state => state.allCart)
    return (
        <div style={{position:'sticky',top:'0' ,bottom:'0',zIndex:'90'}}>
            <Navbar style={{ height: '60px',zIndex:'70'}} className='bg-dark h-100 w-100 text-white'>
                <Container>
                    <Link className='text-white' to="/"><h3 className='text-white'>Ecommerce</h3></Link>
                    <div>
                        <span >
                            <Link className='text-white ' to="/cart"><Cart4 className='fs-3' /></Link>
                            <sup className='text-white'>{carts.length}</sup>
                        </span>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
