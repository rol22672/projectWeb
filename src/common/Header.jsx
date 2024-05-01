import { useState, useEffect } from 'react'

function Header() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    const handleLogout = () => {
        localStorage.removeItem('token'); 
        localStorage.removeItem('user');  
        window.location.href = '/login';  
    };

    useEffect(() => {
        const checkAuth = () => {
            setIsLoggedIn(!!localStorage.getItem('token'));
            setUser(JSON.parse(localStorage.getItem("user")));
        };

        window.addEventListener('authChange', checkAuth);

        // Check auth on mount
        checkAuth();

        return () => {
            window.removeEventListener('authChange', checkAuth);
        };
    }, []);

    return (
    <>
   
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">BLOG MMA</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    {isLoggedIn && (
                        <li className="nav-item">
                            <a className="nav-link" href="/admin">Home Admin</a>
                        </li>
                    )}
                    {!isLoggedIn && (
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                    )}
                </ul>
                {isLoggedIn && (
                    
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown dropstart">
                            <a className="nav-link dropdown-toggle "  id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {user.name} {user.lastname}
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a className="dropdown-item" href="#" onClick={handleLogout}>Log out</a></li>
                            </ul>
                        </li>
                    </ul>
                )}  
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header
