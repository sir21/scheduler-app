import { StatusBar, StyleSheet, View } from "react-native";
import FilterSection from "../../components/organisms/filterSection/FilterSection";

const Home = () => {
  return (
      <View style={styles.container}>
        {/* Filter section */}
        <FilterSection />
        {/*  Room availability*/}
        <View style={styles.listContainer}></View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginTop: 50,
  },
  listContainer: {
    flex: 1,
  },
});

export default Home;
