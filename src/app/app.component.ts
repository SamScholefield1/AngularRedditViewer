import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DisplayService } from './display.service';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DisplayService]
})
export class AppComponent {

  title = 'Basic Reddit Viewer';
  subreddit: string;
  public isClicked: boolean = false;

  posts: Post[];

  constructor(
    private location: Location,
    private data: DisplayService
  ) { }

  ngOnInit() {
    this.data.getPost(this.subreddit).subscribe(posts => this.posts = posts);
  }

  onKey(event: any) { // without type info
    this.subreddit = event.target.value;
  }

  getPost(): void {
    this.data.getPost(this.subreddit).subscribe(posts => this.posts = posts);
  }
}