import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import {Observable} from 'rxjs';

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

@Component({
  selector: 'app-api-interaction',
  templateUrl: './api-interaction.component.html',
  styleUrls: ['./api-interaction.component.less'],
})
export class ApiInteractionComponent implements OnInit {
  constructor(private http: HttpClient) {}
  public product: IProduct;

  // First we make the HTTP request
  // But this only returns an observable, not the data object itself
  public getProduct(): any {
    return this.http.get<IProduct>('https://fakestoreapi.com/products/1');
  }
  // In order to get to the data we need an additional step: to subscribe to the observable:

  public showData(): void {
    this.getProduct().subscribe(
      (data: IProduct) =>
        (this.product = {
          id: data.id,
          title: data.title,
          price: data.price,
          description: data.description,
          category: data.category,
          image: data.image,
        }),
    );
  }

  public showDataReponse(): void {
    this.getProduct().subscribe((resp) => {
      this.product = {...resp.body!};
    });
    console.log(this.product);
  }

  public ngOnInit(): void {
    console.log(this.getProduct());
    this.showDataReponse();
  }
}
