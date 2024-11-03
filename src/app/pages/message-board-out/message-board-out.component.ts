
import { Component,Inject } from '@angular/core';
import { MessageAboardService } from '../message-aboard/message-aboard.service';
import { ChangeDetectorRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

interface Message {
  nickname: string;
  qq: string;
  email: string;
  content: string;
  date: Date;
  reply?: string;
}

@Component({
  selector: 'ngx-message-board-out',
  templateUrl: './message-board-out.component.html',
  styleUrls: ['./message-board-out.component.scss']
})

export class MessageBoardOutComponent {
  newMessage: Message = {
    nickname: '',
    qq: '',
    email: '',
    content: '',
    date: new Date()
  };
  showAdd = false;
  dataSource:[] = 
  []
  //readonly dialog = inject(MatDialog);
  constructor(@Inject(DOCUMENT)  private document:Document,
    private messageAboardService: MessageAboardService,private cdr: ChangeDetectorRef ){}
  ngOnInit(): void {
   this.selectData()
  }

  addMessage(){
    // 检查昵称是否为空
    if (!this.newMessage.nickname || this.newMessage.nickname.trim() === '') {
      alert('昵称不能为空');
      return;
    }

    // 检查 QQ 是否为空
    if (!this.newMessage.qq || this.newMessage.qq.trim() === '') {
      alert('QQ 号不能为空');
      return;
    }

    // 检查邮箱是否为空
    if (!this.newMessage.email || this.newMessage.email.trim() === '') {
      alert('邮箱不能为空');
      return;
    }

    // 检查内容是否为空
    if (!this.newMessage.content || this.newMessage.content.trim() === '') {
      alert('内容不能为空');
      return;
    }
    this.messageAboardService.postData(this.newMessage).subscribe(
      (response) => {
        this.ly()
        this.selectData()
      },
      (error) => {
        debugger
        console.error('Error fetching data:', error); // Log any errors
      }
    );
   
  
  }
  ly(){
    this.newMessage  = {
      nickname: '',
      qq: '',
      email: '',
      content: '',
      date: new Date()
    };
    this.showAdd = !this.showAdd;
  }
  pageSize = 10 
  currentPage = 1

  total = 0
  current = 1
  pages=1
  size=10
  nPage = 1
  top(){
    this.currentPage = 1
    this.selectData();
  }
  up(){
    if(this.currentPage >=2 ){
      this.currentPage = this.currentPage-1;
    }
    this.selectData();
  }

  next(){
    if(this.currentPage < this.pages ){
      this.currentPage = this.currentPage+1;
    }
    this.selectData();
  }
  last(){

      this.currentPage = this.pages
   
    this.selectData();
  }
  goTo(){
    if(1<=this.nPage && 1<= this.total){
      this.currentPage = this.nPage
      this.selectData();
    }
  }
  selectData(){
    this.messageAboardService.selectOutData( this.pageSize,this.currentPage).subscribe(
      (response) => {
        debugger
        this.dataSource = response.data.records;
        this.total = response.data.total;
        this.pages = response.data.pages;
        this.cdr.detectChanges();
        console.log(this.dataSource);
      },
      (error) => {
        debugger
        console.log(error);
      },
    )
  }

  messages: Message[] = [];


  resetForm() {
    this.newMessage = { nickname: '', qq: '', email: '', content: '', date: new Date() };
  }

  replyToMessage(message: Message) {
    if (message.reply) {
      console.log(`Replying to ${message.nickname}: ${message.reply}`);
    }
  }
}
