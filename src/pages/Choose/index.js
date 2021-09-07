import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { BsArrowLeftShort } from "react-icons/bs";

import { getData } from '../../services/api';

import darth_vader from '../../assets/img/darth_vader.png';
import luke_skywalker from '../../assets/img/luke_skywalker.png';
import luke_vs_darth from '../../assets/img/luke_vs_darth.png';

import { Container, ButtonBack, ButtonChoose, Image, ChoosedMaster } from './style';

class Choose extends Component {

    constructor(props){
        super(props);

        this.state = {
            isDark: null,
            isLoading: true,
            name: null
        };

        this.getDataApi = this.getDataApi.bind(this);
    }
    
    componentDidMount(){
        this.getDataApi();
    }

    async getDataApi(){
        this.setState({ isLoading: true, isDark: null, name: null });
        let first_request = await getData(`/1`); // Luke Skywalker
        let second_request = await getData(`/4`); // Darth Vader

        if(first_request !== null && first_request.time < second_request.time){
            this.setState({ isLoading: false, isDark: false, name: first_request.name });
        } else if (second_request !== null && second_request.time < first_request.time) {
            this.setState({ isLoading: false, isDark: true, name: second_request.name });
        }
    }

    render(){ 
        const { isDark, isLoading, name } = this.state;

        let img = null;

        if(isDark !== null){
            img = isDark ? darth_vader : luke_skywalker;
        } else {
            img = luke_vs_darth;
        }

        return (
            <Container isDark={isDark}>

                <Row>
                    <Col sm="12" md="12" lg="12">
                        <Link to="/welcome">
                            <ButtonBack isDark={isDark}>
                                <BsArrowLeftShort size={90}/>back
                            </ButtonBack>
                        </Link>
                    </Col>
                </Row>

                <Row>
                    <Col sm="12" md="12" lg="12">
                        <ButtonChoose 
                            onClick={this.getDataApi}
                            disabled={isLoading ? true : false}
                            isLoading={isLoading}
                            isDark={isDark}
                        >
                            <b>choose your path again, Padawan</b>
                        </ButtonChoose>
                    </Col>
                </Row>

                <Row>
                    <Col sm="12" md="12" lg="12">
                        <Image alt={`Choosed side: ${name}`} src={img}/>
                    </Col>
                </Row>

                <Row>
                    <Col sm="12" md="12" lg="12">
                        <ChoosedMaster isDark={isDark}>
                            { name !== null ? <pre>Your master is <b>{name}</b></pre> : '' }
                        </ChoosedMaster>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Choose;
