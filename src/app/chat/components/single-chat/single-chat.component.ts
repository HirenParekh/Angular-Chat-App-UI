import {Component, Output, EventEmitter} from "@angular/core";
/**
 * Created by Hiren on 19-03-2017.
 */

@Component({
  selector:'single-chat',
  templateUrl:'./single-chat.component.html',
  styleUrls:['./single-chat.component.css']
})
export class SingleChatComponent{
  @Output()
  showContactProfile:EventEmitter<any> = new EventEmitter<any>();
  contactAvatarClicked(){
    this.showContactProfile.emit(true);
  }
}
