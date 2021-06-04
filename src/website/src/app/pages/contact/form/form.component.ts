import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import swal from 'sweetalert2'; 

@Component({
	selector: 'app-contact-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
	contactForm = this.fb.group({
		name: this.fb.group({
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
		}),
		email: ['', [Validators.required, Validators.email]],
		message: ['', Validators.required],
	});

	constructor(private fb: FormBuilder) {}

	onSubmit(): void {
		if (this.contactForm.valid) {
			// todo send to api
			swal.fire({
				title: 'Message sent!',
				text: 'I\'ll get back to you as soon as possible!',
				confirmButtonColor: '#0062cc'
			})
			this.contactForm.reset()
		}
	}

	ngOnInit(): void {}
}
