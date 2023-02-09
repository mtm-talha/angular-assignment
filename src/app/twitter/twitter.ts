type pictureDetails = {
  name: string
  detailPara: string[]
}
export type Tweet = {
  name: string
  handle: string
  profilePicture: string
  date: string
  tweetPara: string[]
  tweetPicture?: string
  tweetPictureDetails?: pictureDetails
  likesCount: string
  commentsCount: string
  retweetCount: string
}
