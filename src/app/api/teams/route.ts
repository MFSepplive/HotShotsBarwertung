import { NextResponse } from 'next/server'
import prisma from '@src/lib/prisma'

export async function POST(request: Request) {
    const body = await request.json()

    await prisma.teams.create({
        data: body,
    })

    const teams = await prisma.teams.findMany()

    return NextResponse.json({ teams: teams })
}

export async function GET() {
    const teams = await prisma.teams.findMany()

    const salesPerTeam = await prisma.sales.groupBy({
        by: ['teamId'],
        _sum: {
            goldAmount: true,
            silverAmount: true,
            bronzeAmount: true,
        },
    })

    const teamsWithAmounts = teams.map((team) => {
        const sales = salesPerTeam.find((s) => s.teamId === team.id)

        return {
            ...team,
            gold: sales?._sum.goldAmount || 0,
            silver: sales?._sum.silverAmount || 0,
            bronze: sales?._sum.bronzeAmount || 0,
        }
    })

    return NextResponse.json({ teams: teamsWithAmounts })
}
