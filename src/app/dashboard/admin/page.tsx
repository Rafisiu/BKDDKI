import ECommerce from "@/components/Dashboard/Admin";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title:
    "Dashboard"
};

const DashboardPage = () => {
  return (
    <DefaultLayout>
      <ECommerce />
    </DefaultLayout>
  );
};

export default DashboardPage;
