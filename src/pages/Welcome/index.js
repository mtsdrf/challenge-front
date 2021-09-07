import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Title, Subtitle, ButtonStart } from './style';

import { Container } from './style';

const Welcome = () => {
    return (
        <Container>
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
        </Container>
    );
}

export default Welcome;
