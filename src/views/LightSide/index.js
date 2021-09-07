import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from "react-icons/bs";

import { getData } from '../../services/api';

import darth_vader from '../../assets/img/darth_vader.png';
import luke_skywalker from '../../assets/img/luke_skywalker.png';
import { Col, Row } from 'reactstrap';

class Choose extends Component {

    constructor(props){
        super(props);

        this.state = {
            isDark: false,
            isLoading: false,
            name: ''
        };

        this.getDataApi = this.getDataApi.bind(this);
    }
    
    componentDidMount(){
        // this.getDataApi();
    }

    async getDataApi(){
        this.setState({ isLoading: true });
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

        return (
            <div className={`content ${isDark === true ? "dark" : "light"}`}>

                <Row>
                    <Col>
                        <Link to="/welcome">
                            <button className="btn-back">
                                <BsArrowLeftShort size={90} color={isDark ? "#FFFFFF" : "#2A2A2A"}/>
                                back
                            </button>
                        </Link>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <button
                            className={`btn-choose ${isLoading ? "cursor-load" : ""}`} 
                            disabled={isLoading ? true : false}
                            onClick={this.getDataApi} 
                        ><b>choose your path again, Padawan</b></button>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="img-container">
                            <img className="img" src={isDark ? darth_vader : luke_skywalker} />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h1 className="master-name">
                            <pre>Your master is <b>{name}</b></pre>
                        </h1>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Choose;
