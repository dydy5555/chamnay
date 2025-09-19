import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

export default function WeekView() {
  return <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridWeek" />;
}
