let React = require('react-native');
let {
  AppRegistry,
  StyleSheet,
  // Animated,
  TouchableHighlight,
  Image,
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

let SmartphoneSymphony = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appName}>Smartphone Symphony</Text>
        <TouchableHighlight
          style={[styles.button, {borderTopWidth: 2, borderTopColor: 'white'}]}
          underlayColor='rgba(255, 255, 255, 0.3)'
          onShowUnderlay={() => {
            return;
          }}
          onPress={() => {
            return;
          }}>
          <Text style={styles.buttonText}>Instructions</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          underlayColor='rgba(255, 255, 255, 0.3)'
          onPress={() => {
            return;
          }}>
          <Text style={styles.buttonText}>Perform</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          underlayColor='rgba(255, 255, 255, 0.3)'
          onPress={() => {
            return;
          }}>
          <Text style={styles.buttonText}>About</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
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
    fontFamily: 'SavoyeLetPlain',
    fontSize: 72,
    textAlign: 'center',
    paddingBottom: 50,
  },
  appLogo: {
    position: 'absolute',
    width: 331,
    height: 331,
    top: 10,
    left: 10
  },
  button: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  },
  buttonText: {
    fontSize: 26,
    fontFamily: 'Bradley Hand',
    padding: 30,
    textAlign: 'center',
    color: 'white'
  }
});

AppRegistry.registerComponent('SmartphoneSymphony', () => SmartphoneSymphony);
