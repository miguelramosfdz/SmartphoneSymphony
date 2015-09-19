let React = require('react-native');

let {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  View,
} = React;

class AboutScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // TODO: Create buttons based on props
    let buttons = () => {
      let array = [];
      for (let i = this.props.numButtons; i != 0; --i) {
        array.push(
          React.createFactory(
            <Image
              style={styles.toggleImage}
              source={require('image!SmartSymph-52')}>
              <Text style={styles.imageText}>{i}</Text>
            </Image>
          )
        )
      }
      return array;
    }
    this.state = {buttons};
  }
  render(): ReactElement {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          style={styles.scrollView}>
            <Image
              style={styles.toggleImage}
              source={require('image!SmartSymph-52')}>
              <Text style={styles.imageText}>1</Text>
            </Image>
            <Image
              style={styles.toggleImage}
              source={require('image!SmartSymph-52')}>
              <Text style={styles.imageText}>2</Text>
            </Image>
            <Image
              style={styles.toggleImage}
              source={require('image!SmartSymph-52')}>
              <Text style={styles.imageText}>3</Text>
            </Image>
            <Image
              style={styles.toggleImage}
              source={require('image!SmartSymph-52')}>
              <Text style={styles.imageText}>4</Text>
            </Image>
            <Image
              style={styles.toggleImage}
              source={require('image!SmartSymph-52')}>
              <Text style={styles.imageText}>5</Text>
            </Image>
            <Image
              style={styles.toggleImage}
              source={require('image!SmartSymph-52')}>
              <Text style={styles.imageText}>6</Text>
            </Image>
            <Image
              style={styles.toggleImage}
              source={require('image!SmartSymph-52')}>
              <Text style={styles.imageText}>7</Text>
            </Image>
            <Image
              style={styles.toggleImage}
              source={require('image!SmartSymph-52')}>
              <Text style={styles.imageText}>8</Text>
            </Image>
            <Image
              style={styles.toggleImage}
              source={require('image!SmartSymph-52')}>
              <Text style={styles.imageText}>9</Text>
            </Image>
            <Image
              style={styles.toggleImage}
              source={require('image!SmartSymph-52')}>
              <Text style={styles.imageText}>10</Text>
            </Image>
            <Image
              style={styles.toggleImage}
              source={require('image!SmartSymph-52')}>
              <Text style={styles.imageText}>11</Text>
            </Image>
            <Image
              style={styles.toggleImage}
              source={require('image!SmartSymph-52')}>
              <Text style={styles.imageText}>12</Text>
            </Image>
        </ScrollView>
      </View>
    )
  }
}

AboutScreen.propTypes = { numButtons: React.PropTypes.number };
AboutScreen.defaultProps = { numButtons: 12 }

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#FF5744',
  },
  titleContainer: {
    marginTop: 50,
  },
  contentContainer: {
    position: 'absolute',
    bottom: 10,
    width: 370,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20
  },
  imageText: {
    fontSize: 22,
    fontFamily: 'Bradley Hand',
    marginTop: 5,
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'transparent'
  },
  toggleImage: {
    width: 39,
    height: 39,
    margin: 8,
    opacity: 0.8
  }
});

module.exports = AboutScreen;
