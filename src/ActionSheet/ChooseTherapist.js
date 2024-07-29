import {StyleSheet, Text, View} from 'react-native';
import React, { useRef } from 'react';
import ActionSheet from 'react-native-actions-sheet';

const ChooseTherapist = () => {
  const actionSheetRef = useRef(null);

  return (
    <ActionSheet ref={actionSheetRef}>
      <Text>Hi, I am here.</Text>
    </ActionSheet>
  );
};

export default ChooseTherapist;

const styles = StyleSheet.create({});
