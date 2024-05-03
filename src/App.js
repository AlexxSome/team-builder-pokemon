import Navbar from "./components/common/navbar/Navbar";


function App(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}

export default App;
