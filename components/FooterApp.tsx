"use client";

import Box from '@mui/material/Box';

function FooterApp() {
    const currentYear = new Date().getFullYear();

    return (
        <Box>
            <Box sx={{ fontSize: 10, color: '#62748e' }}>
                © {currentYear} Javier Tinajo. Todos los derechos reservados. 
            </Box>
        </Box>
    )
}

export default FooterApp