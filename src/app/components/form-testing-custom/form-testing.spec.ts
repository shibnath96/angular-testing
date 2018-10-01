import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { FormTesting } from './form-testing.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { DebugElement } from '@angular/core';

describe( 'FormTesting', () => {

    let compIns: FormTesting;
    let nativeComp: any;
    let fixture: ComponentFixture<FormTesting>;
    let de: DebugElement;
    let el: HTMLElement;
    const formBuilder: FormBuilder = new FormBuilder();

    beforeEach( async( () => {
        TestBed.configureTestingModule({
            declarations : [ FormTesting ],
            imports: [ 
                BrowserModule,
                FormsModule,
                ReactiveFormsModule
            ],
            providers: [ { provide: FormBuilder, useValue: formBuilder } ]
        }).compileComponents().then( () => {
            fixture = TestBed.createComponent( FormTesting );
            compIns = fixture.componentInstance;
            de = fixture.debugElement.query( By.css('form') );
            el = de.nativeElement;
        })
    }))



});