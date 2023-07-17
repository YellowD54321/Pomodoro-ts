import { BasicCounterProps } from "../basicCounter/BasicCounter.types";

export interface RestCounterProps extends Omit<BasicCounterProps, "status"> {}
