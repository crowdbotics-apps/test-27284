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
      <View style={styles.View_1_247} />
      <View style={styles.View_1_248}>
        <View style={styles.View_1_249} />
        <View style={styles.View_1_250}>
          <Text style={styles.Text_1_250}>Manage</Text>
        </View>
      </View>
      <View style={styles.View_1_251}>
        <View style={styles.View_1_252} />
        <View style={styles.View_1_253}>
          <Text style={styles.Text_1_253}>Clear all</Text>
        </View>
      </View>
      <View style={styles.View_1_254}>
        <View style={styles.View_1_255}>
          <Text style={styles.Text_1_255}>12:00</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29d5/0fba/fbc57b05e1057474dcc9b341a2715b8b"
          }}
          style={styles.ImageBackground_1_256}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1abb/1d43/18c513fe1b4d7d801695c0cd1e7ab382"
          }}
          style={styles.ImageBackground_1_257}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8b1/0745/fd0038d6f62f37546afe7046acfa9ef8"
          }}
          style={styles.ImageBackground_1_258}
        />
        <View style={styles.View_1_259}>
          <View style={styles.View_1_260} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2816/8aa9/05305501ae46495ce932e03c23c3d5b6"
            }}
            style={styles.ImageBackground_1_261}
          />
        </View>
      </View>
      <View style={styles.View_1_262} />
      <View style={styles.View_1_263}>
        <View style={styles.View_1_264} />
        <View style={styles.View_1_265}>
          <View style={styles.View_1_266}>
            <Text style={styles.Text_1_266}>serpentwithfeet</Text>
          </View>
          <View style={styles.View_1_267}>
            <Text style={styles.Text_1_267}>Heart Storm</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab09/6c6c/20f5afeb703c38ed16f55eea168a2c5b"
          }}
          style={styles.ImageBackground_1_268}
        />
        <View style={styles.View_1_272}>
          <View style={styles.View_1_273} />
          <View style={styles.View_1_274}>
            <Text style={styles.Text_1_274}>Phone Speaker</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da97/1bbf/651184dc6ffc200113980847a6efdbc3"
            }}
            style={styles.ImageBackground_1_275}
          />
        </View>
        <View style={styles.View_1_276}>
          <View style={styles.View_1_277} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9dc0/4dc7/2b5a025370dd32a8aa7349fd04e26bef"
            }}
            style={styles.ImageBackground_1_278}
          />
        </View>
        <View style={styles.View_1_279}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/751a/7b80/3842d6a793349eee8ec13f62df446007"
            }}
            style={styles.ImageBackground_1_280}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0afe/138c/10775c9cac82a37b0cb7ce5dff7b22f2"
            }}
            style={styles.ImageBackground_1_281}
          />
        </View>
      </View>
      <View style={styles.View_1_282}>
        <View style={styles.View_1_283}>
          <View style={styles.View_1_284} />
          <View style={styles.View_1_285}>
            <View style={styles.View_1_286}>
              <Text style={styles.Text_1_286}>Bluetooth</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398a/c3b0/faaced11a74fb995a41db1897903e2a9"
            }}
            style={styles.ImageBackground_1_287}
          />
        </View>
        <View style={styles.View_1_288}>
          <View style={styles.View_1_289} />
          <View style={styles.View_1_290}>
            <View style={styles.View_1_291}>
              <Text style={styles.Text_1_291}>Flashlight</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9f6/2073/58a5aefef1138dd1dd49f30758541241"
            }}
            style={styles.ImageBackground_1_292}
          />
        </View>
        <View style={styles.View_1_293}>
          <View style={styles.View_1_294} />
          <View style={styles.View_1_295}>
            <View style={styles.View_1_296}>
              <Text style={styles.Text_1_296}>Wi-Fi</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d7f/e712/ed94511706a74622ebaafcbcd8e26f3b"
            }}
            style={styles.ImageBackground_1_297}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2154/fea6/82f32744b7345e7f7da45d1aae8c7824"
            }}
            style={styles.ImageBackground_1_298}
          />
        </View>
        <View style={styles.View_1_299}>
          <View style={styles.View_1_300} />
          <View style={styles.View_1_301}>
            <View style={styles.View_1_302}>
              <Text style={styles.Text_1_302}>Dark theme</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5735/b9db/7883d6eb43d41a43a2cb8d60df2c6e3e"
            }}
            style={styles.ImageBackground_1_303}
          />
        </View>
      </View>
      <View style={styles.View_1_304}>
        <View style={styles.View_1_305} />
        <View style={styles.View_1_306}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45b4/9efe/d9c381d4b7e7061ff62abd4305355897"
            }}
            style={styles.ImageBackground_1_307}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3684/15e4/09382dfe50644d38436a829a193fc670"
            }}
            style={styles.ImageBackground_1_308}
          />
        </View>
        <View style={styles.View_1_309}>
          <View style={styles.View_1_310}>
            <Text style={styles.Text_1_310}>New photos added</Text>
          </View>
          <View style={styles.View_1_311}>
            <Text style={styles.Text_1_311}>5m</Text>
          </View>
          <View style={styles.View_1_312}>
            <Text style={styles.Text_1_312}>Weekend getaway</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb73/91a3/fe389970bc325fe223de3e694456a6fc"
            }}
            style={styles.ImageBackground_1_313}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e1c/5f15/5f7dc77231dd939710c965f848a07946"
          }}
          style={styles.ImageBackground_1_314}
        />
        <View style={styles.View_1_315}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94e7/5071/d2892111545355f5531d67ed079b0bd9"
            }}
            style={styles.ImageBackground_1_316}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2bd/a491/0989e3b173e2e73053432a33b57e8a1d"
            }}
            style={styles.ImageBackground_1_317}
          />
        </View>
      </View>
      <View style={styles.View_1_322}>
        <View style={styles.View_1_323} />
        <View style={styles.View_1_324}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31d9/a9e1/2fe8e3209a8137a1e6220f9b2a36125f"
            }}
            style={styles.ImageBackground_1_325}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/461e/398f/73b2df6bccb20009afa1401bed3d41cc"
            }}
            style={styles.ImageBackground_1_326}
          />
          <View style={styles.View_1_327}>
            <Text style={styles.Text_1_327}>2</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a08/8eac/f0931fbef6152bfd17b56702348f1307"
            }}
            style={styles.ImageBackground_1_328}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/554d/fa04/cc63dd56034331152faafb38c9cea9b7"
            }}
            style={styles.ImageBackground_1_329}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1116/6569/8bcd34242a845cfec420ded41a10d26c"
            }}
            style={styles.ImageBackground_1_330}
          />
          <View style={styles.View_1_331}>
            <Text style={styles.Text_1_331}>Jane</Text>
          </View>
          <View style={styles.View_1_332}>
            <Text style={styles.Text_1_332}>2m</Text>
          </View>
          <View style={styles.View_1_333}>
            <Text style={styles.Text_1_333}>Text me when you get here!</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb73/91a3/fe389970bc325fe223de3e694456a6fc"
            }}
            style={styles.ImageBackground_1_334}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/174b/4618/29aada0b75f216ed0d0e16525c7adb61"
            }}
            style={styles.ImageBackground_1_335}
          />
        </View>
        <View style={styles.View_1_336}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4ba/a42f/8484ef151b1c48de3e8cddda38b1d237"
            }}
            style={styles.ImageBackground_1_337}
          />
          <View style={styles.View_1_338}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45b4/9efe/d9c381d4b7e7061ff62abd4305355897"
              }}
              style={styles.ImageBackground_1_339}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3684/15e4/09382dfe50644d38436a829a193fc670"
              }}
              style={styles.ImageBackground_1_340}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1116/6569/8bcd34242a845cfec420ded41a10d26c"
            }}
            style={styles.ImageBackground_1_341}
          />
          <View style={styles.View_1_342}>
            <Text style={styles.Text_1_342}>Florian</Text>
          </View>
          <View style={styles.View_1_343}>
            <Text style={styles.Text_1_343}>2m</Text>
          </View>
          <View style={styles.View_1_344}>
            <Text style={styles.Text_1_344}>How was your trip?</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb73/91a3/fe389970bc325fe223de3e694456a6fc"
            }}
            style={styles.ImageBackground_1_345}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/174b/4618/29aada0b75f216ed0d0e16525c7adb61"
            }}
            style={styles.ImageBackground_1_346}
          />
        </View>
        <View style={styles.View_1_347}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2cf8/3eec/1a6a3faabcddc3861fbab08ff31db553"
            }}
            style={styles.ImageBackground_1_348}
          />
          <View style={styles.View_1_349}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45b4/9efe/d9c381d4b7e7061ff62abd4305355897"
              }}
              style={styles.ImageBackground_1_350}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3684/15e4/09382dfe50644d38436a829a193fc670"
              }}
              style={styles.ImageBackground_1_351}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1116/6569/8bcd34242a845cfec420ded41a10d26c"
            }}
            style={styles.ImageBackground_1_352}
          />
          <View style={styles.View_1_353}>
            <Text style={styles.Text_1_353}>Paige</Text>
          </View>
          <View style={styles.View_1_354}>
            <Text style={styles.Text_1_354}>2m</Text>
          </View>
          <View style={styles.View_1_355}>
            <Text style={styles.Text_1_355}>Awesome! See you soon</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb73/91a3/fe389970bc325fe223de3e694456a6fc"
            }}
            style={styles.ImageBackground_1_356}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/174b/4618/29aada0b75f216ed0d0e16525c7adb61"
            }}
            style={styles.ImageBackground_1_357}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2f5/8cf8/b78a4bd8092150fa349a085aadea5ec4"
          }}
          style={styles.ImageBackground_1_358}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2f5/8cf8/b78a4bd8092150fa349a085aadea5ec4"
          }}
          style={styles.ImageBackground_1_359}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("118.30601092896175%") },
  View_1_247: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("73.49726775956285%"),
    minHeight: hp("73.49726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45.21857923497268%"),
    backgroundColor: "rgba(237, 239, 228, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_1_248: {
    width: wp("20.68126520681265%"),
    minWidth: wp("20.68126520681265%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.51581508515815%"),
    top: hp("99.18032786885246%")
  },
  View_1_249: {
    width: wp("20.68126520681265%"),
    minWidth: wp("20.68126520681265%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 253, 248, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_1_250: {
    width: wp("12.408759124087592%"),
    minWidth: wp("12.408759124087592%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.136253041362531%"),
    top: hp("1.3661202185792405%")
  },
  Text_1_250: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_251: {
    width: wp("20.68126520681265%"),
    minWidth: wp("20.68126520681265%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.8029197080292%"),
    top: hp("99.18032786885246%")
  },
  View_1_252: {
    width: wp("20.68126520681265%"),
    minWidth: wp("20.68126520681265%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 253, 248, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_1_253: {
    width: wp("12.652068126520682%"),
    minWidth: wp("12.652068126520682%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8929440389294427%"),
    top: hp("1.5027322404371688%")
  },
  Text_1_253: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_254: {
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
  View_1_255: {
    width: wp("8.75912408759124%"),
    minWidth: wp("8.75912408759124%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.136253041362531%"),
    top: hp("0.13661202185792343%")
  },
  Text_1_255: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_256: {
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
  ImageBackground_1_257: {
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
  ImageBackground_1_258: {
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
  View_1_259: {
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
  View_1_260: {
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
  ImageBackground_1_261: {
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
  View_1_262: {
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
  View_1_263: {
    width: wp("89.78102189781022%"),
    minWidth: wp("89.78102189781022%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.109489051094891%"),
    top: hp("28.278688524590162%")
  },
  View_1_264: {
    width: wp("89.78102189781022%"),
    minWidth: wp("89.78102189781022%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
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
  View_1_265: {
    width: wp("23.844282238442823%"),
    minWidth: wp("23.844282238442823%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.357664233576642%"),
    top: hp("4.098360655737711%")
  },
  View_1_266: {
    width: wp("23.844282238442823%"),
    minWidth: wp("23.844282238442823%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.2786885245901587%")
  },
  Text_1_266: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_267: {
    width: wp("21.897810218978105%"),
    minWidth: wp("21.897810218978105%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_267: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.34,
    textTransform: "none"
  },
  ImageBackground_1_268: {
    width: wp("29.1970802919708%"),
    height: hp("1.912568306010929%"),
    top: hp("7.9234972677595685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.71776155717762%")
  },
  View_1_272: {
    width: wp("27.25060827250608%"),
    minWidth: wp("27.25060827250608%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.6374695863747%"),
    top: hp("1.7759562841530077%")
  },
  View_1_273: {
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
  View_1_274: {
    width: wp("19.951338199513383%"),
    minWidth: wp("19.951338199513383%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.59610705596107%"),
    top: hp("0.9562841530054662%")
  },
  Text_1_274: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_275: {
    width: wp("2.18978102189781%"),
    height: hp("1.912568306010929%"),
    top: hp("0.9562841530054662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.189781021897801%")
  },
  View_1_276: {
    width: wp("16.54501216545012%"),
    minWidth: wp("16.54501216545012%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.89294403892944%"),
    top: hp("2.1857923497267784%")
  },
  View_1_277: {
    width: wp("16.54501216545012%"),
    minWidth: wp("16.54501216545012%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
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
  ImageBackground_1_278: {
    width: wp("16.54501216545012%"),
    minWidth: wp("16.54501216545012%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_279: {
    width: wp("2.9197080291970803%"),
    minWidth: wp("2.9197080291970803%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.51824817518248%"),
    top: hp("9.836065573770494%")
  },
  ImageBackground_1_280: {
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
  ImageBackground_1_281: {
    width: wp("0.9732360097323601%"),
    height: hp("0.819672131147541%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2165450121654509%")
  },
  View_1_282: {
    width: wp("89.53771289537713%"),
    minWidth: wp("89.53771289537713%"),
    height: hp("17.48633879781421%"),
    minHeight: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.109489051094891%"),
    top: hp("9.699453551912567%")
  },
  View_1_283: {
    width: wp("43.79562043795621%"),
    minWidth: wp("43.79562043795621%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.74209245742093%"),
    top: hp("0%")
  },
  View_1_284: {
    width: wp("43.79562043795621%"),
    minWidth: wp("43.79562043795621%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
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
  View_1_285: {
    width: wp("14.841849148418493%"),
    minWidth: wp("14.841849148418493%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.678832116788314%"),
    top: hp("3.005464480874318%")
  },
  View_1_286: {
    width: wp("14.841849148418493%"),
    minWidth: wp("14.841849148418493%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_286: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_287: {
    width: wp("3.092457198168529%"),
    height: hp("2.73224043715847%"),
    top: hp("2.7322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.109489051094883%")
  },
  View_1_288: {
    width: wp("43.79562043795621%"),
    minWidth: wp("43.79562043795621%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.289617486338797%")
  },
  View_1_289: {
    width: wp("43.79562043795621%"),
    minWidth: wp("43.79562043795621%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
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
  View_1_290: {
    width: wp("15.085158150851582%"),
    minWidth: wp("15.085158150851582%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.678832116788321%"),
    top: hp("3.142076502732241%")
  },
  View_1_291: {
    width: wp("15.085158150851582%"),
    minWidth: wp("15.085158150851582%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_291: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_292: {
    width: wp("4.135523051241019%"),
    height: hp("2.73224043715847%"),
    top: hp("2.868852459016395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.866180048661801%")
  },
  View_1_293: {
    width: wp("43.79562043795621%"),
    minWidth: wp("43.79562043795621%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_294: {
    width: wp("43.79562043795621%"),
    minWidth: wp("43.79562043795621%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
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
  View_1_295: {
    width: wp("7.785888077858881%"),
    minWidth: wp("7.785888077858881%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.678832116788321%"),
    top: hp("3.005464480874318%")
  },
  View_1_296: {
    width: wp("7.785888077858881%"),
    minWidth: wp("7.785888077858881%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_296: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_297: {
    width: wp("5.59610705596107%"),
    height: hp("2.185792349726776%"),
    top: hp("3.005464480874318%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.13625304136253%")
  },
  ImageBackground_1_298: {
    width: wp("1.8029196709031896%"),
    height: hp("1.639344262295082%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.68613138686132%")
  },
  View_1_299: {
    width: wp("43.79562043795621%"),
    minWidth: wp("43.79562043795621%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.74209245742093%"),
    top: hp("9.289617486338797%")
  },
  View_1_300: {
    width: wp("43.79562043795621%"),
    minWidth: wp("43.79562043795621%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
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
  View_1_301: {
    width: wp("17.761557177615572%"),
    minWidth: wp("17.761557177615572%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.678832116788314%"),
    top: hp("3.142076502732241%")
  },
  View_1_302: {
    width: wp("17.761557177615572%"),
    minWidth: wp("17.761557177615572%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_302: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_303: {
    width: wp("4.866180048661801%"),
    minWidth: wp("4.866180048661801%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.136253041362522%"),
    top: hp("2.868852459016395%")
  },
  View_1_304: {
    width: wp("89.78102189781022%"),
    minWidth: wp("89.78102189781022%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.35279805352798%"),
    top: hp("85.38251366120218%")
  },
  View_1_305: {
    width: wp("89.78102189781022%"),
    minWidth: wp("89.78102189781022%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 253, 248, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_1_306: {
    width: wp("5.59610705596107%"),
    minWidth: wp("5.59610705596107%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.5352798053528%"),
    top: hp("4.234972677595636%")
  },
  ImageBackground_1_307: {
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
  ImageBackground_1_308: {
    width: wp("2.9197080291970803%"),
    height: hp("1.012295126263561%"),
    top: hp("1.1332027247694612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3880671665906306%")
  },
  View_1_309: {
    width: wp("42.33576642335766%"),
    minWidth: wp("42.33576642335766%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.922141119221411%"),
    top: hp("3.1420765027322375%")
  },
  View_1_310: {
    width: wp("32.60340632603406%"),
    minWidth: wp("32.60340632603406%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_310: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_311: {
    width: wp("5.109489051094891%"),
    minWidth: wp("5.109489051094891%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.22627737226277%"),
    top: hp("0.1366120218579283%")
  },
  Text_1_311: {
    color: "rgba(113, 115, 104, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_312: {
    width: wp("27.49391727493917%"),
    minWidth: wp("27.49391727493917%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%")
  },
  Text_1_312: {
    color: "rgba(94, 95, 93, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_313: {
    width: wp("0.9732360097323601%"),
    minWidth: wp("0.9732360097323601%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.79318734793188%"),
    top: hp("1.092896174863398%")
  },
  ImageBackground_1_314: {
    width: wp("12.165450121654501%"),
    minWidth: wp("12.165450121654501%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.47688564476887%"),
    top: hp("2.4590163934426243%")
  },
  View_1_315: {
    width: wp("5.839416058394161%"),
    minWidth: wp("5.839416058394161%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1630170316301705%"),
    top: hp("4.234972677595636%")
  },
  ImageBackground_1_316: {
    width: wp("5.839416058394161%"),
    minWidth: wp("5.839416058394161%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_317: {
    width: wp("4.109225307937956%"),
    minWidth: wp("4.109225307937956%"),
    height: hp("2.3072245342483937%"),
    minHeight: hp("2.3072245342483937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8651250760340634%"),
    top: hp("0.4857381184895786%")
  },
  View_1_322: {
    width: wp("89.78102189781022%"),
    minWidth: wp("89.78102189781022%"),
    height: hp("35.10928961748634%"),
    minHeight: hp("35.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.109489051094891%"),
    top: hp("47.81420765027322%")
  },
  View_1_323: {
    width: wp("89.78102189781022%"),
    minWidth: wp("89.78102189781022%"),
    height: hp("35.10928961748634%"),
    minHeight: hp("35.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 253, 248, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_1_324: {
    width: wp("83.69829683698296%"),
    minWidth: wp("83.69829683698296%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.67639902676399%"),
    top: hp("2.4590163934426315%")
  },
  ImageBackground_1_325: {
    width: wp("12.165450121654501%"),
    minWidth: wp("12.165450121654501%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_326: {
    width: wp("5.59610705596107%"),
    minWidth: wp("5.59610705596107%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.96593673965937%"),
    top: hp("1.9125683060109324%")
  },
  View_1_327: {
    width: wp("1.70316301703163%"),
    minWidth: wp("1.70316301703163%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.91240875912408%"),
    top: hp("2.4590163934426243%")
  },
  Text_1_327: {
    color: "rgba(78, 111, 102, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_328: {
    width: wp("5.59610705596107%"),
    minWidth: wp("5.59610705596107%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.10218978102189%"),
    top: hp("1.9125683060109324%")
  },
  ImageBackground_1_329: {
    width: wp("2.9197080291970803%"),
    height: hp("1.012295126263561%"),
    top: hp("3.0457668617123517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.49025694761252%")
  },
  ImageBackground_1_330: {
    width: wp("3.1630170316301705%"),
    minWidth: wp("3.1630170316301705%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.24574209245742%"),
    top: hp("4.918032786885242%")
  },
  View_1_331: {
    width: wp("8.75912408759124%"),
    minWidth: wp("8.75912408759124%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.05839416058394%"),
    top: hp("0.5464480874316919%")
  },
  Text_1_331: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_332: {
    width: wp("5.109489051094891%"),
    minWidth: wp("5.109489051094891%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.710462287104622%"),
    top: hp("0.8196721311475414%")
  },
  Text_1_332: {
    color: "rgba(113, 115, 104, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_333: {
    width: wp("41.3625304136253%"),
    minWidth: wp("41.3625304136253%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.05839416058394%"),
    top: hp("3.961748633879779%")
  },
  Text_1_333: {
    color: "rgba(94, 95, 93, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_334: {
    width: wp("0.9732360097323601%"),
    minWidth: wp("0.9732360097323601%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.27737226277372%"),
    top: hp("1.775956284152997%")
  },
  ImageBackground_1_335: {
    width: wp("1.70316301703163%"),
    height: hp("0.6830601092896175%"),
    top: hp("5.4644808743169335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.97566909975669%")
  },
  View_1_336: {
    width: wp("83.69829683698296%"),
    minWidth: wp("83.69829683698296%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.67639902676399%"),
    top: hp("14.207650273224054%")
  },
  ImageBackground_1_337: {
    width: wp("12.165450121654501%"),
    minWidth: wp("12.165450121654501%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_338: {
    width: wp("5.59610705596107%"),
    minWidth: wp("5.59610705596107%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.10218978102189%"),
    top: hp("1.9125683060109324%")
  },
  ImageBackground_1_339: {
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
  ImageBackground_1_340: {
    width: wp("2.9197080291970803%"),
    height: hp("1.012295126263561%"),
    top: hp("1.1331985557014121%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3880671665906306%")
  },
  ImageBackground_1_341: {
    width: wp("3.1630170316301705%"),
    minWidth: wp("3.1630170316301705%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.24574209245742%"),
    top: hp("4.918032786885242%")
  },
  View_1_342: {
    width: wp("12.165450121654501%"),
    minWidth: wp("12.165450121654501%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.05839416058394%"),
    top: hp("0.5464480874316919%")
  },
  Text_1_342: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_343: {
    width: wp("5.109489051094891%"),
    minWidth: wp("5.109489051094891%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.360097323600975%"),
    top: hp("0.8196721311475414%")
  },
  Text_1_343: {
    color: "rgba(113, 115, 104, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_344: {
    width: wp("28.953771289537713%"),
    minWidth: wp("28.953771289537713%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.05839416058394%"),
    top: hp("3.961748633879772%")
  },
  Text_1_344: {
    color: "rgba(94, 95, 93, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_345: {
    width: wp("0.9732360097323601%"),
    minWidth: wp("0.9732360097323601%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.92700729927007%"),
    top: hp("1.775956284152997%")
  },
  ImageBackground_1_346: {
    width: wp("1.70316301703163%"),
    height: hp("0.6830601092896175%"),
    top: hp("5.464480874316926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.97566909975669%")
  },
  View_1_347: {
    width: wp("83.69829683698296%"),
    minWidth: wp("83.69829683698296%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.67639902676399%"),
    top: hp("25.81967213114754%")
  },
  ImageBackground_1_348: {
    width: wp("12.165450121654501%"),
    minWidth: wp("12.165450121654501%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_349: {
    width: wp("5.59610705596107%"),
    minWidth: wp("5.59610705596107%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.10218978102189%"),
    top: hp("1.9125683060109395%")
  },
  ImageBackground_1_350: {
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
  ImageBackground_1_351: {
    width: wp("2.9197080291970803%"),
    height: hp("1.012295126263561%"),
    top: hp("1.1331985557014121%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3880671665906306%")
  },
  ImageBackground_1_352: {
    width: wp("3.1630170316301705%"),
    minWidth: wp("3.1630170316301705%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.24574209245742%"),
    top: hp("4.918032786885249%")
  },
  View_1_353: {
    width: wp("9.975669099756692%"),
    minWidth: wp("9.975669099756692%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.05839416058394%"),
    top: hp("0.546448087431699%")
  },
  Text_1_353: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_354: {
    width: wp("5.109489051094891%"),
    minWidth: wp("5.109489051094891%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.41362530413625%"),
    top: hp("0.8196721311475414%")
  },
  Text_1_354: {
    color: "rgba(113, 115, 104, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_355: {
    width: wp("37.22627737226277%"),
    minWidth: wp("37.22627737226277%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.05839416058394%"),
    top: hp("3.961748633879779%")
  },
  Text_1_355: {
    color: "rgba(94, 95, 93, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_356: {
    width: wp("0.9732360097323601%"),
    minWidth: wp("0.9732360097323601%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.980535279805355%"),
    top: hp("1.7759562841530112%")
  },
  ImageBackground_1_357: {
    width: wp("1.70316301703163%"),
    height: hp("0.6830601092896175%"),
    top: hp("5.464480874316948%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.97566909975669%")
  },
  ImageBackground_1_358: {
    width: wp("89.78102189781022%"),
    minWidth: wp("89.78102189781022%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.748633879781423%")
  },
  ImageBackground_1_359: {
    width: wp("89.78102189781022%"),
    minWidth: wp("89.78102189781022%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23.907103825136616%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
