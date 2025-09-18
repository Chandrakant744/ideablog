import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
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


function SMCScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>SMC Feed</Text>
    </View>
  );
}
function ServicesScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Services Feed</Text>
    </View>
  );
}
function SupportScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Support Feed</Text>
    </View>
  );
}


function MyTabBar({ state, descriptors, navigation }: any) {
  const { width } = Dimensions.get("window");
  const tabWidth = width / state.routes.length;

  return (
    <SafeAreaView style={styles.tabBarContainer} edges={["bottom"]}>
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
            style={[styles.tabItem, { width: tabWidth }]}
            activeOpacity={0.7}
          >
            <Text
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
      <Tab.Screen name="Services" component={ServicesScreen} />
      <Tab.Screen name="BuildersProject" component={LandingScreen} />
      <Tab.Screen name="Support" component={SupportScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 10,
    paddingBottom: 10,
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",  
  },
  tabLabel: {
    textAlign: "center",
    fontWeight: "bold",
  },
  tabLabelFocused: {
    color: "#000",
    fontSize: 14,
  },
  tabLabelUnfocused: {
    color: "#666",
    fontSize: 14,
  },
});
