import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  cover: {
    height: 270,
    width: "100%",
    resizeMode: "cover",
  },
  profilContainer: {
    flex: 1,
    alignItems: "center",
  },
  profile: {
    height: 155,
    width: 155,
    borderRadius: 155 / 2,
    borderColor: Colors.black,
    borderWidth: 2,
    resizeMode: "cover",
    marginTop: -90,
  },
  menuText: {
    fontFamily: "Regular",
    color: Colors.gray,
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 26,
  },
  menuWrapper: {
    marginTop: 20, // Ganti "SIZES.xlarge" dengan nilai yang diperlukan
    width: "100%", // Ubah sesuai kebutuhan
    backgroundColor: Colors.lightWhite, // Perhatikan penulisan warna
    borderRadius: 12, // Perhatikan penulisan borderRadius
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30, // Perhatikan penulisan 'paddingHorizontal'
    borderColor: Colors.grey, // Ganti 'colors.grey' dengan 'Colors.grey'
  },
});

export default style;
