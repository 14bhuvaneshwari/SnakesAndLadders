import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import {memoryCards} from './memory-board.model';
@Component({
  selector: 'app-memory-board',
  templateUrl: './memory-board.page.html',
  styleUrls: ['./memory-board.page.scss'],
})
export class MemoryBoardPage implements OnInit {
  timeLeft: number = 60;
  interval;
  // first argument is for back-image and second argument is for front-image
  cards:memoryCards[]=[
    new memoryCards('https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157',
                    'https://tse1.mm.bing.net/th?id=OIP.nzqcNBda6adpBXavP_8rawHaHa&pid=Api&P=0&w=300&h=300'),
    new memoryCards('https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157',
                    'https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157'),
    new memoryCards('https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157',
                    'https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157'),
    new memoryCards('https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157',
                    'https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157'),
    new memoryCards('https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157',
                    'https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157'),
    new memoryCards('https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157',
                    'https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157'),
    new memoryCards('https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157',
                    'https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157'),
    new memoryCards('https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157',
                    'https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157'),
    new memoryCards('https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157',
                    'https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157'), 
    new memoryCards('https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157',
                    'https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157'), 
    new memoryCards('https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157',
                    'https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157'),
    new memoryCards('https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157',
                    'https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157'), 
    new memoryCards('https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157',
                    'https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157'), 
    new memoryCards('https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157',
                    'https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157'), 
    new memoryCards('https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157',
                    'https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157'), 
    new memoryCards('https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157',
                    'https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157'), 
    new memoryCards('https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157',
                    'https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157'),
    new memoryCards('https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157',
                    'https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157'),
    new memoryCards('https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157',
                    'https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157'),
    new memoryCards('https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157',
                    'https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157'), 
    new memoryCards('https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157',
                    'https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157'), 
    new memoryCards('https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157',
                    'https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157'),
    new memoryCards('https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157',
                    'https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157'),
    new memoryCards('https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157',
                    'https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157'),
    new memoryCards('https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157',
                    'https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157'),
    new memoryCards('https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157',
                    'https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157'),      
    new memoryCards('https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157',
                    'https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157'),
    new memoryCards('https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157',
                    'https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157'),
    new memoryCards('https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157',
                    'https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157'),
    new memoryCards('https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157',
                    'https://tse3.mm.bing.net/th?id=OIP.fPwNkLmKV_nFUe13_oz1iQHaE8&pid=Api&P=0&w=234&h=157'),
  ];
constructor( public loadingController: LoadingController){}
startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    },1000)
  }
  pauseTimer() {
    clearInterval(this.interval);
  }

  async startLoading() {
    this.starterAudio();
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'your game will start in few seconds',
      duration: 3000
    });
    await loading.present();
  }
  starterAudio(){
    const audio = new Audio('../assets/memorystarter.mpeg'); // audio play when we start the game
    audio.play();
  }
  flipAudio(){
    const audio = new Audio('../assets/flip.mpeg'); // audio play on flip of card
    audio.play();
  }
  ngOnInit() {
    this.startLoading()
    this.startTimer();
  }

}
