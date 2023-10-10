import { useEffect, useRef, useState } from 'react';
import type { ViamClient } from '@viamrobotics/sdk';
import { ViamCredentials, getAppClient } from './appClient';

export const DISCONNECTED = 'disconnected';
export const CONNECTING = 'connecting';
export const DISCONNECTING = 'disconnecting';
export const CONNECTED = 'connected';

interface ClientStateDisconnected {
    status: typeof DISCONNECTED;
    error?: unknown;
}

interface ClientStateTransitioning {
    status: typeof CONNECTING | typeof DISCONNECTING;
}

interface ClientStateConnected {
    status: typeof CONNECTED;
    client: ViamClient;
}

type ClientState =
    | ClientStateDisconnected
    | ClientStateTransitioning
    | ClientStateConnected;

export type ClientStatus = ClientState['status'];

export interface Store {
    status: ClientStatus;
    client?: ViamClient;
    connectOrDisconnect: (credentials: ViamCredentials) => unknown;
}

export const useStore = (): Store => {
    const [state, setState] = useState<ClientState>({ status: DISCONNECTED });

    if (state.status === DISCONNECTED && state.error) {
        console.warn('Connection error', state.error);
    }

    const connectOrDisconnect = (credentials: ViamCredentials): void => {
        if (state.status === DISCONNECTED) {
            setState({ status: CONNECTING });

            getAppClient(credentials)
                .then((client) => {
                    setState({ status: CONNECTED, client });
                })
                .catch((error: unknown) => setState({ status: DISCONNECTED, error }));
        } else if (state.status === CONNECTED) {

            console.log("Disconnect NOT Implemented yet!")

            /*
            setState({ status: DISCONNECTING });

            state.client
                .disconnect()
                .then(() => setState({ status: DISCONNECTED }))
                .catch((error: unknown) => setState({ status: DISCONNECTED, error }));
            */
        }
    };

    return {
        connectOrDisconnect: connectOrDisconnect,
        status: state.status,
        client: state.status === CONNECTED ? state.client : undefined
    };
};