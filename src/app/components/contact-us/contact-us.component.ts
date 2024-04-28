import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactUsForm!:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createContactUsForm();
  }

  createContactUsForm() :void{
    this.contactUsForm = this.formBuilder.group({
      name:[null, Validators.required],
      email:[null, Validators.required],
      message: [null, Validators.required]
    })
  }

  onSubmit(){
    
  }
  
}
