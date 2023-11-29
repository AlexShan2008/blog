import { ImageLoader } from 'next/image'
import { hostName } from './constants'

export const imageLoader: ImageLoader = ({ src, width, quality }) => {
  return `${hostName}${src}?w=${width}&q=${quality || 75}`
}
