import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    Typography,
} from "@mui/material";
import { Favorite, WhatsApp } from "@mui/icons-material";
import { iDashboardProps } from "../../../../../pages/mae/dashboard";
import { Footer, Header, Preview } from "../../components";
import { formatPhone } from "../../../../../scripts";
import Link from "next/link";

export const DashboardPage = ({ users }: iDashboardProps) => {
    return (
        <div style={{ backgroundColor: "#A63C76" }}>
            <Header />
            <div style={{ paddingTop: " 6.25rem" }}></div>
            <Box
                margin={1}
                display="flex"
                justifyContent="center"
                flexWrap="wrap"
            >
                {users.map((el) => (
                    <Card
                        sx={{
                            width: "100%",
                            maxWidth: 300,
                            minHeight: 500,
                        }}
                        key={el.id}
                    >
                        <CardMedia
                            sx={{ display: "flex", justifyContent: "center" }}
                        >
                            <Preview
                                width={50}
                                un="%"
                                height={200}
                                src={el.image.url}
                            />
                        </CardMedia>
                        <CardContent
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Typography>{el.fullName}</Typography>
                            <Typography>{formatPhone(el.whatsApp)}</Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton>
                                <Favorite />
                            </IconButton>
                            <Link
                                href={
                                    "https://api.whatsapp.com/send/?phone=55" +
                                    el.whatsApp
                                }
                                target="_blank"
                            >
                                <IconButton>
                                    <WhatsApp />
                                </IconButton>
                            </Link>
                        </CardActions>
                    </Card>
                ))}
            </Box>
            <Footer />
        </div>
    );
};
