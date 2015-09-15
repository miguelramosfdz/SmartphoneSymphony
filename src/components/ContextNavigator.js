let React = require('react-native');
let NavigationBar = require('react-native-navbar');

let {
  StyleSheet,
  Component,
  Navigator,
  View
} = React;


let TabItemNavigator = React.createClass({
  renderScene: function(route, navigator) {
    let Component = route.component;
    let navBar = (
      <NavigationBar
        titleColor='white'
        backgroundStyle={styles.navBar}
        buttonsColor='white'
        title={route.name}
        navigator={navigator}
        route={route}
        {...route.props} />
    );
    return (
      <View style={styles.container}>
        {navBar}
        <Component
          navigator={navigator}
          route={route}
          topNavigator={this.props.topNavigator}
          topOverlay={this.props.topOverlay} />
      </View>
    );
  },
  render: function() {
    return (
      <Navigator
        sceneStyle={styles.container}
        ref={(navigator) => { this.navigator = navigator; }}
        renderScene={this.renderScene}
        configureScene={(route) => ({
          ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight,
          gestures: Navigator.SceneConfigs.FloatFromRight.gestures
        })}
        initialRoute={this.props.route.initialRoute} />
    );
  }
});

let styles = StyleSheet.create({
  container: {
    flex: 1,
    left: 0, // https://github.com/facebook/react-native/issues/1332
    backgroundColor: 'white'
  },
  navBar: {
    backgroundColor: '#FF5744'
  }
});

module.exports = TabItemNavigator;
