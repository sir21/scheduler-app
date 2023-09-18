import { View } from "react-native";
import { Text } from "react-native-paper";
import { RoomAvailableStatus } from "../../../util/common";

const RoomCard = ({ name, status, level, capacity }: RoomCardProps) => {
  return (
    <View>
      <View>
        <View>
          <Text>{name}</Text>
        </View>
        <View>
          <Text>{status}</Text>
        </View>
      </View>
      <View>
        <View>
          <Text>{`Level ${level}`}</Text>
        </View>
        <View>
          <Text>{`${capacity} Pax`}</Text>
        </View>
      </View>
    </View>
  );
};

type RoomCardProps = {
  name: string;
  status: RoomAvailableStatus;
  level: string;
  capacity: number;
};

export default RoomCard;
