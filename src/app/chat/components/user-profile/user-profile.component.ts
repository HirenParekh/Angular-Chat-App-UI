import {Component, Output, EventEmitter} from "@angular/core";
/**
 * Created by Hiren on 19-03-2017.
 */

@Component({
  selector:'user-profile',
  templateUrl:'./user-profile.component.html',
  styleUrls:['./user-profile.component.css']
})
export class UserProfileComponent{
  @Output()
  closeUserProfile:EventEmitter<any> = new EventEmitter<any>();

  btnBackClicked(){
   this.closeUserProfile.emit(true);
  }
}
