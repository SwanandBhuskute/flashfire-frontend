export interface CountdownData {
  slotsLeft: number;
  days: number;
  hours: number;
  mins: number;
  secs: number;
  bookNowText: string;
}

export const countdownData: CountdownData = {
  slotsLeft: 5,
  days: 25,
  hours: 5,
  mins: 58,
  secs: 58,
  bookNowText: "Book Now",
};
