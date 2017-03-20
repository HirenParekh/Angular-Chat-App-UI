import {Component, Output, EventEmitter} from "@angular/core";
/**
 * Created by Hiren on 19-03-2017.
 */

@Component({
  selector:'chat-list',
  templateUrl:'./chat-list.component.html',
  styleUrls:['./chat-list.component.css']
})
export class ChatListComponent{
  @Output()
  showUserProfile:EventEmitter<any> = new EventEmitter<any>();
  @Output()
  showContactProfile:EventEmitter<any> = new EventEmitter<any>();

  showAvatarClicked(){
    this.showUserProfile.emit(true);
  }
  contactAvatarClicked(){
    this.showContactProfile.emit(true);
  }
}
