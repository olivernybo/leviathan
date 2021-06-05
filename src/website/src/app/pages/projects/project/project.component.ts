import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
	public id: string
	public shortText: string
	@Input() text: string
	@Input() title: string

	constructor() { }

	ngOnInit(): void {
		this.id = this.title.replace(' ', '')
		this.shortText = `${this.text.slice(0, 20)}...`
	}
}
