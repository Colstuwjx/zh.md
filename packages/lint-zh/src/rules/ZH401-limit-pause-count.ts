import {baseCountRule} from "./utils";
import {isPause} from "retext-chinese";

export const limitPauseCount= baseCountRule(":ZH401", "pause'、'", isPause, "gt",2)
export const ZH401 = limitPauseCount;

