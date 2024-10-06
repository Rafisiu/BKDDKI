import { useMemo, useCallback } from "react";
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

const columnHelper = createMRTColumnHelper<Person>();

type Person = {
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  city: string;
};

// Simulasi data
const data: Person[] = [
  {
    name: {
      firstName: "SKPD-INPUT-PENGAJUAN",
      lastName: "SKPD Input Pengajuan",
    },
    address: "-Dashboard Input -Pengajuan PLT -Input Pengajuan PLH",
    city: "Aktif",
  },
  {
    name: {
      firstName: "SKPD-INPUT-PENGAJUAN",
      lastName: "SKPD Input Pengajuan",
    },
    address: "-Dashboard Input -Pengajuan PLT -Input Pengajuan PLH",
    city: "Aktif",
  },
  {
    name: {
      firstName: "SKPD-INPUT-PENGAJUAN",
      lastName: "SKPD Input Pengajuan",
    },
    address: "-Dashboard Input -Pengajuan PLT -Input Pengajuan PLH",
    city: "Aktif",
  },
  {
    name: {
      firstName: "SKPD-INPUT-PENGAJUAN",
      lastName: "SKPD Input Pengajuan",
    },
    address: "-Dashboard Input -Pengajuan PLT -Input Pengajuan PLH",
    city: "Aktif",
  },
  {
    name: {
      firstName: "SKPD-INPUT-PENGAJUAN",
      lastName: "SKPD Input Pengajuan",
    },
    address: "-Dashboard Input -Pengajuan PLT -Input Pengajuan PLH",
    city: "Aktif",
  },
  // ... (tambah data lainnya jika diperlukan)
];

const TableOtoritas = () => {
  const router = useRouter();

  // Memoize the detail function
  const detail = useCallback(() => {
    router.push("/admin/user_management/detail");
  }, [router]);

  const columns = useMemo<MRT_ColumnDef<Person>[]>(() => {
    return [
      {
        accessorKey: "index",
        header: "No",
        size: 50,
        // Menghitung indeks di dalam kolom
        Cell: ({ row }) => row.index + 1,
      },
      {
        accessorKey: "name.firstName", //akses data bersarang dengan notasi titik
        header: "Kode Otoritas",
        size: 150,
      },
      {
        accessorKey: "name.lastName",
        header: "NIP",
        size: 150,
      },
      {
        accessorKey: "address", //normal accessorKey
        header: "Otoritas",
        size: 200,
      },
      {
        accessorKey: "city",
        header: "Status",
        size: 150,
      },
      columnHelper.display({
        id: "actions",
        size: 10,
        header: "Actions",
        Cell: ({ row }: { row: MRT_Row<Person> }) => (
          <Box sx={{ display: "flex" }}>
            <Button
              onClick={detail} // tambahkan handler di sini
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
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data: dataWithIndex,
  });

  return <MaterialReactTable table={table} />;
};

export default TableOtoritas;
