import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:4002/",
    timeout: 10000,
});

export async function getAllLocationsIds() {
    const locations = await api.get("locations");
    return locations.data.map((location) => {
        return {
            params: {
                id: location.id,
            },
        };
    });
}

export async function getLocationsData(id) {
    const locations = await api.patch(`locations/${id}/user`);
    return {
        id,
        ...locations.data,
    };
}
