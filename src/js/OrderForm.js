import './thirdparty/promise-polyfill.min';
const axios = require('axios');
const validate = require("validate.js");
const Imask = require("./thirdparty/imask.js");
import {isMobile, smoothScrollTo} from "./helpers";

const t = (str) => window.seceTranslationStrings[str] || str;

class OrderForm{
    constructor({formElement, formFields, formKey, onFormSubmitHandler, authKey = false}){
        this.formElement = formElement;
        this.onFormSubmitHandler = onFormSubmitHandler;
        this.formFields = formFields;
        this.formKey = formKey;
        this.authKey = authKey;

        this.isSubmitting = false;

        this.bindEventListeners();
    }

    bindEventListeners(){

        //Set masks on the inputs, if available

        for(let field in this.formFields){
            let formField = this.formFields[field];
            let formElement = this.formElement.querySelector(`#form-${formField.name}`);

            if(formElement.required){
                formElement.addEventListener("input", function (event) {
                    if (formElement.validity.valueMissing || formElement.validity.typeMismatch) {
                        formElement.setCustomValidity(t('FORM_INPUT_ERROR_REQUIRED'));

                    } else {
                        formElement.setCustomValidity("");
                    }
                });
                formElement.addEventListener("invalid", function (event) {
                    if (formElement.validity.valueMissing || formElement.validity.typeMismatch) {
                        formElement.setCustomValidity(t('FORM_INPUT_ERROR_REQUIRED'));

                    } else {
                        formElement.setCustomValidity("");
                    }
                });
            }

            if(formField.mask){

                if(formElement){
                    IMask(formElement, {
                        mask: t(formField.mask)
                    })
                }
            }
        }

        //Form submit handler

        this.formElement.addEventListener('submit', (e) => {
            this.submitFormHandler(e);
        });
    }

    submitFormHandler(e){
        e.preventDefault();

        let isValid = true;

        for(let field in this.formFields){

            if(!this.formFields.hasOwnProperty(field)){
                continue;
            }

            let formField = this.formFields[field];
            let formFieldConstraint = formField.constraint || null;

            if(formField.name === 'phone'){
                formField.constraint.format.pattern = t(formField.constraint.format.pattern);
            }

            if(formFieldConstraint){

                let element = this.formElement.querySelector(`#form-${formField.name}`);

                if(element && formFieldConstraint){

                    let value = element.value;

                    if(formField.type === 'checkbox'){
                        value = + element.checked; //Cast to integer
                    }else if(formField.type === 'file'){
                        value = element.files[0] ? element.files[0].size : 0 //Only one file is allowed for now;
                    }

                    formField.errors = validate.single(value, formFieldConstraint);
                    formField.isValid = !(formField.errors && formField.errors.length);

                    const errorContainer = element.parentElement.parentElement;

                    if(!formField.isValid){
                        errorContainer.querySelector('.message-error').innerHTML = t(formField.errors[0]);
                        element.classList.add('error');

                        isValid = false;
                    }else{
                        errorContainer.querySelector('.message-error').innerHTML = '';
                        element.classList.remove('error');
                    }
                }
            }
        }

        if(isValid && !this.isSubmitting){
            const data = new FormData(this.formElement);

            this.isSubmitting = true;

            data.append("formKey", this.formKey);

            let actionUrl = `${this.formElement.action}${this.authKey ? '&access-token='+this.authKey : ''}`;

            axios.post(
                actionUrl,
                data,
                {
                    withCredentials: true
                }
            ).then((response) => {
                this.isSubmitting = false;

                if(response.data.success){
                    if(response.data.message){
                        this.onFormSubmitHandler(response);
                    }
                    this.formElement.reset();
                }else{
                    if(response.data.message){
                        this.onFormSubmitHandler(response);
                    }
                }
            }).catch((err) => {
                this.isSubmitting = false;
            })
        }else{
            if(isMobile()){
                smoothScrollTo('.error');
            }
        }
    }
}

export default OrderForm;

