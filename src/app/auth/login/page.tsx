import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "BKDDKI | LOGIN",
    };

    const SignIn: React.FC = () => {
    return (
    <>
        <div className="overflow-hidden">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex flex-wrap items-center">
            <div className="hidden min-h-screen xl:block xl:w-1/2 ">
                <img
                src="/images/login-banner.png"
                alt="Login Page"
                className="h-full w-full object-cover"
                />
            </div>
            <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
                <div className="w-full p-4 sm:p-12.5 xl:p-1.5">
                <div>
                    <h1 className="mb-6 text-center text-3xl font-extrabold text-blue-600">
                    LOGIN
                    </h1>
                    <form className="mx-15 ">
                    <div className="mb-4">
                        <label className="block font-bold">NRK</label>
                        <input
                        className="w-full rounded border px-3 py-2"
                        placeholder="masukan 6 karakter NRK"
                        type="text"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold">Password</label>
                        <div className="relative">
                        <input
                            className="w-full rounded border px-3 py-2"
                            placeholder="minimal 8 karakter"
                            type="password"
                        />
                        <i className="fas fa-eye text-gray-500 absolute right-3 top-3"></i>
                        </div>
                    </div>
                    <div className="mb-4">
                        <img
                        alt="Captcha"
                        className="mb-2"
                        height="40"
                        src=""
                        width="100"
                        />
                        <input
                        className="w-full rounded border px-3 py-2"
                        placeholder="masukan captcha"
                        type="text"
                        />
                    </div>
                    <Link
                        className="w-full rounded bg-blue-600 py-2 text-white"
                        type="submit"
                        href="/dashboard/admin" 
                    >
                        <div className="text-center">Login</div>
                    </Link>
                    </form>
                    <div className="mt-18 text-center text-sm ">
                    <p className="font-bold">
                        Badan Kepegawaian Daerah Provinsi DKI Jakarta
                    </p>
                    <p>
                        Gedung Balai Kota - Jalan Medan Merdeka Selatan No. 8-9,
                        Blok G - Lantai 20/21
                    </p>
                    <p>
                        Kelurahan Gambir, Kecamatan Gambir, Kota Administrasi
                        Jakarta Pusat, Provinsi DKI Jakarta 10110
                    </p>
                    <p>Telepon: 021-3822333</p>
                    <p>Email: bkdprov@jakarta.go.id</p>
                    </div>
                </div>
                <br />
                <br />
                <br />
                </div>
            </div>
            </div>
        </div>
        </div>
      </>
    );
};

export default SignIn;
