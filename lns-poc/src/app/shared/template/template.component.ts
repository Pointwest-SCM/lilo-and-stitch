import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'business-card-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {

  @Output() selectedTemplate: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  selectTemplate(templateID: number) {
    console.log("VALUE: ", templateID);
      this.selectedTemplate.emit(templateID);
  }

}
