import {Component, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {KhodamModel} from "../../models/khodam-model";
import {KhodamService} from "../../services/khodam.service";

@Component({
  selector: 'app-check.khodam',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './check.khodam.component.html',
  styleUrl: './check.khodam.component.css',
  providers: [KhodamService]
})
export class CheckKhodamComponent implements OnInit{
  title: string = 'Cek Khodam';
  isCheck: boolean = true
  khodam: KhodamModel = {name: ''}

  listOfKhodam: KhodamModel[] = []

  constructor(private khodamService: KhodamService) {
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
