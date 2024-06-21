"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function Home() {
  return (
    <main className="p-24 h-screen bg-[#252525] flex flex-col text-center gap-3">
      <p className="text-3xl">NICOCALENDER</p>
      <FullCalendar
        plugins={[dayGridPlugin, dayGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay",
        }}
        height={"75%"}
        initialDate={"2009-06-01"}
        validRange={{
          start: "2009-01-01",
          end: "2009-12-31",
        }}
      />
      <hr className="bg-slate-200/40" />
      <p className="text-base">
        NICOSEARCHはニコニコ動画®︎公式のものではありません。
      </p>
    </main>
  );
}
