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
      <View style={styles.View_2_3}>
        <View style={styles.View_2_4} />
        <View style={styles.View_2_5}>
          <Text style={styles.Text_2_5}>9×13</Text>
        </View>
        <View style={styles.View_2_6}>
          <Text style={styles.Text_2_6}>117</Text>
        </View>
        <View style={styles.View_2_7} />
        <View style={styles.View_2_8} />
      </View>
      <View style={styles.View_2_9}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a55/8059/f40243529ec7592bbe593c980d55fa8b"
          }}
          style={styles.ImageBackground_2_10}
        />
        <View style={styles.View_2_11}>
          <Text style={styles.Text_2_11}>DEG</Text>
        </View>
      </View>
      <View style={styles.View_2_12}>
        <View style={styles.View_2_13}>
          <Text style={styles.Text_2_13}>789 456 123 0•</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9f2/0e0c/ba2e1ed6259fbf38412cafb795778a8a"
          }}
          style={styles.ImageBackground_2_14}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc7e/2fe9/21380bc352890e3ace90c2422aa944b9"
        }}
        style={styles.ImageBackground_2_17}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bd2/c7da/619c12b59cbe390be39f9e65f8ea9f48"
        }}
        style={styles.ImageBackground_2_20}
      />
      <View style={styles.View_2_23}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a516/baa9/15fc113c5aa67437b070b161db689162"
          }}
          style={styles.ImageBackground_2_24}
        />
        <View style={styles.View_2_25}>
          <Text style={styles.Text_2_25}>AC</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e835/b738/3fe5f29869e9cfe9529000aa4cb47a59"
        }}
        style={styles.ImageBackground_2_26}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a59/4674/13dae10777c1e7b1607789e02e0c4553"
        }}
        style={styles.ImageBackground_2_29}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f847/7e0b/da4a340f2e3cd56eb0d6325bfb24bf42"
        }}
        style={styles.ImageBackground_2_32}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9602/239a/17b20392925be7421039d48e5467d5c0"
        }}
        style={styles.ImageBackground_2_35}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19ae/b923/172e3e9adf6715c803b216f5c9024bd2"
        }}
        style={styles.ImageBackground_2_38}
      />
      <View style={styles.View_2_41}>
        <View style={styles.View_2_42}>
          <Text style={styles.Text_2_42}>√</Text>
        </View>
        <View style={styles.View_2_43}>
          <Text style={styles.Text_2_43}>π</Text>
        </View>
        <View style={styles.View_2_44}>
          <Text style={styles.Text_2_44}>e</Text>
        </View>
        <View style={styles.View_2_45}>
          <Text style={styles.Text_2_45}>!</Text>
        </View>
        <View style={styles.View_2_46}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9fb/a720/c491f18019466c971207476f13d971ff"
            }}
            style={styles.ImageBackground_2_47}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3684/15e4/09382dfe50644d38436a829a193fc670"
            }}
            style={styles.ImageBackground_2_48}
          />
        </View>
      </View>
      <View style={styles.View_2_49}>
        <View style={styles.View_2_50}>
          <Text style={styles.Text_2_50}>12:00</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6de7/c8c2/bf3add9dc6c9e1f49782bbcb771423f1"
          }}
          style={styles.ImageBackground_2_51}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64ae/db9b/852318365610424795c1437833f52fc6"
          }}
          style={styles.ImageBackground_2_52}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c57/a9e0/68772160d1603c8640fbda3c37be442e"
          }}
          style={styles.ImageBackground_2_53}
        />
        <View style={styles.View_2_54}>
          <View style={styles.View_2_55} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2816/8aa9/05305501ae46495ce932e03c23c3d5b6"
            }}
            style={styles.ImageBackground_2_56}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("118.30601092896175%") },
  View_2_3: {
    width: wp("99.7566909975669%"),
    minWidth: wp("99.7566909975669%"),
    height: hp("38.25136612021858%"),
    minHeight: hp("38.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_4: {
    width: wp("99.7566909975669%"),
    minWidth: wp("99.7566909975669%"),
    height: hp("38.25136612021858%"),
    minHeight: hp("38.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(237, 239, 228, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_2_5: {
    width: wp("37.71289537712895%"),
    minWidth: wp("37.71289537712895%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.311435523114355%"),
    top: hp("13.661202185792352%")
  },
  Text_2_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 58,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -2.555,
    textTransform: "none"
  },
  View_2_6: {
    width: wp("15.085158150851582%"),
    minWidth: wp("15.085158150851582%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.72262773722628%"),
    top: hp("26.09289617486339%")
  },
  Text_2_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -2.8000000000000003,
    textTransform: "none"
  },
  View_2_7: {
    width: wp("0.9732360097323601%"),
    minWidth: wp("0.9732360097323601%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.99756690997567%"),
    top: hp("14.48087431693989%"),
    backgroundColor: "rgba(127, 135, 114, 1)",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  View_2_8: {
    width: wp("9.48905109489051%"),
    minWidth: wp("9.48905109489051%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.25547445255474%"),
    top: hp("36.47540983606557%"),
    backgroundColor: "rgba(198, 204, 194, 1)",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  View_2_9: {
    width: wp("86.13138686131386%"),
    minWidth: wp("86.13138686131386%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.839416058394161%"),
    top: hp("8.469945355191257%")
  },
  ImageBackground_2_10: {
    width: wp("0.9732360097323601%"),
    height: hp("2.185792349726776%"),
    top: hp("0.27322404371584774%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.15815085158151%")
  },
  View_2_11: {
    width: wp("8.51581508515815%"),
    minWidth: wp("8.51581508515815%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_2_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.09,
    textTransform: "none"
  },
  View_2_12: {
    width: wp("52.798053527980535%"),
    minWidth: wp("52.798053527980535%"),
    height: hp("52.459016393442624%"),
    minHeight: hp("52.459016393442624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.408759124087592%"),
    top: hp("62.568306010928964%")
  },
  View_2_13: {
    width: wp("52.798053527980535%"),
    minWidth: wp("52.798053527980535%"),
    minHeight: hp("52.459016393442624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_2_13: {
    color: "rgba(55, 55, 55, 1)",
    fontSize: 27,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 77.69,
    textTransform: "none"
  },
  ImageBackground_2_14: {
    width: wp("5.887663161377548%"),
    minWidth: wp("5.887663161377548%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.2287104622871%"),
    top: hp("44.672131147540966%")
  },
  ImageBackground_2_17: {
    width: wp("21.41119221411192%"),
    minWidth: wp("21.41119221411192%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.20924574209245%"),
    top: hp("62.841530054644814%")
  },
  ImageBackground_2_20: {
    width: wp("21.41119221411192%"),
    minWidth: wp("21.41119221411192%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.49391727493917%"),
    top: hp("49.72677595628415%")
  },
  View_2_23: {
    width: wp("21.41119221411192%"),
    minWidth: wp("21.41119221411192%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8929440389294405%"),
    top: hp("49.72677595628415%")
  },
  ImageBackground_2_24: {
    width: wp("21.41119221411192%"),
    minWidth: wp("21.41119221411192%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_25: {
    width: wp("8.51581508515815%"),
    minWidth: wp("8.51581508515815%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.569343065693429%"),
    top: hp("4.098360655737714%")
  },
  Text_2_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3.12,
    textTransform: "none"
  },
  ImageBackground_2_26: {
    width: wp("21.41119221411192%"),
    minWidth: wp("21.41119221411192%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.85158150851582%"),
    top: hp("49.72677595628415%")
  },
  ImageBackground_2_29: {
    width: wp("21.41119221411192%"),
    minWidth: wp("21.41119221411192%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.20924574209245%"),
    top: hp("49.72677595628415%")
  },
  ImageBackground_2_32: {
    width: wp("21.41119221411192%"),
    minWidth: wp("21.41119221411192%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.20924574209245%"),
    top: hp("75.95628415300546%")
  },
  ImageBackground_2_35: {
    width: wp("21.41119221411192%"),
    minWidth: wp("21.41119221411192%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.20924574209245%"),
    top: hp("89.07103825136612%")
  },
  ImageBackground_2_38: {
    width: wp("21.41119221411192%"),
    minWidth: wp("21.41119221411192%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.20924574209245%"),
    top: hp("102.45901639344261%")
  },
  View_2_41: {
    width: wp("84.91484184914842%"),
    minWidth: wp("84.91484184914842%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.70559610705596%"),
    top: hp("41.12021857923497%")
  },
  View_2_42: {
    width: wp("4.37956204379562%"),
    minWidth: wp("4.37956204379562%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_2_42: {
    color: "rgba(55, 55, 55, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3.9000000000000004,
    textTransform: "none"
  },
  View_2_43: {
    width: wp("3.8929440389294405%"),
    minWidth: wp("3.8929440389294405%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.951338199513383%"),
    top: hp("0.4098360655737707%")
  },
  Text_2_43: {
    color: "rgba(55, 55, 55, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3.38,
    textTransform: "none"
  },
  View_2_44: {
    width: wp("3.40632603406326%"),
    minWidth: wp("3.40632603406326%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.87591240875913%"),
    top: hp("0.4098360655737707%")
  },
  Text_2_44: {
    color: "rgba(55, 55, 55, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3.38,
    textTransform: "none"
  },
  View_2_45: {
    width: wp("1.70316301703163%"),
    minWidth: wp("1.70316301703163%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.74695863746958%"),
    top: hp("0.4098360655737707%")
  },
  Text_2_45: {
    color: "rgba(55, 55, 55, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3.38,
    textTransform: "none"
  },
  View_2_46: {
    width: wp("5.59610705596107%"),
    minWidth: wp("5.59610705596107%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.31873479318736%"),
    top: hp("0.9562841530054698%")
  },
  ImageBackground_2_47: {
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
  ImageBackground_2_48: {
    width: wp("2.9197080291970803%"),
    height: hp("1.012295126263561%"),
    top: hp("1.1331985557014121%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3880671665906306%")
  },
  View_2_49: {
    width: wp("82.7250608272506%"),
    minWidth: wp("82.7250608272506%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.27250608272506%"),
    top: hp("2.8688524590163933%")
  },
  View_2_50: {
    width: wp("8.75912408759124%"),
    minWidth: wp("8.75912408759124%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.136253041362531%"),
    top: hp("0.13661202185792343%")
  },
  Text_2_50: {
    color: "rgba(28, 27, 20, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_51: {
    width: wp("0.9732360097323601%"),
    minWidth: wp("0.9732360097323601%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054649%")
  },
  ImageBackground_2_52: {
    width: wp("4.13625304136253%"),
    minWidth: wp("4.13625304136253%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.4257907542579%"),
    top: hp("0.13661202185792343%")
  },
  ImageBackground_2_53: {
    width: wp("3.40632603406326%"),
    minWidth: wp("3.40632603406326%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.55961070559611%"),
    top: hp("0%")
  },
  View_2_54: {
    width: wp("1.9464720194647203%"),
    minWidth: wp("1.9464720194647203%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.7785888077859%"),
    top: hp("0.13661202185792343%")
  },
  View_2_55: {
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
  ImageBackground_2_56: {
    width: wp("0.9732360097323601%"),
    minWidth: wp("0.9732360097323601%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.48661800486617324%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
