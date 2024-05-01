import React, { useState , useEffect} from 'react';
import NotificationService from '../common/AlertNotification';
import api from '../api/axios';


function ModalUpdate({ toggleModal1, title, content, author, id }) {
    // Inicializa el estado formData con los props
    const [formData, setFormData] = useState({
        title: title,
        content: content,
        author: author,
    });

    useEffect(() => {
        // Esto asegura que el estado se actualice si los props cambian,
        // por ejemplo, si reutilizas el modal para editar diferentes elementos
        setFormData({ title, content, author });
    }, [title, content, author]);

    const handleInputChange = (event) => {
        const { name, value } = event.target; 
        setFormData(prevFormData => ({
            ...prevFormData, 
            [name]: value, 
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault(); 
        if (!title || !content, !author) {
            NotificationService.error("Por favor complete todos los campos");
            return;
        }

            
            const response = await api.put("/posts/"+id,formData);
            console.log(response);
            if (response.statusText!="OK") {
                throw new Error('La solicitud falló');
            }
            NotificationService.success(response.data.message);
            toggleModal1(); 
            window.location.reload();

         
    };

 

    return (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Actualizar Post #{id}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="inputTitle">Title</label>
                                <input type="text" name="title" className="form-control" id="inputTitle" value={formData.title} onChange={handleInputChange} placeholder="title blog"/>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="inputContent">Content</label>
                                <textarea name="content" className="form-control" id="inputContent" value={formData.content} onChange={handleInputChange} placeholder="content blog"></textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputAuthor">Author</label>
                                <input type="text" name="author" className="form-control" id="inputAuthor" value={formData.author} onChange={handleInputChange} placeholder="Author blog"/>
                            </div>

                            <button type="submit" className="btn btn-primary mt-3">Guardar cambios</button>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={toggleModal1}>Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ModalUpdate;