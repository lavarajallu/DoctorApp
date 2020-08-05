import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import StarRating from 'react-native-star-rating';


class GeneralStar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
    <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
      <Text style={{textAlign:'left', fontWeight:'bold', color:'gray', fontSize:18}}>{this.state.starCount}</Text>
      <View style={{paddingLeft:5}}>
      <StarRating
        disabled={false}
        maxStars={5}
        starSize={18}
        halfStarColor={'#FFA500'}
        fullStarColor={'#FFA500'}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        starStyle={{marginLeft:0}}
      />
      </View>
      </View>
    );
  }
}

export default GeneralStar