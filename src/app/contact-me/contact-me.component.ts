import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('button') button!: ElementRef;


  scrollToTop() {
    window.scrollTo(0, 0);
  }


  sendMail() {
    console.log('Mail send')
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let button = this.button.nativeElement;
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    button.disabled = true;
    button.classList.remove('buttonHover');
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);
    this.action(fd)
  }

  async action(fd) {
    await fetch('https://robert-hahn.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    )
      .then(function () {
        setTimeout(() => {
          document.getElementById('emailSend').classList.add('emailSend');
          document.getElementById('emailSend').classList.remove('d-none');
          document.getElementById('container').classList.add('opacity20');
        }, 300)
        setTimeout(() => {
          document.getElementById('emailSend').classList.add('emailSendD-none');
        }, 2300)
        setTimeout(() => {
          document.getElementById('container').classList.remove('opacity20');
          document.getElementById('emailSend').classList.remove('emailSendD-none');
          document.getElementById('emailSend').classList.remove('emailSend');
          document.getElementById('emailSend').classList.add('d-none');
        }, 3200)
      }).catch(function () {
        alert('Request could not be sent, please email me at robert.hahn91@gmx.at')
      })
  }
}
