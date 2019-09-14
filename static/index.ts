import Vue from 'vue'
import Component from 'vue-class-component'
import 'file-uploader-vue-component'

import { indexTemplateHtml, indexTemplateHtmlStatic } from './variables'

function toBase64(file: Blob) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  })
}

@Component({
  render: indexTemplateHtml,
  staticRenderFns: indexTemplateHtmlStatic
})
export class App extends Vue {
  text = ''
  selectedLanguages: string[] = ['eng']
  languages = ['eng', 'chi_sim']

  async fileGot(file: Blob) {
    const image = await toBase64(file)
    const res = await fetch('/recognize', {
      method: 'POST',
      body: JSON.stringify({
        image,
        languages: this.selectedLanguages
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json: { text?: string, error: string } = await res.json()
    this.text = json.text || json.error
  }
}

new App({ el: '#container' })
