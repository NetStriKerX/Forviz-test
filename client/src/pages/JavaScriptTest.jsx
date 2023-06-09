import { data } from "../data/data.js";

export const checkAvailability = (roomId, startTime, endTime) => {
  const bookedRoom = data.filter(
    (room) =>
      room.roomId === roomId &&
      ((room.startTime <= startTime && room.endTime > startTime) ||
        (room.startTime < endTime && room.endTime >= endTime) ||
        (room.startTime >= startTime && room.endTime <= endTime))
  );

  return bookedRoom.length === 0;
};

export const getBookingsForWeek = (roomId, weekNo) => {
  let today = new Date("2019-09-28");
  let diff;
  if (weekNo === "today") {
    diff = { start: 0, end: 1 };
  } else if (weekNo === "this week") {
    diff = { start: 0, end: 7 };
  } else if (weekNo === "next week") {
    diff = { start: 7, end: 15 };
  }
  diff.start *= 60 * 60 * 24 * 1000;
  diff.end *= 60 * 60 * 24 * 1000;
  const bookedTime = data.filter((room) => {
    const startDate = new Date(room.startTime.split(" ")[0]);
    const endDate = new Date(room.endTime.split(" ")[0]);

    return (
      room.roomId === roomId &&
      ((startDate - today >= diff.start && startDate - today < diff.end) ||
        (endDate - today >= diff.start && endDate - today < diff.end) ||
        (startDate - today < diff.start && endDate - today > diff.end))
    );
  });
  return bookedTime;
};

getBookingsForWeek("A101", "today");

function JavaScriptTest() {
  return <div></div>;
}

export default JavaScriptTest;
