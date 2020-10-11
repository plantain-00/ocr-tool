import { createApp, defineComponent } from 'vue'
import 'file-uploader-vue-component'

import { indexTemplateHtml } from './variables'

function toBase64(file: Blob) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  })
}

const App = defineComponent({
  render: indexTemplateHtml,
  data: () => {
    return {
      text: '',
      selectedLanguages: ['eng'] as string[],
      languages: ['eng', 'chi_sim'],
    }
  },
  methods: {
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
})

createApp(App).mount('#container')
