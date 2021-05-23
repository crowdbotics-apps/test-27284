import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1854/61ab/a71bc700176bf2ec198cb3c18ed19cfb"
        }}
        style={styles.ImageBackground_1_3}
      />
      <View source={{ uri: "null" }} style={styles.View_1_4} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1540/d160/a613e8150dfee2e398eb115457029af9"
        }}
        style={styles.ImageBackground_5_156}
      />
      <View style={styles.View_1_5}>
        <View style={styles.View_1_6}>
          <Text style={styles.Text_1_6}>Google</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4001/1960/9f6f0b9b7dfca8509e7ac63af63e3277"
          }}
          style={styles.ImageBackground_1_7}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29d5/0fba/fbc57b05e1057474dcc9b341a2715b8b"
          }}
          style={styles.ImageBackground_1_8}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1abb/1d43/18c513fe1b4d7d801695c0cd1e7ab382"
          }}
          style={styles.ImageBackground_1_9}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8b1/0745/fd0038d6f62f37546afe7046acfa9ef8"
          }}
          style={styles.ImageBackground_1_10}
        />
        <View style={styles.View_1_11}>
          <View style={styles.View_1_12} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2816/8aa9/05305501ae46495ce932e03c23c3d5b6"
            }}
            style={styles.ImageBackground_1_13}
          />
        </View>
      </View>
      <View style={styles.View_1_14} />
      <View style={styles.View_1_15}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26b0/a16b/440459fd69f77473c748f14ecdc5c3d5"
          }}
          style={styles.ImageBackground_1_16}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2de3/52a3/33db60333576ab47af069f3e1e60ec90"
          }}
          style={styles.ImageBackground_1_17}
        />
      </View>
      <View style={styles.View_1_18}>
        <View style={styles.View_1_19}>
          <Text style={styles.Text_1_19}>12 47</Text>
        </View>
        <View style={styles.View_1_20}>
          <Text style={styles.Text_1_20}>:</Text>
        </View>
      </View>
      <View style={styles.View_1_21}>
        <View style={styles.View_1_22}>
          <Text style={styles.Text_1_22}>Lunch in 30 min</Text>
        </View>
        <View style={styles.View_1_23}>
          <Text style={styles.Text_1_23}>12:30 - 1:00 PM</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed29/3396/5468478fd1d1f4340336998ab8980bf6"
          }}
          style={styles.ImageBackground_1_24}
        />
      </View>
      <View style={styles.View_1_25}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8db4/6d5c/d80db0991b4b66e840033abae9dfeb57"
          }}
          style={styles.ImageBackground_1_26}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c80/1b97/a4331bf4dae20bc34aec2673e9b94a9b"
          }}
          style={styles.ImageBackground_1_27}
        />
        <View style={styles.View_1_28}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31d9/a9e1/2fe8e3209a8137a1e6220f9b2a36125f"
            }}
            style={styles.ImageBackground_1_29}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/461e/398f/73b2df6bccb20009afa1401bed3d41cc"
            }}
            style={styles.ImageBackground_1_30}
          />
          <View style={styles.View_1_31}>
            <Text style={styles.Text_1_31}>2</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd6e/ee4e/e8faea713a750312b226ad3e9cbe5c3f"
            }}
            style={styles.ImageBackground_1_32}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/554d/fa04/cc63dd56034331152faafb38c9cea9b7"
            }}
            style={styles.ImageBackground_1_33}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1116/6569/8bcd34242a845cfec420ded41a10d26c"
            }}
            style={styles.ImageBackground_1_34}
          />
          <View style={styles.View_1_35}>
            <Text style={styles.Text_1_35}>Jane</Text>
          </View>
          <View style={styles.View_1_36}>
            <Text style={styles.Text_1_36}>2m</Text>
          </View>
          <View style={styles.View_1_37}>
            <Text style={styles.Text_1_37}>Text me when you get here!</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb73/91a3/fe389970bc325fe223de3e694456a6fc"
            }}
            style={styles.ImageBackground_1_38}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/174b/4618/29aada0b75f216ed0d0e16525c7adb61"
            }}
            style={styles.ImageBackground_1_39}
          />
        </View>
        <View style={styles.View_1_40}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4ba/a42f/8484ef151b1c48de3e8cddda38b1d237"
            }}
            style={styles.ImageBackground_1_41}
          />
          <View style={styles.View_1_42}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db2f/ceb7/359073cce7fe8f5b17a08b672648d10f"
              }}
              style={styles.ImageBackground_1_43}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3684/15e4/09382dfe50644d38436a829a193fc670"
              }}
              style={styles.ImageBackground_1_44}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1116/6569/8bcd34242a845cfec420ded41a10d26c"
            }}
            style={styles.ImageBackground_1_45}
          />
          <View style={styles.View_1_46}>
            <Text style={styles.Text_1_46}>Florian</Text>
          </View>
          <View style={styles.View_1_47}>
            <Text style={styles.Text_1_47}>2m</Text>
          </View>
          <View style={styles.View_1_48}>
            <Text style={styles.Text_1_48}>How was your trip?</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb73/91a3/fe389970bc325fe223de3e694456a6fc"
            }}
            style={styles.ImageBackground_1_49}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/174b/4618/29aada0b75f216ed0d0e16525c7adb61"
            }}
            style={styles.ImageBackground_1_50}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("118.30601092896175%") },
  ImageBackground_1_3: {
    width: wp("469.61485776878044%"),
    minWidth: wp("469.61485776878044%"),
    height: hp("266.8945479262722%"),
    minHeight: hp("266.8945479262722%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-131.6301703163017%"),
    top: hp("-20.901639344262296%")
  },
  View_1_4: {
    width: wp("146.95863746958636%"),
    minWidth: wp("146.95863746958636%"),
    height: hp("124.18032786885247%"),
    minHeight: hp("124.18032786885247%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8.51581508515815%"),
    top: hp("-1.639344262295082%")
  },
  ImageBackground_5_156: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("118.30601092896175%"),
    minHeight: hp("118.30601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_5: {
    width: wp("90.02433090024331%"),
    minWidth: wp("90.02433090024331%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.109489051094891%"),
    top: hp("2.5956284153005464%")
  },
  View_1_6: {
    width: wp("10.948905109489052%"),
    minWidth: wp("10.948905109489052%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.46228710462287%"),
    top: hp("0.8196721311475414%")
  },
  Text_1_6: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_7: {
    width: wp("6.81265206812652%"),
    minWidth: wp("6.81265206812652%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_8: {
    width: wp("0.9732360097323601%"),
    minWidth: wp("0.9732360097323601%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9197080291970794%"),
    top: hp("1.639344262295082%")
  },
  ImageBackground_1_9: {
    width: wp("4.13625304136253%"),
    minWidth: wp("4.13625304136253%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.7250608272506%"),
    top: hp("1.0928961748633879%")
  },
  ImageBackground_1_10: {
    width: wp("3.40632603406326%"),
    minWidth: wp("3.40632603406326%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.8588807785888%"),
    top: hp("0.9562841530054644%")
  },
  View_1_11: {
    width: wp("1.9464720194647203%"),
    minWidth: wp("1.9464720194647203%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.07785888077858%"),
    top: hp("1.0928961748633879%")
  },
  View_1_12: {
    width: wp("1.9464720194647203%"),
    minWidth: wp("1.9464720194647203%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185792387%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  ImageBackground_1_13: {
    width: wp("0.9732360097323601%"),
    minWidth: wp("0.9732360097323601%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.48661800486618745%"),
    top: hp("0%")
  },
  View_1_14: {
    width: wp("17.0316301703163%"),
    minWidth: wp("17.0316301703163%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.84914841849148%"),
    top: hp("116.12021857923497%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    borderBottomLeftRadius: 21,
    borderBottomRightRadius: 21
  },
  View_1_15: {
    width: wp("11.678832116788321%"),
    minWidth: wp("11.678832116788321%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.7785888077859%"),
    top: hp("108.19672131147541%")
  },
  ImageBackground_1_16: {
    width: wp("11.678832116788321%"),
    minWidth: wp("11.678832116788321%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_17: {
    width: wp("4.866180048661801%"),
    height: hp("2.185792349726776%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4063260340632553%")
  },
  View_1_18: {
    width: wp("53.04136253041363%"),
    minWidth: wp("53.04136253041363%"),
    height: hp("14.48087431693989%"),
    minHeight: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.622871046228711%"),
    top: hp("5.46448087431694%")
  },
  View_1_19: {
    width: wp("53.04136253041363%"),
    minWidth: wp("53.04136253041363%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0928961748633883%")
  },
  Text_1_19: {
    color: "rgba(235, 246, 150, 1)",
    fontSize: 67,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2.1,
    textTransform: "none"
  },
  View_1_20: {
    width: wp("5.109489051094891%"),
    minWidth: wp("5.109489051094891%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.844282238442823%"),
    top: hp("0%")
  },
  Text_1_20: {
    color: "rgba(235, 246, 150, 1)",
    fontSize: 67,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2.1,
    textTransform: "none"
  },
  View_1_21: {
    width: wp("34.54987834549878%"),
    minWidth: wp("34.54987834549878%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.542579075425791%"),
    top: hp("21.311475409836063%")
  },
  View_1_22: {
    width: wp("34.54987834549878%"),
    minWidth: wp("34.54987834549878%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_22: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.1,
    textTransform: "none"
  },
  View_1_23: {
    width: wp("27.49391727493917%"),
    minWidth: wp("27.49391727493917%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.8394160583941614%"),
    top: hp("4.234972677595632%")
  },
  Text_1_23: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.08,
    textTransform: "none"
  },
  ImageBackground_1_24: {
    width: wp("3.8929440389294405%"),
    height: hp("2.3224043715846996%"),
    top: hp("4.234972677595632%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24330900243309017%")
  },
  View_1_25: {
    width: wp("89.78102189781022%"),
    minWidth: wp("89.78102189781022%"),
    height: hp("24.043715846994534%"),
    minHeight: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.109489051094891%"),
    top: hp("35.10928961748634%")
  },
  ImageBackground_1_26: {
    width: wp("89.78102189781022%"),
    minWidth: wp("89.78102189781022%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.885245901639344%")
  },
  ImageBackground_1_27: {
    width: wp("89.78102189781022%"),
    minWidth: wp("89.78102189781022%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_28: {
    width: wp("83.69829683698296%"),
    minWidth: wp("83.69829683698296%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4330900243309%"),
    top: hp("2.4590163934426172%")
  },
  ImageBackground_1_29: {
    width: wp("12.165450121654501%"),
    minWidth: wp("12.165450121654501%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_30: {
    width: wp("5.59610705596107%"),
    minWidth: wp("5.59610705596107%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.96593673965937%"),
    top: hp("1.9125683060109324%")
  },
  View_1_31: {
    width: wp("1.70316301703163%"),
    minWidth: wp("1.70316301703163%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.91240875912409%"),
    top: hp("2.4590163934426243%")
  },
  Text_1_31: {
    color: "rgba(78, 111, 102, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_32: {
    width: wp("5.59610705596107%"),
    minWidth: wp("5.59610705596107%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.10218978102189%"),
    top: hp("1.9125683060109324%")
  },
  ImageBackground_1_33: {
    width: wp("2.9197080291970803%"),
    height: hp("1.012295126263561%"),
    top: hp("3.0457668617123517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.49025694761252%")
  },
  ImageBackground_1_34: {
    width: wp("3.1630170316301705%"),
    minWidth: wp("3.1630170316301705%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.24574209245742%"),
    top: hp("4.918032786885256%")
  },
  View_1_35: {
    width: wp("8.75912408759124%"),
    minWidth: wp("8.75912408759124%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.05839416058394%"),
    top: hp("0.546448087431699%")
  },
  Text_1_35: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_36: {
    width: wp("5.109489051094891%"),
    minWidth: wp("5.109489051094891%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.71046228710462%"),
    top: hp("0.8196721311475414%")
  },
  Text_1_36: {
    color: "rgba(113, 115, 104, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_37: {
    width: wp("41.3625304136253%"),
    minWidth: wp("41.3625304136253%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.05839416058394%"),
    top: hp("3.961748633879786%")
  },
  Text_1_37: {
    color: "rgba(94, 95, 93, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_38: {
    width: wp("0.9732360097323601%"),
    minWidth: wp("0.9732360097323601%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.277372262773717%"),
    top: hp("1.7759562841530112%")
  },
  ImageBackground_1_39: {
    width: wp("1.70316301703163%"),
    height: hp("0.6830601092896175%"),
    top: hp("5.464480874316941%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.97566909975669%")
  },
  View_1_40: {
    width: wp("83.69829683698296%"),
    minWidth: wp("83.69829683698296%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4330900243309%"),
    top: hp("14.344262295081968%")
  },
  ImageBackground_1_41: {
    width: wp("12.165450121654501%"),
    minWidth: wp("12.165450121654501%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_42: {
    width: wp("5.59610705596107%"),
    minWidth: wp("5.59610705596107%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.10218978102189%"),
    top: hp("1.9125683060109253%")
  },
  ImageBackground_1_43: {
    width: wp("5.59610705596107%"),
    minWidth: wp("5.59610705596107%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_44: {
    width: wp("2.9197080291970803%"),
    height: hp("1.012295126263561%"),
    top: hp("1.1331985557014264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3880671665906306%")
  },
  ImageBackground_1_45: {
    width: wp("3.1630170316301705%"),
    minWidth: wp("3.1630170316301705%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.24574209245742%"),
    top: hp("4.918032786885249%")
  },
  View_1_46: {
    width: wp("12.165450121654501%"),
    minWidth: wp("12.165450121654501%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.05839416058394%"),
    top: hp("0.5464480874316919%")
  },
  Text_1_46: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_47: {
    width: wp("5.109489051094891%"),
    minWidth: wp("5.109489051094891%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.360097323600975%"),
    top: hp("0.8196721311475414%")
  },
  Text_1_47: {
    color: "rgba(113, 115, 104, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_48: {
    width: wp("28.953771289537713%"),
    minWidth: wp("28.953771289537713%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.05839416058394%"),
    top: hp("3.961748633879779%")
  },
  Text_1_48: {
    color: "rgba(94, 95, 93, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_49: {
    width: wp("0.9732360097323601%"),
    minWidth: wp("0.9732360097323601%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.927007299270073%"),
    top: hp("1.775956284152997%")
  },
  ImageBackground_1_50: {
    width: wp("1.70316301703163%"),
    height: hp("0.6830601092896175%"),
    top: hp("5.464480874316941%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.97566909975669%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
