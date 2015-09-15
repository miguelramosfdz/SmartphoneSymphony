let React = require('react-native');

let {
  StyleSheet,
  Animated,
  Image,
  Text,
  View,
} = React;

class HomeTab extends React.Component {
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
  }
});

module.exports = HomeTab;
