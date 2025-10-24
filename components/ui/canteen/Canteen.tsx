import { DATA } from "@/data/data"
import { SectionList, StyleSheet, Text } from "react-native"
import { MenuItem } from "../menu/Menu"

const Canteen = () => {
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item.title + index}
      renderItem={({ item }) => (
        <MenuItem data={item} />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
      contentContainerStyle={styles.container}
    />
  )
}
export default Canteen

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    fontSize: 28,
    backgroundColor: "#fff",
    marginTop: 20,
    paddingVertical: 10,
    textAlign: "center",
    borderBottomWidth: 2,
    borderColor: "#ddd",
  },
});