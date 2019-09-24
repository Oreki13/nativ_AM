import React, {Fragment} from 'react';
import {View, StyleSheet} from 'react-native';
import {Content, Button, Text} from 'native-base';

const ProfileItem = () => {
  return (
    <Content>
      <View style={styles.content}>
        <View style={styles.Title}>
          <Text style={styles.TitleText}>My Profile</Text>
        </View>
        <View style={styles.In}>
          <Text style={styles.TitleTextIn}>
            Name: Muhammad Arfandy Surya Nugraha
          </Text>
          <Text style={styles.TitleTextIn}>
            Email: arfandynugraha21@gmail.com
          </Text>
          <Text style={styles.TitleTextIn}>Role: Admin</Text>
        </View>
      </View>
      <View style={styles.Buton}>
        <Button bordered style={styles.ButonIn}>
          <Text>Login</Text>
        </Button>
        <Button bordered>
          <Text>Light</Text>
        </Button>
      </View>
    </Content>
  );
};

const styles = StyleSheet.create({
  content: {marginTop: 10},
  Title: {alignItems: 'center'},
  In: {alignItems: 'center', marginTop: 5, padding: 10},
  TitleText: {fontSize: 20},
  TitleTextIn: {fontSize: 15, textAlign: 'left', marginTop: 5},
  Buton: {alignItems: 'center'},
  ButonIn: {marginBottom: 15, width: 80},
  ButonText: {},
});

export default ProfileItem;
