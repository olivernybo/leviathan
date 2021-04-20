import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-navbar-link',
	templateUrl: './link.component.html',
	styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit {
	pathname: string;
	@Input() href: string;
	@Input() text: string;
	constructor() {}

	ngOnInit(): void {
		this.pathname = window.location.pathname;
	}
}
