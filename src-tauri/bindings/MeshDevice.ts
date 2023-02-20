// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { DeviceMetrics } from "./protobufs\\DeviceMetrics";
import type { LocalConfig } from "./protobufs\\LocalConfig";
import type { MeshChannel } from "./MeshChannel";
import type { MeshDeviceStatus } from "./MeshDeviceStatus";
import type { MeshNode } from "./MeshNode";
import type { MyNodeInfo } from "./protobufs\\MyNodeInfo";
import type { Waypoint } from "./protobufs\\Waypoint";

export interface MeshDevice { configId: number, ready: boolean, status: MeshDeviceStatus, channels: Record<number, MeshChannel>, config: LocalConfig, myNodeInfo: MyNodeInfo, nodes: Record<number, MeshNode>, edges: Record<[number, number], [number, bigint]>, regionUnset: boolean, deviceMetrics: DeviceMetrics, waypoints: Record<number, Waypoint>, }