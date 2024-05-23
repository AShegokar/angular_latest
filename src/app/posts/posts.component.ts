import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
postList: any;
public postForm!:  FormGroup;
selectPost: any;
public  title1: string = ''

constructor (private postService: HomeService, private fb: FormBuilder ){}
  
ngOnInit(): void {
    this.getPostData();
    this.getPostForm();
  }
  
getPostForm(){
  this.postForm = this.fb.group({
    title: ['', Validators.required, Validators.maxLength(5)],
    body: [''],
    tags: [''],
    reactions: ['']
  })
}

get title() {
  return this.postForm.get('title');
}

getPostData(){
    this.postService.getPosts().pipe(catchError(error => {
      console.error(error)
      return throwError("Something went wrong!");
    })).subscribe((res: any) =>{
    this.postList = res.posts; 
  })
}

  deletePostData(id:number){
    this.postService.deletePost(id).subscribe();
  }

  updatedPost(selectedPost:any){
    this.title1  = 'Update Post'
    this.selectPost = selectedPost;
    this.postForm.patchValue({
      title: selectedPost.title,
      body: selectedPost.body,
      tags: selectedPost.tags,
      reactions: selectedPost.reactions
    })
  }

  add(){
    this.title1  = 'Add Post'
  }

  onSubmit(){
    if (this.selectPost.id) {
      this.postService.updatePost(this.postForm.value, this.selectPost.id).subscribe();
      this.postForm.reset();
    } else {
      this.postService.addPost(this.postForm.value).subscribe();
      this.postForm.reset()
    }
  }

}
