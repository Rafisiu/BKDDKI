import { useState, useEffect, useMemo, useCallback } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_Row,
  type MRT_ColumnDef,
  createMRTColumnHelper,
} from "material-react-table";
import { Box, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

const columnHelper = createMRTColumnHelper<Menu>();

type Menu = {
  i_id: number;
  n_menu: string;
  e_menu: string | null;
  n_link: string | null;
  c_tipe_menu: string;
  c_aktif: string;
};

interface TableMenuProps {
  selectedMenu: string;
}

const TableMenu = ({ selectedMenu }: TableMenuProps) => {
  const router = useRouter();
  const [data, setData] = useState<Menu[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("token");

        if (!token) {
          console.error("Token not found in cookies");
          return;
        }

        // Tentukan endpoint API berdasarkan selectedMenu
        const endpoint = selectedMenu
          ? `/api/menu/list?parent=${selectedMenu}`
          : `/api/menu/list`;

        const response = await axios.get(endpoint, {
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
  }, [selectedMenu]);

  const detail = useCallback(
    (id: number) => {
      router.push(`/menu/edit/${id}`);
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
      text: "Apakah Anda yakin ingin menghapus data menu?",
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
        const response = await axios.delete(`/api/menu/delete?id=${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200) {
          setData((prevData) => prevData.filter((item) => item.i_id !== id));
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
      } catch (error : any) {
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

  const columns = useMemo<MRT_ColumnDef<Menu>[]>(() => {
    return [
      {
        accessorKey: "index",
        header: "No",
        size: 50,
        Cell: ({ row }) => row.index + 1,
      },
      {
        accessorKey: "n_menu",
        header: "Nama Menu",
        size: 150,
      },
      {
        accessorKey: "e_menu",
        header: "Uraian",
        size: 150,
      },
      {
        accessorKey: "n_link",
        header: "Link",
        size: 200,
      },
      {
        accessorKey: "c_tipe_menu",
        header: "Tipe",
        size: 150,
      },
      {
        accessorKey: "c_aktif",
        header: "Status",
        size: 100,
        Cell: ({ cell }) => (cell.getValue() === "1" ? "Aktif" : "Tidak Aktif"),
      },
      columnHelper.display({
        id: "actions",
        size: 10,
        header: "Aksi",
        Cell: ({ row }: { row: MRT_Row<Menu> }) => (
          <Box sx={{ display: "flex" }}>
            <Button
              onClick={() => detail(row.original.i_id)}
              sx={{ padding: 0, margin: 0, minWidth: 0, marginRight: 0.5 }}
            >
              <EditIcon fontSize="small" />
            </Button>
            <Button
              onClick={() => handleDelete(row.original.i_id)}
              sx={{ padding: 0, margin: 0, minWidth: 0, marginRight: 0.5 }}
            >
              <DeleteIcon fontSize="small" />
            </Button>
          </Box>
        ),
      }),
    ];
  }, [detail]);

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

export default TableMenu;
