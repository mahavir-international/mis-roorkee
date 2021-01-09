import React from 'react'
import MUIDataTable from "mui-datatables";

export default function StudentTable() {
    return (
        <div>
            <MUIDataTable
            title={"Employee List"}
            data={data}
            columns={columns}
            options={options}
            />
        </div>
    )
}
