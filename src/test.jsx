import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
const TestCompoent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/todo-app/" element={<Welcome />} />
                <Route path="/todo-app/Game" element={<Game />} />
            </Routes>
        </BrowserRouter>
    );
}
const Welcome = () => {
    return (
        <h1>Welcome</h1>
    );
}

const Game = () => {
    return (
        <h1>Game</h1>
    );
}

export default TestCompoent