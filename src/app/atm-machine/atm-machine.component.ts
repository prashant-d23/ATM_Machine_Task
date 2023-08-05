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

  totalDeposit = 0;

  transactions:any[] = [];

  totalAmt = 0;

  deposite(){
    this.notes.forEach(note => {
      note.count += note.deposite
      note.deposite = 0;
    })

  }
  calculateTotal(amt:any, index:number){
    // console.log(amt.target.value, index)
    this.totalAmt += this.notes[index].value * amt.target.value
    console.log(this.totalAmt)
  }

  withdrawAmount!:number;
  withdrawAmt(){
    if(this.totalAmt > 0 && this.totalAmt > this.withdrawAmount){
      this.totalAmt -= this.withdrawAmount;
    }else{
      alert("Can Not Withdraw!")
    }
    this.withdrawLog();


  }

  // noteCounter:any = [];
  withdrawLog(){

    // this.notes.forEach(note =>{
    //   this.noteCounter.push(`${note.value}:${note.count}`)
    // })
    this.transactions.push({
      dateTime : new Date(),
      type : 'Withdrawal',
      amount : this.withdrawAmount
    });
    this.withdrawAmount = 0;
  }
}
