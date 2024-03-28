import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
postList: any;

constructor (private postService: HomeService ){}
  
ngOnInit(): void {
    this.getPostData();
  }

getPostData(){
  this.postService.getPosts().subscribe((res: any) =>{
    this.postList = res.posts; 
  })
  
}

}
