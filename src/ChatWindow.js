import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Chat, MessageType, defaultTheme} from '@flyerhq/react-native-chat-ui';
import commonStyle, { commonColor } from '../Styles/AppStyles';
const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.floor(Math.random() * 16);
    const v = c === 'x' ? r : (r % 4) + 8;
    return v.toString(16);
  });
};

const ChatWindow = () => {
  const user1 = {id: '06c33e8b-e835-4736-80f4-63f44b66666d'};
  const user2 = {id: '06c33e8b-e835-4736-80f4-63f44b66666e'};

  const [messages, setMessages] = useState([
    {
      author: user2,
      createdAt: Date.now(),
      id: uuidv4(),
      text: 'I have a few exercises that might help you. Would you like to try a thought diary to track and challenge your negative thoughts, or perhaps some relaxation techniques to help you unwind?',
      type: 'text',
    },
    {
      author: user2,
      createdAt: Date.now(),
      id: uuidv4(),
      text: 'When we feel low, it can help to engage in activities that bring us joy or a sense of accomplishment. Is there something you enjoy doing or something that helps you relax? For example, going for a walk, listening to music, or working on a hobby?',
      type: 'text',
    },

    {
      author: user2,
      createdAt: Date.now(),
      id: uuidv4(),
      text: 'That’s a great example of your competence and hard work. Sometimes, our minds focus on the negative and ignore the positive. How do you feel when you think about that positive feedback?',
      type: 'text',
    },
    {
      author: user1,
      createdAt: Date.now(),
      id: uuidv4(),
      text: 'Well, I did finish a big project last week, and my manager said I did a good job.',
      type: 'text',
    },
    {
      author: user2,
      createdAt: Date.now(),
      id: uuidv4(),
      text: "Let's explore that thought. What evidence do you have that you are failing at your job? Are there any recent achievements or positive feedback that you might be overlooking?",
      type: 'text',
    },

    {
      author: user1,
      createdAt: Date.now(),
      id: uuidv4(),
      text: 'I feel like I’m failing at my job.',
      type: 'text',
    },

    {
      author: user2,
      createdAt: Date.now(),
      id: uuidv4(),
      text: "sounds like you had a difficult experience. Can you identify the specific thoughts that are making you feel this way? For example, 'I’m not good enough' seems like one. Are there others?",
      type: 'text',
    },

    {
      author: user1,
      createdAt: Date.now(),
      id: uuidv4(),
      text: 'I had a tough day at work, and I feel like I’m not good enough.',
      type: 'text',
    },

    {
      author: user2,
      createdAt: Date.now(),
      id: uuidv4(),
      text: "I'm sorry to hear that you're feeling low. Can you tell me more about what’s been going on or what might have caused these feelings?",
      type: 'text',
    },

    {
      author: user1,
      createdAt: Date.now(),
      id: uuidv4(),
      text: 'I am feeling very low today',
      type: 'text',
    },
  ]);

  const addMessage = message => {
    setMessages([message, ...messages]);
  };

  const handleSendPress = message => {
    const textMessage = {
      author: user1,
      createdAt: Date.now(),
      id: uuidv4(),
      text: message.text,
      type: 'text',
    };
    addMessage(textMessage);
  };

  return (
    <View
      style={[commonStyle.container, {paddingHorizontal: 0, paddingBottom: 0}]}>
      <Chat
      
      theme={{
        ...defaultTheme,
        colors: { ...defaultTheme.colors, inputBackground: '#282828', background : commonColor.MAIN },
        
      }}
      
      messages={messages} onSendPress={handleSendPress} user={user1} />
    </View>
  );
};

export default ChatWindow;

const styles = StyleSheet.create({});
