import { MANGA } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

const gogo = new MANGA.MangaDex();

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const episode = await gogo.fetchChapterPages(params.id);
  return NextResponse.json(episode);
}
