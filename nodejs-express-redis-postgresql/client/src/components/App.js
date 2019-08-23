import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './Navbar';
import Fib from './Fib';
import OtherPage from './OtherPage';

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
