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
        style={styles.ImageBackground_1_76}
      />
      <View source={{ uri: "null" }} style={styles.View_1_77} />
      <View style={styles.View_1_78}>
        <View style={styles.View_1_79}>
          <Text style={styles.Text_1_79}>Google</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4001/1960/9f6f0b9b7dfca8509e7ac63af63e3277"
          }}
          style={styles.ImageBackground_1_80}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29d5/0fba/fbc57b05e1057474dcc9b341a2715b8b"
          }}
          style={styles.ImageBackground_1_81}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1abb/1d43/18c513fe1b4d7d801695c0cd1e7ab382"
          }}
          style={styles.ImageBackground_1_82}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8b1/0745/fd0038d6f62f37546afe7046acfa9ef8"
          }}
          style={styles.ImageBackground_1_83}
        />
        <View style={styles.View_1_84}>
          <View style={styles.View_1_85} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2816/8aa9/05305501ae46495ce932e03c23c3d5b6"
            }}
            style={styles.ImageBackground_1_86}
          />
        </View>
      </View>
      <View style={styles.View_1_87}>
        <View style={styles.View_1_88}>
          <Text style={styles.Text_1_88}>Lunch in 30 min</Text>
        </View>
        <View style={styles.View_1_89}>
          <Text style={styles.Text_1_89}>12:30 - 1:00 PM</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed29/3396/5468478fd1d1f4340336998ab8980bf6"
          }}
          style={styles.ImageBackground_1_90}
        />
      </View>
      <View style={styles.View_1_101}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d60/dc65/619e3648d64f220089418b95da8f34e7"
          }}
          style={styles.ImageBackground_1_102}
        />
        <View style={styles.View_1_103} />
        <View style={styles.View_1_104} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1d6/89d0/dd4419ea04b428fa5c70dc764ffd358b"
          }}
          style={styles.ImageBackground_1_105}
        />
        <View style={styles.View_1_106}>
          <View style={styles.View_1_107}>
            <Text style={styles.Text_1_107}>T</Text>
          </View>
          <View style={styles.View_1_108}>
            <Text style={styles.Text_1_108}>u</Text>
          </View>
          <View style={styles.View_1_109}>
            <Text style={styles.Text_1_109}>e</Text>
          </View>
          <View style={styles.View_1_110}>
            <Text style={styles.Text_1_110}> </Text>
          </View>
          <View style={styles.View_1_111}>
            <Text style={styles.Text_1_111}>1</Text>
          </View>
          <View style={styles.View_1_112}>
            <Text style={styles.Text_1_112}>8</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9753/470d/f90d12b3365b293e58cf32f86de7ceb5"
        }}
        style={styles.ImageBackground_2_1}
      />
      <View style={styles.View_2_0}>
        <View style={styles.View_1_91} />
        <View style={styles.View_1_92} />
        <View style={styles.View_1_93} />
        <View style={styles.View_1_94} />
        <View style={styles.View_1_95} />
        <View style={styles.View_1_96} />
        <View style={styles.View_1_97} />
        <View style={styles.View_1_98} />
        <View style={styles.View_1_99} />
        <View style={styles.View_1_100} />
        <View style={styles.View_1_113} />
        <View style={styles.View_1_114}>
          <Text style={styles.Text_1_114}>Hi, now can I help?</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1eca/c6b1/7033050480362554cef93ccbd957c08a"
          }}
          style={styles.ImageBackground_1_115}
        />
      </View>
      <View style={styles.View_3_13}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1b4/a50e/c1c0f49f8fff0f723d8aa60fae0b3e95"
          }}
          style={styles.ImageBackground_3_3}
        />
        <View style={styles.View_3_7} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85c0/62ee/bcf9aa4e3964afcef90f64fd6e2a0e55"
          }}
          style={styles.ImageBackground_3_27}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d016/e5f2/254dded6477a07222cf38113c1039029"
          }}
          style={styles.ImageBackground_3_19}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27d7/8e45/f7117482b0d64b1b3d272bac3ee4133c"
          }}
          style={styles.ImageBackground_3_24}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cb2/4010/67a423dc947ff6731a25f854dbef8378"
          }}
          style={styles.ImageBackground_3_16}
        />
        <View style={styles.View_3_8} />
        <View style={styles.View_3_9} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98ae/2fa9/934d025cd79c19c5cd15bc35fcfb676a"
          }}
          style={styles.ImageBackground_3_10}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("118.30601092896175%") },
  ImageBackground_1_76: {
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
  View_1_77: {
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
  View_1_78: {
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
  View_1_79: {
    width: wp("10.948905109489052%"),
    minWidth: wp("10.948905109489052%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.46228710462287%"),
    top: hp("0.8196721311475414%")
  },
  Text_1_79: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_80: {
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
  ImageBackground_1_81: {
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
  ImageBackground_1_82: {
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
  ImageBackground_1_83: {
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
  View_1_84: {
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
  View_1_85: {
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
  ImageBackground_1_86: {
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
  View_1_87: {
    width: wp("34.54987834549878%"),
    minWidth: wp("34.54987834549878%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.542579075425791%"),
    top: hp("11.475409836065573%")
  },
  View_1_88: {
    width: wp("34.54987834549878%"),
    minWidth: wp("34.54987834549878%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_88: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.1,
    textTransform: "none"
  },
  View_1_89: {
    width: wp("27.49391727493917%"),
    minWidth: wp("27.49391727493917%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.8394160583941614%"),
    top: hp("4.23497267759563%")
  },
  Text_1_89: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.08,
    textTransform: "none"
  },
  ImageBackground_1_90: {
    width: wp("3.8929440389294405%"),
    height: hp("2.3224043715846996%"),
    top: hp("4.23497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24330900243309017%")
  },
  View_1_101: {
    width: wp("44.76885644768856%"),
    minWidth: wp("44.76885644768856%"),
    height: hp("25.136612021857925%"),
    minHeight: hp("25.136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.326034063260341%"),
    top: hp("56.284153005464475%")
  },
  ImageBackground_1_102: {
    width: wp("44.76885644768856%"),
    minWidth: wp("44.76885644768856%"),
    height: hp("25.136612021857925%"),
    minHeight: hp("25.136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_103: {
    width: wp("12.895377128953772%"),
    minWidth: wp("12.895377128953772%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.94890510948905%"),
    top: hp("11.885245901639351%"),
    backgroundColor: "rgba(142, 147, 95, 1)",
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26
  },
  View_1_104: {
    width: wp("8.819050104368632%"),
    minWidth: wp("8.819050104368632%"),
    height: hp("8.929889449656335%"),
    minHeight: hp("8.929889449656335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.571776155717764%"),
    top: hp("5.05464480874317%"),
    backgroundColor: "rgba(250, 252, 229, 1)",
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26
  },
  ImageBackground_1_105: {
    width: wp("4.37956204379562%"),
    minWidth: wp("4.37956204379562%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.81508515815085%"),
    top: hp("20.21857923497268%")
  },
  View_1_106: {
    width: wp("14.997637300885797%"),
    minWidth: wp("14.997637300885797%"),
    height: hp("6.582699968515198%"),
    minHeight: hp("6.582699968515198%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.142908397962287%"),
    top: hp("1.0344625170765056%")
  },
  View_1_107: {
    width: wp("3.4315450348123147%"),
    minWidth: wp("3.4315450348123147%"),
    minHeight: hp("3.224762932198946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.10540073515434756%"),
    top: hp("0.5103022674393785%")
  },
  Text_1_107: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.1,
    textTransform: "none"
  },
  View_1_108: {
    width: wp("3.7417307387303262%"),
    minWidth: wp("3.7417307387303262%"),
    minHeight: hp("3.3559457851889354%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5509873735933724%"),
    top: hp("0.534624610442286%")
  },
  Text_1_108: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.1,
    textTransform: "none"
  },
  View_1_109: {
    width: wp("4.407986643250552%"),
    minWidth: wp("4.407986643250552%"),
    minHeight: hp("3.464884054465372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.91059760397658%"),
    top: hp("0.8660655204064227%")
  },
  Text_1_109: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.1,
    textTransform: "none"
  },
  View_1_110: {
    width: wp("3.910994239677188%"),
    minWidth: wp("3.910994239677188%"),
    minHeight: hp("3.160016002550803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.062250216221866%"),
    top: hp("1.4919968902087604%")
  },
  Text_1_110: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.1,
    textTransform: "none"
  },
  View_1_111: {
    width: wp("5.674746436794309%"),
    minWidth: wp("5.674746436794309%"),
    minHeight: hp("3.5010929316119417%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.032493869753647%"),
    top: hp("1.9778976023522858%")
  },
  Text_1_111: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.1,
    textTransform: "none"
  },
  View_1_112: {
    width: wp("6.111291667260683%"),
    minWidth: wp("6.111291667260683%"),
    minHeight: hp("3.3215866714227396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.976329942689329%"),
    top: hp("3.1703010934298206%")
  },
  Text_1_112: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.1,
    textTransform: "none"
  },
  ImageBackground_2_1: {
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
  View_2_0: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("96.03825136612022%")
  },
  View_1_91: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_1_92: {
    width: wp("14.355231143552311%"),
    minWidth: wp("14.355231143552311%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.92457420924574%"),
    top: hp("14.071038251366119%"),
    backgroundColor: "rgba(91, 137, 238, 1)"
  },
  View_1_93: {
    width: wp("14.355231143552311%"),
    minWidth: wp("14.355231143552311%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.27980535279806%"),
    top: hp("14.071038251366119%"),
    backgroundColor: "rgba(206, 92, 77, 1)"
  },
  View_1_94: {
    width: wp("14.355231143552311%"),
    minWidth: wp("14.355231143552311%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.63503649635037%"),
    top: hp("14.071038251366119%"),
    backgroundColor: "rgba(247, 208, 94, 1)"
  },
  View_1_95: {
    width: wp("14.355231143552311%"),
    minWidth: wp("14.355231143552311%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.990267639902676%"),
    top: hp("14.071038251366119%"),
    backgroundColor: "rgba(76, 159, 101, 1)"
  },
  View_1_96: {
    width: wp("13.381995133819952%"),
    minWidth: wp("13.381995133819952%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.114355231143552%"),
    top: hp("21.994535519125677%"),
    backgroundColor: "rgba(4, 42, 124, 1)"
  },
  View_1_97: {
    width: wp("13.138686131386862%"),
    minWidth: wp("13.138686131386862%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.496350364963504%"),
    top: hp("21.994535519125677%"),
    backgroundColor: "rgba(121, 22, 9, 1)"
  },
  View_1_98: {
    width: wp("13.381995133819952%"),
    minWidth: wp("13.381995133819952%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.63503649635037%"),
    top: hp("21.994535519125677%"),
    backgroundColor: "rgba(147, 112, 12, 1)"
  },
  View_1_99: {
    width: wp("13.138686131386862%"),
    minWidth: wp("13.138686131386862%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.017031630170315%"),
    top: hp("21.994535519125677%"),
    backgroundColor: "rgba(17, 96, 40, 1)"
  },
  View_1_100: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_1_113: {
    width: wp("8.27250608272506%"),
    minWidth: wp("8.27250608272506%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.228710462287104%"),
    top: hp("1.5027322404371546%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    borderBottomLeftRadius: 21,
    borderBottomRightRadius: 21
  },
  View_1_114: {
    width: wp("41.119221411192214%"),
    minWidth: wp("41.119221411192214%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.710462287104622%"),
    top: hp("10.928961748633881%")
  },
  Text_1_114: {
    color: "rgba(104, 106, 83, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.1,
    textTransform: "none"
  },
  ImageBackground_1_115: {
    width: wp("6.326034063260341%"),
    minWidth: wp("6.326034063260341%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.47201946472019%"),
    top: hp("6.557377049180317%")
  },
  View_3_13: {
    width: wp("43.30900243309003%"),
    minWidth: wp("43.30900243309003%"),
    height: hp("24.316939890710383%"),
    minHeight: hp("24.316939890710383%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.175182481751825%"),
    top: hp("23.08743169398907%")
  },
  ImageBackground_3_3: {
    width: wp("43.30900243309003%"),
    minWidth: wp("43.30900243309003%"),
    height: hp("24.316939890710383%"),
    minHeight: hp("24.316939890710383%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3_7: {
    width: wp("16.54501216545012%"),
    minWidth: wp("16.54501216545012%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.569343065693431%"),
    top: hp("11.202185792349727%"),
    backgroundColor: "rgba(121, 125, 81, 1)",
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17
  },
  ImageBackground_3_27: {
    width: wp("16.348786365666818%"),
    minWidth: wp("16.348786365666818%"),
    height: hp("7.531804986338798%"),
    minHeight: hp("7.531804986338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.199836526763995%"),
    top: hp("1.0747523907103833%")
  },
  ImageBackground_3_19: {
    width: wp("9.423471715328468%"),
    minWidth: wp("9.423471715328468%"),
    height: hp("7.486445525956284%"),
    minHeight: hp("7.486445525956284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.078201034063262%"),
    top: hp("15.382193476775956%")
  },
  ImageBackground_3_24: {
    width: wp("9.431550334549877%"),
    minWidth: wp("9.431550334549877%"),
    height: hp("7.486445525956284%"),
    minHeight: hp("7.486445525956284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3161876520681233%"),
    top: hp("8.096396857923498%")
  },
  ImageBackground_3_16: {
    width: wp("9.424006329835768%"),
    minWidth: wp("9.424006329835768%"),
    height: hp("7.658811475409837%"),
    minHeight: hp("7.658811475409837%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.750814990115565%"),
    top: hp("8.26983008879781%")
  },
  View_3_8: {
    width: wp("12.65120958759837%"),
    minWidth: wp("12.65120958759837%"),
    height: hp("9.716800001801037%"),
    minHeight: hp("9.716800001801037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.621732020320103%"),
    top: hp("2.8169225473872928%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17
  },
  View_3_9: {
    width: wp("5.89275963405043%"),
    minWidth: wp("5.89275963405043%"),
    height: hp("10.824046108892055%"),
    minHeight: hp("10.824046108892055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.654857626216547%"),
    top: hp("12.331106884231982%"),
    backgroundColor: "rgba(54, 55, 29, 1)",
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17
  },
  ImageBackground_3_10: {
    width: wp("1.4598540145985401%"),
    minWidth: wp("1.4598540145985401%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.92457420924574%"),
    top: hp("11.74863387978142%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
