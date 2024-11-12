"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import ClickOutside from "@/components/ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    name: "Dashboard",
    menuItems: [
      {
        icon: (
          <svg
            className="fill-current"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.10322 0.956299H2.53135C1.5751 0.956299 0.787598 1.7438 0.787598 2.70005V6.27192C0.787598 7.22817 1.5751 8.01567 2.53135 8.01567H6.10322C7.05947 8.01567 7.84697 7.22817 7.84697 6.27192V2.72817C7.8751 1.7438 7.0876 0.956299 6.10322 0.956299ZM6.60947 6.30005C6.60947 6.5813 6.38447 6.8063 6.10322 6.8063H2.53135C2.2501 6.8063 2.0251 6.5813 2.0251 6.30005V2.72817C2.0251 2.44692 2.2501 2.22192 2.53135 2.22192H6.10322C6.38447 2.22192 6.60947 2.44692 6.60947 2.72817V6.30005Z"
              fill=""
            />
            <path
              d="M15.4689 0.956299H11.8971C10.9408 0.956299 10.1533 1.7438 10.1533 2.70005V6.27192C10.1533 7.22817 10.9408 8.01567 11.8971 8.01567H15.4689C16.4252 8.01567 17.2127 7.22817 17.2127 6.27192V2.72817C17.2127 1.7438 16.4252 0.956299 15.4689 0.956299ZM15.9752 6.30005C15.9752 6.5813 15.7502 6.8063 15.4689 6.8063H11.8971C11.6158 6.8063 11.3908 6.5813 11.3908 6.30005V2.72817C11.3908 2.44692 11.6158 2.22192 11.8971 2.22192H15.4689C15.7502 2.22192 15.9752 2.44692 15.9752 2.72817V6.30005Z"
              fill=""
            />
            <path
              d="M6.10322 9.92822H2.53135C1.5751 9.92822 0.787598 10.7157 0.787598 11.672V15.2438C0.787598 16.2001 1.5751 16.9876 2.53135 16.9876H6.10322C7.05947 16.9876 7.84697 16.2001 7.84697 15.2438V11.7001C7.8751 10.7157 7.0876 9.92822 6.10322 9.92822ZM6.60947 15.272C6.60947 15.5532 6.38447 15.7782 6.10322 15.7782H2.53135C2.2501 15.7782 2.0251 15.5532 2.0251 15.272V11.7001C2.0251 11.4188 2.2501 11.1938 2.53135 11.1938H6.10322C6.38447 11.1938 6.60947 11.4188 6.60947 11.7001V15.272Z"
              fill=""
            />
            <path
              d="M15.4689 9.92822H11.8971C10.9408 9.92822 10.1533 10.7157 10.1533 11.672V15.2438C10.1533 16.2001 10.9408 16.9876 11.8971 16.9876H15.4689C16.4252 16.9876 17.2127 16.2001 17.2127 15.2438V11.7001C17.2127 10.7157 16.4252 9.92822 15.4689 9.92822ZM15.9752 15.272C15.9752 15.5532 15.7502 15.7782 15.4689 15.7782H11.8971C11.6158 15.7782 11.3908 15.5532 11.3908 15.272V11.7001C11.3908 11.4188 11.6158 11.1938 11.8971 11.1938H15.4689C15.7502 11.1938 15.9752 11.4188 15.9752 11.7001V15.272Z"
              fill=""
            />
          </svg>
        ),
        label: "Dashboard",
        route: "/dashboard/admin",
      },
    ],
  },
  {
    name: "MENU ADMIN",
    menuItems: [
      // {
      //   icon: (
      //     <svg
      //       className="fill-current"
      //       width="24"
      //       height="24"
      //       viewBox="0 0 24 24"
      //       fill="none"
      //       xmlns="http://www.w3.org/2000/svg"
      //     >
      //       <path
      //         d="M9.15957 10.87C9.05957 10.86 8.93957 10.86 8.82957 10.87C6.44957 10.79 4.55957 8.84 4.55957 6.44C4.55957 3.99 6.53957 2 8.99957 2C11.4496 2 13.4396 3.99 13.4396 6.44C13.4296 8.84 11.5396 10.79 9.15957 10.87Z"
      //         stroke=""
      //         stroke-width="1.5"
      //         stroke-linecap="round"
      //         stroke-linejoin="round"
      //       />
      //       <path
      //         d="M16.4103 4C18.3503 4 19.9103 5.57 19.9103 7.5C19.9103 9.39 18.4103 10.93 16.5403 11C16.4603 10.99 16.3703 10.99 16.2803 11"
      //         stroke=""
      //         stroke-width="1.5"
      //         stroke-linecap="round"
      //         stroke-linejoin="round"
      //       />
      //       <path
      //         d="M4.15973 14.56C1.73973 16.18 1.73973 18.82 4.15973 20.43C6.90973 22.27 11.4197 22.27 14.1697 20.43C16.5897 18.81 16.5897 16.17 14.1697 14.56C11.4297 12.73 6.91973 12.73 4.15973 14.56Z"
      //         stroke=""
      //         stroke-width="1.5"
      //         stroke-linecap="round"
      //         stroke-linejoin="round"
      //       />
      //       <path
      //         d="M18.3398 20C19.0598 19.85 19.7398 19.56 20.2998 19.13C21.8598 17.96 21.8598 16.03 20.2998 14.86C19.7498 14.44 19.0798 14.16 18.3698 14"
      //         stroke=""
      //         stroke-width="1.5"
      //         stroke-linecap="round"
      //         stroke-linejoin="round"
      //       />
      //     </svg>
      //   ),
      //   label: "Admin",
      //   route: "#",
      //   children: [
      //     {
      //       icon: (
      //         <svg
      //           className="fill-current"
      //           width="24"
      //           height="24"
      //           viewBox="0 0 24 24"
      //           fill="none"
      //           xmlns="http://www.w3.org/2000/svg"
      //         >
      //           <path
      //             d="M12.16 10.87C12.06 10.86 11.94 10.86 11.83 10.87C9.45 10.79 7.56 8.84 7.56 6.44C7.56 3.99 9.54 2 12 2C14.45 2 16.44 3.99 16.44 6.44C16.43 8.84 14.54 10.79 12.16 10.87Z"
      //             stroke="white"
      //             stroke-width="1.5"
      //             stroke-linecap="round"
      //             stroke-linejoin="round"
      //           />
      //           <path
      //             d="M7.16 14.56C4.74 16.18 4.74 18.82 7.16 20.43C9.91 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.92 12.73 7.16 14.56Z"
      //             stroke="white"
      //             stroke-width="1.5"
      //             stroke-linecap="round"
      //             stroke-linejoin="round"
      //           />
      //         </svg>
      //       ),
      //       label: "User Management",
      //       route: "/admin/user_management",
      //     },
      //     {
      //       icon: (
      //         <svg
      //           className=""
      //           width="24"
      //           height="24"
      //           viewBox="0 0 24 24"
      //           fill="none"
      //           xmlns="http://www.w3.org/2000/svg"
      //         >
      //           <path
      //             d="M10.49 2.22957L5.50003 4.09957C4.35003 4.52957 3.41003 5.88955 3.41003 7.11955V14.5495C3.41003 15.7295 4.19005 17.2795 5.14005 17.9895L9.44003 21.1996C10.85 22.2596 13.17 22.2596 14.58 21.1996L18.88 17.9895C19.83 17.2795 20.61 15.7295 20.61 14.5495V7.11955C20.61 5.88955 19.67 4.52957 18.52 4.09957L13.53 2.22957C12.68 1.91957 11.32 1.91957 10.49 2.22957Z"
      //             stroke="white"
      //             stroke-width="1.5"
      //             stroke-linecap="round"
      //             stroke-linejoin="round"
      //           />
      //           <path
      //             d="M12.0001 10.9204C11.9601 10.9204 11.9101 10.9204 11.8701 10.9204C10.9301 10.8904 10.1801 10.1104 10.1801 9.1604C10.1801 8.1904 10.9701 7.40039 11.9401 7.40039C12.9101 7.40039 13.7001 8.1904 13.7001 9.1604C13.6901 10.1204 12.9401 10.8904 12.0001 10.9204Z"
      //             stroke="white"
      //             stroke-width="1.5"
      //             stroke-linecap="round"
      //             stroke-linejoin="round"
      //           />
      //           <path
      //             d="M10.01 13.7204C9.05004 14.3604 9.05004 15.4103 10.01 16.0503C11.1 16.7803 12.89 16.7803 13.98 16.0503C14.94 15.4103 14.94 14.3604 13.98 13.7204C12.9 12.9904 11.11 12.9904 10.01 13.7204Z"
      //             stroke="white"
      //             stroke-width="1.5"
      //             stroke-linecap="round"
      //             stroke-linejoin="round"
      //           />
      //         </svg>
      //       ),
      //       label: "Otoritas",
      //       route: "/admin/otoritas",
      //     },
      //   ],
      // },
      {
        icon: (
          <svg
            className="fill-current"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.10322 0.956299H2.53135C1.5751 0.956299 0.787598 1.7438 0.787598 2.70005V6.27192C0.787598 7.22817 1.5751 8.01567 2.53135 8.01567H6.10322C7.05947 8.01567 7.84697 7.22817 7.84697 6.27192V2.72817C7.8751 1.7438 7.0876 0.956299 6.10322 0.956299ZM6.60947 6.30005C6.60947 6.5813 6.38447 6.8063 6.10322 6.8063H2.53135C2.2501 6.8063 2.0251 6.5813 2.0251 6.30005V2.72817C2.0251 2.44692 2.2501 2.22192 2.53135 2.22192H6.10322C6.38447 2.22192 6.60947 2.44692 6.60947 2.72817V6.30005Z"
              fill=""
            />
            <path
              d="M15.4689 0.956299H11.8971C10.9408 0.956299 10.1533 1.7438 10.1533 2.70005V6.27192C10.1533 7.22817 10.9408 8.01567 11.8971 8.01567H15.4689C16.4252 8.01567 17.2127 7.22817 17.2127 6.27192V2.72817C17.2127 1.7438 16.4252 0.956299 15.4689 0.956299ZM15.9752 6.30005C15.9752 6.5813 15.7502 6.8063 15.4689 6.8063H11.8971C11.6158 6.8063 11.3908 6.5813 11.3908 6.30005V2.72817C11.3908 2.44692 11.6158 2.22192 11.8971 2.22192H15.4689C15.7502 2.22192 15.9752 2.44692 15.9752 2.72817V6.30005Z"
              fill=""
            />
            <path
              d="M6.10322 9.92822H2.53135C1.5751 9.92822 0.787598 10.7157 0.787598 11.672V15.2438C0.787598 16.2001 1.5751 16.9876 2.53135 16.9876H6.10322C7.05947 16.9876 7.84697 16.2001 7.84697 15.2438V11.7001C7.8751 10.7157 7.0876 9.92822 6.10322 9.92822ZM6.60947 15.272C6.60947 15.5532 6.38447 15.7782 6.10322 15.7782H2.53135C2.2501 15.7782 2.0251 15.5532 2.0251 15.272V11.7001C2.0251 11.4188 2.2501 11.1938 2.53135 11.1938H6.10322C6.38447 11.1938 6.60947 11.4188 6.60947 11.7001V15.272Z"
              fill=""
            />
            <path
              d="M15.4689 9.92822H11.8971C10.9408 9.92822 10.1533 10.7157 10.1533 11.672V15.2438C10.1533 16.2001 10.9408 16.9876 11.8971 16.9876H15.4689C16.4252 16.9876 17.2127 16.2001 17.2127 15.2438V11.7001C17.2127 10.7157 16.4252 9.92822 15.4689 9.92822ZM15.9752 15.272C15.9752 15.5532 15.7502 15.7782 15.4689 15.7782H11.8971C11.6158 15.7782 11.3908 15.5532 11.3908 15.272V11.7001C11.3908 11.4188 11.6158 11.1938 11.8971 11.1938H15.4689C15.7502 11.1938 15.9752 11.4188 15.9752 11.7001V15.272Z"
              fill=""
            />
          </svg>
        ),
        label: "Menu",
        route: "/menu",
      },
      {
        icon: (
          <svg
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.15957 10.87C9.05957 10.86 8.93957 10.86 8.82957 10.87C6.44957 10.79 4.55957 8.84 4.55957 6.44C4.55957 3.99 6.53957 2 8.99957 2C11.4496 2 13.4396 3.99 13.4396 6.44C13.4296 8.84 11.5396 10.79 9.15957 10.87Z"
              stroke=""
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.4103 4C18.3503 4 19.9103 5.57 19.9103 7.5C19.9103 9.39 18.4103 10.93 16.5403 11C16.4603 10.99 16.3703 10.99 16.2803 11"
              stroke=""
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.15973 14.56C1.73973 16.18 1.73973 18.82 4.15973 20.43C6.90973 22.27 11.4197 22.27 14.1697 20.43C16.5897 18.81 16.5897 16.17 14.1697 14.56C11.4297 12.73 6.91973 12.73 4.15973 14.56Z"
              stroke=""
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.3398 20C19.0598 19.85 19.7398 19.56 20.2998 19.13C21.8598 17.96 21.8598 16.03 20.2998 14.86C19.7498 14.44 19.0798 14.16 18.3698 14"
              stroke=""
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ),
        label: "User - Menu",
        route: "/user_menu",
      },
      {
        icon: (
          <svg
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.25 10.5C17.25 10.6989 17.171 10.8897 17.0303 11.0303C16.8897 11.171 16.6989 11.25 16.5 11.25H10.5C10.3011 11.25 10.1103 11.171 9.96967 11.0303C9.82902 10.8897 9.75 10.6989 9.75 10.5C9.75 10.3011 9.82902 10.1103 9.96967 9.96967C10.1103 9.82902 10.3011 9.75 10.5 9.75H16.5C16.6989 9.75 16.8897 9.82902 17.0303 9.96967C17.171 10.1103 17.25 10.3011 17.25 10.5ZM16.5 12.75H10.5C10.3011 12.75 10.1103 12.829 9.96967 12.9697C9.82902 13.1103 9.75 13.3011 9.75 13.5C9.75 13.6989 9.82902 13.8897 9.96967 14.0303C10.1103 14.171 10.3011 14.25 10.5 14.25H16.5C16.6989 14.25 16.8897 14.171 17.0303 14.0303C17.171 13.8897 17.25 13.6989 17.25 13.5C17.25 13.3011 17.171 13.1103 17.0303 12.9697C16.8897 12.829 16.6989 12.75 16.5 12.75ZM21 4.5V19.5C21 19.8978 20.842 20.2794 20.5607 20.5607C20.2794 20.842 19.8978 21 19.5 21H4.5C4.10218 21 3.72064 20.842 3.43934 20.5607C3.15804 20.2794 3 19.8978 3 19.5V4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3H19.5C19.8978 3 20.2794 3.15804 20.5607 3.43934C20.842 3.72064 21 4.10218 21 4.5ZM4.5 19.5H6.75V4.5H4.5V19.5ZM19.5 19.5V4.5H8.25V19.5H19.5Z"
              fill=""
            />
          </svg>
        ),
        label: "Kode",
        route: "/kode",
      },
      {
        icon: (
          <svg
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.75 10.5C18.75 10.6989 18.671 10.8897 18.5303 11.0303C18.3897 11.171 18.1989 11.25 18 11.25H14.25C14.0511 11.25 13.8603 11.171 13.7197 11.0303C13.579 10.8897 13.5 10.6989 13.5 10.5C13.5 10.3011 13.579 10.1103 13.7197 9.96967C13.8603 9.82902 14.0511 9.75 14.25 9.75H18C18.1989 9.75 18.3897 9.82902 18.5303 9.96967C18.671 10.1103 18.75 10.3011 18.75 10.5ZM18 12.75H14.25C14.0511 12.75 13.8603 12.829 13.7197 12.9697C13.579 13.1103 13.5 13.3011 13.5 13.5C13.5 13.6989 13.579 13.8897 13.7197 14.0303C13.8603 14.171 14.0511 14.25 14.25 14.25H18C18.1989 14.25 18.3897 14.171 18.5303 14.0303C18.671 13.8897 18.75 13.6989 18.75 13.5C18.75 13.3011 18.671 13.1103 18.5303 12.9697C18.3897 12.829 18.1989 12.75 18 12.75ZM21.75 5.25V18.75C21.75 19.1478 21.592 19.5294 21.3107 19.8107C21.0294 20.092 20.6478 20.25 20.25 20.25H3.75C3.35218 20.25 2.97064 20.092 2.68934 19.8107C2.40804 19.5294 2.25 19.1478 2.25 18.75V5.25C2.25 4.85218 2.40804 4.47064 2.68934 4.18934C2.97064 3.90804 3.35218 3.75 3.75 3.75H20.25C20.6478 3.75 21.0294 3.90804 21.3107 4.18934C21.592 4.47064 21.75 4.85218 21.75 5.25ZM20.25 18.75V5.25H3.75V18.75H20.25ZM12.7256 15.5625C12.7754 15.7552 12.7465 15.9598 12.6454 16.1312C12.5443 16.3026 12.3793 16.4268 12.1866 16.4766C11.9939 16.5263 11.7893 16.4974 11.6179 16.3963C11.4465 16.2952 11.3222 16.1302 11.2725 15.9375C11.0259 14.9756 10.0481 14.25 8.99906 14.25C7.95 14.25 6.97312 14.9756 6.72563 15.9375C6.6759 16.1302 6.55166 16.2952 6.38024 16.3963C6.20882 16.4974 6.00426 16.5263 5.81156 16.4766C5.61887 16.4268 5.45382 16.3026 5.35272 16.1312C5.25163 15.9598 5.22277 15.7552 5.2725 15.5625C5.51588 14.6566 6.09118 13.8755 6.88406 13.3744C6.46272 12.9555 6.17522 12.421 6.05802 11.8386C5.94082 11.2562 5.99918 10.652 6.22572 10.1028C6.45226 9.55361 6.83676 9.08402 7.3305 8.75358C7.82423 8.42315 8.40496 8.24675 8.99906 8.24675C9.59317 8.24675 10.1739 8.42315 10.6676 8.75358C11.1614 9.08402 11.5459 9.55361 11.7724 10.1028C11.9989 10.652 12.0573 11.2562 11.9401 11.8386C11.8229 12.421 11.5354 12.9555 11.1141 13.3744C11.9078 13.8748 12.4836 14.6562 12.7266 15.5625H12.7256ZM9 12.75C9.29667 12.75 9.58668 12.662 9.83335 12.4972C10.08 12.3324 10.2723 12.0981 10.3858 11.824C10.4994 11.5499 10.5291 11.2483 10.4712 10.9574C10.4133 10.6664 10.2704 10.3991 10.0607 10.1893C9.85088 9.97956 9.58361 9.8367 9.29264 9.77882C9.00166 9.72094 8.70006 9.75065 8.42597 9.86418C8.15189 9.97771 7.91762 10.17 7.7528 10.4166C7.58797 10.6633 7.5 10.9533 7.5 11.25C7.5 11.6478 7.65804 12.0294 7.93934 12.3107C8.22064 12.592 8.60218 12.75 9 12.75Z"
              fill=""
            />
          </svg>
        ),
        label: "Jenjang",
        route: "/jenjang",
      },
      {
        icon: (
          <svg
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.6478 16.1249C21.7469 16.2968 21.7738 16.501 21.7226 16.6927C21.6715 16.8844 21.5465 17.048 21.375 17.1477L12.375 22.3977C12.2603 22.4646 12.1299 22.4999 11.9972 22.4999C11.8644 22.4999 11.7341 22.4646 11.6194 22.3977L2.61938 17.1477C2.45034 17.0462 2.32811 16.8821 2.27916 16.6911C2.2302 16.5 2.25846 16.2974 2.35781 16.127C2.45717 15.9567 2.61962 15.8323 2.81 15.7809C3.00037 15.7294 3.20336 15.755 3.375 15.8521L12 20.8818L20.625 15.8521C20.7969 15.7531 21.0011 15.7261 21.1927 15.7773C21.3844 15.8284 21.5481 15.9534 21.6478 16.1249ZM20.625 11.3521L12 16.3818L3.375 11.3521C3.20423 11.2671 3.00748 11.2503 2.82479 11.3053C2.6421 11.3602 2.4872 11.4827 2.39163 11.6478C2.29606 11.8129 2.26699 12.0082 2.31035 12.1939C2.3537 12.3797 2.46622 12.542 2.625 12.6477L11.625 17.8977C11.7397 17.9646 11.8701 17.9999 12.0028 17.9999C12.1356 17.9999 12.2659 17.9646 12.3806 17.8977L21.3806 12.6477C21.4671 12.5988 21.5429 12.5332 21.6038 12.4548C21.6647 12.3763 21.7094 12.2865 21.7353 12.1907C21.7612 12.0948 21.7679 11.9947 21.7548 11.8963C21.7417 11.7978 21.7092 11.7029 21.6592 11.6171C21.6091 11.5313 21.5426 11.4563 21.4633 11.3965C21.384 11.3366 21.2937 11.2931 21.1975 11.2684C21.1013 11.2438 21.0011 11.2385 20.9028 11.2529C20.8046 11.2672 20.7101 11.301 20.625 11.3521ZM2.25 7.49993C2.2503 7.36856 2.2851 7.23958 2.35091 7.12589C2.41672 7.0122 2.51124 6.91779 2.625 6.85211L11.625 1.60211C11.7397 1.53524 11.8701 1.5 12.0028 1.5C12.1356 1.5 12.2659 1.53524 12.3806 1.60211L21.3806 6.85211C21.4938 6.91816 21.5878 7.01274 21.6531 7.1264C21.7183 7.24006 21.7527 7.36885 21.7527 7.49993C21.7527 7.631 21.7183 7.75979 21.6531 7.87345C21.5878 7.98712 21.4938 8.08169 21.3806 8.14774L12.3806 13.3977C12.2659 13.4646 12.1356 13.4999 12.0028 13.4999C11.8701 13.4999 11.7397 13.4646 11.625 13.3977L2.625 8.14774C2.51124 8.08206 2.41672 7.98765 2.35091 7.87396C2.2851 7.76027 2.2503 7.63129 2.25 7.49993ZM4.48875 7.49993L12 11.8818L19.5112 7.49993L12 3.11805L4.48875 7.49993Z"
              fill=""
            />
          </svg>
        ),
        label: "OPD BKD",
        route: "/opd",
      },
    ],
  },
  {
    name: "MENU SKPD Input, Cetak, Close",
    menuItems: [
      {
        icon: (
          <svg
            className=""
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#60a5fa"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 21C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14L19 8V19C19 20.1046 18.1046 21 17 21H7Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13 3V9H19"
              stroke="white"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <path
              d="M9 13H15"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 17H15"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ),
        label: "PLT",
        route: "#",
        children: [
          {
            icon: (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#60a5fa"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 21C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14L19 8V19C19 20.1046 18.1046 21 17 21H7Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 3V9H19"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 13H15"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 17H15"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ),
            label: "PLT",
            route: "/plt",
          },
          {
            icon: (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#60a5fa"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 21C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14L19 8V19C19 20.1046 18.1046 21 17 21H7Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 3V9H19"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 13H15"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 17H15"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ),
            label: "Input Pengajuan",
            route: "/plt/input_pengajuan",
          },
          {
            icon: (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#60a5fa"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 21C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14L19 8V19C19 20.1046 18.1046 21 17 21H7Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 3V9H19"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 13H15"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 17H15"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ),
            label: "PLT Input",
            route: "/plt/input",
          },
          {
            icon: (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 18H5C3.89543 18 3 17.186 3 16.1818V9.81818C3 8.81403 3.89543 8 5 8H19C20.1046 8 21 8.81403 21 9.81818V16.1818C21 17.186 20.1046 18 19 18H16.5"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 3H17V8H7V3Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 11H13"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 15H17V21H7V15Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
            ),
            label: "Cetak",
            route: "/plt/cetak",
          },
          {
            icon: (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 21C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14L19 8V19C19 20.1046 18.1046 21 17 21H7Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 3V9H19"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.0002 13L14.0002 17M10.0002 17L14.0002 13"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ),
            label: "Close",
            route: "/plt/close",
          },
        ],
      },
      {
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#60a5fa"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 21C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14L19 8V19C19 20.1046 18.1046 21 17 21H7Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13 3V9H19"
              stroke="white"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <path
              d="M9 13H15"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 17H15"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ),
        label: "PLH",
        route: "#",
        children: [
          {
            icon: (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#60a5fa"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 21C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14L19 8V19C19 20.1046 18.1046 21 17 21H7Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 3V9H19"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 13H15"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 17H15"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ),
            label: "PLH",
            route: "/plh",
          },
          {
            icon: (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#60a5fa"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 21C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14L19 8V19C19 20.1046 18.1046 21 17 21H7Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 3V9H19"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 13H15"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 17H15"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ),
            label: "Input Pengajuan",
            route: "/plh/input_pengajuan",
          },
          {
            icon: (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#60a5fa"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 21C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14L19 8V19C19 20.1046 18.1046 21 17 21H7Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 3V9H19"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 12L11 16L9 14"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ),
            label: "Verifikasi",
            route: "/plh/verifikasi",
          },
          {
            icon: (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#60a5fa"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 21C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14L19 8V19C19 20.1046 18.1046 21 17 21H7Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 3V9H19"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 13H15"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 17H15"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ),
            label: "PLH Input",
            route: "/plh/input",
          },
          {
            icon: (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 18H5C3.89543 18 3 17.186 3 16.1818V9.81818C3 8.81403 3.89543 8 5 8H19C20.1046 8 21 8.81403 21 9.81818V16.1818C21 17.186 20.1046 18 19 18H16.5"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 3H17V8H7V3Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 11H13"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 15H17V21H7V15Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
            ),
            label: "Cetak",
            route: "/plh/cetak",
          },
          {
            icon: (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 21C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14L19 8V19C19 20.1046 18.1046 21 17 21H7Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 3V9H19"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.0002 13L14.0002 17M10.0002 17L14.0002 13"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ),
            label: "Close",
            route: "/plh/close",
          },
        ],
      },
    ],
  },
  {
    name: "SKPD Validasi",
    menuItems: [
      {
        icon: (
          <svg
            className=""
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#60a5fa"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 21C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14L19 8V19C19 20.1046 18.1046 21 17 21H7Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13 3V9H19"
              stroke="white"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <path
              d="M9 13H15"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 17H15"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ),
        label: "PLT Validasi",
        route: "#",
        children: [
          {
            icon: (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#60a5fa"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 21C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14L19 8V19C19 20.1046 18.1046 21 17 21H7Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 3V9H19"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 12L11 16L9 14"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ),
            label: "Validasi",
            route: "/plt/validasi",
          },
        ],
      },
      {
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#60a5fa"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 21C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14L19 8V19C19 20.1046 18.1046 21 17 21H7Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13 3V9H19"
              stroke="white"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <path
              d="M9 13H15"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 17H15"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ),
        label: "PLH Validasi",
        route: "#",
        children: [
          {
            icon: (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#60a5fa"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 21C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14L19 8V19C19 20.1046 18.1046 21 17 21H7Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 3V9H19"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 12L11 16L9 14"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ),
            label: "Validasi",
            route: "/plh/validasi",
          },
        ],
      },
    ],
  },
  {
    name: "BKD Validasi",
    menuItems: [
      {
        icon: (
          <svg
            className=""
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#60a5fa"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 21C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14L19 8V19C19 20.1046 18.1046 21 17 21H7Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13 3V9H19"
              stroke="white"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <path
              d="M9 13H15"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 17H15"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ),
        label: "PLT Validasi BKD",
        route: "#",
        children: [
          {
            icon: (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#60a5fa"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 21C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14L19 8V19C19 20.1046 18.1046 21 17 21H7Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 3V9H19"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 12L11 16L9 14"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ),
            label: "Validasi",
            route: "/plt/validasi_bkd",
          },
        ],
      },
      {
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#60a5fa"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 21C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14L19 8V19C19 20.1046 18.1046 21 17 21H7Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13 3V9H19"
              stroke="white"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <path
              d="M9 13H15"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 17H15"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ),
        label: "PLH Validasi BKD",
        route: "#",
        children: [
          {
            icon: (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#60a5fa"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 21C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14L19 8V19C19 20.1046 18.1046 21 17 21H7Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 3V9H19"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 12L11 16L9 14"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ),
            label: "Validasi",
            route: "/plh/validasi_bkd",
          },
        ],
      },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");
  const [userGroup, setUserGroup] = useState<string | null>(null);
  const [menuPermissions, setMenuPermissions] = useState<number[]>([]);

  // Retrieve and set user group and menu permissions from localStorage
  useEffect(() => {
    const storedUserGroup = localStorage.getItem("user_group_id");
    setUserGroup(storedUserGroup);

    const storedPermissions = localStorage.getItem("permission_menu_ids");
    if (storedPermissions) {
      setMenuPermissions(JSON.parse(storedPermissions));
    }
  }, []);

  // Filter menu groups based on user group and permission menu IDs
  const filteredMenuGroups = () => {
    if (userGroup === "20") {
      // For ADMIN group, filter menu items based on permission IDs
      const adminMenuItems = menuGroups
        .find((group) => group.name === "MENU ADMIN")
        ?.menuItems.filter((menuItem) => {
          switch (menuItem.label) {
            case "User - Menu":
              return menuPermissions.includes(21);
            case "Menu":
              return menuPermissions.includes(22);
            case "Kode":
              return menuPermissions.includes(23);
            case "OPD BKD":
              return menuPermissions.includes(24);
            case "Jenjang":
              return menuPermissions.includes(25);
            default:
              return false;
          }
        });

      return adminMenuItems
        ? [{ name: "MENU ADMIN", menuItems: adminMenuItems }]
        : [];
    } else if (userGroup === "1") {
      // For Dashboard group, show only the Dashboard item if permission ID 2 is available
      const dashboardMenuItems = menuGroups
        .find((group) => group.name === "Dashboard")
        ?.menuItems.filter(
          (menuItem) =>
            menuPermissions.includes(2) && menuItem.label === "Dashboard",
        );

      return dashboardMenuItems
        ? [{ name: "Dashboard", menuItems: dashboardMenuItems }]
        : [];
    } else {
      return menuGroups.filter(
        (group) => group.name !== "MENU ADMIN" && group.name !== "Dashboard",
      );
    }
  };

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ backgroundColor: "#4679CC" }}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                width={50}
                height={50}
                src={"/images/gogo.png"}
                alt="Logo"
                priority
              />
            </Link>
            <h1 className="text-4xl font-extrabold text-[color:#DAA520]">
              BKDDKI
            </h1>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            className="block lg:hidden"
          >
            <svg
              className="fill-current"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill=""
              />
            </svg>
          </button>
        </div>
        {/* Sidebar Content */}
        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
            {filteredMenuGroups().map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark1">
                  {group.name}
                </h3>
                <ul className="mb-6 flex flex-col gap-1.5">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
