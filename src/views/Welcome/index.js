import { Title, Subtitle, ButtonStart } from '../../styles/welcome';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

const Welcome = () => {
    return (
        <div className="content">
            <Row>
                <Col sm="12" md="12" lg="12">
                    <Title>
                        <pre>Welcome to<b> iClinic</b></pre>
                    </Title>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md="12" lg="12">
                    <Subtitle>FRONTEND CHALLENGE</Subtitle>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md="12" lg="12">
                    <Link to="/choose">
                        <ButtonStart>START</ButtonStart>
                    </Link>
                </Col>
            </Row>
        </div>
    );
}

export default Welcome;
