/**
 * React Native app demonstrating react-native-icons
 * https://github.com/corymsmith/react-native-icons
 */
'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight
  //Animated
  } = React;


var BrandColors = {
  Facebook: '#3b5998',
  Twitter: '#55acee'
};

var { Icon, TabBarIOS, Spinner} = require('react-native-icons');
var TabBarItemIOS = TabBarIOS.Item;

var IconNavigator = React.createClass({
  getInitialState: function () {
    return {
      selectedTab: 'home',
      notifCount: 0,
      presses: 0,
      //rotation: Animated.Value(0)
    };
  },
  render: function () {
    return (
      <TabBarIOS
        selectedTab={this.state.selectedTab}
        tintColor={'#FF5744'}
        barTintColor={'white'}
        translucent={true}
        styles={styles.tabBar}>
        <TabBarItemIOS
          name="home"
          iconName={'material|home'}
          title={''}
          badgeValue={null}
          iconSize={32}
          accessibilityLabel="Home Tab"
          selected={this.state.selectedTab === 'home'}
          onPress={() => {
            this.setState({
              selectedTab: 'home',
            });
          }}>
          {this._renderContent()}
        </TabBarItemIOS>
        <TabBarItemIOS
          name="perform"
          iconName={'material|surround-sound'}
          title={''}
          iconSize={32}
          accessibilityLabel="Settings Tab"
          selected={this.state.selectedTab === 'perform'}
          onPress={() => {
            this.setState({
              selectedTab: 'perform',
            });
          }}>
          {this._renderContent()}
        </TabBarItemIOS>
        <TabBarItemIOS
          name="instructions"
          iconName={'material|info'}
          title={''}
          iconSize={32}
          accessibilityLabel="Messages Tab"
          selected={this.state.selectedTab === 'instructions'}
          onPress={() => {
            this.setState({
              selectedTab: 'instructions',
            });
          }}>
          {this._renderContent()}
        </TabBarItemIOS>
      </TabBarIOS>
    );
  },
  _renderContent: function () {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topContainer}>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => alert('Beer!')}>
            <Icon
              name='ion|beer'
              size={40}
              color='#887700'
              style={styles.beer}
              />
          </TouchableHighlight>
          <Icon
            name='material|face'
            size={40}
            color='black'
            style={styles.github}
            />
          <Icon
            name='fontawesome|facebook-square'
            size={40}
            color={BrandColors.Facebook}
            style={styles.facebook}
            />
          <Icon
            name='foundation|lightbulb'
            size={40}
            style={styles.lightbulb}/>
        </View>

        <Text style={styles.header}>
          {'Material Icons'}
        </Text>

        <View style={styles.topContainer}>

          <Spinner name='fontawesome|spinner' size={24} style={{width: 24, height: 24, backgroundColor: 'transparent'}}
                   color='#777'/>
          <Spinner name='ion|load-a' size={24} style={{width: 24, height: 24, backgroundColor: 'transparent'}}
                   color='#777'/>
          <Spinner name='ion|load-b' size={24} style={{width: 24, height: 24, backgroundColor: 'transparent'}}
                   color='#777'/>
          <Spinner name='ion|load-c' size={24} style={{width: 24, height: 24, backgroundColor: 'transparent'}}
                   color='#777'/>
          <Spinner name='ion|load-d' size={24} style={{width: 24, height: 24, backgroundColor: 'transparent'}}
                   color='#777'/>
        </View>

        <Text style={styles.header}>
          {'Stacked Icons!'}
        </Text>
        <Icon
          name='fontawesome|square'
          size={70}
          color={BrandColors.Twitter}
          style={styles.twitterOutline}>
          <Icon
            name='fontawesome|twitter'
            size={40}
            color='#ffffff'
            style={[styles.twitterIcon, {backgroundColor: 'transparent'}]}/>
        </Icon>

        <Text style={styles.header}>
          {'Create social sign in buttons'}
        </Text>
        <View
          style={styles.signInWithTwitterButton}>
          <Icon
            name='fontawesome|twitter'
            size={28}
            color='#ffffff'
            style={styles.signInWithTwitterIcon}/>
          <Text style={styles.signInText}>
            {'Sign in with Twitter'}
          </Text>
        </View>

        <View
          style={styles.signInWithFacebookButton}>
          <Icon
            name='fontawesome|facebook'
            size={28}
            color='#ffffff'
            style={styles.signInWithFacebookIcon}/>
          <Text style={styles.signInText}>
            {'Sign in with Facebook'}
          </Text>
        </View>

      </ScrollView>
    );
  }
});


var styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FF5744',
    flex: 1,
    color: '#ff0000',
    tintColor: '#877324'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  header: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    color: '#555555',
  },
  beer: {
    width: 70,
    height: 70,
    margin: 10
  },
  github: {
    width: 70,
    height: 70,
    margin: 10
  },
  facebook: {
    width: 70,
    height: 70,
    margin: 10
  },
  lightbulb: {
    width: 70,
    height: 70,
    margin: 10
  },
  twitterOutline: {
    flexDirection: 'column',
    width: 70,
    height: 70,
    alignItems: 'center'
  },
  twitterIcon: {
    flex: 1,
    width: 40,
    height: 40
  },
  signInWithTwitterButton: {
    backgroundColor: BrandColors.Twitter,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 210,
    padding: 5,
    borderRadius: 3
  },
  signInWithTwitterIcon: {
    width: 28,
    height: 28,
    marginLeft: 5
  },
  signInText: {
    color: 'white',
    marginLeft: 5,
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 15
  },
  signInWithFacebookButton: {
    backgroundColor: BrandColors.Facebook,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 210,
    padding: 5,
    borderRadius: 3,
    marginTop: 10
  },
  signInWithFacebookIcon: {
    width: 28,
    height: 28,
    marginLeft: 5
  }
});

module.exports = IconNavigator;
