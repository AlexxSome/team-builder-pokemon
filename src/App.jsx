import Navbar from "./components/common/Navbar/Navbar.jsx";


const App = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default App;