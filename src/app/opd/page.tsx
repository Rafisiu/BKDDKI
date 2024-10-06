import Otoritas from "@/components/Admin/Otoritas";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbAdmin";

export const metadata: Metadata = {
  title: "OPD BKD",
  description: "",
};

const Home = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="OPD BKD" />
        <Otoritas />
      </DefaultLayout>
    </>
  );
};

export default Home;