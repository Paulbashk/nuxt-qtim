import type { IPost } from '~/shared/types/IPost'

interface IQueryPost {
  page?: number
  limit?: number
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

    const postsWithNewServiceImage = posts.map((item) => ({
      ...item,
      image: `https://placebeard.it/1280x720?image=${item.id}`,
    }))

    if (page) {
      const postsForPage = postsWithNewServiceImage.filter(
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

    return { posts: postsWithNewServiceImage, counts, pages }
  },
  {
    maxAge: 60 * 60,
  }
)
