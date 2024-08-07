import { getAllPostsForHome, getAllPostsWithSlug, getAllSettings, getPostAndMorePosts } from "../../lib/api";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: any, res: any) {

  const ghost = req?.query?.ghost
  let data
  switch (ghost) {
    case 'getAllPostsWithSlug':
      data = await getAllPostsWithSlug()
      break;
    case 'getAllPostsForHome':
      data = await getAllPostsForHome()
      break
    case 'getPostAndMorePosts':
      data = await getPostAndMorePosts("welcome")
      break
    case 'getAllSettings':
      data = await getAllSettings()
      break
    default:
      data = await getAllPostsForHome()
      break;
  }

  return NextResponse.json({ status: 200, data });
}