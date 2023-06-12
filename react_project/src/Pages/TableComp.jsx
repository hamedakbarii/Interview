import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Paper, Typography } from "@mui/material";

const columns = [
  { field: "id", headerName: "ردیف", width: 70 },
  {
    field: "personalNumber",
    headerName: "شماره پرسنلی",
    type: "number",
    width: 100,
    align: "center",
  },
  {
    field: "fullName",
    headerName: "نام و نام خانوادگی",
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "signUpDate",
    headerName: "تاریخ استخدام",
    // align: "left",
    sortable: true,
    width: 160,
  },
  {
    field: "yearsOfService",
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
    yearsOfService: "دارد",
  },
  {
    id: 2,
    lastName: "امینی",
    firstName: "مجید",
    personalNumber: 42,
    signUpDate: "1380 , 12 , 14",
    yearsOfService: "دارد",
  },
  {
    id: 3,
    lastName: "راستگو",
    firstName: "صادق",
    personalNumber: 45,
    signUpDate: "1381 , 10 , 23",
    yearsOfService: "ندارد",
  },
  {
    id: 4,
    lastName: "اصغری",
    firstName: "حمیدرضا",
    personalNumber: 16,
    signUpDate: "1375 , 07 , 08",
    yearsOfService: "دارد",
  },
  {
    id: 5,
    lastName: "اکبرزاده",
    firstName: "امیر",
    personalNumber: 13,
    signUpDate: "1382 , 04 , 22",
    yearsOfService: "ندارد",
  },
  {
    id: 6,
    lastName: "اصغری",
    firstName: "یگانه",
    personalNumber: 150,
    signUpDate: "1382 , 05 , 15",
    yearsOfService: "ندارد",
  },
  {
    id: 7,
    lastName: "ردینگتون",
    firstName: "ریموند",
    personalNumber: 44,
    signUpDate: "1378 , 03 , 26",
    yearsOfService: "دارد",
  },
  {
    id: 8,
    lastName: "آیدا",
    firstName: "حسینی",
    personalNumber: 36,
    signUpDate: "1382 , 04 , 08",
    yearsOfService: "دارد",
  },
  {
    id: 9,
    lastName: "سورنا",
    firstName: "رنجور",
    personalNumber: 65,
    signUpDate: "1369 , 06 , 01",
    yearsOfService: "دارد",
  },
];

export default function TableComp() {
  return (
    <>
      <div className="w-[800px] m-0 m-auto mt-10 h-[450px] flex flex-col items-center gap-4 ">
        <Typography variant="h3" component="h3">
          Table
        </Typography>
        <DataGrid
          sx={{ borderRadius: "1rem", fontSize: "1rem" }}
          component={Paper}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[1, 2]}
        />
      </div>
    </>
  );
}
