import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProductList/ProductList';
import InvoiceForm from './components/InvoiceForm/InvoiceForm';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <ProductList />
                <InvoiceForm />
            </main>
            <Footer />
        </div>
    );
};

export default App;
