import { Controller } from '@hotwired/stimulus';
import { useClickOutside } from 'stimulus-use'

export default class MobileMenuController extends Controller {
  static targets = ['menu'];

  connect() {
    useClickOutside(this)
  }

  toggle(event) {
    event.preventDefault()

    console.log('toggle');
    this.menuTarget.classList.toggle('hidden');
  }

  clickOutside(event) {
    if(!this.menuTarget.classList.contains('hidden')) {
      this.menuTarget.classList.add('hidden');
    }
  }
}
