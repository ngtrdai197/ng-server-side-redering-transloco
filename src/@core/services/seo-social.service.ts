import { Injectable } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

import { ISeoSocial } from '@core/interfaces/seo.interface'

@Injectable({
  providedIn: 'root',
})
export class SeoSocialService {
  constructor(
    private readonly metaService: Meta,
    private readonly titleService: Title,
  ) {}

  public setData(data: ISeoSocial) {
    this.setTitleForSeo(data)
  }

  private setTitleForSeo(data: ISeoSocial) {
    const { title, imageUrl, description, url } = data
    this.titleService.setTitle(data.title)
    if (data && data.title) {
      this.metaService.updateTag({ name: 'twitter:creator', content: '@nguyendai.dev' })
      this.metaService.updateTag({ name: 'twitter:title', content: title })
      this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' })
      this.metaService.updateTag({ name: 'twitter:image', content: imageUrl })
      this.metaService.updateTag({ name: 'twitter:description', content: description })
      this.metaService.updateTag({ property: 'og:title', content: title })
      this.metaService.updateTag({ property: 'og:description', content: description })
      this.metaService.updateTag({ property: 'og:url', content: url })
      this.metaService.updateTag({ property: 'og:image', content: imageUrl })
      this.metaService.updateTag({ property: 'og:type', content: 'website' })
    } else {
      this.metaService.removeTag(`name='twitter:title'`)
      this.metaService.removeTag(`name='twitter:image:alt'`)
      this.metaService.removeTag(`property='og:image:alt'`)
      this.metaService.removeTag(`property='og:title'`)
      this.metaService.removeTag(`name='title'`)
    }
  }
}
