import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
postList: any;
public postForm!:  FormGroup;

constructor (private postService: HomeService, private fb: FormBuilder ){}
  
ngOnInit(): void {
    this.getPostData();
    this.getPostForm();
  }
  
getPostForm(){
  this.postForm = this.fb.group({
    title: [''],
    body: [''],
    tags: [''],
    reactions: ['']
  })
}

getPostData(){
    this.postService.getPosts().subscribe((res: any) =>{
    this.postList = res.posts; 
  })
}

  deletePostData(id:number){
    this.postService.deletePost(id).subscribe();
  }

  onSubmit(){
    console.log(this.postForm?.value, "AJ")
    this.postService.addPost(this.postForm.value).subscribe();
  }

}
