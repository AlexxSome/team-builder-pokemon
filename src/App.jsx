import Navbar from "./components/common/Navbar/Navbar.jsx";
import './styles.css'


const App = (x) => {
    return (
        <>
            <Navbar />
            {x.children}
        </>
    );
};

export default App;