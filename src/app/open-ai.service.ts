import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})

export class OpenAiService {

  constructor() { }

  readonly configuration = new Configuration({
    apiKey: ""
  });

  readonly openai = new OpenAIApi(this.configuration);

  async getDataFromOpenAPI(text: string): Promise<string> {
    const completion = await this.openai.createCompletion({
      model: "text-davinci-003",
      prompt: text,
    });
    return String(completion.data.choices[0].text);
  }


}
