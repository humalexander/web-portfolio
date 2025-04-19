export const getBlogs = async () => {
  const mediumFeed = 'https://medium.com/feed/@alexanderhum'
  const rssToJsonURL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
    mediumFeed
  )}`

  const res = await fetch(rssToJsonURL, {
    headers: {
      Accept: 'application/json',
      'User-Agent': 'Mozilla/5.0' // helps avoid being blocked
    }
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch Medium blog: ${res.status}`)
  }

  const data = await res.json()
  return data.items
}
