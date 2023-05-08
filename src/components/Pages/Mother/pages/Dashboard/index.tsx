import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Collapse,
    IconButton,
    IconButtonProps,
    Typography,
    styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Favorite from "@mui/icons-material/Favorite";
import WhatsApp from "@mui/icons-material/WhatsApp";
import Photo from "@mui/icons-material/Photo";
import { iDashboardProps } from "../../../../../pages/mae/dashboard";
import { Footer, Header, Preview } from "../../components";
import { formatPhone } from "../../../../../scripts";
import Link from "next/link";
import {
    api,
    createfavoriteUser,
    deletefavoriteUser,
} from "../../../../../services";
import { useMotherContext } from "../../../../../contexts";
import { useEffect, useState } from "react";
import { iUser } from "../../../../../interfaces";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

export const DashboardPage = ({ users, admin }: iDashboardProps) => {
    const { setLoading } = useMotherContext();
    const [elem, setElem] = useState(users);
    const [favoriteId, setFavoriteId] = useState<string>();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        try {
            setLoading(true);
            api.get<iUser[]>("/users").then((res) => setElem(res.data));
        } catch {
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }, [favoriteId]);

    return (
        <div style={{ backgroundColor: "#A63C76" }}>
            <Header />
            <div style={{ paddingTop: " 6.25rem" }}></div>
            <Box
                margin={1}
                display="flex"
                justifyContent="center"
                flexWrap="wrap"
                gap={5}
            >
                {elem.map((el) => (
                    <Card
                        sx={{
                            width: "100%",
                            maxWidth: 300,
                            paddingTop: 2,
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
                        <CardActions disableSpacing>
                            {!!el.favorites_in.length ? (
                                <>
                                    {el.favorites_in.map((favorite) => {
                                        if (favorite.admin_id === admin.id) {
                                            return (
                                                <IconButton
                                                    onClick={async () => {
                                                        try {
                                                            setLoading(true);
                                                            await deletefavoriteUser(
                                                                favorite.id
                                                            );
                                                            setFavoriteId(
                                                                favorite.id
                                                            );
                                                        } catch {
                                                            setLoading(false);
                                                        } finally {
                                                            setLoading(false);
                                                        }
                                                    }}
                                                    key={el.id}
                                                >
                                                    <Favorite color="error" />
                                                </IconButton>
                                            );
                                        }
                                        return (
                                            <IconButton
                                                onClick={async () => {
                                                    try {
                                                        setLoading(true);
                                                        await createfavoriteUser(
                                                            el.id
                                                        );
                                                        setFavoriteId(el.id);
                                                    } catch {
                                                        setLoading(false);
                                                    } finally {
                                                        setLoading(false);
                                                    }
                                                }}
                                                key={el.id}
                                            >
                                                <Favorite />
                                            </IconButton>
                                        );
                                    })}
                                </>
                            ) : (
                                <IconButton
                                    onClick={async () => {
                                        try {
                                            setLoading(true);
                                            await createfavoriteUser(el.id);
                                            setFavoriteId(el.id);
                                        } catch {
                                            setLoading(false);
                                        } finally {
                                            setLoading(false);
                                        }
                                    }}
                                >
                                    <Favorite />
                                </IconButton>
                            )}
                            <Link href={el.image.url} target="_blank">
                                <IconButton>
                                    <Photo />
                                </IconButton>
                            </Link>
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
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>{el.history}</Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                ))}
            </Box>
            <Footer />
        </div>
    );
};
