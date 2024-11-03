import {ChangeDetectionStrategy,OnInit, inject} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MessageAboardService } from './message-aboard.service';
import { ChangeDetectorRef } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import { Component, Inject } from '@angular/core';
import { MessageAboarBackComponent } from './message-aboard-back.component'; 
export interface Account {
  id: number,
  accountName: string;
  accountIcon: string;
  accountBalance: number;
  createAt: string;
}
/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'ngx-message-aboard',
  templateUrl: './message-aboard.component.html',
  styleUrls: ['./message-aboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageAboardComponent implements OnInit{
  displayedColumns: string[] = ['position', 'nickname', 'qq', 'email','content',"isReplied","replyContent","operation"];
  dataSource:Account[] = 
  []
  clearTable() {
    console.log("I WILL ALWAYS LOVE U");
  }
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent: PageEvent;


  handlePageEvent(e: PageEvent) {
    debugger
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.currentPage = e.pageIndex+1;
    this.selectData()
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  //readonly dialog = inject(MatDialog);
  constructor(public dialog: MatDialog,private messageAboardService: MessageAboardService,private cdr: ChangeDetectorRef 

  ) {}
  ngOnInit(): void {
    this.selectData()
    this.messageAboardService.callSelectData$.subscribe(() => {
      this.selectData();
    });
  }  

  currentPage = 1

  replyData(id) {
    debugger
    console.log("Always Love");
    const dialogRef = this.dialog.open(MessageAboarBackComponent,{
        disableClose: true, // 禁止点击背景和按下 ESC 键关闭
        data: {
          id: id
        }
      },
    );

    dialogRef.afterClosed().subscribe(result => {
      debugger
      console.log(result);
    });
  }


  selectData(){
    this.messageAboardService.selectData(  this.pageSize,this.currentPage).subscribe(
      (response) => {
        debugger
        this.dataSource = response.data.records;
        this.length = response.data.total
        this.pageIndex = response.data.current-1
        this.cdr.detectChanges();
        console.log(this.dataSource);
      },
      (error) => {
        debugger
        console.log(error);
      },
    )
  }
}





