import React, { useState } from 'react';
// https://generation3.000webhostapp.com/project/Training/photographer_list.php
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  FlatList,
  Modal,
} from 'react-native';

import { COLORS, FONTS, Images, SIZES } from '../../constants';
import { Header, Statues } from '../../components';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useSelector } from 'react-redux';

// import axios from 'axios';

const ViewProblem = ({ navigation }) => {
  const state = useSelector((state) => (state.products))
  const [dark, setdark] = useState(state.dark);
  
  const [Modal_visible, setModal_visible] = useState(state.dark);
  const [content, setcontent] = useState(
    [
      {
        date: '2020/7/20',
        proplem:
          'ادنًيا بلاًك.. أنتً فالً اللهً ولا فالها مَهمًا كنَنتَ مثًالياً سَتًجدً منً لا يحًبكً.. حًتًىً المًلائكًه تَكَرهها الًشُياطٌيًنً فًكنً كمَا أنتَ. أقَسمً بربيً أنا ما عادَ فيًنيً للكًلامً لوْ يجَيً أحدً بسً ينَاظرَ فيً عيَوْوْنيً (بكيتَ). وحَينً أفيقً أنتهًيً منَ الحَلمَ بهَ وْأبدأَ ب التفَكًيرً (فيهَ). إذا ضًاقتً معًاك الًمذاكًرهً وأمسًك طرفً ثوبك وأرقصً ب الًصالهَ وقولَ .. كلنَ نصيبهَ علىَ اللهَ. عندمًا تثقَ بأن اللهَ.. قريبَ جداً.. كلَ الأشًياء تصبحً بخيرً.. !ط',
      },
      {
        date: '2020/7/20',
        proplem:
          'ادنًيا بلاًك.. أنتً فالً اللهً ولا فالها مَهمًا كنَنتَ مثًالياً سَتًجدً منً لا يحًبكً.. حًتًىً المًلائكًه تَكَرهها الًشُياطٌيًنً فًكنً كمَا أنتَ. أقَسمً بربيً أنا ما عادَ فيًنيً للكًلامً لوْ يجَيً أحدً بسً ينَاظرَ فيً عيَوْوْنيً (بكيتَ). وحَينً أفيقً أنتهًيً منَ الحَلمَ بهَ وْأبدأَ ب التفَكًيرً (فيهَ). إذا ضًاقتً معًاك الًمذاكًرهً وأمسًك طرفً ثوبك وأرقصً ب الًصالهَ وقولَ .. كلنَ نصيبهَ علىَ اللهَ. عندمًا تثقَ بأن اللهَ.. قريبَ جداً.. كلَ الأشًياء تصبحً بخيرً.. !ط',
      },
      {
        date: '2020/7/20',
        proplem:
          'ادنًيا بلاًك.. أنتً فالً اللهً ولا فالها مَهمًا كنَنتَ مثًالياً سَتًجدً منً لا يحًبكً.. حًتًىً المًلائكًه تَكَرهها الًشُياطٌيًنً فًكنً كمَا أنتَ. أقَسمً بربيً أنا ما عادَ فيًنيً للكًلامً لوْ يجَيً أحدً بسً ينَاظرَ فيً عيَوْوْنيً (بكيتَ). وحَينً أفيقً أنتهًيً منَ الحَلمَ بهَ وْأبدأَ ب التفَكًيرً (فيهَ). إذا ضًاقتً معًاك الًمذاكًرهً وأمسًك طرفً ثوبك وأرقصً ب الًصالهَ وقولَ .. كلنَ نصيبهَ علىَ اللهَ. عندمًا تثقَ بأن اللهَ.. قريبَ جداً.. كلَ الأشًياء تصبحً بخيرً.. !ط',
      },
    ])


    return (
      <>
        <Statues />

        <View style={[styles.main_View, { backgroundColor: dark ? COLORS.black : COLORS.white, }]}>
          <Header
            onPress={() => {navigation.replace('WriteProblem')  }}
            Header_name="سجل الشكاوي"
          />

          <View style={styles.View_scroll}>
            {content.length == 0 ? (
              <View style={styles.view_item_empty}>
                <Image
                  source={Images.null_Image}
                  style={{
                    width: RFPercentage(25),
                    height: RFPercentage(25),
                  }}
                />
                <Text style={styles.text_item_empty}> لا توجد شكاوي</Text>
              </View>
            ) : (
              <FlatList
                showsVerticalScrollIndicator={false}
                data={content}
                renderItem={({ item, index }) => (
                  <View style={styles.main_view_item}>
                    <View style={styles.item_problem_view}>
                      <Text style={FONTS.Small_Text}>{item.proplem}</Text>

                      <Text style={{ alignSelf: 'flex-end', marginTop: RFPercentage(2) }}>{item.date}</Text>
                    </View>
                  </View>
                )}
              />
            )}

          </View>
        </View>
      </>
    );
  }


const styles = StyleSheet.create({
  main_View: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },

  View_scroll: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingBottom: 70,
    padding: 5,
  },
  view_item_empty: {
    height: RFPercentage(70),
    width: SIZES.width,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_item_empty: {
    fontSize: RFPercentage(3),
    fontFamily: 'Changa-Medium',
    fontWeight: '300',
    color: COLORS.Green
  },
  main_view_item: {
    paddingVertical: RFPercentage(2.5),
    width: SIZES.width * 0.83,

  },

  item_problem_view: {
    backgroundColor: COLORS.smooth_color,
    alignItems: 'center',
    padding: RFPercentage(2),
    borderRadius: 10,

  },
});


export default ViewProblem