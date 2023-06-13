import { checkAvailability, getBookingsForWeek } from "./JavaScriptTest";
import { data } from "../data/data.js";
import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
function FrontEndTest() {
  const navigate = useNavigate();
  const param = useParams();
  const location = useLocation();
  const weekNo = param.query?.replace("week", " week");
  console.log(weekNo);
  const queryParams = new URLSearchParams(location.search);
  const roomId = queryParams.get("roomId");
  console.log(roomId);
  console.log(roomId, weekNo);
  const [schedule, setSchedule] = useState(getBookingsForWeek(roomId, weekNo));
  const [page, setPage] = useState("this week");
  const todaySchedule = getBookingsForWeek(roomId, "today");

  console.log(todaySchedule);
  console.log(schedule);

  useEffect(() => {
    setSchedule(getBookingsForWeek(roomId, page));
  }, [page]);

  return (
    <div className="w-full h-screen flex bg-gradient-to-tr from-[#91a2c6] to-[#bcbfc8] p-[5%]">
      <div className="w-2/5 bg-[#46529D] text-white pl-[5%] flex flex-col justify-start gap-10">
        <div className="h-[100px] bg-[#2EBAEE] text-5xl font-bold pl-6 pt-6">
          {roomId}
        </div>
        <p>Upcoming</p>
      </div>
      <div className="w-3/5 flex flex-col bg-white">
        {/* <Tabs className="" position="relative" variant="unstyled">
          <TabList className="h-[100px] bg-[#EFEEEC] shadow-lg">
            <Tab>THIS WEEK</Tab>
            <Tab>NEXT WEEK</Tab>
            <Tab>WHOLE MONTH</Tab>
          </TabList>

          <TabIndicator
            mt="-2px"
            height="3px"
            bg="#707FDD"
            borderRadius="1px"
            rounded="8px"
          />
        </Tabs> */}
        <div className="flex items-center h-[100px] bg-[#EFEEEC] shadow-lg">
          <label
            onClick={() => {
              setPage("this week");
              navigate("/3/" + "thisweek" + "?roomId=" + roomId);
            }}
            className="radio flex flex-col justify-between items-center px-4 text-center h-full"
          >
            <span
              className={`name h-[75%] flex justify-center items-end ${
                page === "this week" ? "text-black" : "text-gray-400"
              }`}
            >
              This Week
            </span>
            <div
              className={`bar h-0 w-[40px] border-2 rounded-lg ${
                page === "this week"
                  ? "border-[#707FDD] text-black"
                  : "border-transparent text-gray-400"
              }`}
            ></div>
          </label>
          <label
            onClick={() => {
              setPage("next week");
              navigate("/3/" + "nextweek" + "?roomId=" + roomId);
            }}
            className="radio flex flex-col justify-between items-center px-4 text-center h-full"
          >
            <span
              className={`name h-[75%] flex justify-center items-end ${
                page === "next week" ? "text-black" : "text-gray-400"
              }`}
            >
              Next Week
            </span>
            <div
              className={`bar h-0 w-[40px] border-2 rounded-lg ${
                page === "next week"
                  ? "border-[#707FDD] text-black"
                  : "border-transparent text-gray-400"
              }`}
            ></div>
          </label>

          <label
            onClick={() => {
              setPage("whole month");
              navigate("/3/" + "wholemonth" + "?roomId=" + roomId);
            }}
            className="radio flex flex-col justify-between items-center px-4 text-center h-full"
          >
            <span
              className={`name h-[75%] flex justify-center items-end ${
                page === "whole month" ? "text-black" : "text-gray-400"
              }`}
            >
              Whole Month
            </span>
            <div
              className={`bar h-0 w-[40px] border-2 rounded-lg ${
                page === "whole month"
                  ? "border-[#707FDD] text-black"
                  : "border-transparent text-gray-400"
              }`}
            ></div>
          </label>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default FrontEndTest;
