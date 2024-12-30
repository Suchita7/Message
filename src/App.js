import React, { useState } from "react";
import { Container, Form, Button, Card, Modal } from "react-bootstrap";
import "./App.css";
import bgImage from './assets/background.png';
import backgroundMusic from './assets/audio/background.mp3';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const correctPassword = "newYear2024MS";

  const handleLogin = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      setShowModal(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
  };

  return (
    <div className="App">
      {!isAuthenticated ? (
        <Container className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
          <Card className="p-4 shadow" style={{ width: "25rem" }}>
            <Card.Body>
              <h1 className="text-center">Welcome</h1>
              <p className="text-center">Enter the password to unlock the surprise!</p>
              <Form>
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" className="w-100" onClick={handleLogin}>
                  Unlock
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <Modal show={showModal} onHide={() => setShowModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Incorrect Password</Modal.Title>
            </Modal.Header>
            <Modal.Body>Please try again!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      ) : (
        <div className="message-page text-white d-flex flex-column justify-content-center align-items-center vh-100"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}>
          <audio src={backgroundMusic} autoPlay loop />
          <Button
            variant="danger"
            className="close-button position-absolute top-0 end-0 m-3"
            onClick={handleLogout}
          >
            X
          </Button>
          <Card className="p-4 shadow message-card" style={{ width: "50rem" }}>
            <Card.Body className="funky-text">
            <h1>Dear Methuneyy,</h1>
              <h4>
              I was soo confident that i will meet u this month..That i didn't send a letter for DEC.. 
              Adhan i thought wat if i can't send u a letter..i can still create one for YOU nu.. <span className="text-danger fs-3">&#x2764;&#xFE0F;</span> 
              </h4>
              <br/>
              <h4>         
              There's always something to look forward to, something to be grateful for, something to be proud of, something to hold on to, something to believe in, something to love, something to live for... And that something is my life is YOU. 
              </h4>
              <br/>
              <h4>
              This year has been kind, fun, happy, sad, love, fights, some success, some failures... it has been a roller coaster ride for us.. there were days were i got to see, feel, and be with u every single day.. and then universe started to test us.. the meeting frequency changed from everyday, to meeting in days and now in months... i know its hard for us this way.. but the love i have for u has only increased with the distance.. 
              </h4>
              <br/>
              <h4>
              I hope we both step into 2025, with lots of happiness and love.. Have the strength to fight all struggles together.. and Achieve wat we pray for.. i have seen a whole new person in u this year.. you are so much stronger than wat you give yourself credit for, you are so much more incredible than you realise.. you are pure sunshine, my sunshine who makes my life and all the people around you better.. just by being YOU.
              </h4>
              <br/>
              <h3>
              This year is going to end. I'm sorry for the moments i hurt you..
              </h3>
              <h3>
              This year is going to end. Can i get a lifetime of hugs and kississs..
              </h3>
              <h3>
              This year is going to end. Thanks for being  here for me.
              </h3>
              <h3>
              This year is going to end. But my love for you wont.. <span className="text-danger fs-3">&#x2764;&#xFE0F;</span> 
              </h3>
              <br/>
              <h3>
              I will choose you even on the days we don't understand each other.. 
              </h3>
              <h3>
              I Love you.. <span className="text-danger fs-3">&#x2764;&#xFE0F;</span> 
              </h3>
              <h3>
              Happy New Year 2025.. <span className="text-danger fs-3">&#x2764;&#xFE0F;</span> <span className="text-danger fs-3">&#x2764;&#xFE0F;</span> 
              </h3>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default App;
