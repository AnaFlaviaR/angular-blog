import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = "https://hbomax-images.warnermediacdn.com/images/GXdRsewUPO5uAuwEAABEI/tileburnedin?size=1280x720&partner=hbomaxcom&v=26a5badd79c2cca91aa0c86d604bfd3e&host=art-gallery.api.hbo.com&language=pt-br&w=1280"
  contentTitle: string = "ONDE ASSISTIR"
  contentDescription1: string = "HBOMax"
  contentDescription2: string = "Prime Video"

  constructor() { }

  ngOnInit(): void {
  }

}
