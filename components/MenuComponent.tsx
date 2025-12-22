"use client";

import { useState } from 'react';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

function MenuComponent() {
    const pages: { label: string; id: string }[] = [
        { label: 'Sobre mí', id: 'presentation' },
        { label: 'Proyectos', id: 'projects' },
        { label: 'Tecnologías', id: 'skills' },
        { label: 'Contáctame', id: 'contact' }
    ];

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 40; // Altura total del AppBar + SubHeader en px
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <Box>
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>

                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{ display: { xs: 'block', md: 'none' } }}
                    >
                    {pages.map((page) => (
                        <MenuItem key={page.label} onClick={() => { handleScrollTo(page.id); handleCloseNavMenu(); }}>
                            <p>{page.label}</p>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>
                <Box sx={{ flexGrow: 1, gap: 4, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Button
                            key={page.id}
                            onClick={() => handleScrollTo(page.id)}
                            sx={{ textTransform: 'none', color: '#979797', display: 'block', "&:hover": { color: "#3b82f6" } }}
                        >
                            {page.label}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </Box>
    )
}

export default MenuComponent