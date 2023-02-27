import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { OpenAIApi, Configuration } from "openai";
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-variation',
  templateUrl: './variation.component.html',
  styleUrls: ['./variation.component.css']
})


export class VariationComponent implements OnInit{
  data: any[] = [];

  configuration = new Configuration({
    apiKey: environment.openAIToken
  });


  openai = new OpenAIApi(this.configuration);
  response:any;
  file: any;


  constructor(private spinner: NgxSpinnerService){}

  ngOnInit(){}


  // On file Select
  onChange(event:any) {
    this.file = event.target.files[0];
  }

  public async openAIResponse() {
    try {
      this.spinner.show();

      this.response = await this.openai.createImageVariation(
        this.file,
        1,
        "512x512"
      ).then(x => {
        this.spinner.hide();
        this.data = x.data.data;
        console.log('x: ', x.data);
      }).catch(y => {
        console.log('y: ', y);
      });

    } catch (error:any) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }

  }

  callOpenAI() {
    if(this.file){
      this.data = [];
    }
    console.log(this.file)

    this.openAIResponse();
  }

}
