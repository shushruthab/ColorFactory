import { Routes, Route, Navigate } from 'react-router-dom';
import ClickedColor from './ClickedColor';
import ColorForm from './ColorForm';
import Colors from './Colors';

const Nav = () => {
    return (
        <>
        <Routes>
            <Route exact path="/colors" element={<Colors />}></Route>
            <Route exact path="/colors/new" element={<ColorForm />}></Route>
            <Route exact path="/colors/:name" element={<ClickedColor />}></Route>
            <Route path="*" element={<Navigate to="/colors" />} />
        </Routes>
        </>
    )
}

export default Nav;