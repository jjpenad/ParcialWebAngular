import { Component, OnInit } from '@angular/core';
import { CafeModel } from 'src/app/models/CafeModel';
import { CafeService } from 'src/app/services/cafe.service';
@Component({
  selector: 'app-cafes-list',
  templateUrl: './cafes-list.component.html',
  styleUrls: ['./cafes-list.component.css'],
})
export class CafesListComponent implements OnInit {
  constructor(private cafeService: CafeService) {}

  public cafes: Array<CafeModel> = [];
  public tipos = new Map<string, any>();
  public cBlended: number;
  public cOrigen: number;

  getCafes(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
      this.getCafesXTipo(this.cafes);
      console.log(this.cafes);
    });
  }

  getCafesXTipo(cafes: Array<CafeModel>): void {
    for (let i = 0; i < cafes.length; i++) {
      if (this.tipos.get(cafes[i].tipo) == undefined) {
        this.tipos.set(cafes[i].tipo, 1);
      }
      else {
        //console.log("Entró a else")
        var cantidad: number = 0;
        cantidad = parseInt(this.tipos.get(cafes[i].tipo))
        //console.log("cantidad" + cantidad)
        cantidad = cantidad + 1;
        this.tipos.set(cafes[i].tipo, cantidad);

      }
    }
  }

  ngOnInit() {
    this.getCafes();
  }
}
