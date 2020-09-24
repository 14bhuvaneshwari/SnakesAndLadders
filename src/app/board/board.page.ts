import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

// import { state, style, trigger } from '@angular/animation';
import { BoardService } from './board.service';

@Component({
  
  selector: 'app-board',
  templateUrl: './board.page.html',
  styleUrls: ['./board.page.scss'],
  // animations: [
  //   trigger('divState', [
  //     state('normal', style({transform:'tanslateX(0px)'})),
  //     state('normal', style({transform:'tanslateX(100px)'})),
  //   ])
  // ]
})
export class BoardPage implements OnInit {

constructor(public bService: BoardService) { }



  ngOnInit() {
    this.bService.readPlayers();
    this.bService.loggedinUser();
    this.bService.boardPositions();
    this.bService.memChance();
    // this.presentLoading();
  }

  //   Calltoggle(){
  //     function Calltoggle(){
  //       var blur = document.getElementById('blur');
  //       blur.classList.toggle('active')
  //     }
  //   }

}
