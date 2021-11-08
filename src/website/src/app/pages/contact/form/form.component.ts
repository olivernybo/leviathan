import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import swal from 'sweetalert2'; 

@Component({
	selector: 'app-contact-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
	public isPending: boolean = false

	contactForm = this.fb.group({
		name: this.fb.group({
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
		}),
		email: ['', [Validators.required, Validators.email]],
		message: ['', Validators.required],
	});

	constructor(private fb: FormBuilder) {}

	async onSubmit(): Promise<void> {
		if (this.contactForm.valid) {
			this.isPending = true
			fetch('http://localhost:4000/contact/send', {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'post',
				credentials: 'include',
				body: JSON.stringify(this.contactForm.value)
			}).then(res => {
				console.log(res.status)
				console.log(res.statusText)
				switch (res.status) {
					case 200:
						swal.fire({
							title: 'Message sent!',
							text: 'I\'ll get back to you as soon as possible!',
							confirmButtonColor: '#0062cc',
							icon: 'success'
						})
						break
					case 429:
						swal.fire({
							title: 'Too many messages',
							text: 'You just sent a message, please wait a bit.',
							confirmButtonColor: '#0062cc',
							icon: 'error'
						})
						break
				
					default:
						swal.fire({
							title: 'Error',
							text: 'An error occurred, please try again later.',
							confirmButtonColor: '#0062cc',
							icon: 'error'
						})
						return
				}
				this.contactForm.reset()
			}).catch(() => {
				swal.fire({
					title: 'Error',
					text: 'An error occurred, please try again later.',
					confirmButtonColor: '#0062cc',
					icon: 'error'
				})
			}).finally(() => {
				this.isPending = false
			})
		}
	}

	ngOnInit(): void {}
}
