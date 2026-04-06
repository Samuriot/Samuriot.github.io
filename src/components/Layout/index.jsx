import Sidebar from '../Sidebar';
import {Outlet} from 'react-router-dom'
import './index.scss';
import MusicPlayer from '../MusicPlayer';

const Layout = () => {
    return (
        <div className="App">
            <Sidebar />
            <div className='page'>
                <span className="tags top-tags"></span>

                <Outlet />
                <span className="tags bottom-tags">
                    <br />
                    <span className="bottom-tag-html"></span>
                </span>
            </div>
            <MusicPlayer />
        </div>
    )
}

export default Layout;
