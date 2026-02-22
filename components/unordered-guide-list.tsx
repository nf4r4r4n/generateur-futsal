import { GuideList } from "@/constants/guide-list";
import { colors } from "@/constants/theme";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function UnorderedGuideList({ data }: { data: GuideList[] }) {
  const renderItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      <Text style={styles.bullet}>{"\u2022"}</Text>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  bullet: {
    marginRight: 5,
    fontSize: 18,
    color: colors.blue["800"],
  },
  itemText: {
    fontSize: 12,
    color: colors.blue["800"],
  },
});
