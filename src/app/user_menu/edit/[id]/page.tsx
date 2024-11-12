import ViewEditUserMenu from "@/components/Admin/User_Menu/EditUserMenu";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbAdmin";

export const metadata: Metadata = {
  title: "User Menu | Edit User Menu",
  description: "",
};

const Menu = ({ params }: { params: { id: string } }) => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Edit User Menu" />
      <ViewEditUserMenu params={params} />
    </DefaultLayout>
  );
};

export default Menu;
