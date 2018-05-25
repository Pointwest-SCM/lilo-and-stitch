import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import { Options } from 'selenium-webdriver/edge';

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

  constructor() { }

  ngOnInit() {}

  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.url = event.currentTarget.result;
        this.hasUploadedImage = true;
      }
    }
    // console.log("THIS: ", event.currentTarget.result);
    // console.log("THIS ALSO: ", event.target);
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

  public downloadImage(event) {
    // get the `<a>` element from click event
    let anchor = event.target;
    // get the canvas, I'm getting it by tag name, you can do by id
    // and set the href of the anchor to the canvas dataUrl
    anchor.href = document.getElementsByTagName('canvas')[0].toDataURL();
    // set the anchors 'download' attibute (name of the file to be downloaded)
    anchor.download = "test.png";
  }

  public downloadAsImage() {
    // html2canvas(document.querySelector("#capture"),    
    //   {
    //     onrendered: function(canvas) {
    //     let anchor = event.target;
    //     anchor.href = canvas.toDataURL();
    //     anchor.download = "business-card.png";
    //     console.log(anchor.href);
    //     // window.open(img);
    //     }
    //   }
    // ).then(canvas => {
    //   document.body.appendChild(canvas)
    // });

    // html2canvas(document.querySelector("#capture"), {
    //   onrendered: function(canvas) {
    //     this.saveAs(canvas.toDataUrl(), 'business-card.png');
    //   }
    // });

    html2canvas(document.querySelector("#capture")).then(canvas => {
      // console.log(canvas.toDataURL());
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
    // let doc = new jsPDF();

    // let specialElementHandlers = {
    //   '#editor': function(element, renderer) {
    //     return true;
    //   }
    // }

    // let content = this.content.nativeElement;

    // console.log(content.innerHTML);

    // doc.fromHTML(content.innerHTML, 15, 15, {
    //   'width': 500,
    //   'height': 700,
    //   'elementHandlers': specialElementHandlers
    // }); 

    // doc.save('test.pdf');

    html2canvas(document.querySelector("#capture")).then(canvas => {
      let imgData = canvas.toDataURL('image/png');              
      let doc = new jsPDF('l', 'mm');
      let width = doc.internal.pageSize.width;    
      let height = doc.internal.pageSize.height;
      doc.addImage(imgData, 'PNG', 53, 30);
      doc.textWithLink('Click here to view Konex user profile', 100, 170, { url: 'http://localhost:4200/profile' });
      doc.save('sample-file.pdf');

      // let options = {
      //   pagesplit: true
      // }
      // let doc = new jsPDF();
      // doc.addHTML(this.content.nativeElement,0,0,options, () => {
      // doc.save("test.pdf");
      // });
    // let options = {
    //   pagesplit: true
    // }
    // let doc = new jsPDF();
    // doc.addHTML(this.content.nativeElement,0,0,options, () => {
    //   doc.save("test.pdf");
    });
    
  }

  public downloadAsPdf2() {
    // let doc = new jsPDF();

    // let specialElementHandlers = {
    //   '#editor': function(element, renderer) {
    //     return true;
    //   }
    // }

    // let content = this.content.nativeElement;

    // console.log(content.innerHTML);

    // doc.fromHTML(content.innerHTML, 15, 15, {
    //   'width': 500,
    //   'height': 700,
    //   'elementHandlers': specialElementHandlers
    // }); 

    // doc.save('test.pdf');

    html2canvas(document.querySelector("#capture")).then(canvas => {
      let imgData = canvas.toDataURL('pdf');              
      let doc = new jsPDF('l', 'mm');
      let width = doc.internal.pageSize.width;    
      let height = doc.internal.pageSize.height;
      // doc.addImage(imgData, 'PNG', 25, 25);
      doc.textWithLink('Click here', 25, 25, { url: 'http://www.google.com' });
      doc.save('sample-file.pdf');

      // let options = {
      //   pagesplit: true
      // }
      // let doc = new jsPDF();
      // doc.addHTML(this.content.nativeElement,0,0,options, () => {
      // doc.save("test.pdf");
      // });
    // let options = {
    //   pagesplit: true
    // }
    // let doc = new jsPDF();
    // doc.addHTML(this.content.nativeElement,0,0,options, () => {
    //   doc.save("test.pdf");
    });
  }

}
