import { Component } from '@angular/core';

@Component({
  selector: 'app-atm-machine',
  templateUrl: './atm-machine.component.html',
  styleUrls: ['./atm-machine.component.scss']
})
export class ATMMachineComponent {

  notes = [
    {value : 2000, count : 0, deposite : 0},
    {value : 500, count : 0, deposite : 0},
    {value : 200, count : 0, deposite : 0},
    {value : 100, count : 0, deposite : 0},
  ];

  withdrawLog:any[] = [];
  depositeLog:any[] = [];

  totalAmt = 0;

  // deposite(){
  //   let totalDeposited = 0;

  // this.notes.forEach(note => {
  //   if (note.deposite >= 0) {
  //     note.count += Number(note.deposite);
  //     totalDeposited += note.deposite * note.value;
  //     note.deposite = 0;
  //   }
  // });

  // if (totalDeposited > 0) {
  //   this.depositeLog.unshift({
  //     dateTime: new Date(),
  //     type: 'Deposit',
  //     amount: totalDeposited
  //   });
  // }

  // }

  // noteIndex:any;
  // calculateTotal(amt:any, index:number){
    //   // console.log(amt.target.value, index)
    //   this.noteIndex = index;
    //   if(amt !== 0){
      //     this.totalAmt += this.notes[index].value * amt.target.value //total amt calulation

      //   }
      //   console.log(this.totalAmt)
      // }


      //merge calculate and deposite -----------------------------
      // just display the total amt by claculating
      //     this.totalAmt += this.notes[index].value * amt.target.value //total amt calulation
      deposite() {
        let totalDeposited = 0;

        this.notes.forEach(note => {
          if (note.deposite >= 0) {
            note.count += Number(note.deposite);
            totalDeposited += note.deposite * note.value;
            note.deposite = 0;
          }
        });

        if (totalDeposited > 0) {
          this.depositeLog.unshift({
            dateTime: new Date(),
            type: 'Deposit',
            amount: totalDeposited
          });
        }

        // if (this.totalAmt > 0) {
          this.totalAmt += totalDeposited;
        // }
      }







      withdrawAmount!:number;
      withdrawAmt(){
        if(this.totalAmt > 0 && this.totalAmt >= this.withdrawAmount){
      this.totalAmt -= this.withdrawAmount;
    }else{
      alert("Can Not Withdraw!")
    }
    this.withdraw();


  }

  withdraw(){
    this.withdrawLog.unshift({
      dateTime : new Date(),
      type : 'Withdrawal',
      amount : this.withdrawAmount
    });
    this.withdrawAmount = 0;
  }


}
