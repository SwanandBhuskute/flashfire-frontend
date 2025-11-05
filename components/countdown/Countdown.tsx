import CountdownClient from "./CountdownClient";
import { countdownData } from "@/data/countdownData";

export default async function Countdown() {
  return <CountdownClient data={countdownData} />;
}
