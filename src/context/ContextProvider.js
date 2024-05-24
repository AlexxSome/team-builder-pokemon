import {createContext, useEffect, useState} from "react";
import {getFirestore, collection, getDocs} from 'firebase/firestore';


const AppContext = createContext();

const ContextProvider = ({ children }) => {
    const [state, setState] = useState({
        singleTeam: [],
        doubleTeam: [],
        teamCart: []
    });

    useEffect(() => {
        const db = getFirestore();

        const singleTeamList = collection(db, "single-team");

        getDocs(singleTeamList).then((data) => {
            setState((prevState)=> ({...prevState, singleTeam: data.docs.map((doc) => doc.data())}))
        })

        const doubleTeamList = collection(db, "double-team");

        getDocs(doubleTeamList).then((data) => {
            setState((prevState)=> ({...prevState, doubleTeam: data.docs.map((doc) => doc.data())}))
        })


    }, []);

    const updateSingleTeam = (singleTeam) => {
        setState((prevState) => ({
            ...prevState,
            singleTeam,
        }));
    };

    const updateDoubleTeam = (doubleTeam) => {
        setState((prevState) => ({
            ...prevState,
            doubleTeam,
        }));
    };

    const updateTeamCart = (teamCart) => {
        setState((prevState) => ({
            ...prevState,
            teamCart,
        }));
    };

    const addItemToCart = (teamCart) => {
        let list = state.teamCart
        list.push(teamCart);
        setState((prevState) => ({
            ...prevState,
            teamCart: list,
        }));
    };

    return (
        <AppContext.Provider value={{ state, updateTeamCart, updateSingleTeam, updateDoubleTeam, addItemToCart }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, ContextProvider };