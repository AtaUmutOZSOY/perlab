import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CollaborationsComponent } from 'src/app/components/collaborations/collaborations.component';
import { CreateCollaborationRequestDto } from 'src/app/modules/admin/dtos/create-collaboration-request-dto';
import { Collaboration } from 'src/app/modules/admin/models/collaboration';
import { AdminCollaborationService } from 'src/app/modules/admin/services/admin-collaboration.service';

@Component({
  selector: 'app-create-new-collaboration-dialog',
  templateUrl: './create-new-collaboration-dialog.component.html',
  styleUrls: ['./create-new-collaboration-dialog.component.css']
})
export class CreateNewCollaborationDialogComponent implements OnInit {

  form!: FormGroup;
  imageByteArray!: string;  // Uint8Array türünde bir değişken tanımlama

  constructor(
    private dialogRef: MatDialogRef<CollaborationsComponent>,
    private formBuilder: FormBuilder,
    private collaborationService: AdminCollaborationService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      collaborationName: ['', Validators.required],
      collaborationWebSiteLink: ['', Validators.required],
      image: [null, Validators.required]
    });
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
  
  
  

  onSubmit() {
    if (this.form.valid) {
      const dto: CreateCollaborationRequestDto = {
        collaborationName: this.form.get('collaborationName')?.value,
        collaborationWebSiteLink: this.form.get('collaborationWebSiteLink')?.value,
        imageBase64String: this.form.get('image')?.value // Adjust based on the new form structure
      };
      this.collaborationService.createCollaboration(dto).subscribe({
        next: (response) => {
          this.toastrService.success(response.message, "Succeed!");
          this.dialogRef.close();
        },
        error: (error: HttpErrorResponse) => {
          this.toastrService.error("An error occurred while creating the collaboration.");
          console.error("API Error Response: ", error);
        }
      });
    } else {
      this.toastrService.error("Please fill in all required fields.");
    }
  }
  

  close() {
    this.dialogRef.close();
  }
}
