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
      <View style={styles.View_4_164} />
      <View style={styles.View_4_165} />
      <View style={styles.View_4_101}>
        <View style={styles.View_4_102}>
          <Text style={styles.Text_4_102}>12:00</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6de7/c8c2/bf3add9dc6c9e1f49782bbcb771423f1"
          }}
          style={styles.ImageBackground_4_103}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64ae/db9b/852318365610424795c1437833f52fc6"
          }}
          style={styles.ImageBackground_4_104}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c57/a9e0/68772160d1603c8640fbda3c37be442e"
          }}
          style={styles.ImageBackground_4_105}
        />
        <View style={styles.View_4_106}>
          <View style={styles.View_4_107} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2816/8aa9/05305501ae46495ce932e03c23c3d5b6"
            }}
            style={styles.ImageBackground_4_108}
          />
        </View>
      </View>
      <View style={styles.View_4_109} />
      <View style={styles.View_4_110}>
        <Text style={styles.Text_4_110}>Settings</Text>
      </View>
      <View style={styles.View_4_111}>
        <Text style={styles.Text_4_111}>Search Settings...</Text>
      </View>
      <View style={styles.View_4_150}>
        <Text style={styles.Text_4_150}>
          Explore what you can do with your phone
        </Text>
      </View>
      <View style={styles.View_4_149}>
        <Text style={styles.Text_4_149}>Get to know your Pixel</Text>
      </View>
      <View style={styles.View_4_119}>
        <Text style={styles.Text_4_119}>
          Wi-Fi, Mobile, Data usage, Hotspot
        </Text>
      </View>
      <View style={styles.View_4_151}>
        <Text style={styles.Text_4_151}>Bluetooth, Cast, NFC</Text>
      </View>
      <View style={styles.View_4_153}>
        <Text style={styles.Text_4_153}>Permissions, default apps</Text>
      </View>
      <View style={styles.View_4_155}>
        <Text style={styles.Text_4_155}>Permissions, dafault apps</Text>
      </View>
      <View style={styles.View_4_157}>
        <Text style={styles.Text_4_157}>
          Screen time, app timer, bedtime schedules
        </Text>
      </View>
      <View style={styles.View_4_122}>
        <Text style={styles.Text_4_122}>Network &amp; Internet</Text>
      </View>
      <View style={styles.View_4_152}>
        <Text style={styles.Text_4_152}>Connected devices</Text>
      </View>
      <View style={styles.View_4_154}>
        <Text style={styles.Text_4_154}>App</Text>
      </View>
      <View style={styles.View_4_156}>
        <Text style={styles.Text_4_156}>Notifications</Text>
      </View>
      <View style={styles.View_4_158}>
        <Text style={styles.Text_4_158}>Digital wellbeing</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef2b/2c58/4d9207bd70c859bde62f2d7f0f659792"
        }}
        style={styles.ImageBackground_4_148}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/016b/ec75/ca6b243134c48b8eeb6dc7519175e95c"
        }}
        style={styles.ImageBackground_4_159}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/016b/ec75/ca6b243134c48b8eeb6dc7519175e95c"
        }}
        style={styles.ImageBackground_4_160}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/016b/ec75/ca6b243134c48b8eeb6dc7519175e95c"
        }}
        style={styles.ImageBackground_4_161}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/016b/ec75/ca6b243134c48b8eeb6dc7519175e95c"
        }}
        style={styles.ImageBackground_4_162}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/016b/ec75/ca6b243134c48b8eeb6dc7519175e95c"
        }}
        style={styles.ImageBackground_4_163}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2910/104f/6be2ad43faab7edbad7d5efaec0f7d73"
        }}
        style={styles.ImageBackground_4_175}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8500/ee39/8f525fbddfe63ab05548b82863638258"
        }}
        style={styles.ImageBackground_4_178}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e25/cfce/1ffd06315eec38d161db7bed44cee561"
        }}
        style={styles.ImageBackground_4_181}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c49a/0135/f6d4798d18e94cec6943aa66bd4a8f2f"
        }}
        style={styles.ImageBackground_4_184}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e56/00ac/970e44cb01277110b3b9dc4b0321541d"
        }}
        style={styles.ImageBackground_4_187}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1118/2fa2/f5f5dd1c6e3496f23f872b92e3132965"
        }}
        style={styles.ImageBackground_4_190}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0fc/34ac/c6fd8bc77ecd51e7f40037ae25031882"
        }}
        style={styles.ImageBackground_4_196}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("118.30601092896175%") },
  View_4_164: {
    width: wp("89.78102189781022%"),
    minWidth: wp("89.78102189781022%"),
    height: hp("12.568306010928962%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.109489051094891%"),
    top: hp("29.6448087431694%"),
    backgroundColor: "rgba(219, 234, 141, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_4_165: {
    width: wp("89.78102189781022%"),
    minWidth: wp("89.78102189781022%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.109489051094891%"),
    top: hp("44.26229508196721%"),
    backgroundColor: "rgba(252, 252, 247, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_4_101: {
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
  View_4_102: {
    width: wp("8.75912408759124%"),
    minWidth: wp("8.75912408759124%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.136253041362531%"),
    top: hp("0.13661202185792343%")
  },
  Text_4_102: {
    color: "rgba(28, 27, 20, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_103: {
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
  ImageBackground_4_104: {
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
  ImageBackground_4_105: {
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
  View_4_106: {
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
  View_4_107: {
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
  ImageBackground_4_108: {
    width: wp("0.9732360097323601%"),
    minWidth: wp("0.9732360097323601%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.48661800486617324%"),
    top: hp("0%")
  },
  View_4_109: {
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
  View_4_110: {
    width: wp("32.11678832116788%"),
    minWidth: wp("32.11678832116788%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.59610705596107%"),
    top: hp("20.76502732240437%")
  },
  Text_4_110: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_111: {
    width: wp("37.95620437956204%"),
    minWidth: wp("37.95620437956204%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.51824817518248%"),
    top: hp("45.90163934426229%")
  },
  Text_4_111: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_150: {
    width: wp("64.47688564476886%"),
    minWidth: wp("64.47688564476886%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.734793187347933%"),
    top: hp("36.74863387978142%")
  },
  Text_4_150: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.28,
    textTransform: "none"
  },
  View_4_149: {
    width: wp("51.09489051094891%"),
    minWidth: wp("51.09489051094891%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.734793187347933%"),
    top: hp("32.650273224043715%")
  },
  Text_4_149: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_119: {
    width: wp("51.82481751824818%"),
    minWidth: wp("51.82481751824818%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.654501216545015%"),
    top: hp("60.10928961748634%")
  },
  Text_4_119: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_151: {
    width: wp("31.143552311435524%"),
    minWidth: wp("31.143552311435524%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.654501216545015%"),
    top: hp("71.85792349726776%")
  },
  Text_4_151: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_153: {
    width: wp("39.416058394160586%"),
    minWidth: wp("39.416058394160586%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.654501216545015%"),
    top: hp("83.87978142076503%")
  },
  Text_4_153: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_155: {
    width: wp("39.416058394160586%"),
    minWidth: wp("39.416058394160586%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.654501216545015%"),
    top: hp("95.90163934426229%")
  },
  Text_4_155: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_157: {
    width: wp("63.990267639902676%"),
    minWidth: wp("63.990267639902676%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.654501216545015%"),
    top: hp("107.65027322404373%")
  },
  Text_4_157: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_122: {
    width: wp("40.87591240875913%"),
    minWidth: wp("40.87591240875913%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.654501216545015%"),
    top: hp("56.284153005464475%")
  },
  Text_4_122: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_152: {
    width: wp("41.605839416058394%"),
    minWidth: wp("41.605839416058394%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.654501216545015%"),
    top: hp("68.0327868852459%")
  },
  Text_4_152: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_154: {
    width: wp("8.75912408759124%"),
    minWidth: wp("8.75912408759124%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.654501216545015%"),
    top: hp("80.05464480874316%")
  },
  Text_4_154: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_156: {
    width: wp("27.980535279805352%"),
    minWidth: wp("27.980535279805352%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.654501216545015%"),
    top: hp("92.07650273224044%")
  },
  Text_4_156: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_158: {
    width: wp("36.009732360097324%"),
    minWidth: wp("36.009732360097324%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.654501216545015%"),
    top: hp("103.82513661202186%")
  },
  Text_4_158: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_148: {
    width: wp("12.408759124087592%"),
    minWidth: wp("12.408759124087592%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.23844282238443%"),
    top: hp("11.748633879781421%")
  },
  ImageBackground_4_159: {
    width: wp("11.435523114355231%"),
    minWidth: wp("11.435523114355231%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.082725060827251%"),
    top: hp("56.14754098360656%")
  },
  ImageBackground_4_160: {
    width: wp("11.435523114355231%"),
    minWidth: wp("11.435523114355231%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.082725060827251%"),
    top: hp("68.16939890710383%")
  },
  ImageBackground_4_161: {
    width: wp("11.435523114355231%"),
    minWidth: wp("11.435523114355231%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.082725060827251%"),
    top: hp("80.05464480874316%")
  },
  ImageBackground_4_162: {
    width: wp("11.435523114355231%"),
    minWidth: wp("11.435523114355231%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.082725060827251%"),
    top: hp("92.21311475409836%")
  },
  ImageBackground_4_163: {
    width: wp("11.435523114355231%"),
    minWidth: wp("11.435523114355231%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.082725060827251%"),
    top: hp("103.82513661202186%")
  },
  ImageBackground_4_175: {
    width: wp("5.839416058394161%"),
    height: hp("3.278688524590164%"),
    top: hp("57.786885245901644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.002433090024331%")
  },
  ImageBackground_4_178: {
    width: wp("5.839416058394161%"),
    height: hp("3.278688524590164%"),
    top: hp("69.80874316939891%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.002433090024331%")
  },
  ImageBackground_4_181: {
    width: wp("5.839416058394161%"),
    height: hp("3.278688524590164%"),
    top: hp("81.69398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.002433090024331%")
  },
  ImageBackground_4_184: {
    width: wp("5.839416058394161%"),
    height: hp("3.278688524590164%"),
    top: hp("93.85245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.002433090024331%")
  },
  ImageBackground_4_187: {
    width: wp("5.839416058394161%"),
    height: hp("3.278688524590164%"),
    top: hp("105.46448087431695%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.002433090024331%")
  },
  ImageBackground_4_190: {
    width: wp("5.839416058394161%"),
    height: hp("3.278688524590164%"),
    top: hp("45.90163934426229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.002433090024331%")
  },
  ImageBackground_4_196: {
    width: wp("5.839416058394161%"),
    height: hp("3.278688524590164%"),
    top: hp("34.2896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.002433090024331%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
