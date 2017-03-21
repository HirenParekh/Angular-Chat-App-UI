import {Component, Input} from "@angular/core";
/**
 * Created by hirenparekh on 21/03/17.
 */

@Component({
  selector: 'simple-msg',
  templateUrl: './simple-msg.component.html',
  styleUrls: ['./simple-msg.component.css']
})
export class SimpleMsgComponent {

  @Input()
  isSent:boolean;

  @Input()
  message:string;
}
