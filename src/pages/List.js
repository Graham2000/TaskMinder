import { Link } from 'react-router-dom';

const NavPrimary = () => {
    return (
        <nav>
            <h1>TaskMinder</h1>
        </nav>
    );
}

const Header = () => {
    return (
        <div className='pageHeader'>
            <h1>My Lists</h1>
            <p style={{marginBottom:'30px'}}><Link>Add</Link> | <Link>Remove</Link></p>
        </div>
    );
}

const List = () => {
    return (
        <div className="list">
            <div className='listContainer'>
                <h3><Link to="/details">List #1</Link></h3>
            </div>
            <div className='editContainer'>
                <h3><i>Modified 10/11/22</i></h3>
            </div>
        </div>
    );
}

const MainContents = () => {
    return (
        <>
            <NavPrimary />
            <Header />
            <div className="container">
                <List />
                <List />
                <List />
            </div>
        </>
    );
};

export default MainContents;