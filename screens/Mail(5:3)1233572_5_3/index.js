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
      <View style={styles.View_5_6}>
        <View style={styles.View_5_7}>
          <Text style={styles.Text_5_7}>12:00</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6de7/c8c2/bf3add9dc6c9e1f49782bbcb771423f1"
          }}
          style={styles.ImageBackground_5_8}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64ae/db9b/852318365610424795c1437833f52fc6"
          }}
          style={styles.ImageBackground_5_9}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c57/a9e0/68772160d1603c8640fbda3c37be442e"
          }}
          style={styles.ImageBackground_5_10}
        />
        <View style={styles.View_5_11}>
          <View style={styles.View_5_12} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2816/8aa9/05305501ae46495ce932e03c23c3d5b6"
            }}
            style={styles.ImageBackground_5_13}
          />
        </View>
      </View>
      <View style={styles.View_5_62}>
        <Text style={styles.Text_5_62}>INBOX</Text>
      </View>
      <View style={styles.View_5_157}>
        <View style={styles.View_5_5} />
        <View style={styles.View_5_16}>
          <Text style={styles.Text_5_16}>Search in mail</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9443/59ad/b9c26d1d618a5edce6f77bb687225fea"
          }}
          style={styles.ImageBackground_5_29}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20c0/0208/df1704449a0f47e24d94d7af5a5253c4"
          }}
          style={styles.ImageBackground_5_59}
        />
      </View>
      <View style={styles.View_5_69}>
        <View style={styles.View_5_19}>
          <Text style={styles.Text_5_19}>
            The new sides for the desion keynot...
          </Text>
        </View>
        <View style={styles.View_5_64}>
          <Text style={styles.Text_5_64}>Now</Text>
        </View>
        <View style={styles.View_5_24}>
          <Text style={styles.Text_5_24}>
            Ethan, Raymond Google TO Presentations
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f73d/e203/db36b1ee0e118f95be9ddc2c86d441ab"
          }}
          style={styles.ImageBackground_5_30}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad4c/d8a4/b15dbc190f887234af5d5760394f5bc4"
          }}
          style={styles.ImageBackground_5_67}
        />
      </View>
      <View style={styles.View_5_70}>
        <View style={styles.View_5_71}>
          <Text style={styles.Text_5_71}>
            Some great new colours are planned.
          </Text>
        </View>
        <View style={styles.View_5_72}>
          <Text style={styles.Text_5_72}>Now</Text>
        </View>
        <View style={styles.View_5_73}>
          <Text style={styles.Text_5_73}>
            Alan, Jeffery Recent project updates
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9138/5654/28e8374f9e75a52766294f498ae088da"
          }}
          style={styles.ImageBackground_5_74}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbbf/d88b/6ae9da574030c6c0993c4568775777c5"
          }}
          style={styles.ImageBackground_5_75}
        />
      </View>
      <View style={styles.View_5_76}>
        <View style={styles.View_5_77}>
          <Text style={styles.Text_5_77}>
            Upcoming trip to Portland Hey everyone Please take a look at..
          </Text>
        </View>
        <View style={styles.View_5_78}>
          <Text style={styles.Text_5_78}>10:32 AM</Text>
        </View>
        <View style={styles.View_5_79}>
          <Text style={styles.Text_5_79}>Helen, Adam, Amanda</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a80/98c3/142ec6141afd0cbc441af0b5a2933996"
          }}
          style={styles.ImageBackground_5_80}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed48/8a05/a2fd8fb17aed114652d4cbc69d39953b"
          }}
          style={styles.ImageBackground_5_81}
        />
        <View style={styles.View_5_90}>
          <View style={styles.View_5_84}>
            <Text style={styles.Text_5_84}>Client resource...</Text>
          </View>
          <View style={styles.View_5_85} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/868a/6b5f/82824b0d4b6f2e76070751ae7cf3afa7"
            }}
            style={styles.ImageBackground_5_87}
          />
          <View style={styles.View_5_89} />
        </View>
      </View>
      <View style={styles.View_5_91}>
        <View style={styles.View_5_92}>
          <Text style={styles.Text_5_92}>
            Thursday&#39;s bike ride So on Friday we were thirking abou...
          </Text>
        </View>
        <View style={styles.View_5_93}>
          <Text style={styles.Text_5_93}>9:40 AM</Text>
        </View>
        <View style={styles.View_5_94}>
          <Text style={styles.Text_5_94}>Grace, Christian</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bb5/fd6e/a77164517678b2357a67f0b6d088d4a1"
          }}
          style={styles.ImageBackground_5_95}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed48/8a05/a2fd8fb17aed114652d4cbc69d39953b"
          }}
          style={styles.ImageBackground_5_96}
        />
      </View>
      <View style={styles.View_5_102}>
        <View style={styles.View_5_103}>
          <Text style={styles.Text_5_103}>
            Upcoming hardware release We will discuss our upcoming Pixel...
          </Text>
        </View>
        <View style={styles.View_5_104}>
          <Text style={styles.Text_5_104}>8:23 AM</Text>
        </View>
        <View style={styles.View_5_105}>
          <Text style={styles.Text_5_105}>Lori, Susan</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/441d/350a/b06553ae785c66eb65096f207ec2d11a"
          }}
          style={styles.ImageBackground_5_106}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed48/8a05/a2fd8fb17aed114652d4cbc69d39953b"
          }}
          style={styles.ImageBackground_5_107}
        />
      </View>
      <View style={styles.View_5_108}>
        <View style={styles.View_5_109}>
          <Text style={styles.Text_5_109}>
            Presentation notes On Thursday we drew some great ne...
          </Text>
        </View>
        <View style={styles.View_5_110}>
          <Text style={styles.Text_5_110}>7:15 AM</Text>
        </View>
        <View style={styles.View_5_111}>
          <Text style={styles.Text_5_111}>Lauren, Alan, Susan</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48aa/9042/35957e5e7825424174c44f46d7c16916"
          }}
          style={styles.ImageBackground_5_112}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed48/8a05/a2fd8fb17aed114652d4cbc69d39953b"
          }}
          style={styles.ImageBackground_5_113}
        />
      </View>
      <View style={styles.View_5_114}>
        <View style={styles.View_5_115}>
          <Text style={styles.Text_5_115}>A new material?</Text>
        </View>
        <View style={styles.View_5_117}>
          <Text style={styles.Text_5_117}>Andy, Christian</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f05/048b/88ddfcbdbc8abcf9c083d37043d5870b"
          }}
          style={styles.ImageBackground_5_118}
        />
      </View>
      <View style={styles.View_5_143}>
        <View style={styles.View_5_14} />
        <View style={styles.View_5_125} />
        <View style={styles.View_5_145}>
          <View style={styles.View_5_127}>
            <Text style={styles.Text_5_127}>Chat</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f35/499a/e8d8b4a282fcb6753d40a98d9bab7b1f"
            }}
            style={styles.ImageBackground_5_135}
          />
        </View>
        <View style={styles.View_5_147}>
          <View style={styles.View_5_129}>
            <Text style={styles.Text_5_129}>Meet</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f34/1bca/c7c7df04121cccc0a28fcd60b947aa1a"
            }}
            style={styles.ImageBackground_5_139}
          />
        </View>
        <View style={styles.View_5_144}>
          <View style={styles.View_5_126}>
            <Text style={styles.Text_5_126}>Mail</Text>
          </View>
          <View style={styles.View_5_130} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34a5/8eb3/2d76dc02a2f59b06a50ad614de423162"
            }}
            style={styles.ImageBackground_5_131}
          />
        </View>
        <View style={styles.View_5_146}>
          <View style={styles.View_5_128}>
            <Text style={styles.Text_5_128}>Rooms</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9a4/3bdb/83534c4460427971d788330a0bc30925"
            }}
            style={styles.ImageBackground_5_136}
          />
        </View>
      </View>
      <View style={styles.View_5_142}>
        <View style={styles.View_5_124} />
        <View style={styles.View_5_120}>
          <Text style={styles.Text_5_120}>Compose</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d60a/02f6/286c6d422ec5826a4da5beba5e0a9338"
          }}
          style={styles.ImageBackground_5_122}
        />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("118.30601092896175%") },
  View_5_6: {
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
  View_5_7: {
    width: wp("8.75912408759124%"),
    minWidth: wp("8.75912408759124%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.136253041362531%"),
    top: hp("0.13661202185792343%")
  },
  Text_5_7: {
    color: "rgba(28, 27, 20, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_8: {
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
  ImageBackground_5_9: {
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
  ImageBackground_5_10: {
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
  View_5_11: {
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
  View_5_12: {
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
  ImageBackground_5_13: {
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
  View_5_62: {
    width: wp("9.245742092457421%"),
    minWidth: wp("9.245742092457421%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1630170316301705%"),
    top: hp("17.349726775956285%")
  },
  Text_5_62: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.6000000000000001,
    textTransform: "none"
  },
  View_5_157: {
    width: wp("93.18734793187348%"),
    minWidth: wp("93.18734793187348%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1630170316301705%"),
    top: hp("8.060109289617486%")
  },
  View_5_5: {
    width: wp("93.18734793187348%"),
    minWidth: wp("93.18734793187348%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11
  },
  View_5_16: {
    width: wp("24.574209245742093%"),
    minWidth: wp("24.574209245742093%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38199513381995%"),
    top: hp("2.3224043715846996%")
  },
  Text_5_16: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_29: {
    width: wp("6.81265206812652%"),
    minWidth: wp("6.81265206812652%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.45498783454988%"),
    top: hp("1.6393442622950811%")
  },
  ImageBackground_5_59: {
    width: wp("5.839416058394161%"),
    height: hp("3.278688524590164%"),
    top: hp("1.9125683060109289%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4063260340632606%")
  },
  View_5_69: {
    width: wp("93.43065693430657%"),
    minWidth: wp("93.43065693430657%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1630170316301705%"),
    top: hp("22.404371584699454%")
  },
  View_5_19: {
    width: wp("57.17761557177615%"),
    minWidth: wp("57.17761557177615%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.571776155717762%"),
    top: hp("6.147540983606554%")
  },
  Text_5_19: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_64: {
    width: wp("7.0559610705596105%"),
    minWidth: wp("7.0559610705596105%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.37469586374695%"),
    top: hp("0.4098360655737707%")
  },
  Text_5_64: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_24: {
    width: wp("43.79562043795621%"),
    minWidth: wp("43.79562043795621%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.571776155717762%"),
    top: hp("0.4098360655737707%")
  },
  Text_5_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_30: {
    width: wp("10.46228710462287%"),
    minWidth: wp("10.46228710462287%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_5_67: {
    width: wp("4.13625304136253%"),
    height: hp("2.185792349726776%"),
    top: hp("5.601092896174862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.29440389294403%")
  },
  View_5_70: {
    width: wp("93.43065693430657%"),
    minWidth: wp("93.43065693430657%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1630170316301705%"),
    top: hp("34.15300546448087%")
  },
  View_5_71: {
    width: wp("56.20437956204379%"),
    minWidth: wp("56.20437956204379%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.571776155717762%"),
    top: hp("6.147540983606561%")
  },
  Text_5_71: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_72: {
    width: wp("7.0559610705596105%"),
    minWidth: wp("7.0559610705596105%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.37469586374695%"),
    top: hp("0.4098360655737707%")
  },
  Text_5_72: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_73: {
    width: wp("40.632603406326034%"),
    minWidth: wp("40.632603406326034%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.571776155717762%"),
    top: hp("0.4098360655737707%")
  },
  Text_5_73: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_74: {
    width: wp("10.46228710462287%"),
    minWidth: wp("10.46228710462287%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_5_75: {
    width: wp("4.13625304136253%"),
    height: hp("2.185792349726776%"),
    top: hp("5.601092896174869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.29440389294403%")
  },
  View_5_76: {
    width: wp("93.18734793187348%"),
    minWidth: wp("93.18734793187348%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1630170316301705%"),
    top: hp("45.90163934426229%")
  },
  View_5_77: {
    width: wp("54.257907542579076%"),
    minWidth: wp("54.257907542579076%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.571776155717762%"),
    top: hp("3.5519125683060153%")
  },
  Text_5_77: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_78: {
    width: wp("12.652068126520682%"),
    minWidth: wp("12.652068126520682%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.53527980535279%"),
    top: hp("0.8196721311475486%")
  },
  Text_5_78: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_79: {
    width: wp("38.68613138686132%"),
    minWidth: wp("38.68613138686132%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.571776155717762%"),
    top: hp("0.4098360655737707%")
  },
  Text_5_79: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_80: {
    width: wp("10.46228710462287%"),
    minWidth: wp("10.46228710462287%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_5_81: {
    width: wp("3.1630170316301705%"),
    height: hp("1.639344262295082%"),
    top: hp("6.01092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.0243309002433%")
  },
  View_5_90: {
    width: wp("38.44282238442822%"),
    minWidth: wp("38.44282238442822%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.598540145985401%"),
    top: hp("9.426229508196727%")
  },
  View_5_84: {
    width: wp("25.547445255474454%"),
    minWidth: wp("25.547445255474454%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.48905109489051%"),
    top: hp("0.9562841530054556%")
  },
  Text_5_84: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_85: {
    width: wp("3.8929440389294405%"),
    minWidth: wp("3.8929440389294405%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4330900243309017%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(97, 141, 239, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_5_87: {
    width: wp("2.4330900243309004%"),
    height: hp("1.092896174863388%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1630170316301687%")
  },
  View_5_89: {
    width: wp("38.44282238442822%"),
    minWidth: wp("38.44282238442822%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(193, 193, 193, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_5_91: {
    width: wp("93.18734793187348%"),
    minWidth: wp("93.18734793187348%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1630170316301705%"),
    top: hp("62.841530054644814%")
  },
  View_5_92: {
    width: wp("55.47445255474452%"),
    minWidth: wp("55.47445255474452%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.571776155717762%"),
    top: hp("3.551912568306001%")
  },
  Text_5_92: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_93: {
    width: wp("10.948905109489052%"),
    minWidth: wp("10.948905109489052%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.23844282238441%"),
    top: hp("0.8196721311475414%")
  },
  Text_5_93: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_94: {
    width: wp("27.73722627737226%"),
    minWidth: wp("27.73722627737226%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.571776155717762%"),
    top: hp("0.4098360655737636%")
  },
  Text_5_94: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_95: {
    width: wp("10.46228710462287%"),
    minWidth: wp("10.46228710462287%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_5_96: {
    width: wp("3.1630170316301705%"),
    height: hp("1.639344262295082%"),
    top: hp("6.0109289617486255%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.0243309002433%")
  },
  View_5_102: {
    width: wp("93.18734793187348%"),
    minWidth: wp("93.18734793187348%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1630170316301705%"),
    top: hp("74.31693989071039%")
  },
  View_5_103: {
    width: wp("55.961070559610704%"),
    minWidth: wp("55.961070559610704%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.571776155717762%"),
    top: hp("3.551912568306008%")
  },
  Text_5_103: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_104: {
    width: wp("10.948905109489052%"),
    minWidth: wp("10.948905109489052%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.23844282238441%"),
    top: hp("0.8196721311475272%")
  },
  Text_5_104: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_105: {
    width: wp("19.464720194647203%"),
    minWidth: wp("19.464720194647203%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.571776155717762%"),
    top: hp("0.4098360655737707%")
  },
  Text_5_105: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_106: {
    width: wp("10.46228710462287%"),
    minWidth: wp("10.46228710462287%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_5_107: {
    width: wp("3.1630170316301705%"),
    height: hp("1.639344262295082%"),
    top: hp("6.010928961748633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.0243309002433%")
  },
  View_5_108: {
    width: wp("93.18734793187348%"),
    minWidth: wp("93.18734793187348%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1630170316301705%"),
    top: hp("85.79234972677595%")
  },
  View_5_109: {
    width: wp("57.907542579075425%"),
    minWidth: wp("57.907542579075425%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.571776155717762%"),
    top: hp("3.551912568306008%")
  },
  Text_5_109: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_110: {
    width: wp("10.948905109489052%"),
    minWidth: wp("10.948905109489052%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.23844282238441%"),
    top: hp("0.8196721311475414%")
  },
  Text_5_110: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_111: {
    width: wp("34.306569343065696%"),
    minWidth: wp("34.306569343065696%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.571776155717762%"),
    top: hp("0.4098360655737707%")
  },
  Text_5_111: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_112: {
    width: wp("10.46228710462287%"),
    minWidth: wp("10.46228710462287%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_5_113: {
    width: wp("3.1630170316301705%"),
    height: hp("1.639344262295082%"),
    top: hp("6.010928961748633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.0243309002433%")
  },
  View_5_114: {
    width: wp("41.605839416058394%"),
    minWidth: wp("41.605839416058394%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1630170316301705%"),
    top: hp("97.26775956284153%")
  },
  View_5_115: {
    width: wp("24.330900243309003%"),
    minWidth: wp("24.330900243309003%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.571776155717762%"),
    top: hp("3.551912568305994%")
  },
  Text_5_115: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_117: {
    width: wp("26.034063260340634%"),
    minWidth: wp("26.034063260340634%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.571776155717762%"),
    top: hp("0.4098360655737707%")
  },
  Text_5_117: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_118: {
    width: wp("10.46228710462287%"),
    minWidth: wp("10.46228710462287%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_143: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("107.10382513661203%")
  },
  View_5_14: {
    width: wp("17.0316301703163%"),
    minWidth: wp("17.0316301703163%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.84914841849148%"),
    top: hp("9.699453551912555%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    borderBottomLeftRadius: 21,
    borderBottomRightRadius: 21
  },
  View_5_125: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(219, 234, 141, 1)",
    opacity: 0.15000000596046448
  },
  View_5_145: {
    width: wp("7.2992700729927%"),
    minWidth: wp("7.2992700729927%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81995133819951%"),
    top: hp("2.185792349726782%")
  },
  View_5_127: {
    width: wp("7.2992700729927%"),
    minWidth: wp("7.2992700729927%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.9617486338797647%")
  },
  Text_5_127: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_135: {
    width: wp("4.866180048661801%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9732360097323678%")
  },
  View_5_147: {
    width: wp("7.785888077858881%"),
    minWidth: wp("7.785888077858881%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18491484184915%"),
    top: hp("2.7322404371584668%")
  },
  View_5_129: {
    width: wp("7.785888077858881%"),
    minWidth: wp("7.785888077858881%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.41530054644808%")
  },
  Text_5_129: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_139: {
    width: wp("5.109489051094891%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.459854014598534%")
  },
  View_5_144: {
    width: wp("14.841849148418493%"),
    minWidth: wp("14.841849148418493%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.37956204379562%"),
    top: hp("1.5027322404371546%")
  },
  View_5_126: {
    width: wp("6.81265206812652%"),
    minWidth: wp("6.81265206812652%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.13625304136253%"),
    top: hp("4.644808743169392%")
  },
  Text_5_126: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_130: {
    width: wp("14.841849148418493%"),
    minWidth: wp("14.841849148418493%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(219, 234, 141, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_5_131: {
    width: wp("5.839416058394161%"),
    height: hp("3.278688524590164%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.622871046228711%")
  },
  View_5_146: {
    width: wp("10.948905109489052%"),
    minWidth: wp("10.948905109489052%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.420924574209245%"),
    top: hp("1.9125683060109253%")
  },
  View_5_128: {
    width: wp("10.948905109489052%"),
    minWidth: wp("10.948905109489052%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.234972677595621%")
  },
  Text_5_128: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_136: {
    width: wp("5.839416058394161%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6763990267639954%")
  },
  View_5_142: {
    width: wp("33.81995133819951%"),
    minWidth: wp("33.81995133819951%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.530413625304135%"),
    top: hp("97.26775956284153%")
  },
  View_5_124: {
    width: wp("33.81995133819951%"),
    minWidth: wp("33.81995133819951%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(219, 234, 141, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_5_120: {
    width: wp("14.5985401459854%"),
    minWidth: wp("14.5985401459854%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.868613138686129%"),
    top: hp("2.4590163934426243%")
  },
  Text_5_120: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_122: {
    width: wp("4.380169982167636%"),
    height: hp("2.4593579964559584%"),
    top: hp("2.3220708461407042%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.352798053527977%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
