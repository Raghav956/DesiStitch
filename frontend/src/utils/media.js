export const isVideo = (url) => {

  if (!url) return false

  return (

    url.toLowerCase().includes('.mp4')

    ||

    url.toLowerCase().includes('.mov')

    ||

    url.toLowerCase().includes('.webm')

    ||

    url.includes('/video/')

  )

}