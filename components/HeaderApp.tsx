"use client";

import Box from "@mui/material/Box"
import MenuComponent from "./MenuComponent";

function HeaderApp() {
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3b82f6" className="size-10">
                    <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z" clipRule="evenodd" />
                </svg>
                <h5>Javier Tinajo</h5>
            </Box>
            <MenuComponent />
        </Box>
    )
}

export default HeaderApp