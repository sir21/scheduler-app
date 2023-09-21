import { FlatList, Modal, StyleSheet, View } from "react-native";
import Colors from "../../../util/constants/colors";
import SortButton from "../../atoms/sortButton/SortButton";
import { useEffect, useState } from "react";
import Sort from "../../molecules/sort/Sort";
import { SortOptionsType } from "../../../util/common/sortOptionType";
import { RoomAvailability, Timeslot } from "../../../util/common";
import { RoomAvailabilityForTimeslot } from "../../../util/common/roomAvailabilityForTimeslot";
import RoomCard from "../../atoms/roomCard/RoomCard";
import { Text } from "react-native-paper";

const RoomList = ({
  availabilities,
  selectedDate,
  selectedTimeslot,
}: RoomListProps) => {
  /**
   * CONST
   */
  const [showModal, setShowModal] = useState(false);
  const [checked, setChecked] = useState<SortOptionsType>({
    location: true,
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
    setChecked({ location: true, capacity: false, availability: false });
  };

  const sortRoomsByLevel = (
    a: RoomAvailabilityForTimeslot,
    b: RoomAvailabilityForTimeslot
  ) => {
    if (a.level < b.level) return -1;
    if (a.level > b.level) return 1;
    return 0;
  };

  const sortRoomsByCapacity = (
    a: RoomAvailabilityForTimeslot,
    b: RoomAvailabilityForTimeslot
  ) => {
    if (a.capacity < b.capacity) return -1;
    if (a.capacity > b.capacity) return 1;
    return 0;
  };

  const sortRoomsByAvailability = (
    a: RoomAvailabilityForTimeslot,
    b: RoomAvailabilityForTimeslot
  ) => {
    if (a.status === "Available" && b.status === "Not Available") return -1;
    if (b.status === "Available" && a.status === "Not Available") return 1;
    return 0;
  };

  const handleRoomAvailability = () => {
    if (!availabilities) {
      setRoomList([]);
    }
    const time: Timeslot = selectedTimeslot.split(" ")[0] as Timeslot;
    let rooms: RoomAvailabilityForTimeslot[] = availabilities.map((item) => {
      return {
        name: item.name,
        level: +item.level,
        capacity: +item.capacity,
        status: item.availability[time] === "1" ? "Available" : "Not Available",
      };
    });

    if (checked.location) {
      rooms = rooms.sort((a, b) => sortRoomsByLevel(a, b));
    }
    if (checked.capacity) {
      rooms = rooms.sort((a, b) => sortRoomsByCapacity(a, b));
    }
    if (checked.availability) {
      rooms = rooms.sort((a, b) => sortRoomsByAvailability(a, b));
    }

    setRoomList(rooms);
  };

  useEffect(() => {
    handleRoomAvailability();
  }, [availabilities, selectedDate, selectedTimeslot, checked]);

  /**
   * RENDER FUNCTIONS
   */
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.secondaryText} variant="bodySmall">
              Rooms
            </Text>
          </View>
          <View>
            <SortButton onPress={handleSortPress} />
          </View>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={roomList}
            contentContainerStyle={{ flexGrow: 1 }}
            keyExtractor={(item) => item.name}
            ListEmptyComponent={
              <View style={styles.errorContainer}>
                <Text>Room list unavailable</Text>
              </View>
            }
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
      {showModal && (
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
      )}
    </>
  );
};

type RoomListProps = {
  availabilities: RoomAvailability[];
  selectedDate: Date;
  selectedTimeslot: string;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    paddingLeft: 4,
    width: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    height: 20,
    justifyContent: "space-between",
    marginBottom: 4,
  },
  listContainer: {
    flex: 1,
  },
  secondaryText: {
    color: Colors.secondary,
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
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RoomList;
