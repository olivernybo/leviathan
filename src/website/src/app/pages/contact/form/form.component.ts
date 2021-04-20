import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

	onSubmit = () => alert(this.contactForm.status)

	ngOnInit(): void {}
}
