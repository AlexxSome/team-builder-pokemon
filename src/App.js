import Navbar from "./components/common/navbar/Navbar";


function App({children}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default App;
