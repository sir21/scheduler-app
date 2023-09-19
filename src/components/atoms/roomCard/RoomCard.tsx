import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { RoomAvailableStatus } from "../../../util/common";
import Colors from "../../../util/constants/colors";

const RoomCard = ({ name, status, level, capacity }: RoomCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.rowContainer}>
        <View>
          <Text variant="titleMedium">{name}</Text>
        </View>
        <View>
          <Text
            variant="bodyMedium"
            style={[
              styles.statusText,
              status === "Available"
                ? styles.statusAvailable
                : styles.statusNotAvailable,
            ]}
          >
            {status}
          </Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View>
          <Text variant="bodyMedium">{`Level ${level}`}</Text>
        </View>
        <View>
          <Text variant="bodyMedium">{`${capacity} Pax`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    height: 72,
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    backgroundColor: Colors.lightBackground,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 2,
  },
  statusText: {
    fontStyle: "italic",
  },
  statusAvailable: {
    color: Colors.successColor,
  },
  statusNotAvailable: {
    color: Colors.secondary,
  },
});

type RoomCardProps = {
  name: string;
  status: RoomAvailableStatus;
  level: number;
  capacity: number;
};

export default RoomCard;
