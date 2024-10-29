import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss']
})
export class HeroBannerComponent {

  backgroundImages: any[] = [];

  ngOnInit() {
    const imageUrls = [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfo00U-aMCb2XIXlivjOx-zJAVnSdcWH6rOQ&s',
      'https://img.buzzfeed.com/buzzfeed-static/static/2023-06/20/23/asset/0050ec316559/sub-buzz-1532-1687304832-1.png?downsize=700%3A%2A&output-quality=auto&output-format=auto',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv4A6604kStKDSQjBAAPjLCzh7CqSfqTjVaw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0mOaoeUXW9j8GNoJDmcBXfymU2pH0sgjSlA&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuKg4CO2xX6bRALIyXslddV1SNSdfXPueNsg&s',
      'https://img.freepik.com/premium-photo/mountain-landscape-rock-high-resolution-wallpaper-ai-generated-art_853163-371.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQtXXyUkxZibk0UkDXZUXg1JI3W-ZZm3MvQ&s',
      'https://img.freepik.com/premium-photo/cute-furry-animal-ai-generated_970779-15.jpg'
    ];

    // Create an array of 50 images (5 rows * 10 columns)
    for (let i = 0; i < 5; i++) {
      const row = [];
      for (let j = 0; j < 10; j++) {
        row.push(imageUrls[Math.floor(Math.random() * imageUrls.length)]);
      }
      this.backgroundImages.push(row);
    }
  }
  }


