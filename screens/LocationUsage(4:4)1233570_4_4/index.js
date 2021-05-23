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
      <View style={styles.View_4_5}>
        <View style={styles.View_4_6}>
          <Text style={styles.Text_4_6}>12:00</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6de7/c8c2/bf3add9dc6c9e1f49782bbcb771423f1"
          }}
          style={styles.ImageBackground_4_7}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64ae/db9b/852318365610424795c1437833f52fc6"
          }}
          style={styles.ImageBackground_4_8}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c57/a9e0/68772160d1603c8640fbda3c37be442e"
          }}
          style={styles.ImageBackground_4_9}
        />
        <View style={styles.View_4_10}>
          <View style={styles.View_4_11} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2816/8aa9/05305501ae46495ce932e03c23c3d5b6"
            }}
            style={styles.ImageBackground_4_12}
          />
        </View>
      </View>
      <View style={styles.View_4_13} />
      <View style={styles.View_4_14}>
        <Text style={styles.Text_4_14}>Location usage</Text>
      </View>
      <View style={styles.View_4_44}>
        <Text style={styles.Text_4_44}>
          Timeline of when apps used your location permission in the past 24
          hours
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22f4/e6c4/e616e8cb77549e0916cb54bddab97519"
        }}
        style={styles.ImageBackground_4_33}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f50d/b5ec/c28f8eab77ffcaf5f85019d1a57e4218"
        }}
        style={styles.ImageBackground_4_41}
      />
      <View style={styles.View_4_328}>
        <View style={styles.View_4_45}>
          <Text style={styles.Text_4_45}>Today</Text>
        </View>
        <View style={styles.View_4_51}>
          <Text style={styles.Text_4_51}>Yesterday</Text>
        </View>
        <View style={styles.View_4_46}>
          <Text style={styles.Text_4_46}>6:04 AM</Text>
        </View>
        <View style={styles.View_4_48}>
          <Text style={styles.Text_4_48}>2:03 AM</Text>
        </View>
        <View style={styles.View_4_52}>
          <Text style={styles.Text_4_52}>8:24 PM</Text>
        </View>
        <View style={styles.View_4_53}>
          <Text style={styles.Text_4_53}>2:11 PM</Text>
        </View>
        <View style={styles.View_4_54}>
          <Text style={styles.Text_4_54}>11:14 AM</Text>
        </View>
        <View style={styles.View_4_50}>
          <Text style={styles.Text_4_50}>32 minutes</Text>
        </View>
        <View style={styles.View_4_58}>
          <Text style={styles.Text_4_58}>Used in background</Text>
        </View>
        <View style={styles.View_4_47}>
          <Text style={styles.Text_4_47}>Music App</Text>
        </View>
        <View style={styles.View_4_49}>
          <Text style={styles.Text_4_49}>Map App</Text>
        </View>
        <View style={styles.View_4_56}>
          <Text style={styles.Text_4_56}>News App</Text>
        </View>
        <View style={styles.View_4_57}>
          <Text style={styles.Text_4_57}>Tasks App</Text>
        </View>
        <View style={styles.View_4_59}>
          <Text style={styles.Text_4_59}>Email App</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d672/992c/6928e6db5ffda5b0708505d9ed5fd57c"
          }}
          style={styles.ImageBackground_4_72}
        />
        <View style={styles.View_4_333}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2833/4f76/e183ee3531f534f9d405cd6a2ab95371"
            }}
            style={styles.ImageBackground_4_60}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a34/467f/0ade8b032ac53bf9eab655a6fcd9c925"
            }}
            style={styles.ImageBackground_4_75}
          />
        </View>
        <View style={styles.View_4_332}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4693/30a3/84f5e150304a89d6b4698ba8261cf861"
            }}
            style={styles.ImageBackground_4_61}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cbf/4c7e/5e0792ecefd2481df03adf60d9ef7aa0"
            }}
            style={styles.ImageBackground_4_77}
          />
        </View>
        <View style={styles.View_4_331}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afa/82a2/68848f4ee6f6f1dcbac84dfe8a609efd"
            }}
            style={styles.ImageBackground_4_62}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8b0/3548/cedcbc222307001d28bfa043dcee498a"
            }}
            style={styles.ImageBackground_4_85}
          />
        </View>
        <View style={styles.View_4_329}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb79/3336/eab6597c646b5948e8b6a4a2cce76675"
            }}
            style={styles.ImageBackground_4_64}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d629/1816/140db260695ca338d6ed4fda6bd243ea"
            }}
            style={styles.ImageBackground_4_88}
          />
        </View>
        <View style={styles.View_4_330}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a2a3/5b7b/d6228a85d7d6d4466b314e20a5080ac5"
            }}
            style={styles.ImageBackground_4_63}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8522/965a/2c126fb37180186ad2fd0d305c2e40af"
            }}
            style={styles.ImageBackground_4_98}
          />
        </View>
      </View>
      <View style={styles.View_4_99}>
        <View style={styles.View_4_71} />
        <View style={styles.View_4_65}>
          <Text style={styles.Text_4_65}>Manage permission</Text>
        </View>
        <View style={styles.View_4_68}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/534a/5feb/f5cfc983707de35693beb1cab410364a"
            }}
            style={styles.ImageBackground_4_69}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f355/d198/1b52a3d57a5fef06fc809bf79bcd9921"
            }}
            style={styles.ImageBackground_4_70}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("118.30601092896175%") },
  View_4_5: {
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
  View_4_6: {
    width: wp("8.75912408759124%"),
    minWidth: wp("8.75912408759124%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.136253041362531%"),
    top: hp("0.13661202185792343%")
  },
  Text_4_6: {
    color: "rgba(28, 27, 20, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_7: {
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
  ImageBackground_4_8: {
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
  ImageBackground_4_9: {
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
  View_4_10: {
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
  View_4_11: {
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
  ImageBackground_4_12: {
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
  View_4_13: {
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
  View_4_14: {
    width: wp("59.854014598540154%"),
    minWidth: wp("59.854014598540154%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.839416058394161%"),
    top: hp("27.595628415300546%")
  },
  Text_4_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_44: {
    width: wp("80.7785888077859%"),
    minWidth: wp("80.7785888077859%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.326034063260341%"),
    top: hp("35.51912568306011%")
  },
  Text_4_44: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_33: {
    width: wp("4.866180048661801%"),
    height: hp("3.825136612021858%"),
    top: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.81265206812652%")
  },
  ImageBackground_4_41: {
    width: wp("85.40145985401459%"),
    height: hp("2.185792349726776%"),
    top: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.569343065693431%")
  },
  View_4_328: {
    width: wp("58.88077858880778%"),
    minWidth: wp("58.88077858880778%"),
    height: hp("72.6775956284153%"),
    minHeight: hp("72.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.326034063260341%"),
    top: hp("45.76502732240437%")
  },
  View_4_45: {
    width: wp("9.245742092457421%"),
    minWidth: wp("9.245742092457421%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_4_45: {
    color: "rgba(131, 136, 76, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_51: {
    width: wp("15.328467153284672%"),
    minWidth: wp("15.328467153284672%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28.142076502732245%")
  },
  Text_4_51: {
    color: "rgba(131, 136, 76, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_46: {
    width: wp("12.652068126520682%"),
    minWidth: wp("12.652068126520682%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.010928961748633%")
  },
  Text_4_46: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_48: {
    width: wp("12.652068126520682%"),
    minWidth: wp("12.652068126520682%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.939890710382514%")
  },
  Text_4_48: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_52: {
    width: wp("12.652068126520682%"),
    minWidth: wp("12.652068126520682%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34.15300546448088%")
  },
  Text_4_52: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_53: {
    width: wp("11.678832116788321%"),
    minWidth: wp("11.678832116788321%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.94535519125683%")
  },
  Text_4_53: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.7000000000000001,
    textTransform: "none"
  },
  View_4_54: {
    width: wp("13.381995133819952%"),
    minWidth: wp("13.381995133819952%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55.87431693989071%")
  },
  Text_4_54: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.77,
    textTransform: "none"
  },
  View_4_50: {
    width: wp("17.0316301703163%"),
    minWidth: wp("17.0316301703163%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.710462287104622%"),
    top: hp("18.715846994535518%")
  },
  Text_4_50: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_58: {
    width: wp("30.170316301703163%"),
    minWidth: wp("30.170316301703163%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.710462287104622%"),
    top: hp("46.994535519125684%")
  },
  Text_4_58: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_47: {
    width: wp("23.114355231143552%"),
    minWidth: wp("23.114355231143552%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.710462287104622%"),
    top: hp("5.4644808743169335%")
  },
  Text_4_47: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_49: {
    width: wp("19.464720194647203%"),
    minWidth: wp("19.464720194647203%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.710462287104622%"),
    top: hp("14.89071038251366%")
  },
  Text_4_49: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_56: {
    width: wp("22.14111922141119%"),
    minWidth: wp("22.14111922141119%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.710462287104622%"),
    top: hp("33.743169398907106%")
  },
  Text_4_56: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_57: {
    width: wp("22.62773722627737%"),
    minWidth: wp("22.62773722627737%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.710462287104622%"),
    top: hp("42.89617486338798%")
  },
  Text_4_57: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_59: {
    width: wp("22.14111922141119%"),
    minWidth: wp("22.14111922141119%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.710462287104622%"),
    top: hp("55.32786885245901%")
  },
  Text_4_59: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_72: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("62.568306010928964%"),
    minHeight: hp("62.568306010928964%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.16788321167883%"),
    top: hp("10.10928961748634%")
  },
  View_4_333: {
    width: wp("7.785888077858881%"),
    minWidth: wp("7.785888077858881%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.27493917274939%"),
    top: hp("5.05464480874317%")
  },
  ImageBackground_4_60: {
    width: wp("7.785888077858881%"),
    minWidth: wp("7.785888077858881%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_75: {
    width: wp("2.9197080291970803%"),
    height: hp("2.459016393442623%"),
    top: hp("0.9562841530054627%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4330900243309017%")
  },
  View_4_332: {
    width: wp("7.785888077858881%"),
    minWidth: wp("7.785888077858881%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.27493917274939%"),
    top: hp("15.846994535519123%")
  },
  ImageBackground_4_61: {
    width: wp("7.785888077858881%"),
    minWidth: wp("7.785888077858881%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_77: {
    width: wp("3.8929440389294405%"),
    height: hp("2.185792349726776%"),
    top: hp("1.092896174863391%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9464720194647214%")
  },
  View_4_331: {
    width: wp("7.785888077858881%"),
    minWidth: wp("7.785888077858881%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.27493917274939%"),
    top: hp("33.19672131147541%")
  },
  ImageBackground_4_62: {
    width: wp("7.785888077858881%"),
    minWidth: wp("7.785888077858881%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_85: {
    width: wp("3.8929440389294405%"),
    height: hp("1.912568306010929%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9464720194647214%")
  },
  View_4_329: {
    width: wp("7.785888077858881%"),
    minWidth: wp("7.785888077858881%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.27493917274939%"),
    top: hp("54.78142076502733%")
  },
  ImageBackground_4_64: {
    width: wp("7.785888077858881%"),
    minWidth: wp("7.785888077858881%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_88: {
    width: wp("3.8929440389294405%"),
    height: hp("1.639344262295082%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9464720194647214%")
  },
  View_4_330: {
    width: wp("7.785888077858881%"),
    minWidth: wp("7.785888077858881%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.27493917274939%"),
    top: hp("43.989071038251375%")
  },
  ImageBackground_4_63: {
    width: wp("7.785888077858881%"),
    minWidth: wp("7.785888077858881%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_98: {
    width: wp("3.40632603406326%"),
    height: hp("1.5027322404371584%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1897810218978115%")
  },
  View_4_99: {
    width: wp("54.98783454987834%"),
    minWidth: wp("54.98783454987834%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.871046228710462%"),
    top: hp("107.92349726775956%")
  },
  View_4_71: {
    width: wp("54.98783454987834%"),
    minWidth: wp("54.98783454987834%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(200, 236, 226, 1)",
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
    borderBottomLeftRadius: 33,
    borderBottomRightRadius: 33
  },
  View_4_65: {
    width: wp("35.523114355231144%"),
    minWidth: wp("35.523114355231144%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.165450121654501%"),
    top: hp("2.185792349726782%")
  },
  Text_4_65: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  View_4_68: {
    width: wp("4.793045990658502%"),
    minWidth: wp("4.793045990658502%"),
    height: hp("2.691250160092213%"),
    minHeight: hp("2.691250160092213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8661800486618%"),
    top: hp("2.0491803278688536%")
  },
  ImageBackground_4_69: {
    width: wp("4.37956204379562%"),
    height: hp("2.459016393442623%"),
    top: hp("0.11611688332480696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20674731029501459%")
  },
  ImageBackground_4_70: {
    width: wp("0.9732360097323601%"),
    minWidth: wp("0.9732360097323601%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9099103273266422%"),
    top: hp("1.0724010363302625%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
