import prisma from '@src/lib/prisma'
import { NextResponse } from 'next/server'

export async function DELETE(
    request: Request,
    {
        params,
    }: {
        params: {
            id: string
        }
    },
) {
    if (params.id) {
        await prisma.teams.delete({
            where: {
                id: params.id,
            },
        })
    } else {
        return NextResponse.json('Missing id')
    }

    const teams = await prisma.teams.findMany()

    return NextResponse.json({ teams: teams })
}
