import {createContext, useEffect, useState} from "react";
import {collection, getDocs, getFirestore} from 'firebase/firestore';


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

        getDocs(singleTeamList)
            .then((snapshot) => {
                const docsData = snapshot.docs.map((doc) => doc.data());
                return docsData;
            })
            .then((docsData) => {
                if (docsData.length > 0) {
                    const teamData = docsData[0];
                    if (teamData.team && teamData.teamId) {
                        const newSingleTeam = teamData.team.map((poke) => ({
                            ...poke,
                            teamId: teamData.teamId
                        }));
                        console.log("desde fiestore", newSingleTeam);
                        setState((prevState) => ({
                            ...prevState,
                            singleTeam: newSingleTeam
                        }));
                    } else {
                        console.error("Estructura de datos inesperada:", teamData);
                    }
                } else {
                    console.error("No se encontraron documentos en la colección");
                }
            })
            .catch((error) => {
                console.error("Error fetching documents:", error);
            });

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

    const clearCart = () => {
        setState((prevState) => ({
            ...prevState,
            teamCart: [],
        }));
    };

    return (
        <AppContext.Provider value={{ state, updateTeamCart, updateSingleTeam, updateDoubleTeam, addItemToCart, clearCart }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, ContextProvider };