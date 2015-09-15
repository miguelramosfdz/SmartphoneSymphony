let React = require('react-native');

let {
  StyleSheet,
  ScrollView,
  Text,
  View,
} = React;

class AboutTab extends React.Component {
  render(): ReactElement {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>About</Text>
        </View>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          style={styles.scrollView}>
            <Text style={styles.text}>
              Smartphone Symphony was created by hybrid artist, graphic designer, and musician Jeremiah Chiu (Plural).
            </Text>
            <Text style={styles.text}>
              Smartphone Symphony is a participatory chance music performance via your smartphone.
            </Text>
            <Text style={styles.text}>
              Equally inspired by Terry Riley's landmark In C, John Cage's chance music, and the visual music of Oskar Fischinger and Norman McLaren, performers (audience members) follow a loose set of instructions that immerse themselves in a series of audio and visual loops of indeterminate overlap.
            </Text>
            <Text style={styles.text}>
              Smartphone Symphony has been performed at Public Works Gallery as part of "New Nature"...
            </Text>
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
  titleContainer: {
    marginTop: 50,
  },
  contentContainer: {
    padding: 20
  },
  title: {
    fontSize: 72,
    fontFamily: 'SavoyeLetPlain',
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

module.exports = AboutTab;
