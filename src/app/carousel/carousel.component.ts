import { Component, OnInit } from '@angular/core';
import { CarouselImage } from '../carousel-image';

@Component({
    selector: 'carousel-component',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
    public images = IMAGES;
}

var IMAGES: CarouselImage[] = [
    { "title": "Blah blah", "url": "http://lorempixel.com/output/abstract-q-c-1227-804-7.jpg"},
    { "title": "Mountains..", "url": "http://lorempixel.com/output/abstract-q-c-1227-804-4.jpg"},
    { "title": "Clouds n shit", "url": "http://lorempixel.com/output/abstract-q-c-1227-804-10.jpg"}
];