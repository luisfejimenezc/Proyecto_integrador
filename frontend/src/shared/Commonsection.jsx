import React from 'react';
import './Common-section.css'

import { Container, Rol, Col } from 'reactstrap';

const CommonSection = ({ title }) => {
    return (
        <section className="common__section">
            <Container>
                <Row>
                    <Col lg="12">
                        <h1>{title}</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CommonSection;