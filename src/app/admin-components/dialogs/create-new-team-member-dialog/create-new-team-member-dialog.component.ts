import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CreateNewPersonRequestDto } from 'src/app/modules/admin/request-dtos/create-new-person-request-dto';
import { AdminTeamService } from 'src/app/modules/admin/services/admin-team.service';
import { GraduateEnumLabels, GraduateEnums } from 'src/app/modules/guest/enums/graduate-enums';

@Component({
  selector: 'app-create-new-team-member-dialog',
  templateUrl: './create-new-team-member-dialog.component.html',
  styleUrls: ['./create-new-team-member-dialog.component.css']
})
export class CreateNewTeamMemberDialogComponent implements OnInit {
  form!:FormGroup;
  graduateTypes = Object.keys(GraduateEnums).filter(key => isNaN(Number(key))).map(key => {
    return { value: GraduateEnums[key as keyof typeof GraduateEnums], label: GraduateEnumLabels[GraduateEnums[key as keyof typeof GraduateEnums]] };
  });
  constructor(
    private adminTeamService:AdminTeamService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private dialogRef:MatDialogRef<CreateNewTeamMemberDialogComponent>
  ){

  }

  ngOnInit(): void {
    this.initForm();
  }


  
  initForm(){
    this.form = this.formBuilder.group({
      firstName:["",Validators.required],
      middleName:[""],
      lastName:["",Validators.required],
      graduateSchoolName:["",Validators.required],
      graduateType:["",Validators.required],
      linkedInUrl:[""],
      researchGateUrl:[""],
      orcidUrl:[""],
      image:[null,Validators.required]
    })
  }

  onSubmit(){
    this.createNewTeamMember();
  }
  close(){

  }
  onFileSelected(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let file = element.files ? element.files[0] : null;
  
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string; // Directly use the result as a string
        this.form.patchValue({
          image: result // Assign directly to form field
        });
      };
      reader.onerror = (error) => {
        console.error('Error reading file:', error);
        this.toastrService.error("Failed to read file.");
      };
      reader.readAsDataURL(file); // Reads the file as a data URL (Base64)
    } else {
      console.log("No file selected");
    }
  }
  createNewTeamMember(){
    if (this.form.valid) {
      console.log(this.form.value)
      const createNewPersonRequestDto:CreateNewPersonRequestDto={
        firstName:this.form.value.firstName,
        middleName:this.form.value.middleName,
        lastName:this.form.value.lastName,
        graduateSchoolName:this.form.value.graduateSchoolName,
        base64String:this.form.get('image')?.value ,
        graduateTypeEnum:this.form.value.graduateType,
        visualRank:0,
        linkedInUrl:this.form.value.linkedInUrl,
        orcidUrl:this.form.value.orcidUrl,
        researchGateUrl:this.form.value.researchGateUrl
      }
      this.adminTeamService.createNewTeamMember(createNewPersonRequestDto).subscribe({
        next:(response)=>{
          if (response.success) {
            this.toastrService.success(response.message,'Success!');
          } else {
            this.toastrService.error(response.message,'Error!');          
          }
          this.dialogRef.close();
        }, error:(httpErrorResponse:HttpErrorResponse)=>{
          console.error(httpErrorResponse);
        }
      })

    } else {
      console.log('form not valid')
    }
  }
}
