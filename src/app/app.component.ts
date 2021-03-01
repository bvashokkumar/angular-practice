import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  viewMode='map';

  courses=[];

  loadCourses(){
    this.courses = [
      {id:1,name:'course1'},
      {id:2,name:'course2'},
      {id:3,name:'course3'}
    ];
  }

  trackCourse(index,course){
    return course? course.id: undefined;
  }
  

  post ={
    isFavorite:false
  }

  tweet = {
    body:'here is the body of the tweet...',
    isLiked:false,
    likesCount:0
  }

  onFavoriteChange(eventArgs: FavouriteChangedEventArgs){
    console.log("on favorite clicked",eventArgs.newValue);
  }

  onAdd(){
    this.courses.push({id:4,name:'course4'})
  }
}
