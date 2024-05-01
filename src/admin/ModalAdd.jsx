import  { useState } from 'react';
import api from '../api/axios';
import NotificationService from '../common/AlertNotification';
import PropTypes from 'prop-types';


function ModalAdd({ toggleModal }) {


    const [formData, setFormData] = useState({
        title: '',
        content: '',
        author: '',
        img: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target; 
        setFormData({
            ...formData, 
            [name]: value, 
        });
    };


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({
                    ...formData,
                    img: reader.result // Actualiza el estado con la cadena base64 de la imagen
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        if (!formData.title || !formData.content || ! formData.author) {
            NotificationService.error("Por favor complete todos los campos");
            return;
        }
        const response = await api.post("/posts/",formData);

        if (response.statusText!="OK") {
            throw new Error('La solicitud falló');
        }
        NotificationService.success(response.data.message);
        toggleModal(); 
        window.location.reload();
    };


    return (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Agregar nuevo post</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggleModal}></button>
                    </div>
                    <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group my-1">
                            <label htmlFor="inputTitle">Title</label>
                            <input type="text" name="title" className="form-control" id="inputTitle" placeholder="title blog"  onChange={handleInputChange}/>
                        </div>
                            
                        <div className="form-group my-1">
                            <label htmlFor="inputContent">Content</label>
                            <textarea type="text" name="content" className="form-control" id="inputContent" placeholder="content blog"  onChange={handleInputChange}></textarea>
                        </div>

                        <div className="form-group my-1">
                            <label htmlFor="inputAuthor">Author</label>
                            <input type="text" name="author" className="form-control" id="inputAuthor" onChange={handleInputChange} placeholder="Author blog"/>
                        </div>

                        <div className="custom-file my-1">
                            <input type="file" className="custom-file-input" id="inputGroupFile01" onChange={handleFileChange}/>
                            <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                        </div>

                        <button type="submit" className="btn btn-primary mt-3">Guardar cambios</button>
                        
                    </form>
                        
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={toggleModal}>Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


ModalAdd.propTypes = {
    toggleModal: PropTypes.func.isRequired,
};


export default ModalAdd;
