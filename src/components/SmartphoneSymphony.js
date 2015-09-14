let React = require('react-native');
let TabBarNavigator = require('./TabBarNavigator');

let {
  AppRegistry,
  Navigator,
  StyleSheet,
  Animated,
  TouchableHighlight,
  Image,
  Text,
  View,
  AlertIOS
} = React;

class SmartphoneSymphony extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
    };
  }
  render(): ReactElement {
    return (
      <View style={styles.container}>
        <Animated.Image
          source={require('image!SmartSymph-52')}
          style={[styles.appLogo, {
            transform: [
              {scale: this.state.bounceValue}
            ]
          }]}>
          <Text style={styles.appName}>Smartphone Symphony</Text>
        </Animated.Image>
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
    )
  }
  componentDidMount() {
    this.state.bounceValue.setValue(0.05);    // Start small
    Animated.spring(                          // Base: spring, decay, timing
      this.state.bounceValue,                 // Animate `bounceValue`
      {
        toValue: 1,                           // Animate to original size
        tension: 200                          // Spring with more tension
      }
    ).start();
  }
}

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
    marginTop: 50,
    backgroundColor: 'transparent',
    letterSpacing: 2
  },
  appLogo: {
    alignSelf: 'center',
    width: 250,
    height: 250,
    top: -30,
    opacity: 0.85
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

module.exports = SmartphoneSymphony;
