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
      <View style={styles.View_1_361}>
        <View style={styles.View_1_362}>
          <Text style={styles.Text_1_362}>12:00</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6de7/c8c2/bf3add9dc6c9e1f49782bbcb771423f1"
          }}
          style={styles.ImageBackground_1_363}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64ae/db9b/852318365610424795c1437833f52fc6"
          }}
          style={styles.ImageBackground_1_364}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c57/a9e0/68772160d1603c8640fbda3c37be442e"
          }}
          style={styles.ImageBackground_1_365}
        />
        <View style={styles.View_1_366}>
          <View style={styles.View_1_367} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2816/8aa9/05305501ae46495ce932e03c23c3d5b6"
            }}
            style={styles.ImageBackground_1_368}
          />
        </View>
      </View>
      <View style={styles.View_1_369} />
      <View style={styles.View_1_370}>
        <Text style={styles.Text_1_370}>Privacy dashboard</Text>
      </View>
      <View style={styles.View_1_371}>
        <View style={styles.View_1_372}>
          <Text style={styles.Text_1_372}>Past</Text>
        </View>
        <View style={styles.View_1_373}>
          <Text style={styles.Text_1_373}>24 hours</Text>
        </View>
        <View style={styles.View_1_374}>
          <Text style={styles.Text_1_374}>Location</Text>
        </View>
        <View style={styles.View_1_375}>
          <Text style={styles.Text_1_375}>Camera</Text>
        </View>
        <View style={styles.View_1_376}>
          <Text style={styles.Text_1_376}>Microphone</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00f4/2d13/d93b17793c93dd002a7ec303d35cca7b"
          }}
          style={styles.ImageBackground_1_377}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/928d/c12c/3ea294c3f44d23178201b5f3e98d6ae5"
          }}
          style={styles.ImageBackground_1_378}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/228a/5576/bd67fb2d535ca7ca5b08c148f8a408e4"
          }}
          style={styles.ImageBackground_1_379}
        />
      </View>
      <View style={styles.View_1_380}>
        <View style={styles.View_1_381}>
          <View style={styles.View_1_382}>
            <Text style={styles.Text_1_382}>See other permissions</Text>
          </View>
          <View style={styles.View_1_383}>
            <Text style={styles.Text_1_383}>
              Files and media connects and 3 more
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebeb/c7a9/d31dd64651698c277aeec59d4b223590"
          }}
          style={styles.ImageBackground_1_384}
        />
      </View>
      <View style={styles.View_1_385}>
        <View style={styles.View_1_386}>
          <Text style={styles.Text_1_386}>Microphone</Text>
        </View>
        <View style={styles.View_1_387}>
          <Text style={styles.Text_1_387}>Used by 6 apps</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/450e/5d2e/79f3122c537daee53dd42430dd005146"
          }}
          style={styles.ImageBackground_1_388}
        />
      </View>
      <View style={styles.View_1_389}>
        <View style={styles.View_1_390}>
          <Text style={styles.Text_1_390}>Location</Text>
        </View>
        <View style={styles.View_1_391}>
          <Text style={styles.Text_1_391}>Used by 1 apps</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fd6/3e58/52c3e37deece818d1f8e76b5b39429dc"
          }}
          style={styles.ImageBackground_1_392}
        />
      </View>
      <View style={styles.View_1_393}>
        <View style={styles.View_1_394}>
          <Text style={styles.Text_1_394}>Camera</Text>
        </View>
        <View style={styles.View_1_395}>
          <Text style={styles.Text_1_395}>Used by 5 apps</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/160d/e8bb/c8a7d34eb170820dece07a8621da2721"
          }}
          style={styles.ImageBackground_1_396}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f50d/b5ec/c28f8eab77ffcaf5f85019d1a57e4218"
        }}
        style={styles.ImageBackground_1_397}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("118.30601092896175%") },
  View_1_361: {
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
  View_1_362: {
    width: wp("8.75912408759124%"),
    minWidth: wp("8.75912408759124%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.136253041362531%"),
    top: hp("0.13661202185792343%")
  },
  Text_1_362: {
    color: "rgba(28, 27, 20, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_363: {
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
  ImageBackground_1_364: {
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
  ImageBackground_1_365: {
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
  View_1_366: {
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
  View_1_367: {
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
  ImageBackground_1_368: {
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
  View_1_369: {
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
  View_1_370: {
    width: wp("72.26277372262774%"),
    minWidth: wp("72.26277372262774%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.59610705596107%"),
    top: hp("20.901639344262296%")
  },
  Text_1_370: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_371: {
    width: wp("77.85888077858881%"),
    minWidth: wp("77.85888077858881%"),
    height: hp("31.731364766105273%"),
    minHeight: hp("31.731364766105273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.70559610705596%"),
    top: hp("31.557377049180328%")
  },
  View_1_372: {
    width: wp("6.082725060827251%"),
    minWidth: wp("6.082725060827251%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.71289537712896%"),
    top: hp("10.245901639344265%")
  },
  Text_1_372: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_373: {
    width: wp("19.22141119221411%"),
    minWidth: wp("19.22141119221411%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.65693430656934%"),
    top: hp("12.978142076502731%")
  },
  Text_1_373: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_374: {
    width: wp("13.381995133819952%"),
    minWidth: wp("13.381995133819952%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191253%")
  },
  Text_1_374: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_375: {
    width: wp("11.922141119221411%"),
    minWidth: wp("11.922141119221411%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.070559610705594%"),
    top: hp("3.0054644808743127%")
  },
  Text_1_375: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_376: {
    width: wp("18.248175182481752%"),
    minWidth: wp("18.248175182481752%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.61070559610706%"),
    top: hp("22.81420765027323%")
  },
  Text_1_376: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_377: {
    width: wp("46.95863746958637%"),
    minWidth: wp("46.95863746958637%"),
    height: hp("26.366120218579237%"),
    minHeight: hp("26.366120218579237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.78832116788321%"),
    top: hp("0%")
  },
  ImageBackground_1_378: {
    width: wp("27.61802580524825%"),
    minWidth: wp("27.61802580524825%"),
    height: hp("15.481966571078273%"),
    minHeight: hp("15.481966571078273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.12895139522506%"),
    top: hp("0%")
  },
  ImageBackground_1_379: {
    width: wp("43.78856649654045%"),
    minWidth: wp("43.78856649654045%"),
    height: hp("25.219812028395022%"),
    minHeight: hp("25.219812028395022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.254457496958636%"),
    top: hp("6.511550653176233%")
  },
  View_1_380: {
    width: wp("68.1265206812652%"),
    minWidth: wp("68.1265206812652%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.569343065693431%"),
    top: hp("102.04918032786885%")
  },
  View_1_381: {
    width: wp("56.934306569343065%"),
    minWidth: wp("56.934306569343065%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.19221411192214%"),
    top: hp("0%")
  },
  View_1_382: {
    width: wp("48.9051094890511%"),
    minWidth: wp("48.9051094890511%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_382: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_383: {
    width: wp("56.934306569343065%"),
    minWidth: wp("56.934306569343065%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.961748633879793%")
  },
  Text_1_383: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_384: {
    width: wp("3.8929440389294405%"),
    height: hp("1.366120218579235%"),
    top: hp("2.4590163934426386%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_385: {
    width: wp("36.982968369829685%"),
    minWidth: wp("36.982968369829685%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.81265206812652%"),
    top: hp("90.02732240437157%")
  },
  View_1_386: {
    width: wp("26.034063260340634%"),
    minWidth: wp("26.034063260340634%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.94890510948905%"),
    top: hp("0%")
  },
  Text_1_386: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_387: {
    width: wp("23.357664233576642%"),
    minWidth: wp("23.357664233576642%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.94890510948905%"),
    top: hp("3.961748633879793%")
  },
  Text_1_387: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_388: {
    width: wp("3.40632603406326%"),
    height: hp("2.5956284153005464%"),
    top: hp("1.7759562841530112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_389: {
    width: wp("34.54987834549878%"),
    minWidth: wp("34.54987834549878%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.569343065693431%"),
    top: hp("65.98360655737704%")
  },
  View_1_390: {
    width: wp("18.97810218978102%"),
    minWidth: wp("18.97810218978102%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.19221411192214%"),
    top: hp("0%")
  },
  Text_1_390: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_391: {
    width: wp("23.357664233576642%"),
    minWidth: wp("23.357664233576642%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.19221411192214%"),
    top: hp("3.961748633879793%")
  },
  Text_1_391: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_392: {
    width: wp("3.64963503649635%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_393: {
    width: wp("35.03649635036496%"),
    minWidth: wp("35.03649635036496%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.082725060827251%"),
    top: hp("78.00546448087432%")
  },
  View_1_394: {
    width: wp("17.0316301703163%"),
    minWidth: wp("17.0316301703163%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.678832116788321%"),
    top: hp("0%")
  },
  Text_1_394: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_395: {
    width: wp("23.357664233576642%"),
    minWidth: wp("23.357664233576642%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.678832116788321%"),
    top: hp("3.961748633879779%")
  },
  Text_1_395: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_396: {
    width: wp("5.109489051094891%"),
    height: hp("1.912568306010929%"),
    top: hp("2.0491803278688394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_397: {
    width: wp("85.40145985401459%"),
    height: hp("2.185792349726776%"),
    top: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.569343065693431%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
