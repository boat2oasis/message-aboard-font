import { Component,OnInit,Inject, Input,ChangeDetectorRef } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { MessageAboardService } from './message-aboard.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';


interface KeyValue {
  value: string;
  viewValue: string;
}

@Component({
    selector: 'ngx-message-aboard-back',
    templateUrl: './message-aboard-back.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
  })


export class MessageAboarBackComponent implements OnInit{
    @Input() id: number = 0; 
    userForm: FormGroup;  // 表单
    accountIcon:string;


    deFaultAccountList: KeyValue[] = [
      {value: '1', viewValue: '默认消费账户'},
      {value: '0', viewValue: '非默认消费账户'},
    ];

    constructor(
      @Inject(MAT_DIALOG_DATA) public data: { id: number},
      
      private fb: FormBuilder,
      private messageAboardService: MessageAboardService,
      private cdr: ChangeDetectorRef,
      private dialogRef: MatDialogRef<MessageAboarBackComponent>) {}

    ngOnInit() {
        // 使用 FormBuilder 创建表单并初始化表单属性
        this.userForm = this.fb.group({
            replyContent: '', 
        });
      }
      replyData() {
      if (this.userForm.valid) {

        const user = {
            id: this.data.id,
            replyContent: this.userForm.value.replyContent
        }

        this.messageAboardService.reply(user).subscribe(
          (response) => {
            debugger
            console.log(response); // Log the response data to the console
            
            this.dialogRef.close(this.userForm.value);
            this.messageAboardService.triggerSelectData()

          },
          (error) => {
            debugger
            console.error('Error fetching data:', error); // Log any errors
          }
        );
      }
      }
}
