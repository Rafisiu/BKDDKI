"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import RefreshIcon from "@mui/icons-material/Refresh";
import Loader from "@/components/common/Loader";
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import "@fortawesome/fontawesome-free/css/all.min.css";

const SignIn: React.FC = () => {
  const router = useRouter();

  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [userInput, setUserInput] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // State untuk loader
  const [showPassword, setShowPassword] = useState(false);

  const handleCaptchaReload = () => {
    setCaptcha(generateCaptcha());
    setUserInput("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleButtonClick = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();

    if (userInput === captcha) {
      setLoading(true);

      try {
        const response = await axios.post("/api/auth/signin", {
          username: username,
          password: password,
        });

        if (response.status === 200) {
          const { user_account } = response.data;
          localStorage.setItem("nama_pegawai", user_account.nama_pegawai);
          localStorage.setItem("user_group_id", user_account.user_group_id);
          localStorage.setItem("user_account", JSON.stringify(user_account));
          const menuIds = user_account.permission_menus.map(
            (menu: { menu_id: number }) => menu.menu_id,
          );
          localStorage.setItem("permission_menu_ids", JSON.stringify(menuIds));

          // Log the permission menu IDs to verify
          console.log("Permission Menu IDs:", menuIds);
          const token = response.data.access_token;

          Cookies.set("token", token, {
            expires: 1,
          });

          Swal.fire({
            title: "Login Successful!",
            text: "You have successfully logged in.",
            imageUrl: "/images/swal/swal-success.png",
            imageWidth: 120,
            imageHeight: 100,
            showConfirmButton: false, // No button, auto close
            timer: 1500, // Close after 1.5 seconds
          }).then(() => {
            if (user_account.user_group_id === 20) {
              router.push("/menu");
            } else {
              router.push("/dashboard/admin");
            }
          });
        } else {
          const errorMessage =
            response.data.message ||
            "Login failed: Check your username or password.";
          Swal.fire({
            title: "Login Failed",
            text: errorMessage,
            imageUrl: "/images/swal/swal-gagal.png",
            imageWidth: 120,
            imageHeight: 100,
            confirmButtonText: "Try Again",
            customClass: {
              confirmButton: "bg-blue-600 text-white",
            },
          });
        }
      } catch (error: any) {
        console.error("Error during login:", error);
        const errorMessage =
          error.response?.data?.message ||
          "An error occurred. Please try again.";
        Swal.fire({
          title: "Error",
          text: errorMessage,
          imageUrl: "/images/swal/swal-gagal.png",
          imageWidth: 120,
          imageHeight: 100,
          confirmButtonText: "OK",
          customClass: {
            confirmButton: "bg-blue-600 text-white",
          },
        });
      } finally {
        // Ensure loader is hidden even if there's an error
        setLoading(false);
      }
    } else {
      Swal.fire({
        title: "Invalid CAPTCHA",
        text: "Please check the CAPTCHA and try again.",
        imageUrl: "/images/swal/swal-gagal.png",
        imageWidth: 120,
        imageHeight: 100,
        confirmButtonText: "OK",
        customClass: {
          confirmButton: "bg-blue-600 text-white",
        },
      });
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
                  <form className="mx-15">
                    <div className="mb-4">
                      <label className="block font-bold">NRK</label>
                      <input
                        className="w-full rounded border px-3 py-2"
                        placeholder="masukan 6 karakter NRK"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block font-bold">Password</label>
                      <div className="relative">
                        <input
                          className="w-full rounded border px-3 py-2"
                          placeholder="minimal 8 karakter"
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <i
                          className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} text-gray-500 absolute right-3 top-3 cursor-pointer`}
                          onClick={togglePasswordVisibility}
                        ></i>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="mb-2 flex items-center justify-center text-center text-2xl font-extrabold">
                        <div className="inline-block rounded border p-3">
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
                  <div className="mt-18 text-center text-sm">
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
