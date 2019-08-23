import React from 'react';
import { Route } from 'react-router-dom';

import OtherPage from './OtherPage';
import Fib from './Fib';
import Navbar from './Navbar';

function App() {
    return (
        <>
            <Navbar />
            <Route exact path="/" component={Fib} />
            <Route path="/otherpage" component={OtherPage} />
        </>
    );
}

export default App;
