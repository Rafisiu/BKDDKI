import ViewEditMenu from "@/components/Admin/Menu/EditMenu";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbAdmin";

export const metadata: Metadata = {
  title: "Menu | Edit Menu",
  description: "",
};

const Menu = ({ params }: { params: { id: string } }) => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Edit Menu" />
      <ViewEditMenu params={params} />
    </DefaultLayout>
  );
};

export default Menu;
