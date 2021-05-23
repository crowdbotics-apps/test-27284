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
      <View style={styles.View_4_1}>
        <View style={styles.View_3_99} />
        <View style={styles.View_4_3} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1854/61ab/a71bc700176bf2ec198cb3c18ed19cfb"
          }}
          style={styles.ImageBackground_4_2}
        />
      </View>
      <View style={styles.View_3_123}>
        <View style={styles.View_3_85} />
        <View style={styles.View_3_84}>
          <Text style={styles.Text_3_84}>00:13</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e84/7d2f/6395a00e3b3cdd3faa253963f57e059d"
        }}
        style={styles.ImageBackground_3_122}
      />
      <View style={styles.View_3_120}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9615/e623/a83dd4be894eb05fec6f28b91ee0aae1"
          }}
          style={styles.ImageBackground_3_86}
        />
        <View style={styles.View_3_87} />
      </View>
      <View style={styles.View_3_121}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9aa0/15f8/4b2aa4d166048ce99e6fbf454102c812"
          }}
          style={styles.ImageBackground_3_90}
        />
        <View style={styles.View_3_118}>
          <View style={styles.View_3_91} />
          <View style={styles.View_3_92} />
        </View>
      </View>
      <View style={styles.View_3_112}>
        <View style={styles.View_3_93} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ae3/3431/b489f487eae06edf7b783b72366c6367"
          }}
          style={styles.ImageBackground_3_94}
        />
        <View style={styles.View_3_95}>
          <Text style={styles.Text_3_95}>.6x</Text>
        </View>
        <View style={styles.View_3_96}>
          <Text style={styles.Text_3_96}>2x</Text>
        </View>
        <View style={styles.View_3_97}>
          <Text style={styles.Text_3_97}>1x</Text>
        </View>
      </View>
      <View style={styles.View_3_111}>
        <View style={styles.View_3_101} />
        <View style={styles.View_3_110}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a7f/2ff6/db76f4894625b3d93a120af8072c0f8c"
            }}
            style={styles.ImageBackground_3_103}
          />
          <View style={styles.View_3_109}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/432e/cd06/4f4af442fafb8fe123b8f0ce79bdc5b3"
              }}
              style={styles.ImageBackground_3_102}
            />
            <View style={styles.View_3_104} />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29d5/0fba/fbc57b05e1057474dcc9b341a2715b8b"
        }}
        style={styles.ImageBackground_3_105}
      />
      <View style={styles.View_3_113} />
      <View style={styles.View_3_117}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97f6/1fa7/6a79b4bf97f8dc2b1d82018eb0cd96bd"
          }}
          style={styles.ImageBackground_3_98}
        />
        <View style={styles.View_3_114} />
        <View style={styles.View_3_115} />
        <View style={styles.View_3_116} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("118.30601092896175%") },
  View_4_1: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("96.72131147540983%"),
    minHeight: hp("96.72131147540983%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191257%")
  },
  View_3_99: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("96.72131147540983%"),
    minHeight: hp("96.72131147540983%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(203, 203, 181, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_4_3: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("96.72131147540983%"),
    minHeight: hp("96.72131147540983%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(203, 203, 181, 1)"
  },
  ImageBackground_4_2: {
    width: wp("469.61485776878044%"),
    minWidth: wp("469.61485776878044%"),
    height: hp("266.8945479262722%"),
    minHeight: hp("266.8945479262722%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-160.3406326034063%"),
    top: hp("-60.79234972677595%")
  },
  View_3_123: {
    width: wp("16.78832116788321%"),
    minWidth: wp("16.78832116788321%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.605839416058394%"),
    top: hp("106.69398907103825%")
  },
  View_3_85: {
    width: wp("16.78832116788321%"),
    minWidth: wp("16.78832116788321%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(224, 121, 110, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_3_84: {
    width: wp("9.002433090024331%"),
    minWidth: wp("9.002433090024331%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.136253041362529%"),
    top: hp("0.956284153005484%")
  },
  Text_3_84: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3_122: {
    width: wp("11.678832116788321%"),
    minWidth: wp("11.678832116788321%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.15571776155717%"),
    top: hp("93.0327868852459%")
  },
  View_3_120: {
    width: wp("16.54501216545012%"),
    minWidth: wp("16.54501216545012%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.84914841849148%"),
    top: hp("91.66666666666666%")
  },
  ImageBackground_3_86: {
    width: wp("16.54501216545012%"),
    minWidth: wp("16.54501216545012%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3_87: {
    width: wp("5.35279805352798%"),
    minWidth: wp("5.35279805352798%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.59610705596107%"),
    top: hp("3.1420765027322517%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_3_121: {
    width: wp("11.678832116788321%"),
    minWidth: wp("11.678832116788321%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.408759124087592%"),
    top: hp("93.0327868852459%")
  },
  ImageBackground_3_90: {
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
  View_3_118: {
    width: wp("2.9197080291970803%"),
    minWidth: wp("2.9197080291970803%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3795620437956195%"),
    top: hp("2.0491803278688536%")
  },
  View_3_91: {
    width: wp("0.9732360097323601%"),
    minWidth: wp("0.9732360097323601%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  View_3_92: {
    width: wp("0.9732360097323601%"),
    minWidth: wp("0.9732360097323601%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9464720194647214%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  View_3_112: {
    width: wp("27.73722627737226%"),
    minWidth: wp("27.73722627737226%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.25304136253041%"),
    top: hp("82.5136612021858%")
  },
  View_3_93: {
    width: wp("27.73722627737226%"),
    minWidth: wp("27.73722627737226%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 38, 38, 1)",
    opacity: 0.44999998807907104,
    borderTopLeftRadius: 23,
    borderTopRightRadius: 23,
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 23
  },
  ImageBackground_3_94: {
    width: wp("8.02919708029197%"),
    minWidth: wp("8.02919708029197%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.732360097323607%"),
    top: hp("0%")
  },
  View_3_95: {
    width: wp("4.13625304136253%"),
    minWidth: wp("4.13625304136253%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.189781021897808%"),
    top: hp("1.229508196721298%")
  },
  Text_3_95: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_96: {
    width: wp("3.1630170316301705%"),
    minWidth: wp("3.1630170316301705%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.8978102189781%"),
    top: hp("1.229508196721298%")
  },
  Text_3_96: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_97: {
    width: wp("3.1630170316301705%"),
    minWidth: wp("3.1630170316301705%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.165450121654509%"),
    top: hp("1.229508196721298%")
  },
  Text_3_97: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_111: {
    width: wp("13.62530413625304%"),
    minWidth: wp("13.62530413625304%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.26520681265207%"),
    top: hp("1.912568306010929%")
  },
  View_3_101: {
    width: wp("13.62530413625304%"),
    minWidth: wp("13.62530413625304%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(122, 190, 131, 1)",
    borderTopLeftRadius: 27,
    borderTopRightRadius: 27,
    borderBottomLeftRadius: 27,
    borderBottomRightRadius: 27
  },
  View_3_110: {
    width: wp("8.27250608272506%"),
    minWidth: wp("8.27250608272506%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6763990267639883%"),
    top: hp("0.5464480874316939%")
  },
  ImageBackground_3_103: {
    width: wp("3.40632603406326%"),
    height: hp("1.366120218579235%"),
    top: hp("0.27322404371584685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3_109: {
    width: wp("2.67639902676399%"),
    minWidth: wp("2.67639902676399%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.59610705596107%"),
    top: hp("0%")
  },
  ImageBackground_3_102: {
    width: wp("2.67639902676399%"),
    height: hp("1.0785160820340849%"),
    top: hp("0.9706674377774935%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3_104: {
    width: wp("1.1678832580863414%"),
    minWidth: wp("1.1678832580863414%"),
    height: hp("1.2978142076502732%"),
    minHeight: hp("1.2978142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7542816681873603%"),
    top: hp("0%"),
    borderColor: "rgba(20, 41, 20, 1)",
    borderWidth: 1.600000023841858,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_3_105: {
    width: wp("0.9732360097323601%"),
    minWidth: wp("0.9732360097323601%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.326034063260341%"),
    top: hp("3.415300546448088%")
  },
  View_3_113: {
    width: wp("17.0316301703163%"),
    minWidth: wp("17.0316301703163%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.84914841849148%"),
    top: hp("116.12021857923497%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    borderBottomLeftRadius: 21,
    borderBottomRightRadius: 21
  },
  View_3_117: {
    width: wp("8.02919708029197%"),
    minWidth: wp("8.02919708029197%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.8345498783455%"),
    top: hp("82.5136612021858%")
  },
  ImageBackground_3_98: {
    width: wp("8.02919708029197%"),
    minWidth: wp("8.02919708029197%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3_114: {
    width: wp("0.7299270072992701%"),
    minWidth: wp("0.7299270072992701%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9464720194647214%"),
    top: hp("1.229508196721298%"),
    backgroundColor: "rgba(106, 116, 57, 1)",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  View_3_115: {
    width: wp("0.7299270072992701%"),
    minWidth: wp("0.7299270072992701%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.352798053527977%"),
    top: hp("1.229508196721298%"),
    backgroundColor: "rgba(106, 116, 57, 1)",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  View_3_116: {
    width: wp("1.70316301703163%"),
    minWidth: wp("1.70316301703163%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.163017031630176%"),
    top: hp("1.5027322404371546%"),
    backgroundColor: "rgba(106, 116, 57, 1)",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
