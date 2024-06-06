import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {
  @Output() sendClientFormData = new EventEmitter();

  public clientForm!:  FormGroup;

  constructor (private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getClientForm();
  }

  getClientForm(){
    this.clientForm = this.fb.group({
      title: [''],
      name: [''],
    })
  }

  clientFormData() {
    this.sendClientFormData.emit(this.clientForm.value);
  }
}
