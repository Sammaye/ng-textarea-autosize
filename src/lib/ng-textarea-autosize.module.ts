import { NgModule } from '@angular/core';
import {NgTextareaAutosizeDirective} from "./ng-textarea-autosize.directive";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [NgTextareaAutosizeDirective],
  imports: [
    CommonModule,
  ],
  exports: [NgTextareaAutosizeDirective]
})
export class NgTextareaAutosizeModule { }
