import prisma from '@src/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const body = await request.json()

    await prisma.sales.create({
        data: {
            teamId: body.id,
            goldAmount: body.gold !== 0 ? Number(body.gold) : 0,
            silverAmount: body.silver !== 0 ? Number(body.silver) : 0,
            bronzeAmount: body.bronze !== 0 ? Number(body.bronze) : 0,
        },
    })

    return NextResponse.json({ response: 'successfull' })
}
