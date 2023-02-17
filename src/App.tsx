import React from 'react';
import Dashboard from './containers/Dashboard/Dashboard';
import Stack from './components/Stack/Stack';

function App() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                marginTop: 100,
            }}
        >
            <div
                style={{
                    width: 300,
                    height: 560,
                }}
            >
                <Stack />
            </div>

            <div
                style={{
                    marginTop: 20,
                    width: 300,
                }}
            >
                <Dashboard />
            </div>
        </div>
    );
}

export default App;
