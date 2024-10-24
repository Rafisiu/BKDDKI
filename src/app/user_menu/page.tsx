import ViewUserMenu from "@/components/Admin/User_Menu";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/BreadcrumbAdmin";

export const metadata: Metadata = {
  title: "User Menu",
  description: "",
};

const UserMenu = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="User Menu List" />
        <ViewUserMenu />
      </DefaultLayout>
    </>
  );
};

export default UserMenu;
