import { NextResponse } from 'next/server'
import prisma from '@src/lib/prisma'

export async function POST(request: Request) {
    const body = await request.json()
    console.log(body)
    await prisma.teams.create({
        data: body,
    })

    const teams = await prisma.teams.findMany()

    return NextResponse.json({ teams: teams })
}

export async function GET() {
    const teams = await prisma.teams.findMany()

    const gold = await prisma.gold.groupBy({
        by: ['teamId'],
        _sum: {
            amount: true,
        },
    })

    const silver = await prisma.silver.groupBy({
        by: ['teamId'],
        _sum: {
            amount: true,
        },
    })
    const bronze = await prisma.bronze.groupBy({
        by: ['teamId'],
        _sum: {
            amount: true,
        },
    })

    const teamsWithAmounts = teams.map((team) => {
        const goldAmount = gold.find((g) => g.teamId === team.id)?._sum.amount || 0
        const silverAmount = silver.find((s) => s.teamId === team.id)?._sum.amount || 0
        const bronzeAmount = bronze.find((b) => b.teamId === team.id)?._sum.amount || 0

        return {
            ...team,
            gold: goldAmount,
            silver: silverAmount,
            bronze: bronzeAmount,
        }
    })

    return NextResponse.json({ teams: teamsWithAmounts })
}
