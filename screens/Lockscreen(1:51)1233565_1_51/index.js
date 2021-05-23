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
        style={styles.ImageBackground_1_52}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d35c/1692/1c60102b194004ed766739227e27531f"
        }}
        style={styles.ImageBackground_1_53}
      />
      <View source={{ uri: "null" }} style={styles.View_1_54} />
      <View style={styles.View_1_55}>
        <View style={styles.View_1_56}>
          <Text style={styles.Text_1_56}>Google</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4001/1960/9f6f0b9b7dfca8509e7ac63af63e3277"
          }}
          style={styles.ImageBackground_1_57}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29d5/0fba/fbc57b05e1057474dcc9b341a2715b8b"
          }}
          style={styles.ImageBackground_1_58}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1abb/1d43/18c513fe1b4d7d801695c0cd1e7ab382"
          }}
          style={styles.ImageBackground_1_59}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8b1/0745/fd0038d6f62f37546afe7046acfa9ef8"
          }}
          style={styles.ImageBackground_1_60}
        />
        <View style={styles.View_1_61}>
          <View style={styles.View_1_62} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2816/8aa9/05305501ae46495ce932e03c23c3d5b6"
            }}
            style={styles.ImageBackground_1_63}
          />
        </View>
      </View>
      <View style={styles.View_1_64} />
      <View style={styles.View_1_65}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26b0/a16b/440459fd69f77473c748f14ecdc5c3d5"
          }}
          style={styles.ImageBackground_1_66}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2de3/52a3/33db60333576ab47af069f3e1e60ec90"
          }}
          style={styles.ImageBackground_1_67}
        />
      </View>
      <View style={styles.View_1_68}>
        <View style={styles.View_1_69}>
          <Text style={styles.Text_1_69}>12 47</Text>
        </View>
      </View>
      <View style={styles.View_1_70}>
        <View style={styles.View_1_71}>
          <Text style={styles.Text_1_71}>Tue, May 18</Text>
        </View>
        <View style={styles.View_1_72}>
          <Text style={styles.Text_1_72}>76°F</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d29/6508/267b74febd79193ffc8b3574994978bd"
        }}
        style={styles.ImageBackground_1_73}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f84/3d4f/802730ba1b8e760c4adcbe49a848544c"
        }}
        style={styles.ImageBackground_1_74}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("118.30601092896175%") },
  ImageBackground_1_52: {
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
  ImageBackground_1_53: {
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
  View_1_54: {
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
  View_1_55: {
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
  View_1_56: {
    width: wp("10.948905109489052%"),
    minWidth: wp("10.948905109489052%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.46228710462287%"),
    top: hp("0.8196721311475414%")
  },
  Text_1_56: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_57: {
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
  ImageBackground_1_58: {
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
  ImageBackground_1_59: {
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
  ImageBackground_1_60: {
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
  View_1_61: {
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
  View_1_62: {
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
  ImageBackground_1_63: {
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
  View_1_64: {
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
  View_1_65: {
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
  ImageBackground_1_66: {
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
  ImageBackground_1_67: {
    width: wp("4.866180048661801%"),
    height: hp("2.185792349726776%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4063260340632553%")
  },
  View_1_68: {
    width: wp("55.47445255474452%"),
    minWidth: wp("55.47445255474452%"),
    height: hp("46.44808743169399%"),
    minHeight: hp("46.44808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.114355231143552%"),
    top: hp("34.97267759562842%")
  },
  View_1_69: {
    width: wp("55.47445255474452%"),
    minWidth: wp("55.47445255474452%"),
    minHeight: hp("46.44808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_69: {
    color: "rgba(235, 246, 150, 1)",
    fontSize: 160,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 3,
    textTransform: "none"
  },
  View_1_70: {
    width: wp("26.277372262773724%"),
    minWidth: wp("26.277372262773724%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.02919708029197%"),
    top: hp("11.748633879781421%")
  },
  View_1_71: {
    width: wp("26.277372262773724%"),
    minWidth: wp("26.277372262773724%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_71: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.1,
    textTransform: "none"
  },
  View_1_72: {
    width: wp("8.27250608272506%"),
    minWidth: wp("8.27250608272506%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.839416058394161%"),
    top: hp("4.23497267759563%")
  },
  Text_1_72: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.08,
    textTransform: "none"
  },
  ImageBackground_1_73: {
    width: wp("4.622871046228711%"),
    minWidth: wp("4.622871046228711%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.02919708029197%"),
    top: hp("15.846994535519126%")
  },
  ImageBackground_1_74: {
    width: wp("3.64963503649635%"),
    height: hp("1.366120218579235%"),
    top: hp("17.076502732240435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.542579075425791%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
