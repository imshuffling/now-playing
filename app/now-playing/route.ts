import { renderPlayer } from "@/components/player";
import { nowPlaying } from "@/utils/spotify";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const {
    item = {} as any,
    is_playing: isPlaying = false,
    progress_ms: progress = 0,
  } = (await nowPlaying()) ?? {};

  const { searchParams } = new URL(request.url);
  if (searchParams.has("open")) {
    if (item?.external_urls?.spotify) {
      return Response.redirect(item.external_urls.spotify, 302);
    }
    return new Response(null, { status: 200 });
  }

  const { duration_ms: duration, name: track } = item;
  const images = item.album?.images ?? [];
  const cover = images[images.length - 1]?.url;

  let coverImg: string | null = null;
  if (cover) {
    const buff = await (await fetch(cover)).arrayBuffer();
    coverImg = `data:image/jpeg;base64,${Buffer.from(buff).toString("base64")}`;
  }

  const artist = (item.artists ?? [])
    .map(({ name }: { name: string }) => name)
    .join(", ");

  const svg = renderPlayer({
    cover: coverImg,
    artist,
    track,
    isPlaying,
    progress,
    duration,
  });

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "s-maxage=1, stale-while-revalidate",
    },
  });
}
