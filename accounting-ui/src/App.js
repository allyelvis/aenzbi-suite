import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import IncomeForm from './components/IncomeForm/IncomeForm';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <IncomeForm />
                <ExpenseForm />
            </main>
            <Footer />
        </div>
    );
};

export default App;
