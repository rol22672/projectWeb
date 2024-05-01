import React, { useState , useEffect} from 'react';
import api from '../api/axios';



function ModalDelete({ toggleModal, id }) {

    const  handleDelete = async() => {
        

        try {
            const response = await api.delete("/posts/" + id);
            if (response.statusText != "OK") {
                throw new Error('La solicitud para eliminar el post falló');
            }

            location.reload(); // Considera actualizar la UI de manera más controlada en aplicaciones React
            toggleModal(); // Cierra el modal después de eliminar
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Eliminar post #{id}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <span className="text-danger">Estás seguro que deseas eliminar este post? </span>
                        
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={toggleModal}>Cerrar</button>
                        <button type="button" className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ModalDelete;