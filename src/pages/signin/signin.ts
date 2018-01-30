import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { User } from '../../providers/auth/user';
import { AuthService } from '../../providers/auth/auth-service';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { ResetpasswordPage } from '../resetpassword/resetpassword';
import { SigninWithEmailPage } from '../signinwithemail/signinwithemail';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  user: User = new User();
  @ViewChild('form') form: NgForm;

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private authService: AuthService) {
  }

  createAccount() {
    this.navCtrl.push(SignupPage);
  }

  /*resetPassword(){
    this.navCtrl.push(ResetpasswordPage);
  }

  signIn(){
    if(this.form.form.valid){
      this.authService.signIn(this.user)
      .then(() =>{
        this.navCtrl.setRoot(HomePage);
      })
      .catch((error) =>{
        let toast = this.toastCtrl.create({ duration: 3000, position: 'botton'});
        if (error.code = 'auth/invalid-email'){
          toast.setMessage('O email digitado nao é valido!');
        } else if (error.code = 'auth/user-disabled'){
          toast.setMessage('O usuario esta desativado!');
        } else if (error.code = 'auth/user/not/found'){
          toast.setMessage('Usuario não encontrado!');
        } else if (error.code = 'auth/wrong-password'){
          toast.setMessage('Senha Digitada não é valida!');
        }
        toast.present();
      })
    }
  }*/

  signInWithEmailPage() {
    this.navCtrl.push(SigninWithEmailPage);
  }

  /*signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then(() => {
        this.navCtrl.setRoot(HomePage);
      })
      .catch((error) => {
        this.toastCtrl.create({ duration: 3000, position: 'bottom', message: 'Erro ao efetuar o login' })
          .present();
      });
  }

  signInWithFacebook() {
    this.authService.signInWithFacebook()
      .then(() => {
        this.navCtrl.setRoot(HomePage);
      })
      .catch((error) => {
        this.toastCtrl.create({ duration: 3000, position: 'bottom', message: 'Erro ao efetuar o login' })
          .present();
      });
  }

  signInWithTwitter() {
    this.authService.signInWithTwitter()
      .then(() => {
        this.navCtrl.setRoot(HomePage);
      })
      .catch((error) => {
        this.toastCtrl.create({ duration: 3000, position: 'bottom', message: 'Erro ao efetuar o login' })
          .present();
      });
  }*/
}
