import type { IPost } from '~/shared/types/IPost'

interface IQueryPost {
  id: string | string[]
}

export default defineEventHandler(async (event) => {
  const { id }: IQueryPost = await getQuery(event)

  const config = useRuntimeConfig(event)

  const post: IPost = await $fetch(`${config.apiUrl}/posts/${id}`, {
    method: 'GET',
  })

  if (!post) {
    throw createError({
      status: 404,
      message: 'Post NotFound',
    })
  }

  const postWithNewServiceImage: IPost = {
    ...post,
    image: `https://placebeard.it/1280x720?image=${post.id}`,
  }

  return { post: postWithNewServiceImage }
})
