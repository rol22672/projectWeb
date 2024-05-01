import PropTypes from 'prop-types';

function Card({ title, content, author, img, id }){
    

    return (
        <div className="card ml-2 col-md-7 my-3" >
            <img className="card-img-top " src={img} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{title} {id}</h5>
                <p className="card-text">{content}</p>
                <p className="card-text">Author: {author}</p>
            </div>


        </div>

        
    )
}


Card.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};


export default Card;