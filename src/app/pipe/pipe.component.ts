import { Component, OnInit } from '@angular/core';
import { MultiplierPipe } from '../multiplier';
import { Mypipe } from '../custom pipes/description';
import { BreakLine } from '../custom pipes/breaklines';
import { Uppercase } from '../custom pipes/uppercase';
@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
  providers: [Mypipe, MultiplierPipe, BreakLine, Uppercase]
})
export class PipeComponent  {
  name = 'Angular';
  public value: string;


  persons = [
    {
      id: 1,
      name: 'Hardik Savani',
      gender: 'Male',
      website: 'itsolutionstuff.com',
      desc: 'Your Info: ',
    },
    {
      id: 2,
      name: 'Kajal Patel',
      gender: 'Female',
      website: 'nicesnippets.com',
      desc: 'Your Info: ',
    },
    {
      id: 3,
      name: 'Harsukh Makawana',
      gender: 'Male',
      website: 'laracode.com',
      desc: 'Your Info: ',
    }
  ]
  birthday = new Date(1988, 3, 15);
}
