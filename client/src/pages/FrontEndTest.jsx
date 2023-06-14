import { checkAvailability, getBookingsForWeek } from "./JavaScriptTest";
import { data } from "../data/data.js";
import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
function FrontEndTest() {
  const navigate = useNavigate();
  const param = useParams();
  const location = useLocation();
  const weekNo = param.query?.replace("week", " week");
  console.log(weekNo);
  const queryParams = new URLSearchParams(location.search);
  const [roomId, setRoomId] = useState(queryParams.get("roomId"));
  // console.log(roomId);
  // console.log(roomId, weekNo);
  const [schedule, setSchedule] = useState(getBookingsForWeek(roomId, weekNo));
  const [page, setPage] = useState("this week");
  const todaySchedule = getBookingsForWeek(roomId, "today").sort(
    (a, b) => new Date(a.startTime) - new Date(b.startTime)
  );

  const today = "2019-09-28 13:00:00";
  const todayArr = new Date(today)
    .toDateString("default", { weekday: "long" })
    .split(" ");
  const options = { weekday: "long" };
  const dayOfWeek = new Intl.DateTimeFormat("default", options).format(
    new Date(today)
  );

  console.log(dayOfWeek);
  console.log(todaySchedule);
  console.log(schedule);
  console.log(todayArr);

  useEffect(() => {
    navigate("/3/" + param.query + "?roomId=" + roomId);
    navigate("/3/" + page.split(" ").join("") + "?roomId=" + roomId);
    setSchedule(getBookingsForWeek(roomId, page));
  }, [page, roomId]);

  return (
    <>
      <div className="flex justify-center gap-4">
        <h1>Select Room</h1>
        <select
          className="px-2 border-2 rounded-md border-black outline-none"
          value={roomId}
          placeholder="Select Room"
          onChange={(e) => {
            setRoomId(e.target.value);
          }}
        >
          <option value="A101">A101</option>
          <option value="A102">A102</option>
          <option value="Auditorium">Auditorium</option>
        </select>
      </div>

      <div className="w-full h-screen flex bg-gradient-to-tr from-[#91a2c6] to-[#bcbfc8] p-[5%]">
        <div className="w-2/5 bg-[#46529D] text-white pl-[5%] flex flex-col justify-start gap-8">
          <div className="h-[100px] bg-[#2EBAEE] text-5xl font-bold pl-6 pt-6">
            {roomId}
          </div>
          <p>Upcoming</p>
          <div className="flex flex-col text-5xl gap-4 py-5">
            <p className="text-[#ffffff7d]">{dayOfWeek}</p>
            <p>
              {todayArr[2]} <span>{todayArr[1]}</span>
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {todaySchedule.map((item, index) => {
              return (
                <div className="flex flex-col">
                  <div className="text-xs text-[#ffffff7d]">
                    {new Date(item.startTime).getHours() +
                      ":" +
                      new Date(item.startTime)
                        .getMinutes()
                        .toString()
                        .padStart(2, "0") +
                      " - " +
                      new Date(item.endTime).getHours() +
                      ":" +
                      new Date(item.endTime)
                        .getMinutes()
                        .toString()
                        .padStart(2, "0")}
                  </div>
                  <div>{item.title}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-3/5 flex flex-col bg-white">
          <div className="flex items-center h-[100px] w-full bg-[#EFEEEC] shadow-lg">
            <label
              onClick={() => {
                setPage("this week");
              }}
              className="radio flex flex-col justify-between items-center px-4 text-center h-[100px]"
            >
              <span
                className={`name h-[75%] flex justify-center items-end ${
                  page === "this week" ? "text-black" : "text-gray-500"
                }`}
              >
                This Week
              </span>
              <div
                className={`bar h-0 w-[40px] border-2 rounded-lg ${
                  page === "this week"
                    ? "border-[#707FDD]"
                    : "border-transparent"
                }`}
              ></div>
            </label>
            <label
              onClick={() => {
                setPage("next week");
              }}
              className="radio flex flex-col justify-between items-center px-4 text-center h-[100px]"
            >
              <span
                className={`name h-[75%] flex justify-center items-end ${
                  page === "next week" ? "text-black" : "text-gray-500"
                }`}
              >
                Next Week
              </span>
              <div
                className={`bar h-0 w-[40px] border-2 rounded-lg ${
                  page === "next week"
                    ? "border-[#707FDD]"
                    : "border-transparent"
                }`}
              ></div>
            </label>

            <label
              onClick={() => {
                setPage("whole month");
              }}
              className="radio flex flex-col justify-between items-center px-4 text-center h-[100px]"
            >
              <span
                className={`name h-[75%] flex justify-center items-end ${
                  page === "whole month" ? "text-black" : "text-gray-500"
                }`}
              >
                Whole Month
              </span>
              <div
                className={`bar h-0 w-[40px] border-2 rounded-lg ${
                  page === "whole month"
                    ? "border-[#707FDD]"
                    : "border-transparent"
                }`}
              ></div>
            </label>
          </div>
          <div className="relative bg-red-300 w-full h-full">
            <div className="absolute border-l h-full ml-[8%] z-10"></div>
            <div className="absolute z-20">
              {schedule
                .sort((a, b) => new Date(a.startTime) - new Date(b.startTime))
                .map((item, index) => {
                  return (
                    <div className="flex flex-col">
                      <div className="text-xs text-[#ffffff7d]">
                        {new Date(item.startTime).getHours() +
                          ":" +
                          new Date(item.startTime)
                            .getMinutes()
                            .toString()
                            .padStart(2, "0") +
                          " - " +
                          new Date(item.endTime).getHours() +
                          ":" +
                          new Date(item.endTime)
                            .getMinutes()
                            .toString()
                            .padStart(2, "0")}
                      </div>
                      <div>{item.title}</div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FrontEndTest;
