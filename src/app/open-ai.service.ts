import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class OpenAiService {

  constructor() { }

  readonly configuration = new Configuration({
    apiKey: environment.openAIToken
  });

  readonly openai = new OpenAIApi(this.configuration);

  async getDataFromOpenAPI(text: string) {
    const completion = await this.openai.createCompletion({
      model: "text-davinci-002",
      prompt: text,
    });
    console.log(completion.data.choices[0].text);
  }


}
