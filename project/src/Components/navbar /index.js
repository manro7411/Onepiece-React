import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import NavbarItem from "./Navbaritem.js";

const Index = () => {
    return (
        <Box
            width="100%"
            sx={{
                boxShadow:
                    "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    height: 64,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Typography variant="h5">CSC105 To-do</Typography>
                <Stack flexDirection="row">
                    <NavbarItem herf="/src/main.jsx" target="_blank" title="Home" />
                    <NavbarItem title="Account" />
                    <NavbarItem title="About" />
                </Stack>
            </Container>
        </Box>
    );
};

export default Index;
