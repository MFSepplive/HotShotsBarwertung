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

    return NextResponse.json({ teams: teams })
}
