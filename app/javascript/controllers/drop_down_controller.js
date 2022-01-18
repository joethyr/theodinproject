import { Controller } from '@hotwired/stimulus';
import { useClickOutside } from 'stimulus-use'

import { toggle, leave } from 'el-transition'

export default class DropdownController extends Controller {
  static targets = ['menu'];

  connect() {
    useClickOutside(this)
  }

  toggle() {
    toggle(this.menuTarget);
  }

  clickOutside(event) {
    if(!this.menuTarget.classList.contains('hidden')) {
      leave(this.menuTarget);
    }
  }
}
