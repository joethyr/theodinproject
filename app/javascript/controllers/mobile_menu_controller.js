import { Controller } from '@hotwired/stimulus';

export default class MobileMenuController extends Controller {
  static targets = ['menu'];

  open() {
    this.menuTarget.classList.remove('hidden');
  }

  close() {
    this.menuTarget.classList.add('hidden');
  }
}
