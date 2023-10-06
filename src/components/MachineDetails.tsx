import React from "react";
import { useParams } from "react-router-dom";
import { Grid, Col, Card, Text, Metric } from "@tremor/react";

const stats = [
  { name: "Number of deploys", value: "405" },
  { name: "Average deploy time", value: "3.65", unit: "mins" },
  { name: "Number of servers", value: "3" },
  { name: "Success rate", value: "98.5%" },
];

//@ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MachineDetails = () => {
  const { id } = useParams();
  // Fetch details based on the id or do something else
  return (
    <div className="w-full h-full">
      <header>
        {/* Heading */}
        <div className="flex flex-col items-start justify-between gap-x-8 gap-y-4 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <div className="flex items-center gap-x-3">
              <div className="flex-none rounded-full bg-green-400/10 p-1 text-green-400">
                <div className="h-2 w-2 rounded-full bg-current" />
              </div>
              <h1 className="flex gap-x-3 text-base leading-7">
                <span className="font-semibold text-gray-700">Warehouse 6</span>
                <span className="text-gray-600">/</span>
                <span className="font-semibold text-gray-700">{id}</span>
              </h1>
            </div>
          </div>
          <div className="order-first flex-none rounded-full bg-green-400/10 px-2 py-1 text-xs font-medium text-green-500 ring-1 ring-inset ring-green-500/30 sm:order-none">
            Online
          </div>
        </div>
      </header>
      <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2">
        <Col numColSpan={1} numColSpanLg={2}>
          <Card>
            <Text>Title</Text>
            <Metric>Data Chart 1</Metric>
          </Card>
        </Col>
        <Card>
          <Text>Title</Text>
          <Metric>Data Chart 2</Metric>
        </Card>
        <Col>
          <Card>
            <Text>Title</Text>
            <Metric>Data Chart 3</Metric>
          </Card>
        </Col>
        <Card>
          <Text>Title</Text>
          <Metric>Data Chart 4</Metric>
        </Card>
        <Card>
          <Text>Title</Text>
          <Metric>Data Chart 5</Metric>
        </Card>
      </Grid>
    </div>
  );
};

export default MachineDetails;
