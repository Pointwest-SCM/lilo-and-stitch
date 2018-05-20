import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss']
})
export class BusinessCardComponent implements AfterViewInit, OnInit {

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

  ngAfterViewInit(): void {
    // this.context = (this.myCanvas.nativeElement as HTMLCanvasElement).getContext('2d');
    // this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');

    // this.draw();
  }

  ngOnInit() {
    // this.cnvs = document.getElementById('cnvs'),
    // this.ctx = this.cnvs.getContext('2d'),
    // this.mirror = document.getElementById('mirror');

    // this.cnvs.width = this.mirror.width = window.innerWidth;
    // this.cnvs.height = this.mirror.height = window.innerHeight;
  }

  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        this.hasUploadedImage = true;
      }
    }
  }

  onSelectBackground(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
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

  public downloadPdf() {
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
  }

  private draw() {
    this.context.beginPath();
    this.context.moveTo(0,0);
    this.context.lineTo(300,150);
    this.context.stroke();
  }

}
