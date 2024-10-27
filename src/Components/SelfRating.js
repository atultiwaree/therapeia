import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import commonStyle from '../../Styles/AppStyles';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import { navigate } from '../../Navigation/RootNavigation';


const SelfRating = ({route}) => {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const handlePress = level => {
    setSelectedLevel(level);

    setTimeout(() => {

        navigate("whatWorks", {category : route?.params?.category, moodState : route?.params?.moodState})

    }, 1000)

  };

  return (
    <View style={[commonStyle.container]}>
      {/* Title */}
      <Text style={commonStyle.boldTitle}>ESCALATION OF ANXIETY</Text>

      {/* Scale Numbers */}
      <View style={styles.numbersContainer}>
        {anxietyLevels.map((level, index) => (
          <Text key={index} style={styles.scaleNumber}>
            {level.value * 2}
          </Text>
        ))}
      </View>

      {/* Scale with Color Blocks */}
      <View style={styles.scaleContainer}>
        <View style={styles.colorBlockContainer}>
          {anxietyLevels.map((level, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.colorBlock, {backgroundColor: level.color}]}
              onPress={() => handlePress(level.value * 2)}
            />
          ))}
        </View>

        {/* Emojis and Labels */}
        <View style={styles.labelsContainer}>
          {anxietyLevels.map((level, index) => (
            <TouchableOpacity key={index} style={styles.levelContainer} onPress={() => handlePress(level.value * 2)}>
              <Text style={styles.emoji}>{level.emoji}</Text>
              <Text style={styles.label}>{level.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.descriptionsContainer}>
        {anxietyDescriptionsTwo.map((item, index) => (
          <Text key={index} style={styles.description}>
            <Text style={styles.boldText}>{item.range}:</Text>{' '}
            {item.description}
          </Text>
        ))}
      </View>

      {/* Show Selected Level */}
      {selectedLevel !== null && (
        <Text style={styles.selectedLevelText}>
          Selected Anxiety Level: {selectedLevel}
        </Text>
      )}
    </View>
  );
};

const anxietyLevels = [
  {value: 0, text: 'No Anxiety', emoji: '😀', color: '#00FF00'},
  {value: 1, text: 'Mild', emoji: '🙂', color: '#99FF00'},
  {value: 2, text: 'Moderate', emoji: '😐', color: '#FFFF00'},
  {value: 3, text: 'Severe', emoji: '😟', color: '#FFCC00'},
  {value: 4, text: 'Extreme', emoji: '😨', color: '#FF6600'},
  {value: 5, text: 'Unbearable', emoji: '😡', color: '#FF0000'},
];

const anxietyDescriptions = [
  '0-1: Logic & Executive Function...',
  '2-3: Logic & Emotions in control...',
  '4-6: Logic & Executive Function...',
  '7-8: Emotions in charge...',
  '9-10: Unbearable Anxiety...',
];

const anxietyDescriptionsTwo = [
  {
    range: '0-1',
    description:
      'Logic & Executive Function in charge. Prefrontal Cortex controls behavior and decision-making.',
  },
  {
    range: '2-3',
    description:
      'Logic & Emotions in balance. Prefrontal Cortex and Amygdala share control of behavior and decisions.',
  },
  {
    range: '4-6',
    description:
      'Logic & Executive Function start losing control. Emotions become more involved in decision-making.',
  },
  {
    range: '7-8',
    description:
      'Emotions are dominant. Amygdala is in charge, with little input from logical thinking.',
  },
  {
    range: '9-10',
    description:
      'Unbearable Anxiety. Overwhelming emotions, no logic. Amygdala fully in control of decisions and behavior.',
  },
];

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  scaleContainer: {
    marginVertical: 10,
  },
  colorBlockContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  colorBlock: {
    flex: 1,
    height: 10,
    // marginHorizontal: 2,
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  levelContainer: {
    alignItems: 'center',
  },
  emoji: {
    fontSize: 24,
    color: 'white',
  },
  label: {
    fontSize: 10,
    marginTop: 5,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },

  descriptionsContainer: {
    marginTop: 30,
    paddingHorizontal: 10,
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
    lineHeight: 20,
    textAlign: 'left',
    color: '#333',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#000',
  },
  selectedLevelText: {
    fontSize: 16,
    color: 'blue',
    textAlign: 'center',
    marginTop: 20,
  },
  numbersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 20,
  },
  scaleNumber: {
    fontSize: 14,
    textAlign: 'center',
    flex: 1,
    color: '#000',
  },
});

export default SelfRating;
