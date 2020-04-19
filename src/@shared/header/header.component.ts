import { Component, OnInit } from '@angular/core'
import { TranslocoService } from '@ngneat/transloco'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private readonly translocoService: TranslocoService,
  ) {}

  ngOnInit() {}

  public onSwitchLanguge(language: string) {
    const exist = this.translocoService.isLang(language)
    if (!exist) {
      alert('Language does not exist')
      return
    }
    this.translocoService.setActiveLang(language)
  }

  public receiveMessage() {
    this.translocoService
      .selectTranslate('hello', { name: 'Nguyen Dai' }, 'vi')
      .subscribe((translate) => {
        alert(translate)
      })
  }
}
