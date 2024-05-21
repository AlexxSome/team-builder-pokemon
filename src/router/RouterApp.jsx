import React from 'react';
import {Route, Routes} from "react-router-dom";
import SingleTeam from "../components/singleTeam/SingleTeam";
import Home from "../components/home/Home";
import DoubleTeam from "../components/doubleTeam/DoubleTeam";
import Detail from "../components/detail/Detail";

const RouterApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="team-builder-pokemon" element={<Home />} />
            <Route path="single-team" element={<SingleTeam />} />
            <Route path="double-team" element={<DoubleTeam />} />
            <Route path="detail" element={<Detail />} />
        </Routes>
    );
};

export default RouterApp;
