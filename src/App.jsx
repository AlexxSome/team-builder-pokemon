import Navbar from "./components/common/Navbar/Navbar.jsx";
import './styles.css'


const App = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default App;