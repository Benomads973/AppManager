// src/App.js
import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
// import RegisterForm from './components/RegisterForm';
//import LoginForm from './components/LoginForm';
import Form from './components/Form';
import { Col, Card } from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  const card = {
    padding: "20px 20px",
    maxWidth: "500px"
  }

  /*<RegisterForm style={formatPres} />*/
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        <Form show={showLogin} onHide={() => setShowLogin(false)} />
        <Col style={card} onClick={() => setShowLogin(true)}>
          <Card>
            <Card.Img variant="top" src="https://img.freepik.com/premium-photo/vector-yellow-website-design-template-adaptive-modern-prototype-design-black-yellow_1199132-222524.jpg" />
            <Card.Body>
              <Card.Title>Mayana solution</Card.Title>
              <Card.Text>
                Generer votre solution en un click
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </Provider>
  );
};

export default App;
