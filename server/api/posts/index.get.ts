import type { IPhoto } from '~/shared/types/IPhoto'
import type { IPost } from '~/shared/types/IPost'

interface IQueryPost {
  page?: number
  limit?: number
}

interface IResponsePhotos {
  page: number
  per_page: number
  photos: IPhoto[]
  total_results: number
  next_page: string
}

export default defineCachedEventHandler(
  async (event) => {
    const { page, limit = 8 }: IQueryPost = await getQuery(event)

    const config = useRuntimeConfig(event)

    const posts: IPost[] = await $fetch(`${config.apiUrl}/posts`, {
      method: 'GET',
    })

    const counts = posts.length

    if (!counts) {
      throw createError({
        status: 404,
        message: 'Posts NotFound',
      })
    }

    const pages = Math.ceil(counts / limit)

    const dataPhotos: IResponsePhotos = await $fetch(
      `${config.apiUrlPixels}/curated`,
      {
        method: 'GET',
        headers: {
          Authorization: config.apiKeyPixels,
        },
        query: { per_page: counts },
      }
    )

    const mappedPostsWithServiceImage = dataPhotos
      ? posts.map((item, num) => {
          const photo = dataPhotos.photos[num]

          return {
            ...item,
            image: photo
              ? photo.src.large2x
              : `https://placebeard.it/1280x720?image=${item.id}`,
          }
        })
      : posts

    if (page) {
      const postsForPage = mappedPostsWithServiceImage.filter(
        (_, num) => limit * page > num && num >= limit * (page - 1)
      )

      if (!postsForPage.length) {
        throw createError({
          status: 404,
          message: 'Page NotFound',
        })
      }

      return { posts: postsForPage, pages, counts }
    }

    return { posts: mappedPostsWithServiceImage, counts, pages }
  },
  {
    maxAge: 60 * 60,
  }
)
