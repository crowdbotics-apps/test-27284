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
      <View style={styles.View_4_207}>
        <View style={styles.View_4_208}>
          <Text style={styles.Text_4_208}>12:00</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6de7/c8c2/bf3add9dc6c9e1f49782bbcb771423f1"
          }}
          style={styles.ImageBackground_4_209}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64ae/db9b/852318365610424795c1437833f52fc6"
          }}
          style={styles.ImageBackground_4_210}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c57/a9e0/68772160d1603c8640fbda3c37be442e"
          }}
          style={styles.ImageBackground_4_211}
        />
        <View style={styles.View_4_212}>
          <View style={styles.View_4_213} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2816/8aa9/05305501ae46495ce932e03c23c3d5b6"
            }}
            style={styles.ImageBackground_4_214}
          />
        </View>
      </View>
      <View style={styles.View_4_215} />
      <View style={styles.View_4_263}>
        <Text style={styles.Text_4_263}>Call using: (650) 555-0124</Text>
      </View>
      <View style={styles.View_4_327}>
        <View style={styles.View_4_216}>
          <Text style={styles.Text_4_216}>Jo Hall</Text>
        </View>
        <View style={styles.View_4_260}>
          <Text style={styles.Text_4_260}>cloudysanfrancisco@gmail.com</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3804/1c4a/5f29dcf1bcffc464c7735258224fff40"
          }}
          style={styles.ImageBackground_4_230}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce13/697c/e360e4d3fa7284d71af764436953ac03"
        }}
        style={styles.ImageBackground_4_257}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f971/8ea7/8b28fdc9bbaf61a415cf63c2ff0174c3"
        }}
        style={styles.ImageBackground_4_262}
      />
      <View style={styles.View_4_318}>
        <View style={styles.View_4_206} />
        <View style={styles.View_4_217}>
          <Text style={styles.Text_4_217}>Call</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa6b/0712/ca16fbd5b65b6042a2a2d8d1cc91e6b6"
          }}
          style={styles.ImageBackground_4_266}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0edb/1e52/26942f614f667221514a17e217edaf4e"
        }}
        style={styles.ImageBackground_4_273}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec6f/bc15/3dfebb00c55b987c0a4f3f88d365e7b6"
        }}
        style={styles.ImageBackground_4_276}
      />
      <View style={styles.View_4_315}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af92/a2c0/a7b5afcb3cc9f89c5abf53377775abec"
          }}
          style={styles.ImageBackground_4_286}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5aae/7256/3b694862238cecab8b62a3483de58bd4"
          }}
          style={styles.ImageBackground_4_289}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/155b/84e6/89ad6aa74e6b905937947cd18f406450"
        }}
        style={styles.ImageBackground_4_316}
      />
      <View style={styles.View_4_319}>
        <View style={styles.View_4_310}>
          <View style={styles.View_4_291} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df58/8e10/f6cd6efcaac567f155697d7ad98572c4"
            }}
            style={styles.ImageBackground_4_283}
          />
          <View style={styles.View_4_299}>
            <Text style={styles.Text_4_299}>Message</Text>
          </View>
        </View>
        <View style={styles.View_4_309}>
          <View style={styles.View_4_292} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1b0/1a5e/e914f81dc75b8710fd054500db637469"
            }}
            style={styles.ImageBackground_4_279}
          />
          <View style={styles.View_4_300}>
            <Text style={styles.Text_4_300}>Note</Text>
          </View>
        </View>
        <View style={styles.View_4_307}>
          <View style={styles.View_4_295} />
          <View style={styles.View_4_301}>
            <Text style={styles.Text_4_301}>❤️</Text>
          </View>
        </View>
        <View style={styles.View_4_306}>
          <View style={styles.View_4_294} />
          <View style={styles.View_4_303}>
            <Text style={styles.Text_4_303}>🎉</Text>
          </View>
        </View>
        <View style={styles.View_4_305}>
          <View style={styles.View_4_293} />
          <View style={styles.View_4_304}>
            <Text style={styles.Text_4_304}>😂</Text>
          </View>
        </View>
        <View style={styles.View_4_308}>
          <View style={styles.View_4_296} />
          <View style={styles.View_4_302}>
            <Text style={styles.Text_4_302}>😍</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("118.30601092896175%") },
  View_4_207: {
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
  View_4_208: {
    width: wp("8.75912408759124%"),
    minWidth: wp("8.75912408759124%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.136253041362531%"),
    top: hp("0.13661202185792343%")
  },
  Text_4_208: {
    color: "rgba(28, 27, 20, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_209: {
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
  ImageBackground_4_210: {
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
  ImageBackground_4_211: {
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
  View_4_212: {
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
  View_4_213: {
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
  ImageBackground_4_214: {
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
  View_4_215: {
    width: wp("17.0316301703163%"),
    minWidth: wp("17.0316301703163%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.605839416058394%"),
    top: hp("116.12021857923497%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    borderBottomLeftRadius: 21,
    borderBottomRightRadius: 21
  },
  View_4_263: {
    width: wp("42.33576642335766%"),
    minWidth: wp("42.33576642335766%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.953771289537713%"),
    top: hp("109.8360655737705%")
  },
  Text_4_263: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.42,
    textTransform: "none"
  },
  View_4_327: {
    width: wp("55.71776155717762%"),
    minWidth: wp("55.71776155717762%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.14111922141119%"),
    top: hp("8.469945355191257%")
  },
  View_4_216: {
    width: wp("18.248175182481752%"),
    minWidth: wp("18.248175182481752%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.491484184914842%"),
    top: hp("9.289617486338798%")
  },
  Text_4_216: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_260: {
    width: wp("55.71776155717762%"),
    minWidth: wp("55.71776155717762%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.797814207650273%")
  },
  Text_4_260: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_230: {
    width: wp("14.111922141119221%"),
    minWidth: wp("14.111922141119221%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.437956204379564%"),
    top: hp("0%")
  },
  ImageBackground_4_257: {
    width: wp("3.8929440389294405%"),
    height: hp("2.185792349726776%"),
    top: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.569343065693431%")
  },
  ImageBackground_4_262: {
    width: wp("87.8345498783455%"),
    minWidth: wp("87.8345498783455%"),
    height: hp("49.31693989071038%"),
    minHeight: hp("49.31693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.082725060827251%"),
    top: hp("32.51366120218579%")
  },
  View_4_318: {
    width: wp("31.386861313868614%"),
    minWidth: wp("31.386861313868614%"),
    height: hp("9.426229508196721%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.306569343065696%"),
    top: hp("97.54098360655738%")
  },
  View_4_206: {
    width: wp("31.386861313868614%"),
    minWidth: wp("31.386861313868614%"),
    height: hp("9.426229508196721%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(219, 234, 141, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_4_217: {
    width: wp("8.51581508515815%"),
    minWidth: wp("8.51581508515815%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.35523114355231%"),
    top: hp("3.1420765027322517%")
  },
  Text_4_217: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_266: {
    width: wp("4.37956204379562%"),
    height: hp("2.459016393442623%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.326034063260337%")
  },
  ImageBackground_4_273: {
    width: wp("5.839416058394161%"),
    height: hp("3.278688524590164%"),
    top: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.05109489051095%")
  },
  ImageBackground_4_276: {
    width: wp("5.839416058394161%"),
    height: hp("3.278688524590164%"),
    top: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.64233576642336%")
  },
  View_4_315: {
    width: wp("10.70559610705596%"),
    minWidth: wp("10.70559610705596%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.257907542579076%"),
    top: hp("68.98907103825137%")
  },
  ImageBackground_4_286: {
    width: wp("5.839416058394161%"),
    height: hp("3.278688524590164%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4330900243308946%")
  },
  ImageBackground_4_289: {
    width: wp("10.70559610705596%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_316: {
    width: wp("10.70559610705596%"),
    height: hp("6.0109289617486334%"),
    top: hp("68.98907103825137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.03649635036496%")
  },
  View_4_319: {
    width: wp("97.8102189781022%"),
    minWidth: wp("97.8102189781022%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.59610705596107%"),
    top: hp("88.66120218579235%")
  },
  View_4_310: {
    width: wp("26.277372262773724%"),
    minWidth: wp("26.277372262773724%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_291: {
    width: wp("26.277372262773724%"),
    minWidth: wp("26.277372262773724%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_4_283: {
    width: wp("3.40632603406326%"),
    height: hp("1.912568306010929%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.892944038929439%")
  },
  View_4_299: {
    width: wp("14.355231143552311%"),
    minWidth: wp("14.355231143552311%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.27250608272506%"),
    top: hp("1.2295081967213122%")
  },
  Text_4_299: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_4_309: {
    width: wp("19.22141119221411%"),
    minWidth: wp("19.22141119221411%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.953771289537713%"),
    top: hp("0%")
  },
  View_4_292: {
    width: wp("19.22141119221411%"),
    minWidth: wp("19.22141119221411%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_4_279: {
    width: wp("5.839416058394161%"),
    height: hp("3.278688524590164%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.189781021897808%")
  },
  View_4_300: {
    width: wp("7.542579075425791%"),
    minWidth: wp("7.542579075425791%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.245742092457427%"),
    top: hp("1.2295081967213122%")
  },
  Text_4_300: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_4_307: {
    width: wp("9.732360097323602%"),
    minWidth: wp("9.732360097323602%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.669099756691%"),
    top: hp("0%")
  },
  View_4_295: {
    width: wp("9.732360097323602%"),
    minWidth: wp("9.732360097323602%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_4_301: {
    width: wp("4.13625304136253%"),
    minWidth: wp("4.13625304136253%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.919708029197082%"),
    top: hp("1.2295081967213122%")
  },
  Text_4_301: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_4_306: {
    width: wp("9.732360097323602%"),
    minWidth: wp("9.732360097323602%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.260340632603416%"),
    top: hp("0%")
  },
  View_4_294: {
    width: wp("9.732360097323602%"),
    minWidth: wp("9.732360097323602%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_4_303: {
    width: wp("3.8929440389294405%"),
    minWidth: wp("3.8929440389294405%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.919708029197068%"),
    top: hp("1.2295081967213122%")
  },
  Text_4_303: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_4_305: {
    width: wp("9.732360097323602%"),
    minWidth: wp("9.732360097323602%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.851581508515814%"),
    top: hp("0%")
  },
  View_4_293: {
    width: wp("9.732360097323602%"),
    minWidth: wp("9.732360097323602%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_4_304: {
    width: wp("3.8929440389294405%"),
    minWidth: wp("3.8929440389294405%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.919708029197089%"),
    top: hp("1.2295081967213122%")
  },
  Text_4_304: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_4_308: {
    width: wp("9.732360097323602%"),
    minWidth: wp("9.732360097323602%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.07785888077859%"),
    top: hp("0%")
  },
  View_4_296: {
    width: wp("9.732360097323602%"),
    minWidth: wp("9.732360097323602%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_4_302: {
    width: wp("3.8929440389294405%"),
    minWidth: wp("3.8929440389294405%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.919708029197082%"),
    top: hp("1.2295081967213122%")
  },
  Text_4_302: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
