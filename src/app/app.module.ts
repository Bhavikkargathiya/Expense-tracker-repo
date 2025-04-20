import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TestChartComponent } from './test-chart/test-chart.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DatePickerModule } from 'primeng/datepicker';
import { SliderModule } from 'primeng/slider';
import { TreeSelectModule } from 'primeng/treeselect';
import { TextareaModule } from 'primeng/textarea';
import { RatingModule } from 'primeng/rating';
import { TimelineModule } from 'primeng/timeline';
import { AutoFocusModule } from 'primeng/autofocus';
import { BlockUIModule } from 'primeng/blockui';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PanelModule } from 'primeng/panel';
import { Ripple } from 'primeng/ripple';
import { SelectItem, SelectModule } from 'primeng/select';
import { AnimateComponent } from './animate/animate.component';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { ChipModule } from 'primeng/chip';
import { ImageCompareModule } from 'primeng/imagecompare';
// import { AvatarModule } from 'primeng/avatar';
// import { AvatarGroupModule } from 'primeng/avatargroup';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
// import { FrequentlyAskedComponent } from './expense/frequently-asked/frequently-asked.component';
// import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TestChartComponent,
    AnimateComponent,
    // FrequentlyAskedComponent,
    // HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    DatePickerModule,
    SliderModule,
    TreeSelectModule,
    RatingModule,
    TextareaModule,
    TimelineModule,
    AutoFocusModule,
    BlockUIModule,
    PanelModule,
    Ripple,
    RadioButtonModule,
    SelectModule,
    SelectItem,
    BadgeModule,
    OverlayBadgeModule,
    ChipModule,
    ImageCompareModule,
    // AvatarModule,
    // AvatarGroupModule,
    FloatLabelModule,
    InputTextModule,
  ],

  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
