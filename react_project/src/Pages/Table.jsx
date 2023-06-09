import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ردیف", width: 70 },
  {
    field: "personalNumber",
    headerName: "شماره پرسنلی",
    type: "number",
    width: 100,
  },
  {
    field: "fullName",
    headerName: "نام و نام خانوادگی",

    sortable: true,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "signUpDate",
    headerName: "تاریخ استخدام",

    sortable: true,
    width: 160,
  },
  {
    field: "YearsOfService",
    headerName: "سابقه خدمت",

    sortable: true,
    width: 160,
  },
];

const rows = [
  {
    id: 1,
    lastName: "اکبری",
    firstName: "حامد",
    personalNumber: 35,
    signUpDate: "1382 , 04 , 22",
    YearsOfService: "دارد",
  },
  {
    id: 2,
    lastName: "امینی",
    firstName: "مجید",
    personalNumber: 42,
    signUpDate: "1380 , 12 , 14",
    YearsOfService: "دارد",
  },
  {
    id: 3,
    lastName: "راستگو",
    firstName: "صادق",
    personalNumber: 45,
    signUpDate: "1381 , 10 , 23",
    YearsOfService: "ندارد",
  },
  {
    id: 4,
    lastName: "اصغری",
    firstName: "حمیدرضا",
    personalNumber: 16,
    signUpDate: "1375 , 07 , 08",
    YearsOfService: "دارد",
  },
  {
    id: 5,
    lastName: "اکبرزاده",
    firstName: "امیر",
    personalNumber: 13,
    signUpDate: "1382 , 04 , 22",
    YearsOfService: "ندارد",
  },
  {
    id: 6,
    lastName: "اصغری",
    firstName: "یگانه",
    personalNumber: 150,
    signUpDate: "1382 , 05 , 15",
    YearsOfService: "ندارد",
  },
  {
    id: 7,
    lastName: "ردینگتون",
    firstName: "ریموند",
    personalNumber: 44,
    signUpDate: "1378 , 03 , 26",
    YearsOfService: "دارد",
  },
  {
    id: 8,
    lastName: "آیدا",
    firstName: "حسینی",
    personalNumber: 36,
    signUpDate: "1382 , 04 , 08",
    YearsOfService: "دارد",
  },
  {
    id: 9,
    lastName: "سورنا",
    firstName: "رنجور",
    personalNumber: 65,
    signUpDate: "1369 , 06 , 01",
    YearsOfService: "دارد",
  },
];

export default function Table() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
