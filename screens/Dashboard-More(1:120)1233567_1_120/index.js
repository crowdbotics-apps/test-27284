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
      <View style={styles.View_1_121}>
        <View style={styles.View_1_122}>
          <Text style={styles.Text_1_122}>Tue, May 18</Text>
        </View>
        <View style={styles.View_1_123}>
          <Text style={styles.Text_1_123}>12:00</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29d5/0fba/fbc57b05e1057474dcc9b341a2715b8b"
          }}
          style={styles.ImageBackground_1_124}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2a0/1e23/227da46322eaef4d14e9686f6cc19ce9"
          }}
          style={styles.ImageBackground_1_125}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1abb/1d43/18c513fe1b4d7d801695c0cd1e7ab382"
          }}
          style={styles.ImageBackground_1_132}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8b1/0745/fd0038d6f62f37546afe7046acfa9ef8"
          }}
          style={styles.ImageBackground_1_133}
        />
        <View style={styles.View_1_134}>
          <View style={styles.View_1_135} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2816/8aa9/05305501ae46495ce932e03c23c3d5b6"
            }}
            style={styles.ImageBackground_1_136}
          />
        </View>
      </View>
      <View style={styles.View_1_137}>
        <View style={styles.View_1_138} />
        <View style={styles.View_1_139} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91bc/0ea5/067316c7db529b3e37005e55102c4425"
          }}
          style={styles.ImageBackground_1_140}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b12/8dd5/446ffc7e63275d7290c2db880e12ad85"
        }}
        style={styles.ImageBackground_1_141}
      />
      <View style={styles.View_1_145} />
      <View style={styles.View_1_146}>
        <View style={styles.View_1_147}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/daf6/cb34/646484c54e4b4b326d720f12d48bdcb7"
            }}
            style={styles.ImageBackground_1_148}
          />
          <View style={styles.View_1_149} />
        </View>
        <View style={styles.View_1_150}>
          <View style={styles.View_1_152} />
          <View style={styles.View_4_67}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/534a/5feb/f5cfc983707de35693beb1cab410364a"
              }}
              style={styles.ImageBackground_1_151}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f355/d198/1b52a3d57a5fef06fc809bf79bcd9921"
              }}
              style={styles.ImageBackground_4_66}
            />
          </View>
        </View>
        <View style={styles.View_1_153}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25e9/deb2/8d9396dfddcad82cab4f4f05815f629a"
            }}
            style={styles.ImageBackground_1_154}
          />
          <View style={styles.View_1_155} />
        </View>
      </View>
      <View style={styles.View_1_156}>
        <View style={styles.View_1_157} />
        <View style={styles.View_1_158}>
          <View style={styles.View_1_159}>
            <Text style={styles.Text_1_159}>serpentwithfeet</Text>
          </View>
          <View style={styles.View_1_160}>
            <Text style={styles.Text_1_160}>Heart Storm (feat. NAO)</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0e2/d319/55e95e21c60cd1fa65895df1314e64e4"
          }}
          style={styles.ImageBackground_1_161}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82dc/a9ac/686eca9e4f93e8b39136091ff957a764"
          }}
          style={styles.ImageBackground_1_167}
        />
        <View style={styles.View_1_171}>
          <View style={styles.View_1_172} />
          <View style={styles.View_1_173}>
            <Text style={styles.Text_1_173}>Phone Speaker</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da97/1bbf/651184dc6ffc200113980847a6efdbc3"
            }}
            style={styles.ImageBackground_1_174}
          />
        </View>
        <View style={styles.View_1_175}>
          <View style={styles.View_1_176} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3be3/14b3/62f58114eac349c1bc502e71de19a907"
            }}
            style={styles.ImageBackground_1_177}
          />
        </View>
        <View style={styles.View_1_178}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c48a/ffb8/7e7b5b80d64b098cb080cb04c680f617"
            }}
            style={styles.ImageBackground_1_179}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0afe/138c/10775c9cac82a37b0cb7ce5dff7b22f2"
            }}
            style={styles.ImageBackground_1_180}
          />
        </View>
        <View style={styles.View_1_181}>
          <View style={styles.View_1_182}>
            <Text style={styles.Text_1_182}>2:20</Text>
          </View>
          <View style={styles.View_1_183}>
            <Text style={styles.Text_1_183}>3:22</Text>
          </View>
          <View style={styles.View_1_184} />
          <View style={styles.View_1_185} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c6f/0393/8d2ed9c8d8166a6e875c361da4841227"
            }}
            style={styles.ImageBackground_1_186}
          />
        </View>
      </View>
      <View style={styles.View_1_187}>
        <View style={styles.View_1_188}>
          <View style={styles.View_1_189} />
          <View style={styles.View_1_190}>
            <View style={styles.View_1_191}>
              <Text style={styles.Text_1_191}>Bluetooth</Text>
            </View>
            <View style={styles.View_1_192}>
              <Text style={styles.Text_1_192}>Off</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398a/c3b0/faaced11a74fb995a41db1897903e2a9"
            }}
            style={styles.ImageBackground_1_193}
          />
        </View>
        <View style={styles.View_1_194}>
          <View style={styles.View_1_195} />
          <View style={styles.View_1_196}>
            <View style={styles.View_1_197}>
              <Text style={styles.Text_1_197}>Flashlight</Text>
            </View>
            <View style={styles.View_1_198}>
              <Text style={styles.Text_1_198}>Off</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9f6/2073/58a5aefef1138dd1dd49f30758541241"
            }}
            style={styles.ImageBackground_1_199}
          />
        </View>
        <View style={styles.View_1_200}>
          <View style={styles.View_1_201} />
          <View style={styles.View_1_202}>
            <View style={styles.View_1_203}>
              <Text style={styles.Text_1_203}>Airplane mode</Text>
            </View>
            <View style={styles.View_1_204}>
              <Text style={styles.Text_1_204}>Off</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30cc/9e74/5203ffcfbbdef066c4e8724d5549295d"
            }}
            style={styles.ImageBackground_1_205}
          />
        </View>
        <View style={styles.View_1_206}>
          <View style={styles.View_1_207} />
          <View style={styles.View_1_208}>
            <View style={styles.View_1_209}>
              <Text style={styles.Text_1_209}>Do not disturb</Text>
            </View>
            <View style={styles.View_1_210}>
              <Text style={styles.Text_1_210}>Off</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85cc/7c45/1def55b8af38b7744ee09fcbe1a96ac4"
            }}
            style={styles.ImageBackground_1_211}
          />
        </View>
        <View style={styles.View_1_212}>
          <View style={styles.View_1_213} />
          <View style={styles.View_1_214}>
            <View style={styles.View_1_215}>
              <Text style={styles.Text_1_215}>My Home</Text>
            </View>
            <View style={styles.View_1_216}>
              <Text style={styles.Text_1_216}>6 Devices</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea1a/d211/9723f11136470fbadf7fad634ba1800d"
            }}
            style={styles.ImageBackground_1_217}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2154/fea6/82f32744b7345e7f7da45d1aae8c7824"
            }}
            style={styles.ImageBackground_1_218}
          />
        </View>
        <View style={styles.View_1_219}>
          <View style={styles.View_1_220} />
          <View style={styles.View_1_221}>
            <View style={styles.View_1_222}>
              <Text style={styles.Text_1_222}>Wi-Fi</Text>
            </View>
            <View style={styles.View_1_223}>
              <Text style={styles.Text_1_223}>GoogleGuest</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d7f/e712/ed94511706a74622ebaafcbcd8e26f3b"
            }}
            style={styles.ImageBackground_1_224}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2154/fea6/82f32744b7345e7f7da45d1aae8c7824"
            }}
            style={styles.ImageBackground_1_225}
          />
        </View>
        <View style={styles.View_1_226}>
          <View style={styles.View_1_227} />
          <View style={styles.View_1_228}>
            <View style={styles.View_1_229}>
              <Text style={styles.Text_1_229}>Dark theme</Text>
            </View>
            <View style={styles.View_1_230}>
              <Text style={styles.Text_1_230}>Off</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5735/b9db/7883d6eb43d41a43a2cb8d60df2c6e3e"
            }}
            style={styles.ImageBackground_1_231}
          />
        </View>
        <View style={styles.View_1_232}>
          <View style={styles.View_1_233} />
          <View style={styles.View_1_234}>
            <View style={styles.View_1_235}>
              <Text style={styles.Text_1_235}>GPay</Text>
            </View>
            <View style={styles.View_1_236}>
              <Text style={styles.Text_1_236}>Ready</Text>
            </View>
          </View>
          <View style={styles.View_1_237}>
            <View style={styles.View_1_238} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9a1/a1f1/54f04358226209adca8f568f32cd6422"
              }}
              style={styles.ImageBackground_1_239}
            />
            <View style={styles.View_1_240} />
            <View style={styles.View_1_241} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adb5/5f6a/cffda9af20be9f244382f6bac8fac99c"
            }}
            style={styles.ImageBackground_1_242}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("118.30601092896175%") },
  View_1_121: {
    width: wp("82.7250608272506%"),
    minWidth: wp("82.7250608272506%"),
    height: hp("7.7868857670351455%"),
    minHeight: hp("7.7868857670351455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.27250608272506%"),
    top: hp("2.8688524590163933%")
  },
  View_1_122: {
    width: wp("18.491484184914842%"),
    minWidth: wp("18.491484184914842%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.055961070559611%"),
    top: hp("0%")
  },
  Text_1_122: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_123: {
    width: wp("8.75912408759124%"),
    minWidth: wp("8.75912408759124%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9732360097323607%"),
    top: hp("5.327868852459016%")
  },
  Text_1_123: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_124: {
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
  ImageBackground_1_125: {
    width: wp("11.106172733353292%"),
    height: hp("2.049180718718982%"),
    top: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.66423357664233%")
  },
  ImageBackground_1_132: {
    width: wp("4.13625304136253%"),
    minWidth: wp("4.13625304136253%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.4257907542579%"),
    top: hp("5.601092896174864%")
  },
  ImageBackground_1_133: {
    width: wp("3.40632603406326%"),
    minWidth: wp("3.40632603406326%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.55961070559611%"),
    top: hp("5.464480874316939%")
  },
  View_1_134: {
    width: wp("1.9464720194647203%"),
    minWidth: wp("1.9464720194647203%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.7785888077859%"),
    top: hp("5.601092896174864%")
  },
  View_1_135: {
    width: wp("1.9464720194647203%"),
    minWidth: wp("1.9464720194647203%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185792298%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  ImageBackground_1_136: {
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
  View_1_137: {
    width: wp("85.15815085158151%"),
    minWidth: wp("85.15815085158151%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.109489051094891%"),
    top: hp("12.841530054644808%")
  },
  View_1_138: {
    width: wp("80.2919708029197%"),
    minWidth: wp("80.2919708029197%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.866180048661801%"),
    top: hp("2.868852459016395%"),
    backgroundColor: "rgba(49, 48, 45, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_1_139: {
    width: wp("66.90997566909975%"),
    minWidth: wp("66.90997566909975%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(219, 234, 141, 1)",
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26
  },
  ImageBackground_1_140: {
    width: wp("5.503649375154445%"),
    height: hp("3.0901637885088475%"),
    top: hp("1.6393442622950811%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.880778588807786%")
  },
  ImageBackground_1_141: {
    width: wp("6.81265206812652%"),
    minWidth: wp("6.81265206812652%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.47201946472019%"),
    top: hp("74.59016393442623%")
  },
  View_1_145: {
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
  View_1_146: {
    width: wp("89.53771289537713%"),
    minWidth: wp("89.53771289537713%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.109489051094891%"),
    top: hp("78.14207650273224%")
  },
  View_1_147: {
    width: wp("27.73722627737226%"),
    minWidth: wp("27.73722627737226%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_148: {
    width: wp("4.13625304136253%"),
    height: hp("2.3224043715846996%"),
    top: hp("1.9125683060109253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.678832116788321%")
  },
  View_1_149: {
    width: wp("27.73722627737226%"),
    minWidth: wp("27.73722627737226%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(48, 49, 44, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_1_150: {
    width: wp("27.73722627737226%"),
    minWidth: wp("27.73722627737226%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.900243309002434%"),
    top: hp("0%")
  },
  View_1_152: {
    width: wp("27.73722627737226%"),
    minWidth: wp("27.73722627737226%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(48, 49, 44, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_4_67: {
    width: wp("4.793045990658502%"),
    minWidth: wp("4.793045990658502%"),
    height: hp("2.691250160092213%"),
    minHeight: hp("2.691250160092213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.47208851909405%"),
    top: hp("1.7964514226861468%")
  },
  ImageBackground_1_151: {
    width: wp("4.37956204379562%"),
    height: hp("2.459016393442623%"),
    top: hp("0.11611688332477854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20674359769427042%")
  },
  ImageBackground_4_66: {
    width: wp("0.9732360097323601%"),
    minWidth: wp("0.9732360097323601%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.909906614725898%"),
    top: hp("1.0724010363302483%")
  },
  View_1_153: {
    width: wp("27.73722627737226%"),
    minWidth: wp("27.73722627737226%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.80048661800486%"),
    top: hp("0%")
  },
  ImageBackground_1_154: {
    width: wp("4.13625304136253%"),
    height: hp("2.3224043715846996%"),
    top: hp("1.9125683060109253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.922141119221422%")
  },
  View_1_155: {
    width: wp("27.73722627737226%"),
    minWidth: wp("27.73722627737226%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(48, 49, 44, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_1_156: {
    width: wp("89.78102189781022%"),
    minWidth: wp("89.78102189781022%"),
    height: hp("27.459016393442624%"),
    minHeight: hp("27.459016393442624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.109489051094891%"),
    top: hp("85.38251366120218%")
  },
  View_1_157: {
    width: wp("89.78102189781022%"),
    minWidth: wp("89.78102189781022%"),
    height: hp("27.459016393442624%"),
    minHeight: hp("27.459016393442624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 243, 212, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_1_158: {
    width: wp("42.82238442822384%"),
    minWidth: wp("42.82238442822384%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.71046228710462%"),
    top: hp("5.73770491803279%")
  },
  View_1_159: {
    width: wp("23.844282238442823%"),
    minWidth: wp("23.844282238442823%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%")
  },
  Text_1_159: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_160: {
    width: wp("42.82238442822384%"),
    minWidth: wp("42.82238442822384%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_160: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.34,
    textTransform: "none"
  },
  ImageBackground_1_161: {
    width: wp("56.69099756690997%"),
    height: hp("2.73224043715847%"),
    top: hp("20.081967213114766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.545012165450125%")
  },
  ImageBackground_1_167: {
    width: wp("6.81265206812652%"),
    minWidth: wp("6.81265206812652%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.3625304136253%"),
    top: hp("25.273224043715857%")
  },
  View_1_171: {
    width: wp("27.25060827250608%"),
    minWidth: wp("27.25060827250608%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.6374695863747%"),
    top: hp("1.7759562841530112%")
  },
  View_1_172: {
    width: wp("27.25060827250608%"),
    minWidth: wp("27.25060827250608%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(216, 234, 214, 1)",
    borderTopLeftRadius: 23,
    borderTopRightRadius: 23,
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 23
  },
  View_1_173: {
    width: wp("19.951338199513383%"),
    minWidth: wp("19.951338199513383%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.59610705596107%"),
    top: hp("0.9562841530054698%")
  },
  Text_1_173: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_174: {
    width: wp("2.18978102189781%"),
    height: hp("1.912568306010929%"),
    top: hp("0.9562841530054698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.189781021897801%")
  },
  View_1_175: {
    width: wp("21.16788321167883%"),
    minWidth: wp("21.16788321167883%"),
    height: hp("11.885245901639344%"),
    minHeight: hp("11.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.13625304136253%"),
    top: hp("2.185792349726782%")
  },
  View_1_176: {
    width: wp("21.16788321167883%"),
    minWidth: wp("21.16788321167883%"),
    height: hp("11.885245901639344%"),
    minHeight: hp("11.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  ImageBackground_1_177: {
    width: wp("21.16788321167883%"),
    minWidth: wp("21.16788321167883%"),
    height: hp("11.885245901639344%"),
    minHeight: hp("11.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_178: {
    width: wp("2.9197080291970803%"),
    minWidth: wp("2.9197080291970803%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.38442822384428%"),
    top: hp("12.431693989071036%")
  },
  ImageBackground_1_179: {
    width: wp("2.9197080291970803%"),
    minWidth: wp("2.9197080291970803%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_180: {
    width: wp("0.9732360097323601%"),
    height: hp("0.819672131147541%"),
    top: hp("0.40983606557378494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2165450121654509%")
  },
  View_1_181: {
    width: wp("81.75182481751825%"),
    minWidth: wp("81.75182481751825%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.13625304136253%"),
    top: hp("15.437158469945345%")
  },
  View_1_182: {
    width: wp("5.839416058394161%"),
    minWidth: wp("5.839416058394161%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%")
  },
  Text_1_182: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_183: {
    width: wp("5.839416058394161%"),
    minWidth: wp("5.839416058394161%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.91240875912409%"),
    top: hp("2.185792349726782%")
  },
  Text_1_183: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_184: {
    width: wp("81.75182481751825%"),
    minWidth: wp("81.75182481751825%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896273%"),
    backgroundColor: "rgba(189, 185, 157, 1)",
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17
  },
  View_1_185: {
    width: wp("45.49878345498784%"),
    minWidth: wp("45.49878345498784%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896273%"),
    backgroundColor: "rgba(26, 22, 5, 1)",
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17
  },
  ImageBackground_1_186: {
    width: wp("2.9197080291970803%"),
    minWidth: wp("2.9197080291970803%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.25547445255474%"),
    top: hp("0%")
  },
  View_1_187: {
    width: wp("89.53771289537713%"),
    minWidth: wp("89.53771289537713%"),
    height: hp("49.72677595628415%"),
    minHeight: hp("49.72677595628415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.109489051094891%"),
    top: hp("22.540983606557376%")
  },
  View_1_188: {
    width: wp("43.79562043795621%"),
    minWidth: wp("43.79562043795621%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.74209245742093%"),
    top: hp("0%")
  },
  View_1_189: {
    width: wp("43.79562043795621%"),
    minWidth: wp("43.79562043795621%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(48, 49, 44, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_1_190: {
    width: wp("14.841849148418493%"),
    minWidth: wp("14.841849148418493%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.678832116788314%"),
    top: hp("3.4153005464480906%")
  },
  View_1_191: {
    width: wp("14.841849148418493%"),
    minWidth: wp("14.841849148418493%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_191: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_192: {
    width: wp("4.866180048661801%"),
    minWidth: wp("4.866180048661801%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.459016393442621%")
  },
  Text_1_192: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_193: {
    width: wp("3.092457198168529%"),
    height: hp("2.73224043715847%"),
    top: hp("4.371584699453557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.109489051094883%")
  },
  View_1_194: {
    width: wp("43.79562043795621%"),
    minWidth: wp("43.79562043795621%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.704918032786885%")
  },
  View_1_195: {
    width: wp("43.79562043795621%"),
    minWidth: wp("43.79562043795621%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(48, 49, 44, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_1_196: {
    width: wp("15.085158150851582%"),
    minWidth: wp("15.085158150851582%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.678832116788321%"),
    top: hp("3.415300546448087%")
  },
  View_1_197: {
    width: wp("15.085158150851582%"),
    minWidth: wp("15.085158150851582%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_197: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_198: {
    width: wp("4.866180048661801%"),
    minWidth: wp("4.866180048661801%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426243%")
  },
  Text_1_198: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_199: {
    width: wp("4.135523051241019%"),
    height: hp("2.73224043715847%"),
    top: hp("4.37158469945355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.866180048661801%")
  },
  View_1_200: {
    width: wp("43.79562043795621%"),
    minWidth: wp("43.79562043795621%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.114754098360656%")
  },
  View_1_201: {
    width: wp("43.79562043795621%"),
    minWidth: wp("43.79562043795621%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(48, 49, 44, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_1_202: {
    width: wp("22.38442822384428%"),
    minWidth: wp("22.38442822384428%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.678832116788321%"),
    top: hp("3.5519125683060153%")
  },
  View_1_203: {
    width: wp("22.38442822384428%"),
    minWidth: wp("22.38442822384428%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_203: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_204: {
    width: wp("4.866180048661801%"),
    minWidth: wp("4.866180048661801%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.45901639344261%")
  },
  Text_1_204: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_205: {
    width: wp("4.622871046228711%"),
    height: hp("2.73224043715847%"),
    top: hp("4.508196721311471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.622871046228711%")
  },
  View_1_206: {
    width: wp("43.79562043795621%"),
    minWidth: wp("43.79562043795621%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.74209245742093%"),
    top: hp("38.114754098360656%")
  },
  View_1_207: {
    width: wp("43.79562043795621%"),
    minWidth: wp("43.79562043795621%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(48, 49, 44, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_1_208: {
    width: wp("21.654501216545015%"),
    minWidth: wp("21.654501216545015%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.678832116788314%"),
    top: hp("3.5519125683060153%")
  },
  View_1_209: {
    width: wp("21.654501216545015%"),
    minWidth: wp("21.654501216545015%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_209: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_210: {
    width: wp("4.866180048661801%"),
    minWidth: wp("4.866180048661801%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.45901639344261%")
  },
  Text_1_210: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_211: {
    width: wp("4.866180048661801%"),
    height: hp("2.73224043715847%"),
    top: hp("4.508196721311471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.136253041362522%")
  },
  View_1_212: {
    width: wp("43.79562043795621%"),
    minWidth: wp("43.79562043795621%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.40983606557377%")
  },
  View_1_213: {
    width: wp("43.79562043795621%"),
    minWidth: wp("43.79562043795621%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(219, 234, 141, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_1_214: {
    width: wp("14.841849148418493%"),
    minWidth: wp("14.841849148418493%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.678832116788321%"),
    top: hp("3.415300546448087%")
  },
  View_1_215: {
    width: wp("14.841849148418493%"),
    minWidth: wp("14.841849148418493%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_215: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_216: {
    width: wp("14.841849148418493%"),
    minWidth: wp("14.841849148418493%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426315%")
  },
  Text_1_216: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_217: {
    width: wp("3.64963503649635%"),
    minWidth: wp("3.64963503649635%"),
    height: hp("1.9978265293308946%"),
    minHeight: hp("1.9978265293308946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.109489051094891%"),
    top: hp("4.7814207650273275%")
  },
  ImageBackground_1_218: {
    width: wp("1.8029196709031896%"),
    height: hp("1.639344262295082%"),
    top: hp("4.918032786885242%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.68613138686132%")
  },
  View_1_219: {
    width: wp("43.79562043795621%"),
    minWidth: wp("43.79562043795621%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_220: {
    width: wp("43.79562043795621%"),
    minWidth: wp("43.79562043795621%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(219, 234, 141, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_1_221: {
    width: wp("19.951338199513383%"),
    minWidth: wp("19.951338199513383%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.678832116788321%"),
    top: hp("3.4153005464480906%")
  },
  View_1_222: {
    width: wp("7.785888077858881%"),
    minWidth: wp("7.785888077858881%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_222: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_223: {
    width: wp("19.951338199513383%"),
    minWidth: wp("19.951338199513383%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.459016393442621%")
  },
  Text_1_223: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_224: {
    width: wp("5.59610705596107%"),
    height: hp("2.185792349726776%"),
    top: hp("4.644808743169403%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.13625304136253%")
  },
  ImageBackground_1_225: {
    width: wp("1.8029196709031896%"),
    height: hp("1.639344262295082%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.68613138686132%")
  },
  View_1_226: {
    width: wp("43.79562043795621%"),
    minWidth: wp("43.79562043795621%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.74209245742093%"),
    top: hp("12.704918032786885%")
  },
  View_1_227: {
    width: wp("43.79562043795621%"),
    minWidth: wp("43.79562043795621%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(48, 49, 44, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_1_228: {
    width: wp("17.761557177615572%"),
    minWidth: wp("17.761557177615572%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.678832116788314%"),
    top: hp("3.415300546448087%")
  },
  View_1_229: {
    width: wp("17.761557177615572%"),
    minWidth: wp("17.761557177615572%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_229: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_230: {
    width: wp("4.866180048661801%"),
    minWidth: wp("4.866180048661801%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426243%")
  },
  Text_1_230: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_231: {
    width: wp("4.866180048661801%"),
    minWidth: wp("4.866180048661801%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.136253041362522%"),
    top: hp("4.37158469945355%")
  },
  View_1_232: {
    width: wp("43.79562043795621%"),
    minWidth: wp("43.79562043795621%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.74209245742093%"),
    top: hp("25.40983606557377%")
  },
  View_1_233: {
    width: wp("43.79562043795621%"),
    minWidth: wp("43.79562043795621%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(219, 234, 141, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_1_234: {
    width: wp("9.48905109489051%"),
    minWidth: wp("9.48905109489051%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.678832116788314%"),
    top: hp("3.415300546448087%")
  },
  View_1_235: {
    width: wp("8.02919708029197%"),
    minWidth: wp("8.02919708029197%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_235: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_236: {
    width: wp("9.48905109489051%"),
    minWidth: wp("9.48905109489051%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426315%")
  },
  Text_1_236: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_237: {
    width: wp("8.02919708029197%"),
    minWidth: wp("8.02919708029197%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.36009732360097%"),
    top: hp("4.508196721311478%")
  },
  View_1_238: {
    width: wp("8.02919708029197%"),
    minWidth: wp("8.02919708029197%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(48, 49, 45, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_1_239: {
    width: wp("0.7299270072992701%"),
    minWidth: wp("0.7299270072992701%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.569343065693431%"),
    top: hp("0.4098360655737636%")
  },
  View_1_240: {
    width: wp("1.4598540145985401%"),
    minWidth: wp("1.4598540145985401%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9732360097323607%"),
    top: hp("2.0491803278688536%"),
    backgroundColor: "rgba(235, 246, 150, 1)",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14
  },
  View_1_241: {
    width: wp("0.9732360097323601%"),
    minWidth: wp("0.9732360097323601%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9732360097323607%"),
    top: hp("1.2295081967213122%"),
    backgroundColor: "rgba(235, 246, 150, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  ImageBackground_1_242: {
    width: wp("4.866180048661801%"),
    minWidth: wp("4.866180048661801%"),
    height: hp("2.3531676641578883%"),
    minHeight: hp("2.3531676641578883%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.136253041362522%"),
    top: hp("4.644808743169399%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
