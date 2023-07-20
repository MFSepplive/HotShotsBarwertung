'use server'

import prisma from '@src/lib/prisma'
import { Teams } from '@prisma/client'

export const addTeams = async (team: Teams) => {
    await prisma.teams.create({
        data: team,
    })
}
