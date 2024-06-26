import { getToken } from '../api/authUtils';
import api from '../api/axios';

import PropTypes from 'prop-types';


function ModalDelete({ toggleModal, id }) {

    const  handleDelete = async() => {
        
        const token = getToken();
        if (token) {
            api.defaults.headers.common['Authorization'] = `${token}`;
        }else{
            NotificationService.error("no se ha encontrado el token");
            
        }
        const response = await api.delete("/posts/" + id);
        if (response.statusText != "OK") {
            throw new Error('La solicitud para eliminar el post falló');
        }

        location.reload(); // Considera actualizar la UI de manera más controlada en aplicaciones React
        toggleModal(); // Cierra el modal después de eliminar
        
    };


    return (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Eliminar post #{id}</h5>
                        <button type="button" className="btn-close" onClick={toggleModal} data-bs-dismiss="modal" aria-label="Close"></button>
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


ModalDelete.propTypes = {
    toggleModal: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
};

export default ModalDelete;