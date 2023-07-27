import prisma from '@src/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const body = await request.json()

    if (Number(body.gold !== 0)) {
        await prisma.gold.create({
            data: {
                amount: Number(body.gold),
                teamId: body.id,
            },
        })
    }

    if (Number(body.silver) !== 0) {
        await prisma.silver.create({
            data: {
                amount: Number(body.silver),
                teamId: body.id,
            },
        })
    }

    if (Number(body.bronze) !== 0) {
        await prisma.bronze.create({
            data: {
                amount: Number(body.bronze),
                teamId: body.id,
            },
        })
    }

    return NextResponse.json({ response: 'successfull' })
}
