import React, { Component } from "react";
import {
  Button,
  Header,
  Image,
  Modal,
  Grid,
  Responsive,
  
} from "semantic-ui-react";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";

class LoginModal extends Component {
  state = { open: false
  }

  

  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    const open = this.state.open;
    return (
      <div>
        <Button onClick={this.show} style={{ cursor: "pointer",background:'none',color:'green' }}>Sign in</Button>
        <Modal dimmer="inverted" open={open} onClose={this.close}>
          <Grid columns={3} stackable size="large" verticalAlign="top" centered>
            <Grid.Row>
              <Grid.Column width={5}>
                <Responsive minWidth={768}></Responsive>
              </Grid.Column>
              <Grid.Column textAlign="center" verticalAlign="middle" width={6}>
                <Modal.Content>
                  <Modal.Description>
                    <Header style={{ paddingTop: 50 }} size="large">
                      Sign in with email
                    </Header>
                    <p style={{ padding: 30 }}>
                      Enter email address associated with your account, and
                      we'll send a magic link to your inbox.
                    </p>
                  </Modal.Description>
                  <LoginForm />
                </Modal.Content>
                <p style={{ padding: 30, size: 18 }}></p>
              </Grid.Column>
              <Grid.Column width={5}>
                <Responsive as={Image} minWidth={768}></Responsive>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal>
      </div>
    );
  }
}

const ModalRegister = () => (
  <Modal trigger={<Button style={{background:'none'}}>Sign Up</Button>} dimmer="inverted">
    <Grid columns={3} stackable size="large" verticalAlign="top" centered>
      <Grid.Row>
        <Grid.Column width={5}>
          <Responsive minWidth={768}></Responsive>
        </Grid.Column>

        <Grid.Column textAlign="center" verticalAlign="middle" width={6}>
          <Modal.Content>
            <Modal.Description>
              <Header style={{ textSize: "34px",padding: '2em' }}>Create Your Account</Header>
             
            </Modal.Description>
            <RegisterForm />
          </Modal.Content>
          <p style={{ padding: 10 }}>
            Already have an account? 
          </p><LoginModal />
        </Grid.Column>

        <Grid.Column floated="right" width={5}>
          <Responsive minWidth={768}></Responsive>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Modal>
);

export default ModalRegister;
