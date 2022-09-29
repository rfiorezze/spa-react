// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Style } from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile'
// Importando o component News
import News from '../news/news'

const Home = () => (
    <Row >
        <Col m={4} s={12}></Col>
        <Col m={4} s={12}>
            <UserProfile />
        </Col>
        <Col m={4} s={12}></Col>
        <Col m={12} s={12}>
            <h5 className="subtitle">News</h5>
            {/* Passando os parâmetros title, company, description e avatar para o component Experience */}
            <News title=".NET 6"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
            />
            <News title="Visual Studio 2022"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
            />
        </Col>
    </Row>
);

export default Home;