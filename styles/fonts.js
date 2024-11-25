import { Roboto_Mono, Sora } from "next/font/google";
export const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weights: [100, 200, 300, 400, 500, 600, 700, 800],
});

export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  weights: [100, 200, 300, 400, 500, 600, 700, 800],
});
