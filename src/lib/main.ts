import { createApp, type App } from 'vue'
import { createPinia } from 'pinia'
import Greeter from './Greeter.vue'

interface GreeterOptions {
  message: string
}

class GreeterComponent {
  private app: App | null = null

  init(selector: string, options: GreeterOptions) {
    const container = document.querySelector(selector)
    if (!container) {
      throw new Error(`Element with selector "${selector}" not found`)
    }

    // Clean up existing instance if any
    if (this.app) {
      this.app.unmount()
    }

    const pinia = createPinia()
    this.app = createApp(Greeter, { message: options.message })
    this.app.use(pinia)
    this.app.mount(container)
  }
}

export default new GreeterComponent()