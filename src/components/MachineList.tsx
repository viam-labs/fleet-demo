import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
const statuses = {
  Online: "text-green-400 bg-green-400/10",
  Offline: "text-rose-400 bg-rose-400/10",
};

//@ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

interface MachineDetails {
  name: string;
  softwareVersion: string;
  status: string;
  lastActive: string;
  dateTime: string;
}

interface MachineListProps {
  machines: MachineDetails[];
}
const MachineList: FC<MachineListProps> = (props) => {
  const navigate = useNavigate();
  return (
    <div className="py-4">
      <table className="mt-6 w-full whitespace-nowrap text-left">
        <colgroup>
          <col className="w-full sm:w-4/12" />
          <col className="lg:w-4/12" />
          <col className="lg:w-2/12" />
          <col className="lg:w-1/12" />
          <col className="lg:w-1/12" />
        </colgroup>
        <thead className="border-b border-gray-200 text-sm leading-6 text-gray-700">
          <tr>
            <th
              scope="col"
              className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8"
            >
              Machine Name
            </th>
            <th
              scope="col"
              className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell"
            >
              Software Version
            </th>
            <th
              scope="col"
              className="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20"
            >
              Status
            </th>
            <th
              scope="col"
              className="hidden py-2 pl-0 pr-4 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-8"
            >
              Last Active
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {props.machines.map((machine) => (
            <tr
              key={machine.name}
              className="hover:bg-gray-50 cursor-pointer w-full"
              onClick={() => navigate(`/machine/${machine.name}`)}
            >
              <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                <div className="truncate text-sm font-medium leading-6 text-gray-900">
                  {machine.name}
                </div>
              </td>
              <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                <div className="flex gap-x-3">
                  <div className="font-mono text-sm leading-6 text-gray-600">
                    {machine.softwareVersion}
                  </div>
                  <div className="rounded-md bg-gray-200/40 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-300/10">
                    main
                  </div>
                </div>
              </td>
              <td className="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
                <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                  <div
                    className={classNames(
                      //@ts-ignore
                      statuses[machine.status],
                      "flex-none rounded-full p-1"
                    )}
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-current" />
                  </div>
                  <div className="hidden text-gray-700 sm:block">
                    {machine.status}
                  </div>
                </div>
              </td>

              <td className="hidden py-4 pl-0 pr-4 text-right text-sm leading-6 text-gray-600 sm:table-cell sm:pr-6 lg:pr-8">
                <time dateTime={machine.dateTime}>{machine.lastActive}</time>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MachineList;
