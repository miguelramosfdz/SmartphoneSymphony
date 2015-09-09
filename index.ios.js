/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Text,
  View
} = React;

// @see https://facebook.github.io/react-native/docs/animations.html#animated
// class Playground extends React.Component {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       bounceValue: new Animated.Value(0),
//     };
//   }
//   render(): ReactElement {
//     return (
//       <Animated.Image                         // Base: Image, Text, View
//         source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
//         style={{
//           flex: 1,
//           transform: [                        // `transform` is an ordered array
//             {scale: this.state.bounceValue},  // Map `bounceValue` to `scale`
//           ]
//         }}
//       />
//     );
//   }
//   componentDidMount() {
//     this.state.bounceValue.setValue(1.5);     // Start large
//     Animated.spring(                          // Base: spring, decay, timing
//       this.state.bounceValue,                 // Animate `bounceValue`
//       {
//         toValue: 0.8,                         // Animate to smaller size
//         friction: 1,                          // Bouncier spring
//       }
//     ).start();                                // Start the animation
//   }
// }

var SmartphoneSymphony = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.appName}>Smartphone Symphony</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              return;
            }}>
            <Text style={styles.buttonText}>Instructions</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              return;
            }}>
            <Text style={styles.buttonText}>Perform</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              return;
            }}>
            <Text style={styles.buttonText}>About</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    // alignItems: 'center',
    backgroundColor: '#FF5744',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  appName: {
    fontFamily: 'Times New Roman',
    fontSize: 52,
    textAlign: 'center',
    paddingBottom: 100
  },
  appLogo: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 14
  },
  buttonContainer: {
    borderBottomColor: 'white',
    borderWidth: 1,
    borderStyle: 'dashed',
  },
  buttonText: {
    fontSize: 26,
    fontFamily: 'Times New Roman',
    padding: 30,
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('SmartphoneSymphony', () => SmartphoneSymphony);
