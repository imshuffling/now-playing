const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

async function getAuthorizationToken() {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token ?? "",
    }),
  }).then((r) => r.json());

  return `Bearer ${response.access_token}`;
}

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

export async function nowPlaying() {
  const Authorization = await getAuthorizationToken();
  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization,
    },
    cache: "no-store",
  });
  if (response.status === 200) {
    return response.json();
  }
  return {};
}
