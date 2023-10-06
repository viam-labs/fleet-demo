import React, { FC } from "react";
import MachineList from "./MachineList";
import { LineChart, Card, Title } from "@tremor/react";

//@ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const machines = [
  {
    name: "Walton",
    softwareVersion: "v1.2.3",
    status: "Online",
    lastActive: "45 minutes ago",
    dateTime: "2023-01-23T11:00",
  },
  {
    name: "Marcus",
    softwareVersion: "v1.2.1",
    status: "Offline",
    lastActive: "3 hours ago",
    dateTime: "2023-01-23T09:00",
  },
  {
    name: "Jenny",
    softwareVersion: "v1.2.0",
    status: "Online",
    lastActive: "12 hours ago",
    dateTime: "2023-01-23T00:00",
  },
  {
    name: "Silver",
    softwareVersion: "v1.1.9",
    status: "Online",
    lastActive: "1 day ago",
    dateTime: "2023-01-22T13:00",
  },
  {
    name: "Apollo",
    softwareVersion: "v1.2.5",
    status: "Offline",
    lastActive: "2 days ago",
    dateTime: "2023-01-21T10:34",
  },
  {
    name: "Zeus",
    softwareVersion: "v1.3.0",
    status: "Online",
    lastActive: "2 days ago",
    dateTime: "2023-01-21T08:54",
  },
  {
    name: "Athena",
    softwareVersion: "v1.2.8",
    status: "Online",
    lastActive: "5 days ago",
    dateTime: "2023-01-18T09:31",
  },
  {
    name: "Hera",
    softwareVersion: "v1.1.5",
    status: "Offline",
    lastActive: "1 week ago",
    dateTime: "2023-01-16T11:45",
  },
  {
    name: "Poseidon",
    softwareVersion: "v1.0.7",
    status: "Online",
    lastActive: "1 week ago",
    dateTime: "2023-01-15T19:20",
  },
  {
    name: "Hermes",
    softwareVersion: "v1.3.1",
    status: "Offline",
    lastActive: "2 weeks ago",
    dateTime: "2023-01-09T12:45",
  },
  {
    name: "Ares",
    softwareVersion: "v1.1.1",
    status: "Online",
    lastActive: "2 weeks ago",
    dateTime: "2023-01-09T08:30",
  },
  {
    name: "Hestia",
    softwareVersion: "v1.0.5",
    status: "Offline",
    lastActive: "3 weeks ago",
    dateTime: "2023-01-02T17:25",
  },
  {
    name: "Demeter",
    softwareVersion: "v1.2.6",
    status: "Online",
    lastActive: "1 month ago",
    dateTime: "2022-12-25T11:15",
  },
  {
    name: "Dionysus",
    softwareVersion: "v1.0.9",
    status: "Offline",
    lastActive: "1 month ago",
    dateTime: "2022-12-24T14:05",
  },
  {
    name: "Artemis",
    softwareVersion: "v1.1.0",
    status: "Online",
    lastActive: "1 month ago",
    dateTime: "2022-12-22T10:00",
  },
];
interface FleetOverviewProps {
  // Define props and propTypes here
}
const dataFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}%`;

const FleetOverview: FC<FleetOverviewProps> = (props) => {
  const stats = [
    { name: "Number of machines", value: machines.length },
    { name: "Average deploy time", value: "3.65", unit: "mins" },
    { name: "Data Uploaded (24h)", value: "12.4 GB" },
    { name: "Uptime rate", value: "98.5%" },
  ];
  const chartdata = [
    {
      year: 1970,
      "Export Growth Rate": 2.04,
      "Import Growth Rate": 1.53,
    },
    {
      year: 1971,
      "Export Growth Rate": 1.96,
      "Import Growth Rate": 1.58,
    },
    {
      year: 1972,
      "Export Growth Rate": 1.96,
      "Import Growth Rate": 1.61,
    },
    {
      year: 1973,
      "Export Growth Rate": 1.93,
      "Import Growth Rate": 1.61,
    },
    {
      year: 1974,
      "Export Growth Rate": 1.88,
      "Import Growth Rate": 1.67,
    },
    //...
  ];

  return (
    <>
      <header>
        {/* Heading */}
        <div className="flex flex-col items-start justify-between gap-x-8 gap-y-4 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <div className="flex items-center gap-x-3">
              <h1 className="text-2xl flex gap-x-3 leading-7">
                <span className="font-semibold text-gray-700">
                  Warehouse 6 Machines
                </span>
              </h1>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, statIdx) => (
            <div
              key={stat.name}
              className={classNames(
                statIdx % 2 === 1
                  ? "sm:border-l"
                  : statIdx === 2
                  ? "lg:border-l"
                  : "",
                "border-t border-white/5 py-6 px-4 sm:px-6 lg:px-8"
              )}
            >
              <p className="text-sm font-medium leading-6 text-gray-900">
                {stat.name}
              </p>
              <p className="mt-2 flex items-baseline gap-x-2">
                <span className="text-4xl font-semibold tracking-tight text-gray-700">
                  {stat.value}
                </span>
                {stat.unit ? (
                  <span className="text-sm text-gray-400">{stat.unit}</span>
                ) : null}
              </p>
            </div>
          ))}
        </div>
        <div className="px-4 pt-8 pb-4">
          <Title>Export/Import Growth Rates (1970 to 2021)</Title>
          <LineChart
            className="mt-6"
            data={chartdata}
            index="year"
            categories={["Export Growth Rate", "Import Growth Rate"]}
            colors={["emerald", "gray"]}
            valueFormatter={dataFormatter}
            yAxisWidth={40}
          />
        </div>
      </header>
      <MachineList machines={machines} />
    </>
  );
};

export default FleetOverview;
