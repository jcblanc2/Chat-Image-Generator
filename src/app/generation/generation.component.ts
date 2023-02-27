import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { OpenAIApi, Configuration } from "openai";

@Component({
  selector: 'app-generation',
  templateUrl: './generation.component.html',
  styleUrls: ['./generation.component.css']
})


export class GenerationComponent  implements OnInit{
  title = 'Image-Generator';

  data: any[] = []

  configuration = new Configuration({
    apiKey: "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",
  });

  openai = new OpenAIApi(this.configuration);
  response:any;

  constructor(private spinner: NgxSpinnerService) {

  }

  ngOnInit() {
  }


  public async openAIResponse(prompt: any) {
    this.spinner.show();

    this.response = await this.openai.createImage({
      prompt: prompt,
      n: 2,
      size: '512x512'
    }).then(x => {
      this.spinner.hide();
      this.data = x.data.data;
      console.log('x: ', x.data);
    }).catch(y => {
      console.log('y: ', y);
    });
  }


  callOpenAI(result:any) {
    if(this.data.length > 0){
      this.data = [];
    }

    console.log(result.description)
    this.openAIResponse(result.description);
  }

}
