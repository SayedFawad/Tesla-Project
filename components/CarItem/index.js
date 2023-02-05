import React from 'react';
import {View, Text, Image,} from 'react-native';
import styles from './style';
import images from '../../assets/index';
import StyledButton from '../StyledButton';

const CarItem = (props) => {

 const{name, tagline, taglineCTA, image} = props.car;

    return (
        <View style={styles.carContainer}>


        <Image style={styles.image} source={image}/>
  
          <View style={styles.titles}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.subtitle}>
                {tagline} 
              {' '}
              <Text style={styles.subtitleCTA}>
                {taglineCTA}</Text>
                </Text>
          </View>


       <View style={styles.buttonsContainer}>
       <StyledButton 
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom Order Was Pressed");
          }}
          />

        <StyledButton 
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing Inventory Was Pressed");
          }}
          />
       </View>

         
  
        </View>
    );
};

export default CarItem;