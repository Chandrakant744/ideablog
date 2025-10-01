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

type DashboardTabParamList = {
  SMC: undefined;
  Services: undefined;
  BuildersProject: undefined;
  Support: undefined;
};

const Tab = createBottomTabNavigator<DashboardTabParamList>();

// ----------------- SMC SCREEN -----------------
function SMCScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.smcContainer}>
        {/* Logo */}
        <Image
          source={require("../assets/images/logo.jpeg")}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Title */}
        <Text style={styles.title}>Introduction</Text>

        {/* Image on right with overlapping circle on left */}
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

        {/* Description */}
        <Text style={styles.paragraph}>
          Borcelle Medical is at the forefront of this transformation,
          focusing on innovative solutions to enhance patient care and outcomes.
        </Text>

        {/* Section 2: Healthcare Landscape */}
        <View style={styles.section}>
          <View style={styles.sectionTextContainer}>
            <Text
              style={styles.sectionTitle}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Healthcare Landscape
            </Text>
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
      </View>
    </ScrollView>
  );
}

// ----------------- OTHER SCREENS -----------------
function ServicesScreen() {
  return (
    <View style={styles.screen}>
      <Text>Services Feed</Text>
    </View>
  );
}

function SupportScreen() {
  return (
    <View style={styles.screen}>
      <Text>Support Feed</Text>
    </View>
  );
}

// ----------------- CUSTOM TAB BAR -----------------
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
              accessibilityRole="button"
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

// ----------------- MAIN DASHBOARD -----------------
export default function Dashboard() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen name="SMC" component={SMCScreen} />
      <Tab.Screen name="Services" component={ServicesScreen} />
      <Tab.Screen name="BuildersProject" component={LandingScreen} />
      <Tab.Screen name="Support" component={SupportScreen} />
    </Tab.Navigator>
  );
}

// ----------------- STYLES -----------------
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
    marginBottom: 15, // ↓ space below logo
    marginTop: 10,    // ↑ space above logo
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    color: "#333",
    marginBottom: 25, // ↓ more space below title
    marginTop: 5,
    textAlign: "left",
    marginLeft: 15,
  },

  imageRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 40,
    position: "relative",
  },
  rightImage: {
    width: 260,
    height: 160,
    borderRadius: 16,
    marginRight: 10,
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
    marginBottom: 30, // ↑ space before next section
    marginLeft: 15,
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
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
    flexWrap: "nowrap",
    marginLeft: 15,
    marginTop: 10, // ↓ spacing above Healthcare Landscape
  },
  sectionText: {
    fontSize: 14,
    color: "#333",
    textAlign: "left",
    lineHeight: 20,
    marginLeft: 15,
  },
  sectionImage: {
    width: 100,
    height: 150,
    borderRadius: 12,
    resizeMode: "cover",
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
});
