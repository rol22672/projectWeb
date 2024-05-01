import  { useState , useEffect} from 'react';
import api from '../api/axios';
import NotificationService from '../common/AlertNotification';
import Loading from '../common/Loading';
import NoPosts from '../common/NoPosts';
import CardAdmin from './CardAdmin';
import ModalAdd from './ModalAdd';

function HomeAdmin() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal(!showModal);

    const getPost = async() => {
        try {
            
            const response = await api.get("/posts");
            console.log('Respuesta del backend:', response);
            if(response.data.post){
                setData(response.data.post);
                setIsLoading(false);
            }
            // Manejar respuesta
          } catch (error) {
            console.error('Error al obtener post:', error);
            NotificationService.error("Error al registrar");
            setIsLoading(false);
            // Manejar error
        }
    };
    useEffect(() => {
        getPost();
    }, []);


    

    return (
        <>
        <div className='w-100 h-100 justify-content-center align-items-center row m-0'>
            <div className='w-100 justify-content-end row my-3 mx-3'>
                <button type="button" className="btn btn-dark col-md-2" onClick={toggleModal}>Agregar</button>
            </div>
            {isLoading ? (
                <Loading />
            ) : data.length === 0 ? (
                <NoPosts />
            ) : (
                data.map((item, index) => (
                    <CardAdmin key={index} title={item.title} content={item.content} author={item.author} img={item.img} id={item.id} />
                ))
            )}
        </div>
            {showModal && (
                <ModalAdd toggleModal={toggleModal} />
            )}
        </>
    );

}


export default HomeAdmin;