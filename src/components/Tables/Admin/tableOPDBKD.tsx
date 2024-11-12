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

const columnHelper = createMRTColumnHelper<OPDBKD>();

type OPDBKD = {
    kodeOpd: string; // Kode OPD
    kodeOpdDdn: string; // Kode OPD DDN
    kodeUnit: string; // Kode Unit
    namaOpd: string; // Nama OPD
    singkatanBkd: string; // Singkatan BKD
    status: string; // Status
    wilayah: string; // Wilayah
    level: string; // Level
    alamat: string; // Alamat
    startYear: number; // Tahun Berlaku
    endYear: number; // Tahun Berakhir
};

const TableOPDBKD = () => {
    const router = useRouter();
    const [data, setData] = useState<OPDBKD[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const token = Cookies.get("token");

          if (!token) {
            console.error("Token not found in cookies");
            return;
          }

          const response = await axios.get("/api/opdbkd/list", {
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
    const detail = useCallback(() => {
        router.push("/admin/user_management/detail");
    }, [router]);

    const columns = useMemo<MRT_ColumnDef<OPDBKD>[]>(() => {
    return [
        {
            accessorKey: "index",
            header: "No",
            size: 10,
            muiTableHeadCellProps: {
                sx: {
                    padding: "8px 16px", // Padding untuk header kolom No
                    textAlign: "center",
                },
            },
            muiTableBodyCellProps: {
                sx: {
                    padding: "8px 16px", // Padding untuk data kolom No
                },
            },
            Cell: ({ row }) => row.index + 1,
        },
        {
            accessorKey: "c_opd",
            header: "Kode OPD",
            size: 150,
            muiTableHeadCellProps: {
                sx: {
                    padding: "10px", // Padding untuk header Kode OPD
                },
            },
            muiTableBodyCellProps: {
                sx: {
                    padding: "10px", // Padding untuk data Kode OPD
                },
            },
        },
        {
            accessorKey: "c_opd_ddn",
            header: "Kode OPD DDN",
            size: 150,
            muiTableHeadCellProps: {
                sx: {
                    padding: "12px", // Padding untuk header Kode OPD DDN
                },
            },
            muiTableBodyCellProps: {
                sx: {
                    padding: "12px", // Padding untuk data Kode OPD DDN
                },
            },
        },
        {
            accessorKey: "c_unitkerja",
            header: "Kode Unit",
            size: 30,
            muiTableHeadCellProps: {
                sx: {
                    padding: "1px 1px", // Padding untuk header Kode Unit
                },
            },
            muiTableBodyCellProps: {
                sx: {
                    padding: "1px 1px", // Padding untuk data Kode Unit
                },
            },
        },
        {
            accessorKey: "n_opd",
            header: "Nama OPD",
            size: 150,
            muiTableHeadCellProps: {
                sx: {
                    padding: "8px 16px", // Padding untuk header Nama OPD
                },
            },
            muiTableBodyCellProps: {
                sx: {
                    padding: "8px 16px", // Padding untuk data Nama OPD
                },
            },
        },
        {
            accessorKey: "n_opd_pendek",
            header: "Singkatan BKD",
            size: 10,
            muiTableHeadCellProps: {
                sx: {
                    padding: "1px 1px", // Padding untuk header Singkatan BKD
                },
            },
            muiTableBodyCellProps: {
                sx: {
                    padding: "1px 1px", // Padding untuk data Singkatan BKD
                },
            },
        },
        {
            accessorKey: "c_aktif",
            header: "Status",
            size: 100,
            Cell: ({ cell }) => (cell.getValue() === "true" ? "Aktif" : "Tidak Aktif"),
            muiTableHeadCellProps: {
                sx: {
                    padding: "8px", // Padding untuk header Status
                },
            },
            muiTableBodyCellProps: {
                sx: {
                    padding: "8px", // Padding untuk data Status
                },
            },
        },
        {
            accessorKey: "c_wil",
            header: "Wilayah",
            size: 100,
            muiTableHeadCellProps: {
                sx: {
                    padding: "10px", // Padding untuk header Wilayah
                },
            },
            muiTableBodyCellProps: {
                sx: {
                    padding: "10px", // Padding untuk data Wilayah
                },
            },
        },
        {
            accessorKey: "c_opd_level",
            header: "Level",
            size: 100,
            muiTableHeadCellProps: {
                sx: {
                    padding: "8px", // Padding untuk header Level
                },
            },
            muiTableBodyCellProps: {
                sx: {
                    padding: "8px", // Padding untuk data Level
                },
            },
        },
        {
            accessorKey: "a_opd",
            header: "Alamat",
            size: 200,
            muiTableHeadCellProps: {
                sx: {
                    padding: "8px 30px", // Padding untuk header Alamat
                },
            },
            muiTableBodyCellProps: {
                sx: {
                    padding: "8px", // Padding untuk data Alamat
                },
            },
        },
        {
            accessorKey: "c_tahun_berlaku",
            header: "Tahun Berlaku",
            size: 100,
            muiTableHeadCellProps: {
                sx: {
                    padding: "1ypx", // Padding untuk header Tahun Berlaku
                },
            },
            muiTableBodyCellProps: {
                sx: {
                    padding: "1px", // Padding untuk data Tahun Berlaku
                },
            },
        },
        {
            accessorKey: "c_tahun_berakhir",
            header: "Tahun Berakhir",
            size: 100,
            muiTableHeadCellProps: {
                sx: {
                    padding: "1px", // Padding untuk header Tahun Berakhir
                },
            },
            muiTableBodyCellProps: {
                sx: {
                    padding: "1px", // Padding untuk data Tahun Berakhir
                },
            },
        },
        columnHelper.display({
            id: "actions",
            size: 10,
            header: "Actions",
            muiTableHeadCellProps: {
                sx: {
                    padding: "5px 10px", // Padding pada header Actions
                },
            },
            muiTableBodyCellProps: {
                sx: {
                    padding: "5px 10px", // Padding untuk data Actions
                },
            },
            Cell: ({ row }: { row: MRT_Row<OPDBKD> }) => (
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

export default TableOPDBKD;
