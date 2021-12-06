import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { SharedService } from '../../service/shared.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  socket: any;
  userList: {names: string, origin: string, destination : string, secret_key: any, cipher: any}[] = []
  constructor(private sharedService : SharedService) { }

  ngOnInit(): void {
    try{
      this.socket = io.io(`localhost:3000`);

      this.socket.on('dataEmit', (data: any) => {
        const originalObject = this.sharedService.decrypt(data)
        if(this.sharedService.validateHash(originalObject)){
          originalObject ? this.userList.push(JSON.parse(originalObject)) : null        
        }
      })
    } catch(error) {
      console.log('error ==> ', error)
    }
    
  }
}
