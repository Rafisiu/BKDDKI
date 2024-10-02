"use client";
import dynamic from "next/dynamic";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import CardDataStats from "../CardDataStats";
import TableThree from "../Tables/TableThree";
import TabelPensiun from "../Tables/Dashboard/tablePensiun";
import TabelSurat from "../Tables/Dashboard/tableSurat";
import TabelPLT from "../Tables/tablePLT";

const MapOne = dynamic(() => import("@/components/Maps/MapOne"), {
    ssr: false,
    });

    const ChartThree = dynamic(() => import("@/components/Charts/ChartThree"), {
    ssr: false,
    });

    const Admin: React.FC = () => {
    return (
      <>
        <div className="mb-4">
          <h1 className="mb-2 font-extrabold">BKD PUSDATIN</h1>
          <p>
            Selamat Datang di Dashboard SKPD Input Pengajuan, Farah Nadia Putri
            !
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-5 2xl:gap-7.5">
          <CardDataStats title="Jumlah Total Pengajuan" total="150" levelUp>
            <svg
              width="65"
              height="61"
              viewBox="0 0 65 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35.5698 4.75C51.5581 4.75 65 17.1009 65 32.9338C65 47.6321 50.4125 56.75 35.5698 56.75C18.8017 56.75 0 49.5388 0 32.9338C0 15.3167 17.7796 4.75 35.5698 4.75Z"
                fill="#ADB9FF"
              />
              <path
                d="M20.5 50.5C20.5 46.3579 26.0964 43 33 43C39.9036 43 45.5 46.3579 45.5 50.5"
                stroke="#14181F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M48 36.124C52.4148 37.2814 55.5 39.9245 55.5 43"
                stroke="#14181F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 36.124C13.5852 37.2814 10.5 39.9245 10.5 43"
                stroke="#14181F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M33 35.5C37.1421 35.5 40.5 32.1421 40.5 28C40.5 23.8579 37.1421 20.5 33 20.5C28.8579 20.5 25.5 23.8579 25.5 28C25.5 32.1421 28.8579 35.5 33 35.5Z"
                stroke="#14181F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M48 26.0903C49.5344 24.717 50.5 22.7212 50.5 20.5C50.5 16.3579 47.1421 13 43 13C41.0791 13 39.3269 13.7221 38 14.9097"
                stroke="#14181F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 26.0903C16.4656 24.717 15.5 22.7212 15.5 20.5C15.5 16.3579 18.8579 13 23 13C24.9209 13 26.6731 13.7221 28 14.9097"
                stroke="#14181F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </CardDataStats>
          <CardDataStats title="Pengajuan Divalidasi" total="80" levelUp>
            <svg
              width="65"
              height="61"
              viewBox="0 0 65 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35.5698 8.5C51.5581 8.5 65 20.8509 65 36.6838C65 51.3821 50.4125 60.5 35.5698 60.5C18.8017 60.5 0 53.2888 0 36.6838C0 19.0667 17.7796 8.5 35.5698 8.5Z"
                fill="#8DFFB4"
              />
              <path
                d="M60 30.5L50 40.5L45 35.5"
                stroke="#151515"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 53C12.5 47.4772 20.335 43 30 43C39.665 43 47.5 47.4772 47.5 53"
                stroke="#151515"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M30 33C36.9036 33 42.5 27.4036 42.5 20.5C42.5 13.5964 36.9036 8 30 8C23.0964 8 17.5 13.5964 17.5 20.5C17.5 27.4036 23.0964 33 30 33Z"
                stroke="#151515"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </CardDataStats>
          <CardDataStats title="Pengajuan Di Proses" total="60" levelUp>
            <svg
              width="65"
              height="61"
              viewBox="0 0 65 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35.5698 8.25C51.5581 8.25 65 20.6009 65 36.4338C65 51.1321 50.4125 60.25 35.5698 60.25C18.8017 60.25 0 53.0388 0 36.4338C0 18.8167 17.7796 8.25 35.5698 8.25Z"
                fill="#FFCD05"
                fillOpacity="0.5"
              />
              <path
                d="M12.5 53C12.5 47.4772 20.335 43 30 43C39.665 43 47.5 47.4772 47.5 53"
                stroke="#14181F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M30 33C36.9036 33 42.5 27.4036 42.5 20.5C42.5 13.5964 36.9036 8 30 8C23.0964 8 17.5 13.5964 17.5 20.5C17.5 27.4036 23.0964 33 30 33Z"
                stroke="#14181F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M52.653 31.5206V34.9339L55.4915 36.6367C55.5961 36.6994 55.6714 36.8011 55.701 36.9194C55.7305 37.0376 55.7119 37.1628 55.6492 37.2673C55.5865 37.3719 55.4848 37.4472 55.3665 37.4768C55.2483 37.5063 55.1231 37.4877 55.0186 37.425L51.9573 35.5882C51.8893 35.5474 51.8331 35.4896 51.794 35.4205C51.755 35.3515 51.7345 35.2734 51.7346 35.1941V31.5206C51.7346 31.3988 51.783 31.282 51.8691 31.1959C51.9552 31.1098 52.072 31.0614 52.1938 31.0614C52.3156 31.0614 52.4324 31.1098 52.5185 31.1959C52.6046 31.282 52.653 31.3988 52.653 31.5206ZM59.5408 29.8369C59.419 29.8369 59.3022 29.8853 59.2161 29.9714C59.13 30.0575 59.0816 30.1743 59.0816 30.2961V32.0839C58.5092 31.4081 57.9382 30.7729 57.2808 30.1071C56.281 29.1072 55.0087 28.4242 53.6229 28.1434C52.2371 27.8625 50.7993 27.9962 49.4891 28.5279C48.1789 29.0595 47.0544 29.9655 46.2561 31.1326C45.4578 32.2996 45.0212 33.6761 45.0008 35.0899C44.9803 36.5037 45.377 37.8922 46.1411 39.0819C46.9053 40.2716 48.0031 41.2097 49.2974 41.779C50.5917 42.3483 52.0251 42.5236 53.4184 42.2829C54.8118 42.0422 56.1033 41.3963 57.1316 40.4258C57.2171 40.3415 57.2662 40.227 57.2684 40.1069C57.2705 39.9868 57.2255 39.8707 57.143 39.7834C57.0605 39.6961 56.9471 39.6446 56.8271 39.6399C56.7071 39.6353 56.59 39.6778 56.501 39.7584C55.6037 40.6047 54.477 41.1677 53.2616 41.3773C52.0461 41.5868 50.7959 41.4336 49.6671 40.9367C48.5382 40.4398 47.5808 39.6213 46.9145 38.5835C46.2481 37.5456 45.9024 36.3344 45.9204 35.1012C45.9384 33.868 46.3194 32.6674 47.0159 31.6495C47.7123 30.6315 48.6932 29.8414 49.8361 29.3777C50.979 28.9141 52.2331 28.7974 53.4419 29.0425C54.6507 29.2875 55.7605 29.8832 56.6326 30.7553C57.3398 31.4716 57.9474 32.1558 58.5696 32.8982H56.4796C56.3578 32.8982 56.241 32.9466 56.1549 33.0327C56.0688 33.1188 56.0204 33.2356 56.0204 33.3574C56.0204 33.4791 56.0688 33.5959 56.1549 33.6821C56.241 33.7682 56.3578 33.8165 56.4796 33.8165H59.5408C59.6626 33.8165 59.7794 33.7682 59.8655 33.6821C59.9516 33.5959 60 33.4791 60 33.3574V30.2961C60 30.1743 59.9516 30.0575 59.8655 29.9714C59.7794 29.8853 59.6626 29.8369 59.5408 29.8369Z"
                fill="black"
                stroke="#151515"
                strokeWidth="0.6"
              />
            </svg>
          </CardDataStats>
          <CardDataStats title="Pengajuan Ditolak" total="10" levelDown>
            <svg
              width="65"
              height="61"
              viewBox="0 0 65 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35.5698 8.25C51.5581 8.25 65 20.6009 65 36.4338C65 51.1321 50.4125 60.25 35.5698 60.25C18.8017 60.25 0 53.0388 0 36.4338C0 18.8167 17.7796 8.25 35.5698 8.25Z"
                fill="#FC5E5E"
              />
              <path
                d="M47.5 40.4999L57.4999 30.5"
                stroke="#14181F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M47.5 30.5L57.4999 40.4999"
                stroke="#14181F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 53C12.5 47.4772 20.335 43 30 43C39.665 43 47.5 47.4772 47.5 53"
                stroke="#14181F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M30 33C36.9036 33 42.5 27.4036 42.5 20.5C42.5 13.5964 36.9036 8 30 8C23.0964 8 17.5 13.5964 17.5 20.5C17.5 27.4036 23.0964 33 30 33Z"
                stroke="#14181F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </CardDataStats>
          <CardDataStats title="Jumlah SP Mendekati Habis" total="20" levelDown>
            <svg
              width="65"
              height="61"
              viewBox="0 0 65 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35.5698 8C51.5581 8 65 20.3509 65 36.1838C65 50.8821 50.4125 60 35.5698 60C18.8017 60 0 52.7888 0 36.1838C0 18.5667 17.7796 8 35.5698 8Z"
                fill="#A7DCFF"
              />
              <path
                d="M54.7438 20.1313L41.6188 7.00625C41.3553 6.74245 40.9978 6.59408 40.625 6.59375H18.125C17.2548 6.59375 16.4202 6.93945 15.8048 7.55481C15.1895 8.17016 14.8438 9.00476 14.8438 9.875V51.125C14.8438 51.9952 15.1895 52.8298 15.8048 53.4452C16.4202 54.0605 17.2548 54.4062 18.125 54.4062H51.875C52.7452 54.4062 53.5798 54.0605 54.1952 53.4452C54.8105 52.8298 55.1562 51.9952 55.1562 51.125V21.125C55.1559 20.7522 55.0075 20.3947 54.7438 20.1313ZM42.0312 11.3937L50.3563 19.7188H42.0312V11.3937ZM51.875 51.5938H18.125C18.0007 51.5938 17.8815 51.5444 17.7935 51.4565C17.7056 51.3685 17.6562 51.2493 17.6562 51.125V9.875C17.6562 9.75068 17.7056 9.63145 17.7935 9.54354C17.8815 9.45564 18.0007 9.40625 18.125 9.40625H39.2188V21.125C39.2188 21.498 39.3669 21.8556 39.6306 22.1194C39.8944 22.3831 40.252 22.5312 40.625 22.5312H52.3438V51.125C52.3438 51.2493 52.2944 51.3685 52.2065 51.4565C52.1185 51.5444 51.9993 51.5938 51.875 51.5938ZM43.9062 32.375C43.9062 32.748 43.7581 33.1056 43.4944 33.3694C43.2306 33.6331 42.873 33.7812 42.5 33.7812H27.5C27.127 33.7812 26.7694 33.6331 26.5056 33.3694C26.2419 33.1056 26.0938 32.748 26.0938 32.375C26.0938 32.002 26.2419 31.6444 26.5056 31.3806C26.7694 31.1169 27.127 30.9688 27.5 30.9688H42.5C42.873 30.9688 43.2306 31.1169 43.4944 31.3806C43.7581 31.6444 43.9062 32.002 43.9062 32.375ZM43.9062 39.875C43.9062 40.248 43.7581 40.6056 43.4944 40.8694C43.2306 41.1331 42.873 41.2812 42.5 41.2812H27.5C27.127 41.2812 26.7694 41.1331 26.5056 40.8694C26.2419 40.6056 26.0938 40.248 26.0938 39.875C26.0938 39.502 26.2419 39.1444 26.5056 38.8806C26.7694 38.6169 27.127 38.4688 27.5 38.4688H42.5C42.873 38.4688 43.2306 38.6169 43.4944 38.8806C43.7581 39.1444 43.9062 39.502 43.9062 39.875Z"
                fill="black"
              />
            </svg>
          </CardDataStats>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-5 2xl:gap-7.5">
          <CardDataStats title="PLT Tervalidasi" total="100" levelUp>
            <svg
              width="65"
              height="61"
              viewBox="0 0 65 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35.5698 8.5C51.5581 8.5 65 20.8509 65 36.6838C65 51.3821 50.4125 60.5 35.5698 60.5C18.8017 60.5 0 53.2888 0 36.6838C0 19.0667 17.7796 8.5 35.5698 8.5Z"
                fill="#F5C7C8"
              />
              <path
                d="M60 30.5L50 40.5L45 35.5"
                stroke="#151515"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 53C12.5 47.4772 20.335 43 30 43C39.665 43 47.5 47.4772 47.5 53"
                stroke="#151515"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M30 33C36.9036 33 42.5 27.4036 42.5 20.5C42.5 13.5964 36.9036 8 30 8C23.0964 8 17.5 13.5964 17.5 20.5C17.5 27.4036 23.0964 33 30 33Z"
                stroke="#151515"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </CardDataStats>
          <CardDataStats title="PLT Ditolak" total="10" levelUp>
            <svg
              width="65"
              height="61"
              viewBox="0 0 65 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35.5698 8.25C51.5581 8.25 65 20.6009 65 36.4338C65 51.1321 50.4125 60.25 35.5698 60.25C18.8017 60.25 0 53.0388 0 36.4338C0 18.8167 17.7796 8.25 35.5698 8.25Z"
                fill="#F5C7C8"
              />
              <path
                d="M47.5 40.4999L57.4999 30.5"
                stroke="#14181F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M47.5 30.5L57.4999 40.4999"
                stroke="#14181F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 53C12.5 47.4772 20.335 43 30 43C39.665 43 47.5 47.4772 47.5 53"
                stroke="#14181F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M30 33C36.9036 33 42.5 27.4036 42.5 20.5C42.5 13.5964 36.9036 8 30 8C23.0964 8 17.5 13.5964 17.5 20.5C17.5 27.4036 23.0964 33 30 33Z"
                stroke="#14181F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </CardDataStats>
          <CardDataStats title="PLH Tervalidasi" total="100" levelUp>
            <svg
              width="65"
              height="61"
              viewBox="0 0 65 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35.5698 8.5C51.5581 8.5 65 20.8509 65 36.6838C65 51.3821 50.4125 60.5 35.5698 60.5C18.8017 60.5 0 53.2888 0 36.6838C0 19.0667 17.7796 8.5 35.5698 8.5Z"
                fill="#A3FCF7"
              />
              <path
                d="M60 30.5L50 40.5L45 35.5"
                stroke="#151515"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 53C12.5 47.4772 20.335 43 30 43C39.665 43 47.5 47.4772 47.5 53"
                stroke="#151515"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M30 33C36.9036 33 42.5 27.4036 42.5 20.5C42.5 13.5964 36.9036 8 30 8C23.0964 8 17.5 13.5964 17.5 20.5C17.5 27.4036 23.0964 33 30 33Z"
                stroke="#151515"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </CardDataStats>
          <CardDataStats title="PLH Ditolak" total="10" levelDown>
            <svg
              width="65"
              height="61"
              viewBox="0 0 65 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35.5698 8.25C51.5581 8.25 65 20.6009 65 36.4338C65 51.1321 50.4125 60.25 35.5698 60.25C18.8017 60.25 0 53.0388 0 36.4338C0 18.8167 17.7796 8.25 35.5698 8.25Z"
                fill="#A3FCF7"
              />
              <path
                d="M47.5 40.4999L57.4999 30.5"
                stroke="#14181F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M47.5 30.5L57.4999 40.4999"
                stroke="#14181F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 53C12.5 47.4772 20.335 43 30 43C39.665 43 47.5 47.4772 47.5 53"
                stroke="#14181F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M30 33C36.9036 33 42.5 27.4036 42.5 20.5C42.5 13.5964 36.9036 8 30 8C23.0964 8 17.5 13.5964 17.5 20.5C17.5 27.4036 23.0964 33 30 33Z"
                stroke="#14181F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </CardDataStats>
          <CardDataStats
            title="Jumlah Pejabat Menjelang Pensiun"
            total="20"
            levelDown
          >
            <svg
              width="65"
              height="61"
              viewBox="0 0 65 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35.5698 8C51.5581 8 65 20.3509 65 36.1838C65 50.8821 50.4125 60 35.5698 60C18.8017 60 0 52.7888 0 36.1838C0 18.5667 17.7796 8 35.5698 8Z"
                fill="#A7DCFF"
              />
              <path
                d="M54.7438 20.1313L41.6188 7.00625C41.3553 6.74245 40.9978 6.59408 40.625 6.59375H18.125C17.2548 6.59375 16.4202 6.93945 15.8048 7.55481C15.1895 8.17016 14.8438 9.00476 14.8438 9.875V51.125C14.8438 51.9952 15.1895 52.8298 15.8048 53.4452C16.4202 54.0605 17.2548 54.4062 18.125 54.4062H51.875C52.7452 54.4062 53.5798 54.0605 54.1952 53.4452C54.8105 52.8298 55.1562 51.9952 55.1562 51.125V21.125C55.1559 20.7522 55.0075 20.3947 54.7438 20.1313ZM42.0312 11.3937L50.3563 19.7188H42.0312V11.3937ZM51.875 51.5938H18.125C18.0007 51.5938 17.8815 51.5444 17.7935 51.4565C17.7056 51.3685 17.6562 51.2493 17.6562 51.125V9.875C17.6562 9.75068 17.7056 9.63145 17.7935 9.54354C17.8815 9.45564 18.0007 9.40625 18.125 9.40625H39.2188V21.125C39.2188 21.498 39.3669 21.8556 39.6306 22.1194C39.8944 22.3831 40.252 22.5312 40.625 22.5312H52.3438V51.125C52.3438 51.2493 52.2944 51.3685 52.2065 51.4565C52.1185 51.5444 51.9993 51.5938 51.875 51.5938ZM43.9062 32.375C43.9062 32.748 43.7581 33.1056 43.4944 33.3694C43.2306 33.6331 42.873 33.7812 42.5 33.7812H27.5C27.127 33.7812 26.7694 33.6331 26.5056 33.3694C26.2419 33.1056 26.0938 32.748 26.0938 32.375C26.0938 32.002 26.2419 31.6444 26.5056 31.3806C26.7694 31.1169 27.127 30.9688 27.5 30.9688H42.5C42.873 30.9688 43.2306 31.1169 43.4944 31.3806C43.7581 31.6444 43.9062 32.002 43.9062 32.375ZM43.9062 39.875C43.9062 40.248 43.7581 40.6056 43.4944 40.8694C43.2306 41.1331 42.873 41.2812 42.5 41.2812H27.5C27.127 41.2812 26.7694 41.1331 26.5056 40.8694C26.2419 40.6056 26.0938 40.248 26.0938 39.875C26.0938 39.502 26.2419 39.1444 26.5056 38.8806C26.7694 38.6169 27.127 38.4688 27.5 38.4688H42.5C42.873 38.4688 43.2306 38.6169 43.4944 38.8806C43.7581 39.1444 43.9062 39.502 43.9062 39.875Z"
                fill="black"
              />
            </svg>
          </CardDataStats>
        </div>

        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          <div className="col-span-12 xl:col-span-12">
            <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
              Daftar Pejabat Menjelang Pensiun
            </h4>
            <TabelPensiun />
          </div>
          <div className="col-span-12 xl:col-span-12">
            <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
              Daftar Surat Perintah Mendekati Habis
            </h4>
            <TabelSurat  />
          </div>
        </div>
      </>
    );
};

export default Admin;
