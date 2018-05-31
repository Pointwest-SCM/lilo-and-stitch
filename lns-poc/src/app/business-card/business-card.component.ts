import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import { Options } from 'selenium-webdriver/edge';
import { TemplateComponent } from '../shared/template/template.component';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss']
})

export class BusinessCardComponent implements OnInit {

  context: CanvasRenderingContext2D;

  @ViewChild("myCanvas") myCanvas : ElementRef;
  @ViewChild('content') content: ElementRef;

  url: any;
  cnvs: any;
  ctx: any;
  mirror: any;
  backgroundUrl: any; 
  hasUploadedImage: boolean = false;
  hasUploadedBackgroundImage: boolean = false;
  selectedTemplate: number = 1;

  constructor(
    // private _modalRef: MatDialogRef<BusinessCardComponent>,
    // @Inject(MAT_DIALOG_DATA) private _data: any,
  ) {
    
   }

  ngOnInit() {}

  onSelectPicture(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.url = event.currentTarget.result;
        this.hasUploadedImage = true;
      }
    }
  }

  onSelectBackground(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.backgroundUrl = event.target.result;
        this.hasUploadedBackgroundImage = true;
      }
    }
  }

  public downloadAsImage() {
    html2canvas(document.querySelector("#capture")).then(canvas => {
      window.open().document.write('<img src="' + canvas.toDataURL() + '" />');
      this.saveAs(canvas.toDataURL(), 'business-card.png');
    });

  }

  public saveAs(uri: any, fileName: string) {
    let link = document.createElement('a');
    if (typeof link.download === 'string') {
      link.href = uri;
      link.download = fileName;

      //Firefox requires the link to be in the body
      document.body.appendChild(link);

      //simulate click
      link.click();

      //remove the link when done
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  }

  public downloadAsPdf() {
    html2canvas(document.querySelector("#capture")).then(canvas => {
      let imgData = canvas.toDataURL('image/png');              
      let doc = new jsPDF('l', 'mm');
      let width = doc.internal.pageSize.width;    
      let height = doc.internal.pageSize.height;
      doc.addImage(imgData, 'PNG', 53, 30);
      doc.textWithLink('Want to see more? Click here to see Konex Profile.', 100, 170, { url: 'http://localhost:4200/profile' });
      doc.save('sample-file.pdf');
      window.open(doc.output('bloburl'));
    });  
  }

  selectTemplate(templateID: number) {
    this.selectedTemplate = templateID;
    console.log("Template ID: ", this.selectedTemplate);
  }

}
