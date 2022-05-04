const privacyLink = "https://www.samsung.com/uz_ru/info/privacy/";
const rulesLink = "rules";
const agreement = `FORM_INPUT_AGREEMENT`;


const formFields = [
    {
        label: "FORM_INPUT_NAME",
        name: "name",
        placeholder: "",
        type: "text",
        required: "required",
        constraint: {
            presence: {
                allowEmpty: false,
                message: "FORM_INPUT_ERROR_REQUIRED"
            }
        }
    },
    {
        name: "email",
        label: "FORM_INPUT_EMAIL",
        placeholder: "FORM_INPUT_EMAIL_PLACEHOLDER",
        type: "email",
        required: "required",
        constraint: {
            presence: {
                allowEmpty: false,
                message: "FORM_INPUT_ERROR_REQUIRED"
            },
            email : {
                message: "FORM_INPUT_ERROR_REQUIRED"
            },
        }
    },
    {
        label: "FORM_INPUT_TEXT",
        name: "text",
        placeholder: "",
        type: "textarea",
        required: "required",
        constraint: {
            presence: {
                allowEmpty: false,
                message: "FORM_INPUT_ERROR_REQUIRED"
            }
        }
    },
    {
        name: "phone",
        label: "FORM_INPUT_PHONE",
        placeholder: "FORM_INPUT_PHONE_FORMAT",
        type: "tel",
        mask: 'FORM_INPUT_PHONE_FORMAT_MASK',
        required: "required",
        constraint: {
            presence: {
                allowEmpty: false,
                message: "FORM_INPUT_ERROR_REQUIRED"
            },
            format : {
                pattern : 'FORM_INPUT_PHONE_FORMAT_PATTERN',
                flags: "i",
                message: "FORM_INPUT_ERROR_REQUIRED"
            },
        },
    },
    {
        name: "agreement1",
        label: "FORM_INPUT_PRIVACY",
        value: false,
        type: "checkbox",
        required: "required",
        constraint: {
            numericality: {
                greaterThan: 0,
                message: "FORM_INPUT_AGREEMENT_ERROR",
            },
        }
    },
    {
        name: "agreement2",
        label: "FORM_INPUT_AGREEMENT",
        value: false,
        type: "checkbox",
        required: "required",
        constraint: {
            numericality: {
                greaterThan: 0,
                message: "FORM_INPUT_AGREEMENT_ERROR",
            },
        }
    },
    {
        name: "locale",
        label: "",
        value: false,
        type: "hidden",
        required: "required"
    }
];

module.exports = formFields;