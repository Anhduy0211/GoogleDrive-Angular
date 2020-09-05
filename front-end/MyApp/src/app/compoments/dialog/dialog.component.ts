import { Component, OnInit } from '@angular/core';
import { FolderService } from 'src/app/services/folder.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  name:string;
  constructor(public folderService :FolderService) { }

  ngOnInit(): void {
  }

}
