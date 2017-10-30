import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products: Product[] =  [
    new Product(1, '第一个商品', 1.99, 2.5, 'Thank you for your attention', ['电子产品', '图书']),
    new Product(2, '第二个商品', 4.99, 4.5, '这是第二个商品', ['电子产品']),
    new Product(3, '第三个商品', 9.99, 1.5, '这是第三个商品', ['图书']),
    new Product(4, '第四个商品', 7.99, 4.5, '这是第四个商品', ['数码产品']),
    new Product(5, '第五个商品', 10.99, 3.5, '这是第五个商品', ['家用百货']),
    new Product(6, '第六个商品', 3.99, 2.5, '这是第六个商品', ['家电']),
  ];

  private comments: Comment[] =  [
    new Comment(1, 1, '2017-03-01', 'Robbin', 3, '非常好的商品'),
    new Comment(2, 1, '2017-04-01', 'Ray', 2, '非常好的商品'),
    new Comment(3, 1, '2017-05-01', 'Cux', 4, '非常好的商品'),
    new Comment(4, 2, '2017-06-01', 'Brayn', 3, '非常好的商品'),
    new Comment(5, 2, '2017-07-01', 'Qiubo', 5, '非常好的商品'),
    new Comment(6, 3, '2017-02-01', 'Xiaoli', 2, '非常好的商品')
  ];
  constructor() { }

  getProducts() {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }

  getCommentForProductId (id: number): Comment[] {
    return this.comments.filter((comment) => comment.productId == id);
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<String>
  ) {

  }
}

export class Comment {
  constructor(public id: number,
              public productId: number,
              public timestamp: string,
              public user: string,
              public rating: number,
              public content: string

  ) {

  }
}
