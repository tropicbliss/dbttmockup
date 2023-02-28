import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const taskRouter = createTRPCRouter({
    deleteTask: protectedProcedure.input(z.object({
        id: z.string().cuid()
    })).mutation(async ({ ctx, input }) => {
        try {
            await ctx.prisma.post.delete({
                where: {
                    id: input.id
                }
            })
        } catch (error) {
            console.error(error)
        }
    }),
    getAllTasks: protectedProcedure.query(async ({ ctx }) => {
        try {
            return await ctx.prisma.post.findMany({
                select: {
                    id: true,
                    name: true,
                    dueAt: true,
                },
                // where: {
                //     userId: ctx.session.user.id
                // },
                orderBy: {
                    dueAt: "asc"
                }
            })
        } catch (error) {
            console.error(error)
        }
    })
})
