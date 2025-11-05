import CountdownClient from "./CountdownClient";
import { countdownData } from "@/src/data/countdownData";

export default async function Countdown() {
  return <CountdownClient data={countdownData} />;
}
