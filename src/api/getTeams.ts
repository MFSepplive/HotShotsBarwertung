import prisma from '@src/lib/prisma'
import { Teams } from '@prisma/client'

export const getTeams = async (): Promise<Teams[]> => {
    const teams = await prisma.teams.findMany()
    return teams
}
