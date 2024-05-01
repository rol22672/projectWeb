import  { useState } from 'react';
import ModalDelete from './ModalDelete';
import ModalUpdate from './ModalUpdate';
import PropTypes from 'prop-types';

function CardAdmin({ title, content, author, img, id }){
    
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
                <a href="#" onClick={toggleModal1} className="btn btn-primary">Actualizar</a>
                <a href="#"  onClick={toggleModal}  className="btn btn-danger mx-2" >Eliminar</a>
            </div>

            {showModal && (
                <ModalDelete toggleModal={toggleModal}  id={id}/>
            )}


            {showModal1 && (
                <ModalUpdate toggleModal1={toggleModal1}  id={id} title={title} content={content} author={author} />
            )}


        </div>

        
    )
}


CardAdmin.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

export default CardAdmin;