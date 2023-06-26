import { createAction } from "@reduxjs/toolkit";

import type {
  app_protobufs_User,
  app_protobufs_Waypoint,
} from "@bindings/index";

import type { ConnectionType, DeviceKey } from "@utils/connections";

export const requestAvailablePorts = createAction(
  "@device/request-available-ports"
);

export const requestInitializeApplication = createAction(
  "@device/request-initialize-application"
);

// TODO this type shouldn't expose both portName and socketAddress at the same time
export const requestConnectToDevice = createAction<{
  params:
    | { type: ConnectionType.SERIAL; portName: string }
    | { type: ConnectionType.TCP; socketAddress: string };
  setPrimary: boolean;
}>("@device/request-connect");

export const requestDisconnectFromDevice = createAction<DeviceKey>(
  "@device/request-disconnect"
);

export const requestDisconnectFromAllDevices = createAction(
  "@device/request-disconnect-all"
);

export const requestSendMessage = createAction<{
  deviceKey: string;
  text: string;
  channel: number;
}>("@device/request-send-message");

export const requestUpdateUser = createAction<{
  deviceKey: string;
  user: app_protobufs_User;
}>("@device/update-device-user");

export const requestNewWaypoint = createAction<{
  deviceKey: string;
  waypoint: app_protobufs_Waypoint;
  channel: number;
}>("@device/send-waypoint");

export const requestAutoConnectPort = createAction(
  "@device/request-autoconnect-port"
);
