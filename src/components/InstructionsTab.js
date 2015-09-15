let React = require('react-native');

let {
  StyleSheet,
  ScrollView,
  Text,
  View,
} = React;

class InstructionsTab extends React.Component {
  render(): ReactElement {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          style={styles.scrollView}>
            <Text style={styles.title}>Instructions</Text>
            <Text style={styles.text}>Please keep talking to a minimum.</Text>
            <Text style={styles.text}>Any number of smartphones can be used. A group of 35 is desired but smaller or larger groups will work.</Text>
            <Text style={styles.text}>If laptops or other devices are available, they may join.</Text>
            <Text style={styles.text}>Upon opening the application click the Perform tab. Loops will be indicated as 1 through 10. Loops are played consecutively with each performer having the freedom to determine how many times.</Text>
        </ScrollView>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FF5744',
  },
  contentContainer: {
    padding: 20
  },
  title: {
    fontSize: 52,
    fontFamily: 'Bradley Hand',
    marginBottom: 25,
    textAlign: 'center',
    color: 'white'
  },
  text: {
    fontSize: 22,
    fontFamily: 'Bradley Hand',
    marginBottom: 25,
    textAlign: 'center',
    color: 'white'
  }
});

module.exports = InstructionsTab;
