let React = require('react-native');
let ContextNavigator = require('./ContextNavigator');
let DummyScreen = require('./DummyScreen');

let HomeScreen = require('./HomeScreen');
let InstructionsScreen = require('./InstructionsScreen');
let AboutScreen = require('./AboutScreen');

let { TabBarIOS } = require('react-native-icons');

let {
  StyleSheet,
  Component,
  Image,
  Navigator,
  View
} = React;

const ROUTE_STACK = [
  {
    component: ContextNavigator,
    initialRoute: {
      name: 'Home',
      component: HomeScreen,
      color: 'orange',
    }
  },
  {
    component: ContextNavigator,
    initialRoute: {
      name: 'Perform',
      component: DummyScreen,
      color: 'red'
    }
  },
  {
    component: ContextNavigator,
    initialRoute: {
      name: 'Instructions',
      component: InstructionsScreen,
      color: 'blue'
    }
  },
  {
    component: ContextNavigator,
    initialRoute: {
      name: 'About',
      component: AboutScreen,
      color: 'green'
    }
  },
];
const INIT_ROUTE_INDEX = 0;


let TabBarNav = React.createClass({

  getInitialState: function() {
    return {
      tabIndex: this.props.initTabIndex,
    };
  },

  render: function() {
    return (
      <View style={styles.tabs}>
      <TabBarIOS>

        <TabBarIOS.Item
          name="home"
          iconName={'ion|ios-home-outline'}
          title={'Home'}
          badgeValue={null}
          iconSize={32}
          accessibilityLabel="Home Tab"
          selected={this.state.tabIndex === 0}
          onPress={() => {
            this.props.onTabIndex(0);
            this.setState({ tabIndex: 0, });
          }}>
          <View />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          name="perform"
          iconName={'ion|mic-c'}
          title={'Perform'}
          iconSize={28}
          accessibilityLabel="Perform Tab"
          selected={this.state.tabIndex === 1}
          onPress={() => {
            this.props.onTabIndex(1);
            this.setState({ tabIndex: 1, });
          }}>
          <View />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          name="instructions"
          iconName={'ion|ios-information'}
          title={'Instructions'}
          iconSize={32}
          accessibilityLabel="Instructions Tab"
          selected={this.state.tabIndex === 2}
          onPress={() => {
            this.props.onTabIndex(2);
            this.setState({ tabIndex: 2, });
          }}>
          <View />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          name="about"
          iconName={'ion|ios-help'}
          title={'About'}
          iconSize={32}
          accessibilityLabel="About Tab"
          selected={this.state.tabIndex === 3}
          onPress={() => {
            this.props.onTabIndex(3);
            this.setState({ tabIndex: 3, });
          }}>
          <View />
        </TabBarIOS.Item>

      </TabBarIOS>
      </View>
    );
  },

});


let TabBarNavigator = React.createClass({

  renderScene: function(route, navigator) {
    let Component = route.component;
    return (
      <Component
        navigator={navigator}
        route={route}
        topNavigator={this.props.topNavigator}
        topOverlay={this.props.topOverlay} />
    );
  },

  render: function() {
    return (
      <Navigator
        debugOverlay={false}
        ref={(navigator) => { this.navigator = navigator; }}
        initialRoute={ROUTE_STACK[INIT_ROUTE_INDEX]}
        initialRouteStack={ROUTE_STACK}
        renderScene={this.renderScene}
        configureScene={() => ({
          ...Navigator.SceneConfigs.HorizontalSwipeJump,
          gestures: false
        })}
        navigationBar={
          <TabBarNav
            sceneStyle={styles.container}
            ref={(tabBar) => { this.tabBar = tabBar; }}
            initTabIndex={INIT_ROUTE_INDEX}
            routeStack={ROUTE_STACK}
            onTabIndex={(index) => {
              this.navigator.jumpTo(ROUTE_STACK[index]);
            }} />
        } />
    );
  }
});


let styles = StyleSheet.create({
  container: {
    flex: 1,
    left: 0, // https://github.com/facebook/react-native/issues/1332
    backgroundColor: 'white'
  },
  tabs: {
    // important! otherwise you tabs will magically flexbox their way up the screen
    height: 50,
  }

});

module.exports = TabBarNavigator;
