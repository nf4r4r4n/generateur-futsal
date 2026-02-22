import { UnorderedGuideList } from "@/components/unordered-guide-list";
import { GUIDE_LIST } from "@/constants/guide-list";
import { colors } from "@/constants/theme";
import Octicons from "@expo/vector-icons/Octicons";
import { StyleSheet, Text, TextStyle, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={headerStyles.iconContainer}>
        <View style={headerStyles.icon}>
          <Octicons name="people" size={35} color="#fff" />
        </View>
      </View>
      <Text style={headerStyles.title}>Composition d'Équipe</Text>
      <Text style={descriptionStyle}>
        Générez automatiquement vos compositions pour le foot en salle
      </Text>
      <View style={guideStyles.container}>
        <Text style={guideStyles.title}>Comment ça marche ?</Text>
        <UnorderedGuideList data={GUIDE_LIST} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingInline: 20,
    paddingTop: 50,
    backgroundColor: "#fff",
  },
});

// HEADER
const headerStyles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    backgroundColor: colors.green["500"],
    paddingInline: 15,
    paddingBlock: 14,
    borderRadius: 40,
    marginBottom: 20,
  },
  title: {
    color: colors.gray["700"],
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 20,
  },
});

// DESCRIPTION
const descriptionStyle = {
  textAlign: "center",
  fontSize: 14,
  color: colors.gray["600"],
  marginBottom: 20,
} as TextStyle;

// GUIDE
const guideStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue["50"],
    borderWidth: 0.5,
    borderRadius: 12,
    borderColor: colors.blue["200"],
    padding: 10,
  },
  title: {
    fontWeight: "500",
    color: colors.blue["900"],
    marginBottom: 5,
  },
});
