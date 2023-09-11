import React from 'react'
import {Routes, Route, Navigate, Router} from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'
import {Switch} from "@mui/material";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            {/*<Switch>*/}
            {/*    */}
            {/*    <Route path='/' render={() => <'/pre-junior'/>}/>*/}
            {/*    <Route path={PATH.PRE_JUNIOR} loader={PreJunior}/>*/}
            {/*    <Route path={PATH.JUNIOR} loader={Junior}/>*/}
            {/*    <Route path={PATH.JUNIOR_PLUS} loader={JuniorPlus}/>*/}
            {/*    <Route path='' loader={() => <Error404/>}/>*/}
            {/*</Switch>*/}
            <Routes>
                <Route path="/" element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                <Route path="*" element={<Error404/>}/>
            </Routes>

            {/*</Switch>*/}
            {/*/!*роутинг будут писать студенты*!/*/}
            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior*/}
            {/*<Route ...*/}


            {/*роуты для /pre-junior, /junior, /junior-plus*/}
            {/*<Route ...*/}
            {/*<Route ...*/}
            {/*<Route ...*/}

            {/*роут для несуществующей страницы должен отрисовать <Error404 />*/}
            {/*<Route ...*/}
        </div>
    )
}

export default Pages
