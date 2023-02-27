import { Component, OnInit } from '@angular/core';
import { OpenAiService } from '../open-ai.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})


export class ChatComponent implements OnInit{
  reponse: string = ""

  constructor(private openAiService:OpenAiService){

  }

  ngOnInit(): void {

  }


  callOpenAI(result:any) {
    this.openAiService.getDataFromOpenAPI(result.reponse).then(rep => {
      this.reponse = rep;
      console.log(this.reponse);
    }).catch(e => e)
  }
}
