import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[];

  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.loadProductos();
  }

  loadProductos() {
    this.productosService.getProductos().subscribe(ret => {
      this.productos = ret;
    });
  }

}
