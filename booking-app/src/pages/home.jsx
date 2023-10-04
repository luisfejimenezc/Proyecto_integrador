import React from 'react';
import ' ../styles/home.css'

import { Container, Row, Col } from "reactstrap";
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import subtitle from './../shared/Subtitle';

import searchBar from '../shared/searchBar';

const Home = () => {
    return <>
        
    {/*--------hero section start--------*/}
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="hero__content">
                            <div className="hero__subtitle d-flex aling-items-center ">
                                <Subtitle Subtitle={'know Before You Go'} />  
                                <img src={worldImg} alt="" />
                            </div>
                            <h1>Traveling opens the door to creating <span className="highlight"> memories</span></h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem in consectetur mollitia pariatur incidunt accusamus nemo reiciendis architecto velit, sapiente fuga harum illo numquam, voluptas similique quod quaerat porro sint!</p>
                        </div>
                    </Col>

                    <Col lg='2'>
                        <div className="hero__img-box"
                            img src={heroImg} alt="" />
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box mt-4"
                            video src={heroVideo} alt="" controls/>
                        </div>
                    </Col>
                    <Col lg='2'>
                <div className="hero__img-box mt-5"
                            img src={heroImg02} alt="" />
                        </div>
                    </Col>
        
                    <SearchBar />
                </Row>
            </Container>
        </section>
        {/*--------hero section start--------*/}
        </>
};

export default Home;
