import React, { useState , useEffect} from 'react';

function Card({ title, content, author, img, id }){
    
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => setShowModal(!showModal);


    const [showModal1, setShowModal1] = useState(false);

    const toggleModal1 = () => setShowModal1(!showModal1);


    return (
        <div className="card ml-2 col-md-7 my-3" >
            <img className="card-img-top " src={img} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <p className="card-text">Author: {author}</p>
            </div>


        </div>

        
    )
}

export default Card;