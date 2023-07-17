import { BasicCounterProps } from "../basicCounter/BasicCounter.types";

export interface WorkCounterProps extends Omit<BasicCounterProps, "status"> {}
