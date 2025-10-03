import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import LandingScreen from "./LandingScreen";
import ServiceScreen from "./ServiceScreen";

type DashboardTabParamList = {
  SMC: undefined;
  Services: undefined;
  BuildersProject: undefined;
  Support: undefined;
};

const Tab = createBottomTabNavigator();
function SMCScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Image
        source={require("../assets/images/logo.jpeg")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Introduction</Text>
      <View style={styles.imageRow}>
        <View style={{ flex: 1 }} />
        <Image
          source={require("../assets/images/doc2.jpeg")}
          style={styles.rightImage}
          resizeMode="cover"
        />
        <View style={styles.overlapCircle}>
          <Text style={styles.circleText}>100K+</Text>
          <Text style={styles.circleSubText}>Facilities</Text>
        </View>
      </View>

      <Text style={styles.paragraph}>
        Borcelle Medical is at the forefront of this transformation, focusing on
        innovative solutions to enhance patient care and outcomes.
      </Text>

      <View style={styles.section}>
        <View style={styles.sectionTextContainer}>
          <Text style={styles.sectionTitle}>Healthcare Landscape</Text>
          <Text style={styles.sectionText}>
            The healthcare landscape is evolving rapidly, with over 100,000
            healthcare facilities in the Borcelle.
          </Text>
        </View>
        <Image
          source={require("../assets/images/doc1.jpeg")}
          style={styles.sectionImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.pageContainer}>
        <Text style={styles.pageTitle}>Medical Overview</Text>
        <Text style={styles.pageText}>
          Founded in 2015, Borcelle Medical has served over 500,000 patients.
        </Text>

        <View style={styles.missionBox}>
          <Text style={styles.missionTitle}>Our Mission</Text>
          <Text style={styles.missionText}>
            To provide innovative, patient-centered healthcare solutions that
            improve lives.
          </Text>
        </View>
        <View style={styles.overviewRow}>
          <View style={styles.overviewText}>
            <Text style={styles.sectionTitle}>Key Services</Text>
            <Text style={styles.bullet}>• Telemedicine</Text>
            <Text style={styles.bullet}>• Personalized treatment</Text>
            <Text style={styles.bullet}>• Advanced diagnostic</Text>
          </View>

          <View style={{ position: "relative" }}>
            <Image
              source={require("../assets/images/doc3.jpeg")}
              style={styles.overviewImage}
            />
            <View style={styles.overviewCircle}>
              <Text style={styles.circleBig}>500K+</Text>
              <Text style={styles.circleSmall}>Patients</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.pageContainer}>
        <Text style={styles.pageTitle}>Innovative Solutions</Text>
        <Image
          source={require("../assets/images/doc4.jpeg")}
          style={styles.fullImage}
        />

        <View style={styles.cardsGrid}>
          <View style={styles.solutionCardGrid}>
            <Text style={styles.solutionTitle}>Precision Medicine</Text>
            <Text style={styles.solutionText}>
              Leveraging genetic data and advanced analytics to tailor
              treatments.
            </Text>
          </View>

          <View style={styles.solutionCardGrid}>
            <Text style={styles.solutionTitle}>Telemedicine</Text>
            <Text style={styles.solutionText}>
              Serving 50,000+ patients annually through virtual consultations.
            </Text>
          </View>

          <View style={styles.solutionCardGrid}>
            <Text style={styles.solutionTitle}>AI Diagnostics</Text>
            <Text style={styles.solutionText}>
              Implementing AI-driven tools that enhance diagnostic accuracy by
              30%.
            </Text>
          </View>

          <View style={styles.solutionCardGrid}>
            <Text style={styles.solutionTitle}>Wearable Technology</Text>
            <Text style={styles.solutionText}>
              Partnering with tech companies to monitor patient health in
              real-time.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.joinUsContainer}>
        <Text style={styles.joinTitle}>
          Join us in transforming healthcare!
        </Text>

        <Image
          source={require("../assets/images/doc2.jpeg")} 
          style={styles.joinImage}
          resizeMode="cover"
        />

        <View style={styles.contactContainer}>
          <Text style={styles.contactText}>📞 +123-456-7890</Text>
          <Text style={styles.contactText}>📧 contact@smcprojects.in</Text>
          <Text style={styles.contactText}>🌐 www.smcppl.com</Text>
        </View>
      </View>
    </ScrollView>
  );
}
function SupportScreen() {
  return <Text>Support Feed</Text>;
}
function MyTabBar({ state, descriptors, navigation }: any) {
  return (
    <SafeAreaView style={styles.tabBarContainer} edges={["bottom"]}>
      <View style={styles.tabRow}>
        {state.routes.map((route: any, index: number) => {
          const focused = state.index === index;

          const label = (() => {
            switch (route.name) {
              case "SMC":
                return "SMC";
              case "Services":
                return "Services";
              case "BuildersProject":
                return "Builders Project";
              case "Support":
                return "Support";
              default:
                return route.name;
            }
          })();

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!focused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={styles.tabItem}
              activeOpacity={0.7}
            >
              <Text
                numberOfLines={1}
                style={[
                  styles.tabLabel,
                  focused ? styles.tabLabelFocused : styles.tabLabelUnfocused,
                ]}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
export default function Dashboard() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen name="SMC" component={SMCScreen} />
      <Tab.Screen name="Services" component={ServiceScreen} />
      <Tab.Screen name="BuildersProject" component={LandingScreen} />
      <Tab.Screen name="Support" component={SupportScreen} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  smcContainer: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    width: 50,
    height: 50,
    alignSelf: "flex-start",
    marginBottom: 15,
    marginTop: 30,
    marginLeft:20
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    color: "#333",
    marginBottom: 25,
    marginTop: 10,
    textAlign: "left",
    marginLeft: 30,
  },
  imageRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 40,
    position: "relative",
  },
  rightImage: {
    width: 280,
    height: 160,
    borderRadius: 16,
    marginRight: 30,
  },
  overlapCircle: {
    position: "absolute",
    left: 10,
    top: 35,
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#2D9CDB",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  circleText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 22,
  },
  circleSubText: {
    fontSize: 12,
    color: "#fff",
    textAlign: "center",
    marginTop: -4,
  },
  paragraph: {
    fontSize: 14,
    color: "#444",
    textAlign: "left",
    lineHeight: 24,
    marginBottom: 30,
    marginLeft: 20,
  },
  section: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  sectionTextContainer: {
    flex: 3,
    paddingRight: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
    marginLeft: 26,
    marginTop: 20,
  },
  sectionText: {
    fontSize: 14,
    color: "#333",
    textAlign: "left",
    lineHeight: 20,
    marginLeft: 26,
  },
  sectionImage: {
    width: 100,
    height: 150,
    borderRadius: 12,
    marginRight:40
  },
  pageContainer: {
    padding: 20,
    backgroundColor: "fff",
    marginBottom: 25,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 15,
    color: "#222",
  },
  fullImage: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    marginBottom: 15,
  },
  pageText: {
    fontSize: 15,
    color: "#333",
    lineHeight: 22,
  },
  missionBox: {
    backgroundColor: "#FFA500",
    padding: 15,
    borderRadius: 12,
    marginTop: 15,
    marginBottom: 15,
  },
  missionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 5,
  },
  missionText: {
    fontSize: 14,
    color: "#fff",
    lineHeight: 20,
  },
  circleCard: {
    alignItems: "center",
    marginVertical: 20,
  },
  circleBig: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
  circleSmall: {
    fontSize: 14,
    color: "#fff",
  },
  bullet: {
    fontSize: 14,
    color: "#333",
    marginVertical: 3,
    marginLeft: 15,
  },
  overviewRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  overviewText: {
    flex: 1,
    paddingRight: 10,
  },
  overviewImage: {
    width: 140,
    height: 160,
    borderRadius: 12,
    marginTop:20
  },
  overviewCircle: {
    position: "absolute",
    left: -50,
    bottom: 110,
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#2D9CDB",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  cardsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 15,
  },
  solutionCardGrid: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  solutionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6,
  },
  solutionText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
  tabBarContainer: {
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10,
  },
  tabRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  tabItem: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  tabLabel: {
    fontWeight: "bold",
    textAlign: "center",
  },
  tabLabelFocused: {
    color: "#000",
    fontSize: 13,
  },
  tabLabelUnfocused: {
    color: "#666",
    fontSize: 10,
  },
  joinUsContainer: {
    padding: 20,
    alignItems: "center",
    marginBottom: 40,
  },
  joinTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#222",
    textAlign: "center",
    marginBottom: 20,
  },
  joinImage: {
    width: "100%",
    height: 220,
    borderRadius: 16,
    marginBottom: 20,
  },
  contactContainer: {
    alignItems: "center",
  },
  contactText: {
    fontSize: 15,
    color: "#333",
    marginVertical: 4,
  },
});