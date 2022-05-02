import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants-list.component.css'],
})
export class PlantsListComponent implements OnInit {
  plants: Plant[] = [];
  totalInterior: number = 0;
  totalExterior: number = 0;
  constructor(private plantService: PlantService) {}

  ngOnInit() {
    this.plantService.getPlants().subscribe((plants: Plant[]) => {
      console.log(plants);
      this.plants = plants;
      for (let plant of plants) {
        if (plant.tipo === 'Interior') {
          this.totalInterior++;
        } else if (plant.tipo === 'Exterior') {
          this.totalExterior++;
        }
      }
    });
  }
}
