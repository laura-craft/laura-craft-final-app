import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  enterForm: FormGroup;
  loading=false;
  submitted=false;


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
  
   }

  ngOnInit(): void {
    this.enterForm = this.fb.group ({
      firstName: ['', [Validators.required]]
    })
  }
  onSubmit() {
   this.submitted = true;
   this.router.navigate(['/main-nav']);

    }
    };
   

