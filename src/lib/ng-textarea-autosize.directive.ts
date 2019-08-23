import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  HostBinding,
  AfterViewChecked,
} from '@angular/core';

@Directive({
  selector: 'textarea[autosize]'
})
export class NgTextareaAutosizeDirective implements AfterViewChecked {
  @HostBinding('style.resize')
  public resize = 'none';

  @Input()
  @HostBinding('rows')
  public rows = 5;

  @Input() maxRows: number = 20;
  @Input() maxHeight: number;

  constructor(private elem: ElementRef) {
  }

  /**
   * Should not be as bad as a DoCheck which will trigger if you sneeze
   */
  public ngAfterViewChecked() {
    let textarea = this.elem.nativeElement as HTMLTextAreaElement;
    if (textarea.clientHeight > 0) {
      // It is decided as having layout
      if (!this.maxHeight) {
        let oneRow = this.elem.nativeElement.clientHeight / this.rows;
        this.maxHeight = oneRow * this.maxRows;
      }
      this.onResize();
    }
  }

  @HostListener('input')
  private onResize() {
    let textarea = this.elem.nativeElement as HTMLTextAreaElement;

    // Calculate the space around the textarea, this includes both border and margin
    let borderHeight = textarea.offsetHeight - textarea.clientHeight;

    // This allows the text area to shrink when rows are removed
    textarea.style.height = `auto`;

    let newHeight = textarea.scrollHeight + borderHeight;

    if (newHeight > this.maxHeight) {
      // We make it a set height and show a scrollbar
      newHeight = this.maxHeight;
    }

    // Set new height
    textarea.style.height = `${newHeight}px`;
  }
}
