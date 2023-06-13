import { checkAvailability, getBookingsForWeek } from "./JavaScriptTest";
import { data } from "../data/data.js";
import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
function FrontEndTest() {
  const param = useParams();
  const location = useLocation();
  const weekNo = param.query?.replace("week", " week");
  console.log(weekNo);
  const queryParams = new URLSearchParams(location.search);
  const roomId = queryParams.get("roomId");
  console.log(roomId);

  const [schedule, setSchedule] = useState(getBookingsForWeek(roomId, weekNo));
  const [page, setPage] = useState("this week");
  const todaySchedule = getBookingsForWeek(roomId, "today");

  console.log(todaySchedule);
  console.log(schedule);

  return (
    <div className="w-full h-screen flex bg-gradient-to-tr from-[rgba(145,162,198,1)] to-[rgba(188,191,200,1)] p-[5%]">
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
            onClick={() => setPage("this week")}
            className="radio flex flex-col justify-between items-center px-4 text-center h-full"
          >
            <input
              className="hidden"
              type="radio"
              name="radio"
              id="this-week"
              checked={page === "this week"}
              readOnly
            />
            <span className="name h-[75%] flex justify-center items-end">
              This Week
            </span>
            <div className="bar h-0 w-[40px] border-2 border-transparent rounded-lg"></div>
          </label>
          <label
            onClick={() => setPage("next week")}
            className="radio flex flex-col justify-between items-center px-4 text-center h-full"
          >
            <input className="hidden" type="radio" name="radio" />
            <span className="name h-[75%] flex justify-center items-end">
              Next Week
            </span>
            <div className="bar h-0 w-[40px] border-2 border-transparent rounded-lg"></div>
          </label>

          <label
            onClick={() => setPage("whole month")}
            className="radio flex flex-col justify-between items-center px-4 text-center h-full"
          >
            <input className="hidden" type="radio" name="radio" />
            <span className="name h-[75%] flex justify-center items-end">
              Whole Month
            </span>
            <div className="bar h-0 w-[40px] border-2 border-transparent rounded-lg"></div>
          </label>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default FrontEndTest;
