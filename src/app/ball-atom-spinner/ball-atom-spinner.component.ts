import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-ball-atom-spinner',
  templateUrl: './ball-atom-spinner.component.html',
  styleUrls: ['./ball-atom-spinner.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeIn', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300)
      ]),
      transition(':leave',
        animate(200, style({ opacity: 0 })))
    ])
  ]
})
export class BallAtomSpinnerComponent implements OnInit {
  divArray


  constructor() { }


  ngOnInit(): void {

    this.divArray = Array(4).fill(0).map((x, i) => i);
  }

}
