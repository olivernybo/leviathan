import { Component, OnInit } from '@angular/core';

declare const particlesJS: any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'website';

	ngOnInit(): void {
		particlesJS.load('particles-js', 'assets/particlesjs-config.json')
	}
}
