import { Link } from 'react-router-dom';
import { Title, Subtitle, ButtonStart } from './style';

import { Container } from './style';

const Welcome = () => {
    return (
        <Container>
            <Title>
                <span>
                    <pre>Welcome to<b> iClinic</b></pre>
                </span>
            </Title>
            
            <Subtitle>
                <h3>FRONTEND CHALLENGE</h3>
            </Subtitle>

            <Link to="/choose">
                <ButtonStart>
                    <button>START</button>
                </ButtonStart>
            </Link>
        </Container>
    );
}

export default Welcome;
