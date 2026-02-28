"use client";
import WeekView from "@/components/calendar/WeekView";
import MonthView from "@/components/calendar/MonthView";
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";

export default function Calendar() {
    return (
        <>
            <Tabs aria-label="Tabs colors" color="danger" radius="full">
                <Tab key="month" title="Month">
                    <Card>
                        <CardBody>
                            <MonthView />
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="week" title="Week">
                    <Card>
                        <CardBody>
                            <WeekView />
                        </CardBody>
                    </Card>
                </Tab>
            </Tabs>
        </>
    );
}
