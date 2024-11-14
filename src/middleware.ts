import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const match = request.nextUrl.pathname.match(/^\/article\/(?<slug>[a-z0-9-]+)\.html/i)
    if (match !== null && match.groups !== undefined && match.groups['slug'].length > 0) {
        return NextResponse.redirect(new URL(`/articles/${match.groups['slug']}`, request.url), {status: 301})
    }
}
