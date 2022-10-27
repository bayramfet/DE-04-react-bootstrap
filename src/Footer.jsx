import React from 'react';
import { Navbar } from 'react-bootstrap';

const Footer =()=>{
    return(
        <Navbar className="bg-dar text-light p-4 fixed-bottom d-flex justify.content center">
            <p>Copyright new Date().getFullYear{}</p>
        </Navbar>
    )
}
export default  Footer