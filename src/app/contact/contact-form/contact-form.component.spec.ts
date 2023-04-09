import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form.component';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ContactFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('email field validity - invalid when empty', () => {
    let email = component.form.controls['email'];
    expect(email.valid).toBeFalsy();
  });

  it('email field validity - required validator', () => {
    let errors: any = {};
    let email = component.form.controls['email'];
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('email field validity - pattern validator', () => {
    let errors: any = {};
    let email = component.form.controls['email'];
    email.setValue("test");
    errors = email.errors || {};
    expect(errors['pattern']).toBeTruthy();
  });

  it('message field validity', () => {
    let message = component.form.controls['message'];
    expect(message.valid).toBeFalsy();
  });

  //TEMPORARY - to be changed, when submit function will be connected to API
  it('submitting a form emits a correct object', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls['email'].setValue("justanemail@gmail.com");
    component.form.controls['message'].setValue("abcd1234");
    expect(component.form.valid).toBeTruthy();

    var obj = component.submit();

    expect(obj.email).toBe("justanemail@gmail.com");
    expect(obj.message).toBe("abcd1234");
  });


});
