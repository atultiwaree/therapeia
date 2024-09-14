import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { commonColor, commonSize } from '../Styles/AppStyles';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import { useSendMessageMutation } from '../redux/apis';
import LottieView from 'lottie-react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import Markdown from 'react-native-markdown-display';
import { SafeAreaView } from 'react-native-safe-area-context';
import { navigate } from '../Navigation/RootNavigation';
import Modal from 'react-native-modal'; // Import react-native-modal


const renderMessage = props => {
  const { currentMessage } = props;

  return (
    <View style={styles.messageContainer}>
      <Markdown style={styles.markdown}>{currentMessage.text}</Markdown>
    </View>
  );
};

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [sendMessage] = useSendMessageMutation();
  const [loading, setLoading] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupShown, setPopupShown] = useState(false); // Flag to track if popup has been shown

  const TypingComponent = ({ loading }) => {
    if (loading) {
      return (
        <View
          style={{
            width: responsiveWidth(34),
            paddingLeft: responsiveWidth(14),
            marginBottom: responsiveWidth(4),
          }}
        >
          <LottieView
            source={require('../assets/chat_load.json')}
            style={{ height: responsiveWidth(10), width: responsiveWidth(15) }}
            autoPlay
          />
        </View>
      );
    } else {
      return null;
    }
  };

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: `Welcome to Therapeia, I'm Ella your AI Therapist. How can I help you today?`,
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
    if (popupShown) {
      // If popup has already been shown, only show the modal
      setShowPopup(true);
      return;
    }

    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );

    setMessageCount(prevCount => {
      const newCount = prevCount + 1;
      if (newCount % 2 === 0) { // Trigger the popup every 2 messages
        setShowPopup(true);
      }
      return newCount;
    });

    setLoading(true);

    const { data, error } = await sendMessage({
      body: { question: messages[0]?.text },
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
  }, [popupShown]);

  const renderBubble = props => {
    return (
      <Bubble
        renderMessageText={renderMessage}
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#cec7c1',
            paddingRight: responsiveWidth(3),
            paddingLeft: responsiveWidth(2),
          },
          left: {
            backgroundColor: '#FFE5D9',
            paddingRight: responsiveWidth(3),
            paddingLeft: responsiveWidth(2),
            width: responsiveWidth(80),
          },
        }}
        textStyle={{
          right: {
            color: 'red',
            fontFamily: 'Poppins-Medium',
          },
        }}
      />
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: commonColor.MAIN, flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        shouldUpdateMessage={() => true}
        renderFooter={() => <TypingComponent loading={loading} />}
        disableComposer={loading}
      />

      {/* Popup Modal */}
      <Modal
        isVisible={showPopup}
        onBackdropPress={() => {
          setShowPopup(false);
          setPopupShown(true); // Mark the popup as shown
        }}
        style={styles.modal}
        animationIn="slideInUp" // Modal slides in from the bottom
        animationOut="slideOutDown" // Modal slides out to the bottom
        backdropOpacity={0.6}
        swipeDirection="down" // Allow swipe down to close
      >
        <View style={styles.popupContainer}>
          <View style={styles.popupContent}>
            <Text style={styles.popupTitle}>Attention Required</Text>
            <Text style={styles.popupText}>
              It looks like you've been chatting a lot. If you need professional help, consider connecting with a real mental therapist.
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => {
                  // Handle connection to a real therapist here
                  setShowPopup(false);
                  navigate("realtherapist");
                  setPopupShown(true); // Mark the popup as shown
                }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Connect with a Therapist</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setShowPopup(false);
                  setPopupShown(true); // Mark the popup as shown
                }}
                style={[styles.button, styles.dismissButton]} // Add custom style for dismiss button
              >
                <Text style={styles.buttonText}>Dismiss</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

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
    text: {
      fontFamily: 'Poppins-Medium',
    },
  },
  popupContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  popupContent: {
    width: '100%', // Full width
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    alignItems: 'center',
  },
  popupTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  popupText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    borderColor: commonColor.LIGHT_BORDER,
    borderWidth: commonSize.BORDER_WIDTH,
    borderRadius: commonSize.BORDER_RADIUS,
    width: responsiveWidth(80),
    padding: responsiveWidth(3),
    backgroundColor: '#282828',
    alignItems: 'center',
  },

  dismissButton: {
    marginTop: responsiveWidth(16),
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});

export default ChatWindow;
