
function NoPosts() {
    return (
        <section>
            <div className="row container">
                <div className='col-md-6 justify-content-center row align-items-center'>
                    <div className="text ">
                        <h1 className='w-100'>No hay post por hoy</h1>
                        <p className='w-100'>No hay post guardados por el momento, comienza a agregar!</p>
                    </div>
                </div>  
                
                <div className='col-md-6'><img className="img-fluid" src="https://omjsblog.files.wordpress.com/2023/07/errorimg.png" alt=""/></div>
            </div>

        </section>
    );
}

export default NoPosts;