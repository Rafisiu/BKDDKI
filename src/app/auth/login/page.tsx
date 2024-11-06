"use client"; 

import React, { useState } from "react";
import { useRouter } from "next/navigation"; 
import RefreshIcon from "@mui/icons-material/Refresh";
import Loader from "@/components/common/Loader"; // Pastikan path ini sesuai

const SignIn: React.FC = () => {
    const router = useRouter();
    
    const [captcha, setCaptcha] = useState(generateCaptcha());
    const [userInput, setUserInput] = useState("");
    const [loading, setLoading] = useState(false); // State untuk loader

    const handleCaptchaReload = () => {
        setCaptcha(generateCaptcha());
        setUserInput(""); 
    };

    const handleButtonClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        
        if (userInput === captcha) {
            setLoading(true); // Tampilkan loader
            console.log("Login successful!");

            // Simulasi delay untuk loading (ganti dengan logika login yang sebenarnya)
            await new Promise(resolve => setTimeout(resolve, 2000));

            router.push("/dashboard/admin");
        } else {
            console.log("Invalid CAPTCHA");
        } 
    };

    return (
        <>
            {loading && <Loader />} {/* Tampilkan loader jika loading true */}
            <div className="overflow-hidden">
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="flex flex-wrap items-center">
                        <div className="hidden min-h-screen xl:block xl:w-1/2">
                            <img
                                src="/images/login-banner.png"
                                alt="Login Page"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
                            <div className="w-full p-4 sm:p-12.5 xl:p-1.5">
                                <div>
                                    <h1 className="mb-6 text-center text-4xl font-extrabold text-blue-600">
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
                                            <div className="mb-2 text-center text-2xl font-extrabold flex items-center justify-center">
                                                <div className="rounded inline-block border p-3">
                                                    {captcha}
                                                </div>
                                                <button
                                                    type="button"
                                                    className="ml-2 text-blue-600"
                                                    onClick={handleCaptchaReload}
                                                >
                                                    <RefreshIcon className="inline" />
                                                </button>
                                            </div>
                                            <input
                                                className="mt-2 w-full rounded border px-3 py-2"
                                                placeholder="masukan captcha"
                                                type="text"
                                                value={userInput}
                                                onChange={(e) => setUserInput(e.target.value)}
                                            />
                                        </div>
                                        <button
                                            className="w-full rounded bg-blue-600 py-2 text-white"
                                            type="button" // Ganti ke type="button" agar tidak submit form
                                            onClick={handleButtonClick} // Aksi navigasi ke halaman dashboard
                                        >
                                            <div className="text-center">Login</div>
                                        </button>
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

const generateCaptcha = () => {
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
};

export default SignIn;
