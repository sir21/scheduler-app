import { FlatList, Modal, StyleSheet, Text, View } from "react-native";
import Colors from "../../../util/constants/colors";
import SortButton from "../../atoms/sortButton/SortButton";
import { useEffect, useState } from "react";
import Sort from "../../molecules/sort/Sort";
import { SortOptionsType } from "../../../util/common/sortOptionType";
import { RoomAvailability } from "../../../util/common";
import { RoomAvailabilityForTimeslot } from "../../../util/common/roomAvailabilityForTimeslot";
import RoomCard from "../../atoms/roomCard/RoomCard";

const RoomList = ({
  availabilities,
  selectedDate,
  timeslot,
}: RoomListProps) => {
  /**
   * CONST
   */
  const [showModal, setShowModal] = useState(false);
  const [checked, setChecked] = useState<SortOptionsType>({
    location: false,
    capacity: false,
    availability: false,
  });
  const [roomList, setRoomList] = useState<RoomAvailabilityForTimeslot[]>([]);

  /**
   * HELPER FUNCTIONS
   */
  const handleSortPress = () => {
    setShowModal(true);
  };

  const handleSortModalClose = () => {
    setShowModal(false);
  };

  const handleApplySort = (sorts: SortOptionsType) => {
    handleSortModalClose();
    setChecked(sorts);
  };

  const handleResetSort = () => {
    handleSortModalClose();
    setChecked({ location: false, capacity: false, availability: false });
  };

  const handleRoomAvailability = () => {};

  useEffect(() => {
    handleRoomAvailability();
  }, [availabilities, selectedDate, timeslot, checked]);

  /**
   * RENDER FUNCTIONS
   */
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View>
            <Text>Rooms</Text>
          </View>
          <View>
            <SortButton onPress={handleSortPress} />
          </View>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={roomList}
            renderItem={({ item }) => {
              return (
                <RoomCard
                  name={item.name}
                  capacity={item.capacity}
                  status={item.status}
                  level={item.level}
                />
              );
            }}
          />
        </View>
      </View>
      <Modal
        animationType="slide"
        visible={showModal}
        onDismiss={handleSortModalClose}
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Sort
              sorts={checked}
              onApply={handleApplySort}
              onReset={handleResetSort}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

type RoomListProps = {
  availabilities: RoomAvailability[];
  selectedDate: Date;
  timeslot: string;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    width: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    flex: 1,
    height: 20,
    justifyContent: "space-between",
  },
  listContainer: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    marginTop: 20,
    height: "70%",
    width: "100%",
    backgroundColor: Colors.background,
    borderRadius: 20,
    paddingHorizontal: 35,
    paddingVertical: 10,
    alignItems: "center",
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default RoomList;
