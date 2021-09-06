import { Title, Subtitle, ButtonStart } from '../../styles/welcome';
import { Link } from 'react-router-dom';

const App = () => {
    return (
        <div className="content">
            <Title>Welcome to <span>iClinic</span></Title>
            <Subtitle>FRONTEND CHALLENGE</Subtitle>
            <Link to="/choose">
                <ButtonStart >START</ButtonStart>
            </Link>
        </div>
    );
}

export default App;
