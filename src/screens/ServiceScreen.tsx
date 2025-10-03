import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const ServiceScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.section}>
        <Image
          source={require("../assets/images/logo.jpeg")} 
          style={styles.logo}
        />
        <Text style={styles.title}>Community{"\n"}Impact</Text>

        <View style={styles.card}>
          <Image
            source={require("../assets/images/doc3.jpeg")} 
            style={styles.image}
          />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>10K+{"\n"}Members</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.textBlock}>
            <Text style={styles.subtitle}>Community Members</Text>
            <Text style={styles.paragraph}>
              Borcelle Medical has conducted over 200 health fairs, providing free
              screenings to 10,000+ community members.
            </Text>
          </View>
          <Image
            source={require("../assets/images/doc2.jpeg")} 
            style={styles.smallImage}
          />
        </View>
      </View>

      
      <View style={styles.section}>
        <Text style={styles.title}>Patient Success Stories</Text>

        <View style={[styles.caseBox, { backgroundColor: "#FFA44A" }]}>
          <Text style={styles.caseTitle}>Case Study 1</Text>
          <Text style={styles.caseText}>
            A patient with diabetes improved their health metrics by 25% through
            our personalized care program.
          </Text>
        </View>

        <View style={[styles.caseBox, { backgroundColor: "#4285F4" }]}>
          <Text style={styles.caseTitle}>Case Study 2</Text>
          <Text style={styles.caseText}>
            Telemedicine services reduced hospital readmission rates by 15% for
            heart failure patients.
          </Text>
        </View>
        <Image
          source={require("../assets/images/doc2.jpeg")} 
          style={[styles.image, { marginLeft: 10,width: 310,height: 150,}]}
        />
      </View>
    </ScrollView>
  );
};

export default ServiceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  section: {
    marginBottom: 32,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginBottom: 40,
    marginTop: 30,
  },
  title: {
    fontSize: 35,
    fontWeight: "700",
    marginBottom: 30,
    marginTop: -20,
    textAlign: "center",
  },
  card: {
    position: "relative",
    marginBottom: 16,
  },
  image: {
    width: 260,
    height: 160,
    borderRadius: 16,
    marginRight: 50,
  },
  smallImage: {
    width: 100,
    height: 150,
    borderRadius: 12,
    marginTop: 12,
    marginLeft: 10,
  },
  badge: {
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "#4285F4",
    borderRadius: 50,
    padding: 12,
    alignItems: "center",
    width: 90,
    height: 90,
  },
  badgeText: {
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
    fontSize: 15,
    lineHeight: 20,
    marginTop: 13,
  },
  textBlock: {
    flex: 1,
    marginTop: 12,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
    marginLeft: 15,
    marginTop: 10,
  },
  paragraph: {
    fontSize: 15,
    color: "#333",
    marginBottom: 8,
    marginLeft: 15,
  },
  caseBox: {
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    width: 310,
    height: 110,
    marginLeft: 10,
  },
  caseTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  caseText: {
    color: "#fff",
    fontSize: 14,
  },
  // 
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 10,
  },
});
