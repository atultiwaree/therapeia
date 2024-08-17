import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Chat, MessageType, defaultTheme} from '@/react-native-chat-ui';
import commonStyle, {commonColor} from '../Styles/AppStyles';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';
import {useSendMessageMutation} from '../redux/apis';
import TypingIndicator from 'react-native-gifted-chat/lib/TypingIndicator';
import LottieView from 'lottie-react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import RenderHtml from 'react-native-render-html';
import Markdown from 'react-native-markdown-display';


const renderMessage = (props) => {
  const { currentMessage } = props;

  return (
    <View style={styles.messageContainer}>
      <Markdown
        style={styles.markdown}
        // Optionally customize the Markdown styles here
      >
        {currentMessage.text}
      </Markdown>
    </View>
  );
};



const ChatWindow = () => {
  const [messages, setMessages] = useState([]);

  const [sendMessage] = useSendMessageMutation();

  const [loading, setLoading] = useState(false);

  const TypingComponent = ({loading}) => {

    if(loading) {
      return (
        <View style = {{width : responsiveWidth(34), paddingLeft : responsiveWidth(14), marginBottom : responsiveWidth(4)}}>
          <LottieView
            source={require('../assets/chat_load.json')}
            style={{height: responsiveWidth(10), width: responsiveWidth(15)}}
            autoPlay
          />
        </View>
      );
    } else {
      return null
    }

    
  };

  
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: `Welcome to therapeia, How may I help you today?`,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://picsum.photos/200',
        },
      },
    ]);
  }, []);

  const onSend = useCallback(async (messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );

    setLoading(true);

    const {data, error} = await sendMessage({
      body: {question: messages[0]?.text},
    });



    if (data?.success) {
      setLoading(false);
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, {
          _id: previousMessages.length + 1,
          text: data?.message,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://picsum.photos/200',
          },
        }),
      );
    }

    if (error) {
      console.log(error.message);
    }
  }, []);


  const renderBubble = props => {
    return (
      <Bubble
      renderMessageText={renderMessage}
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#fff",
            paddingRight : responsiveWidth(3),
            paddingLeft : responsiveWidth(2),
          },
          left : {
            backgroundColor : "#FFE5D9",
            paddingRight : responsiveWidth(3),
            paddingLeft : responsiveWidth(2),
            width : responsiveWidth(80)

          }
        }}

        textStyle={{
          right : {
            color : 'red',
            fontFamily : 'Poppins-Medium'
          }
        }}
      />
    );
  };

  return (
    <View style={{backgroundColor: commonColor.MAIN, flex: 1}}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        shouldUpdateMessage={() => {
          return true;
        }}
        renderFooter={() =>   <TypingComponent loading = {loading}/>}
        disableComposer = {loading}
      />
    </View>
  );
};

export default ChatWindow;



const styles = StyleSheet.create({
  markdown: {
    paragraph: {
      marginBottom: 8,
    },
    heading1: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    strong: {
      fontWeight: 'bold',
    },
    em: {
      fontStyle: 'italic',
    },
    list: {
      marginVertical: 5,
    },
    listItem: {
      fontSize: 16,
    },
    

    markdown: {
      // Set your desired font family
      fontFamily : 'Poppins-Bold',
    },
    heading1: {
      fontFamily : 'Poppins-Bold',
    },
    heading2: {
      fontFamily : 'Poppins-Bold',
    },

    paragraph: {
      fontFamily: 'Poppins-Regular', // Set the font family for normal text
    },
    list: {
      fontFamily: 'Poppins-SemiBold', // Set the font family for list items
    },
    listItem: {
      fontFamily: 'Poppins-Medium', // Set the font family for list items
    },
    text: {
      fontFamily : 'Poppins-Medium',
    },
  },
});
