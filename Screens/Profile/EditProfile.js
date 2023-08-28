import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  PermissionsAndroid,
} from 'react-native';
import { COLORS, FONTS, Icons, Images, SIZES } from '../../constants';
import { RFPercentage } from 'react-native-responsive-fontsize';
import * as ImagePicker from 'react-native-image-picker';
import { Header, Statues } from '../../components';
import { Textinput } from '../../components/TextInput';
import { useSelector } from 'react-redux';

// const state = useSelector((state) => (state.products))

const Edit_profile = ({navigation}) => {
  const state = useSelector((state) => (state.products))
  const [dark, setdark] = useState(state.dark);

  const [photo_uri, setphoto_uri] = useState('')
  const [photo_data, setphoto_data] = useState('')
  const [edit, setedit] = useState(false)
  const [name, setname] = useState("ahmed")
  const [email, setemail] = useState('ahmedkhalifa20199@gmail.com')
  const [phone, setphone] = useState('01273564321')

  useEffect(() => {
    requestCameraPermission()
  }, [])


  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  selectFromGallery = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary({ options, includeBase64: true }, res => {
      // console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        setphoto_data(res.assets[0])
        setphoto_uri(res.assets[0].uri)

      }
    });
  };

  launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        setphoto_data(res.assets[0])
        setphoto_uri(res.assets[0].uri)
      }
    });
  };

  // editable

  Editable = () => {
    return (
      <>
        <View style={{ alignItems: 'center', width: SIZES.width }}>
          <Textinput
            value={name}
            placeholder='الـاســم'
            iconName='user'
            onChangeText={(value) => {
              setname(value)
            }}
            textinputStyle={{ color: dark ? COLORS.white : COLORS.black }}
            placeholderTextColor={dark ? COLORS.white : COLORS.black}
          />

          <Textinput
            value={email}
            placeholder='الــبــريد الالـكـتروني'
            iconName='mail'
            onChangeText={(value) => {
              setemail(value)
            }}
            textinputStyle={{ color: dark ? COLORS.white : COLORS.black }}
            placeholderTextColor={dark ? COLORS.white : COLORS.black}
          />

          <Textinput
            value={phone}
            placeholder='رقــم الهــاتــف'
            iconName='phone'
            onChangeText={(value) => {
              setphone(value)
            }}
            textinputStyle={{ color: dark ? COLORS.white : COLORS.black }}
            placeholderTextColor={dark ? COLORS.white : COLORS.black}
          />
        </View>
      </>
    )
  }

  UnEditable = () => {
    return (
      <>
        <View style={{ alignItems: 'center', width: SIZES.width }}>
          <Textinput
            value={name}
            placeholder='الـاســم'
            iconName='user'
            onChangeText={(value) => {
              setname(value)
            }}
            editable={false}
            textinputStyle={{ color: dark ? COLORS.white : COLORS.black }}
            placeholderTextColor={dark ? COLORS.white : COLORS.black}
          />

          <Textinput
            value={email}
            placeholder='الــبــريد الالـكـتروني'
            iconName='mail'
            onChangeText={(value) => {
              setemail(value)
            }}
            editable={false}
            textinputStyle={{ color: dark ? COLORS.white : COLORS.black }}
            placeholderTextColor={dark ? COLORS.white : COLORS.black}
          />

          <Textinput
            value={phone}
            placeholder='رقــم الهــاتــف'
            iconName='phone'
            onChangeText={(value) => {
              setphone(value)
            }}
            editable={false}
            textinputStyle={{ color: dark ? COLORS.white : COLORS.black }}
            placeholderTextColor={dark ? COLORS.white : COLORS.black}
          />
        </View>
      </>

    )
  }


  return (
    <>
      <Statues />

      <View style={{ flex: 1, backgroundColor: dark ? COLORS.black : COLORS.white }}>

        <Header
          Header_name='الملف الشخصي'
          Image_Source={edit ? Icons.correct : Icons.Edit_profile}
          onPress={() => { navigation.goBack() }}
          Sec_onPress={() => { setedit(!edit) }}
        />




        <View style={styles.View_scroll}>
          <ScrollView style={styles.scroll_style}>
            <View style={styles.view_picture}>
              {photo_uri == '' ? (
                <TouchableOpacity onPress={() => selectFromGallery()}>
                  <Image source={Images.user_Image} style={styles.Picture} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => selectFromGallery()}>
                  <Image
                    source={{ uri: photo_uri }}
                    style={styles.Picture}
                  />
                </TouchableOpacity>
              )}

              <View style={styles.cam_icon_style}>
                <TouchableOpacity onPress={() => launchCamera()}>
                  <Image
                    source={Icons.Camera}
                    style={{
                      width: RFPercentage(4),
                      height: RFPercentage(4),
                      tintColor: COLORS.white
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>



            {
              edit ?

                Editable() :
                UnEditable()
            }


          </ScrollView>
        </View>
      </View>
    </>
  );

}
const styles = StyleSheet.create({
  scroll_style: {
  },
  View_scroll: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RFPercentage(7.5)
  },

  TouchableOpacity_close_true: {
    width: RFPercentage(5),
    height: RFPercentage(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  main_text: {
    color: COLORS.Green,
  },
  view_picture: {
    height: RFPercentage(30),
    width: SIZES.width,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: RFPercentage(4)
  },
  Picture: {
    width: RFPercentage(27.5),
    height: RFPercentage(27.5),
    borderRadius: RFPercentage(25),
    backgroundColor: COLORS.white,
    // marginTop: -140,
  },
  text_input_style: {
    width: '100%',
    height: 40,
    backgroundColor: COLORS.white,
    // borderColor: 'red',
    // borderWidth: 2,
  },
  Textinput_MainView: {
    borderBottomColor: COLORS.Green,
    borderBottomWidth: 2,
    flexDirection: 'column',
    marginTop: RFPercentage(4),
    width: RFPercentage(40),
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    height: RFPercentage(10),
    justifyContent: 'space-around',
    // borderColor: 'red',
    // borderWidth: 2,
  },
  cam_icon_style: {
    width: RFPercentage(6),
    height: RFPercentage(6),
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RFPercentage(-4.5),
    marginLeft: RFPercentage(10),
    backgroundColor: COLORS.Green,
  },
});

export default Edit_profile