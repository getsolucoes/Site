import { PrismaClient } from "@prisma/client";
import moment from "moment";

const prisma = new PrismaClient();

export async function patchLocationGet(id: string) {
    const location = await prisma.location.findFirst({
        where: { AND: { id, userId: null } },
    });

    if (location) {
        if (location.expiredAt && moment.utc().isSameOrAfter(location.expiredAt)) {
            const locationPatch = await prisma.location.update({
                data: {
                    expiredAt: moment.utc().add(3, "minute").format(),
                },
                where: { id },
            });

            return locationPatch;
        } else if (!location.expiredAt) {
            const locationPatch = await prisma.location.update({
                data: { expiredAt: moment.utc().add(3, "minute").format() },
                where: { id },
            });

            return locationPatch;
        }
    }
    return {};
}
