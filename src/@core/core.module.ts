import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { TranslocoRootModule } from '@/transloco-root.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    HttpClientModule,
    TranslocoRootModule
  ],
})
export class CoreModule {}
