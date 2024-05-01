import  { useState , useEffect} from 'react';
import api from '../api/axios';
import NotificationService from '../common/AlertNotification';
import Loading from '../common/Loading';
import NoPosts from '../common/NoPosts';
import Card from './Card';

function Home() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
        <div className='w-100 h-100 justify-content-center align-items-center row'>
            {isLoading ? (
                <Loading />
            ) : data.length === 0 ? (
                <NoPosts />
            ) : (
                data.map((item, index) => (
                    <Card key={index} title={item.title} content={item.content} author={item.author} img={item.img} id={item.id} />
                ))
            )}
        </div>
        </>
    );

}


export default Home;