import { useState, useEffect, useMemo, useCallback } from "react";
import {MaterialReactTable,useMaterialReactTable,type MRT_Row,type MRT_ColumnDef,createMRTColumnHelper,} from "material-react-table";
import { Box, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit"; // Impor ikon Edit
import DeleteIcon from "@mui/icons-material/Delete"; // Impor ikon Delete
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

const columnHelper = createMRTColumnHelper<UserMenu>();

type UserMenu = {
  i_id: number;
  nama_pegawai: string;
  nalok: string;
  user_group_name: string;
  user_enable: string;
  n_menu: string;
  e_menu: string | null;
  n_link: string | null;
  c_tipe_menu: string;
  c_aktif: string;
  user_id: number;
};

    const TableUserMenu = () => {
    const router = useRouter();
    const [data, setData] = useState<UserMenu[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const token = Cookies.get("token");

          if (!token) {
            console.error("Token not found in cookies");
            return;
          }

          const response = await axios.get("/api/user_menu/list", {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });

          setData(response.data.data); // Menyimpan data dari API
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }, []);

    // Memoize the detail function
    const detail = useCallback(
      (id: number) => {
        router.push(`/user_menu/edit/${id}`);
      },
      [router],
    );

    const handleDelete = async (id: number) => {
      const token = Cookies.get("token");
      if (!token) {
        console.error("Token not found in cookies");
        return;
      }

      // Konfirmasi penghapusan
      const result = await Swal.fire({
        text: "Apakah Anda yakin ingin menghapus data user menu?",
        imageUrl: "/images/swal/swal-confirmation.png",
        imageWidth: 120,
        imageHeight: 100,
        showCancelButton: true,
        confirmButtonText: "Ya, hapus!",
        cancelButtonText: "Batal",
        customClass: {
          confirmButton: "bg-blue-600 text-white",
          cancelButton: "bg-red text-white",
        },
      });

      if (result.isConfirmed) {
        try {
          // Hapus data melalui API
          const response = await axios.delete(`/api/user_menu/delete?id=${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });

          if (response.status === 200) {
            setData((prevData) => prevData.filter((item) => item.user_id !== id));
            Swal.fire({
              title: "Terhapus!",
              text: "Data berhasil dihapus.",
              imageUrl: "/images/swal/swal-success.png",
              imageWidth: 120,
              imageHeight: 100,
              confirmButtonText: "OK",
              customClass: {
                confirmButton: "bg-blue-600 text-white",
              },
            });
          }
        } catch (error: any) {
          console.error("Error deleting data:", error);
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
        }
      }
    };

    const columns = useMemo<MRT_ColumnDef<UserMenu>[]>(() => {
        return [
          {
            accessorKey: "index",
            header: "No",
            size: 50,
            Cell: ({ row }) => row.index + 1,
          },
          {
            accessorKey: "user_id",
            header: "NRK",
            size: 150,
          },
          {
            accessorKey: "nama_pegawai",
            header: "Nama Lengkap",
            size: 150,
          },
          {
            accessorKey: "nalok",
            header: "SKPD/Nama",
            size: 150,
          },
          {
            accessorKey: "user_group_name",
            header: "Nama Menu",
            size: 200,
          },
          {
            accessorKey: "user_enable",
            header: "Status",
            size: 100,
            Cell: ({ cell }) =>
              cell.getValue() === "1" ? "Aktif" : "Tidak Aktif",
          },
          columnHelper.display({
            id: "actions",
            size: 10,
            header: "Actions",
            Cell: ({ row }: { row: MRT_Row<UserMenu> }) => (
              <Box sx={{ display: "flex" }}>
                <Button
                  onClick={() => detail(row.original.user_id)}
                  sx={{ padding: 0, margin: 0, minWidth: 0, marginRight: 0.5 }}
                >
                  <EditIcon fontSize="small" />
                </Button>
                <Button
                  onClick={() => handleDelete(row.original.user_id)}
                  sx={{ padding: 0, margin: 0, minWidth: 0, marginRight: 0.5 }}
                >
                  <DeleteIcon fontSize="small" />
                </Button>
              </Box>
            ),
          }),
        ];
    }, [detail]);

    // Memoize data with index
    const dataWithIndex = useMemo(
        () => data.map((item, index) => ({ index, ...item })),
        [data],
    );

    const table = useMaterialReactTable({
        columns,
        data: dataWithIndex,
    });

    return <MaterialReactTable table={table} />;
};

export default TableUserMenu;
