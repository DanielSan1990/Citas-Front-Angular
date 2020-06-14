import { Component, Inject, OnInit } from '@angular/core';
import { L10N_LOCALE, L10nLocale, L10nTranslationService } from 'angular-l10n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = this.translation.translate('applicationName');

  constructor(
    private translation: L10nTranslationService,
    @Inject(L10N_LOCALE) public locale: L10nLocale
  ) { }

  ngOnInit() {
    this.translation.onChange().subscribe({
      next: (locale: L10nLocale) => console.log(locale)
    });
    this.translation.onError().subscribe({
      next: (error: any) => {
        if (error) { console.log(error); }
      }
    });
  }
}
