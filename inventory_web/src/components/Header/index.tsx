import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Header: React.FC = () => {
    return (
        <Container>
            <header>
                <nav>
                    <Link to="/">List</Link>
                    <Link to="/new">New</Link>
                </nav>
            </header>
        </Container>
    );
};

export default Header;
