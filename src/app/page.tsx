import Login from "@/app/auth/login/page";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "BKDDKI | LOGIN",
};

export default function Home() {
  return (
    <>
      <>
        <Login />
      </>
    </>
  );
}
