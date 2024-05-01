
import Spinner from 'react-bootstrap/Spinner';

function Loading() {
    return (
        <div className='w-100 justify-content-center d-flex align-items-center' style={{height: '100vh'}}>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}

export default Loading;