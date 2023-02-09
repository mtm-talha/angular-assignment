import { Component } from '@angular/core'
import { Tweet } from './twitter'

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss'],
})
export class TwitterComponent {
  tweets: Tweet[] = [
    {
      name: 'Elon Musk',
      handle: '@elonmusk',
      profilePicture: '../../assets/img/At4Drbpr_400x400.jpg',
      date: 'Mar 7',
      tweetPara: [
        'For those who (mistakenly) think that this is a radiation risk, pick what you think is the worst location. I will travel there & eat locally grown food on TV.',
        'I did this in Japan many years ago, shortly after Fukushima. Radiation risk is much, much lower than ost people believe',
      ],

      commentsCount: '5,236',
      retweetCount: '15.9k',
      likesCount: '169.6k',
    },
    {
      name: 'Sawyer Merritt',
      handle: '@SawyerMerritt',
      profilePicture: '../../assets/img/OOaMpesF_400x400.jpg',
      date: '17h',
      tweetPara: [
        `NEWS: SEC, following Musk's criticism, ready to distribute funds from Tesla settlement.`,
        `The top U.S. securities regulator asked a judge for permission to distribute $40 million to investors it obtained in a 2018 civil settlement with Elon Musk and Tesla`,
      ],
      tweetPicture: '../../assets/img/S4UY4NF5GVLCDNW4DO4FRNJ3EA.jpg',
      tweetPictureDetails: {
        name: 'reuters.com',
        detailPara: [
          `SEC, following Musk's criticism, ready to distribute funds from Tesla s...`,
          `The top U.S. securities regulator asked a judge for permission to distribute $40 million to investors it obtained in a 2018 civil settlement...`,
        ],
      },
      commentsCount: '94',
      retweetCount: '107',
      likesCount: '941',
    },
    {
      name: 'Elon Musk',
      handle: '@elonmusk',
      profilePicture: '../../assets/img/At4Drbpr_400x400.jpg',
      date: 'Mar 7',
      tweetPara: [
        'For those who (mistakenly) think that this is a radiation risk, pick what you think is the worst location. I will travel there & eat locally grown food on TV.',
        'I did this in Japan many years ago, shortly after Fukushima. Radiation risk is much, much lower than ost people believe',
      ],

      commentsCount: '5,242',
      retweetCount: '15.9k',
      likesCount: '169.7k',
    },
  ]
}
