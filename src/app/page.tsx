"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid'
import { useState } from "react";


export default function Home() {
  const date = new Date();
  date.setFullYear(2009);
  // fetch output.json
  const [output, setOutput] = useState({});
  fetch("./output.json")
    .then((response) => response.json())
    .then((data) => {
      setOutput(data);
    });

    const [info, setInfo] = useState({
      title: "",
      start:"",
      id : ""
    });

  return (
    <main className="p-24 h-screen bg-[#252525] flex flex-col text-center gap-3">
      <p className="text-3xl">NICOCALENDER</p>
      <div className="flex">
        <img src={`${info.title ? `https://nicovideo.cdn.nimg.jp/thumbnails/${info.id.slice(2)}/${info.id.slice(2)}` : "None"}`} alt="" />
        <div className="flex flex-col gap-3">
          <p className="text-2xl">{info.title}</p>
          <p>{info.start}</p>
        </div>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin, dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height={"auto"}
        initialDate={"2009-06-01"}
        validRange={{
          start: "2009-01-01",
          end: "2009-12-31",
        }}
        now={date}
        events={output}
        eventTimeFormat={ {hour: 'numeric', minute: '2-digit',omitZeroMinute:false,meridiem:"short"} }
        slotLabelFormat={{
          hour: 'numeric',
          minute: '2-digit', 
          omitZeroMinute: false,
          meridiem: "short",
        }}
        
        expandRows={true}
        displayEventEnd={false}
        displayEventTime={false}
        eventClick={(info) => {
          setInfo({
            title: info.event.title,
            start: info.event.start?.toString() || "",
            id: info.event.id
          });
        }}
      />
      <hr className="bg-slate-200/40" />
      <p className="text-base">
        NICOSEARCHはニコニコ動画®︎公式のものではありません。
      </p>
    </main>
  );
}
