import { ChangeEvent, useState } from "react";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Box, IconButton, InputLabel, Typography } from "@mui/material";
import { limitString } from "../../../../../scripts";
import { useFormContext } from "react-hook-form-mui";
import { useMotherContext } from "../../../../../contexts";

export const InputFile = () => {
    const { setFile } = useMotherContext();
    const [fileName, setFileName] = useState("Nenhum arquivo escolhido");
    const {
        setValue,
        formState: { errors },
    } = useFormContext();

    let message: string;
    let colorError = "#0009";

    try {
        if (errors.image) {
            colorError = "#D91604";
            message = String(errors.image.message);
        }
    } catch {}

    const verifyFile = (e: ChangeEvent<HTMLInputElement>) => {
        try {
            const image = e.target.files[0];
            const maxSize = 5 * 1024 * 1024;
            if (image.size > maxSize) {
                setFile(null);
                setFileName(limitString(image.name));
                setValue("image", null);
            } else {
                setFile(image);
                setFileName(limitString(image.name));
                setValue("image", fileName);
            }
        } catch {
            setFile(null);
            setFileName("Nenhum arquivo escolhido");
            setValue("image", "");
        }
    };

    return (
        <Box position="relative" marginBottom={2}>
            <Box display="flex" alignItems="center" gap={1}>
                <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                >
                    <input
                        hidden
                        id="image"
                        accept="image/jpeg,
                        image/jpg,
                        image/png,
                        image/webp"
                        type="file"
                        onChange={verifyFile}
                    />
                    <PhotoCamera />
                </IconButton>
                <InputLabel
                    htmlFor="image"
                    sx={{ cursor: "pointer", color: `${colorError}` }}
                >
                    {fileName}
                </InputLabel>
            </Box>
            {message && (
                <Typography
                    position="absolute"
                    left={15}
                    fontSize={12}
                    color="#D91604"
                >
                    {message}
                </Typography>
            )}
        </Box>
    );
};
