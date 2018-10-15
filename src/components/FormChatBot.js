import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
// import botAvatar from './assets/images/bot.jpg'
import Review from './Review';

// header component style
const headerCompStyle = {
  background: '#2E5D66',
  width: '350px',
  height: '50px',
  overflow: 'hidden',
  padding: '7px',
};

const HeaderComp = props => (
  <div
    className="container columns is-marginless is-mobile"
    style={headerCompStyle}
  >
    <div className="column">
      <div className="content">
        <h2 className="is-2 has-text-white">{props.headerTitle}</h2>
      </div>
    </div>
    <div className="column has-text-right">
      <span className="icon has-text-white" onClick={props.close}>
        <i className="fas fa-lg fa-times-circle" />
      </span>
    </div>
  </div>
);

// chatbot main theme
const theme = {
  background: '#fff',
  fontFamily: 'Arial',
  headerBgColor: '#2E5D66',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#2E5D66',
  botFontColor: '#fff',
  userBubbleColor: '#742F49',
  userFontColor: '#fff',
  textAlign: 'center',
};

// creates chatbot
@inject('shop')
@observer
class FormChatBot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }


  toggleBot = () => {
    console.log('Yay!');
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div className="chatBotTheme">
        <ThemeProvider theme={theme}>
          <ChatBot
              // use this to change avatar. import img file
              // botAvatar={botAvatar}
            recognitionEnable
            placeholder="Type Your Message Here!"
            botDelay={1000}
            userDelay={0}
            floating
            toggleFloating={() => this.toggleBot()}
            opened={this.state.open}
            headerComponent={(
              <HeaderComp
                headerTitle="Q & A"
                props={this.props}
                close={() => this.toggleBot()}
              />
  )}
            steps={[
              {
                id: '1',
                message: 'What is your name?',
                trigger: 'name',
              },
              {
                id: 'name',
                user: true,
                trigger: '3',
              },
              {
                id: '3',
                message: 'Hi {previousValue}! What is your gender?',
                trigger: 'gender',
              },
              {
                id: 'gender',
                options: [
                  { value: 'male', label: 'Male', trigger: '5' },
                  { value: 'female', label: 'Female', trigger: '5' },
                ],
              },
              {
                id: '5',
                message: 'How old are you?',
                trigger: 'age',
              },
              {
                id: 'age',
                user: true,
                trigger: '7',
                validator: (value) => {
                  const val = parseInt(value, 10);
                  console.log(val);
                  if ((!val)) {
                    return 'value must be a number';
                  } if (val < 0) {
                    return 'value must be positive';
                  } if (val > 120) {
                    return `${value}? Come on!`;
                  }
                  return true;
                },
              },
              {
                id: '7',
                message: 'Great! Check out your summary',
                trigger: 'review',
              },
              {
                id: 'review',
                component: <Review />,
                asMessage: true,
                trigger: 'update',
              },
              {
                id: 'update',
                message: 'Would you like to update some field?',
                trigger: 'update-question',
              },
              {
                id: 'update-question',
                options: [
                  { value: 'yes', label: 'Yes', trigger: 'update-yes' },
                  { value: 'no', label: 'No', trigger: 'end-message' },
                ],
              },
              {
                id: 'update-yes',
                message: 'What field would you like to update?',
                trigger: 'update-fields',
              },
              {
                id: 'update-fields',
                options: [
                  { value: 'name', label: 'Name', trigger: 'update-name' },
                  { value: 'gender', label: 'Gender', trigger: 'update-gender' },
                  { value: 'age', label: 'Age', trigger: 'update-age' },
                ],
              },
              {
                id: 'update-name',
                update: 'name',
                trigger: '7',
              },
              {
                id: 'update-gender',
                update: 'gender',
                trigger: '7',
              },
              {
                id: 'update-age',
                update: 'age',
                trigger: '7',
              },
              {
                id: 'end-message',
                message: 'Thanks! Your data was submitted successfully!',
                end: true,
              },
            ]}
          />
        </ThemeProvider>
      </div>
    );
  }
}

export default FormChatBot;
