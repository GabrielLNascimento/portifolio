import Navbar from './Components/Navbar';
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <>
            <div className="bg-slate-950 flex flex-col min-h-screen w-full overflow-x-hidden">
                <Navbar />
                <Outlet /> {/* todas as rotas children */}
            </div>
        </>
    );
};

export default App;
