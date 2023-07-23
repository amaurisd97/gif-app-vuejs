import type { Gifs } from '@/interfaces/Gifs.model'

export default async function useFetch(searchParam: string) {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=WYOkAOgvoR7Yx77auv7lJeMbj5uAMwsj&q=${searchParam}&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
  let loading = true
  try {
    const response = await fetch(URL)
    if (!response.ok) throw new Error('')
    const gifs: Gifs = await response.json()
    const { data } = gifs
    loading = false
    return { loading, data }
  } catch (err) {
    throw new Error('Something go wrong')
  }
}
