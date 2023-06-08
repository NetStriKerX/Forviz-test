import { data } from "../data/data.js";

function JavaScriptTest() {
  console.log(data);

  const checkAvailability = (roomId, startTime, endTime) => {
    const thisRoom = data.filter(
      (room) =>
        room.roomId === roomId &&
        ((room.startTime <= startTime && room.endTime >= startTime) ||
          (room.startTime <= endTime && room.endTime >= endTime) ||
          (room.startTime >= startTime && room.endTime <= endTime))
    );
    console.log(thisRoom);

    return thisRoom.length === 0;
  };

  console.log(
    checkAvailability("A102", "2019-09-28 09:00:00", "2019-09-30 10:00:00")
  );

  const getBookingsForWeek = (roomId, weekNo) => {
    return;
  };

  return <div></div>;
}

export default JavaScriptTest;
