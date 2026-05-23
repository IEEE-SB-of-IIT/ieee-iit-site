import type { Metadata } from "next";
import ComingSoonPage from "./ComingSoon";

export const metadata: Metadata = {
  title: "Coming Soon",
};

export default function Page() {
  return <ComingSoonPage />;
}
