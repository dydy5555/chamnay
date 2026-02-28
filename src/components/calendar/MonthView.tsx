"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
export default function MonthView() {
    return (
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    );
}
