// Home.jsx
import React from 'react';
import Footer from '../controller/Footer';
import Header from '../controller/Header';
function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow flex items-center justify-center">
                <h1 className="text-4xl font-semibold">Welcome to the Home page!</h1>
            </main>
            <Footer />
        </div>
    );
}

export default Home;
