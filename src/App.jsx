import Navbar from './Components/Navbar';
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <>
            <div className='bg-slate-950 w-screen flex flex-col min-h-screen'>
                <Navbar />
                <Outlet /> {/* todas as rotas children */}
            </div>
        </>
    );
};

export default App;
