import { ViamClient } from "@viamrobotics/sdk";
import { useEffect, useState } from "react";


export interface ViamAppDataProps {
    client: ViamClient;
}



export const ViamAppData = (props: ViamAppDataProps) => {
    const [data, setData] = useState<any[]>()

    const { client } = props;

    useEffect(() => {
        const getData = async () => {
            client.dataClient?.tabularDataByFilter().then((res) => {
                console.log("data length: " + res.length)
                console.log(JSON.stringify(res))
                if (!data) {
                    setData(res)
                } else {

                }
            });
        };
        getData();
    });

    return (
        <>
            <h1>Tabular Sensor Data</h1>
            <ul>{data?.map(obj => (
                <li>{obj.data.fieldsMap[0][0] + ": " + obj.data.fieldsMap[0][1].numberValue}</li>
            ))}
            </ul>
        </>
    )
};

export default ViamAppData;
