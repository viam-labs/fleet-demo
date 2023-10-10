import { type DialOptions } from '@viamrobotics/rpc/src/dial';
import { ViamClient } from '@viamrobotics/sdk';

export interface ViamCredentials {
    hostname: string;
    secret: string;
  }

export const getAppClient = async (credentials: ViamCredentials): Promise<ViamClient> => {
    const credential = {
        payload: '<API-KEY>',
        type: 'api-key',
    };

    const dialOpts: DialOptions = {
        authEntity: '<API-KEY-ID>',
        credentials: credential,
    };

    const client = new ViamClient(dialOpts);
    await client.connect();

    return client;
}