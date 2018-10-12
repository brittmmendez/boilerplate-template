import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
// import botAvatar from './assets/images/bot.jpg'
import Review from './Review';

// header component style
const headerCompStyle = {
  background: '#7f377c',
  width: '350px',
  height: '50px',
  overflow: 'hidden',
  padding: '7px',
};

const HeaderComp = props => (
  <div className="container has-text-centered" style={headerCompStyle}>
    <div className="content">
      <button type="button" className="button" onClick={props.close}> X </button>
      <h2 className="is-2 has-text-white">{props.headerTitle}</h2>
    </div>
  </div>
);

// chatbot main theme
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Arial',
  headerBgColor: '#7F377C',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#7F377C',
  botFontColor: '#fff',
  userBubbleColor: '#F9969F',
  userFontColor: '#4a4a4a',
  textAlign: 'center',
};

// creates chatbot
@inject('shop')
@observer
class FormChatBot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
    };
  }


  closeBot = () => {
    console.log('Yay!');
    debugger;
    this.opened = false;
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
            // use this to change avatar. import img file
            // botAvatar={botAvatar}
          recognitionEnable
          placeholder="Type Your Message Here!"
          botDelay={1000}
          userDelay={0}
          floating
          toggleFloating={undefined}
          opened={undefined}
          headerComponent={(
            <HeaderComp
              headerTitle="Q & A"
              props={this.props}
              close={this.closeBot}
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
    );
  }
}

export default FormChatBot;
