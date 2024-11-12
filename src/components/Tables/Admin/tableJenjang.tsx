import { useState, useEffect, useMemo, useCallback } from "react";
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_Row,
    type MRT_ColumnDef,
    createMRTColumnHelper,
} from "material-react-table";
import { Box, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit"; // Impor ikon Edit
import DeleteIcon from "@mui/icons-material/Delete"; // Impor ikon Delete
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";

const columnHelper = createMRTColumnHelper<Jenjang>();

type Jenjang = {
  i_id: number;
  n_menu: string;
  e_menu: string | null;
  n_link: string | null;
  c_tipe_menu: string;
  c_aktif: string;
};

interface TableJenjangProps {
  selectedMenu: string;
}

const TableJenjang = ({ selectedMenu }: TableJenjangProps) => {
    const router = useRouter();
    const [data, setData] = useState<Jenjang[]>([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const token = Cookies.get("token");

            if (!token) {
            console.error("Token not found in cookies");
            return;
            }

            const endpoint = `/api/jenjang/list?parent=${selectedMenu}`;
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

    // Memoize the detail function
    const detail = useCallback(() => {
        router.push("/admin/user_management/detail");
    }, [router]);

    const columns = useMemo<MRT_ColumnDef<Jenjang>[]>(() => {
        return [
          {
            accessorKey: "index",
            header: "No",
            size: 50,
            Cell: ({ row }) => row.index + 1,
          },
          {
            accessorKey: "c_asgauth_group",
            header: "Kelompok",
            size: 150,
          },
          {
            accessorKey: "n_asgauth_jabatan",
            header: "Nama Jabatan",
            size: 150,
          },
          {
            accessorKey: "n_asgauth_plh",
            header: "TTD PLH",
            size: 200,
          },
          {
            accessorKey: "n_asgauth_plt",
            header: "TTD PLT",
            size: 150,
          },
          {
            accessorKey: "c_aktif",
            header: "Status",
            size: 100,
            Cell: ({ cell }) =>
              cell.getValue() === "true" || cell.getValue() === true
                ? "Aktif"
                : "Tidak Aktif",
          },
          {
            accessorKey: "c_tahun_berlaku", // Kolom tahun berlaku
            header: "Tahun Berlaku",
            size: 100,
          },
          {
            accessorKey: "c_tahun_berakhir", // Kolom tahun berakhir
            header: "Tahun Berakhir",
            size: 100,
          },
          columnHelper.display({
            id: "actions",
            size: 10,
            header: "Actions",
            Cell: ({ row }: { row: MRT_Row<Jenjang> }) => (
              <Box sx={{ display: "flex" }}>
                <Button
                  onClick={detail}
                  sx={{ padding: 0, margin: 0, minWidth: 0, marginRight: 0.5 }}
                >
                  <EditIcon fontSize="small" />
                </Button>
                <Button
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

export default TableJenjang;
