import { Component } from '@angular/core'
import { Tweet } from './twitter'
import { MockTwitterData } from './mock-twitter-data';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss'],
})
export class TwitterComponent {
  mockTweets: Tweet[] = MockTwitterData
}
