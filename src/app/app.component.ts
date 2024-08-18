import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {KhodamModel} from "./model/khodam-model";
import {KhodamServiceService} from "./services/khodam-service.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  title: string = 'Cek Khodam';
  isCheck: boolean = true
  khodam: KhodamModel = {name: ''}

  listOfKhodam: KhodamModel[] = []

  constructor(private khodamService: KhodamServiceService) {
  }

  ngOnInit(): void {
    this.khodamService.getKhodamList().subscribe(data => {
      this.listOfKhodam = data
    })
  }

  checkForm = new FormGroup({
    name: new FormControl('', Validators.required)
  })

  onSubmit(): void {
    if (this.checkForm.get('name')?.value == '') return
    const selectedIndex = Math.floor(Math.random() * (this.listOfKhodam.length - 1))
    this.khodam = this.listOfKhodam[selectedIndex]
    this.checkForm.get('name')?.disable()
    this.isCheck = false
  }

  onReset(): void {
    this.isCheck = true
    this.checkForm.get('name')?.enable()
    this.checkForm.reset()
  }
}
