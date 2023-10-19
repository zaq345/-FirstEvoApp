import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Err404Component } from './err404/err404.component';
import { Err401Component } from './err401/err401.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { AuthState } from './store/auth.state';
import { RecipeComponent } from './recipe/recipe.component';
import { FavState } from './store/fav.state';
import { TimePipe } from './pipes/time.pipe';
import { BottomBannerDirective } from './directives/bottom-banner.directive';
import { RecipeDefComponent } from './recipe-def/recipe-def.component';
import { ShareComponent } from './recipe-def/share/share.component';
import { /*MatDialog, MatDialogRef,*/ MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { /*MatSnackBar, MatSnackBarRef,*/ MatSnackBarModule } from '@angular/material/snack-bar';
import { PopupComponent } from './popup/popup.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { FileDropDirective } from './directives/file-drop.directive';
import { PopupErrorComponent } from './popup-error/popup-error.component';
import { SubPopupComponent } from './home/sub-popup/sub-popup.component';
import { SuccessPopupComponent } from './register/success-popup/success-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Err404Component,
    Err401Component,
    AuthComponent,
    RegisterComponent,
    RecipeComponent,
    TimePipe,
    BottomBannerDirective,
    RecipeDefComponent,
    ShareComponent,
    PopupComponent,
    CreateRecipeComponent,
    FileDropDirective,
    PopupErrorComponent,
    SubPopupComponent,
    SuccessPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxsModule.forRoot([AuthState, FavState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
