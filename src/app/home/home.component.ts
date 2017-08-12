import { Component, OnInit } from '@angular/core';

declare var xg:any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    model = { list: [{name: 'test'}, {name: 'done'}] };

    constructor() { }

    ngOnInit() {
        var _model = this.model;
        xg.post('api/area/list', function(rows) {
            _model.list = rows;
        })
    }
}
