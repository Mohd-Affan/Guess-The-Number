import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Card(props) {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
  //props.children is any content that is present inside the card component or inside the card opening and closing tag. So we are basically accessing or displaying that component here using OFCOURSE 'props'.children
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {height: 2, width: 0},
    shadowRadius: 7,
    shadowOpacity: 0.26,
    backgroundColor: 'white', //important to mention background color as white otherwise shadow would be applied to inside elements instead of the container, hence won't look good.
    marginHorizontal: 25,
    borderRadius: 7,
    height: '20%',
    marginTop: 20,
  },
});
