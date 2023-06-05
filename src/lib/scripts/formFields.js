const formFields = [
    {
        text: "Имя: ",
        id: "name",
        pattern: ".*",
        type: "text",
        textarea: false,
        placeholder: "Введите ваше имя",
        maxlength: '',
        required: false
    },
    {
        text: "Контактный телефон: ",
        id: "phone",
        pattern: "\\+\\d{9,13}",
        type: "tel",
        textarea: false,
        placeholder: "Ваш номер для связи",
        maxlength: '13',
        required: false 
    },
    {
        text: "Email: ",
        id: "email",
        pattern: "^[0-9A-Za-z._-]+@[0-9A-Za-z._-]+\\.[a-z]+$",
        type: "email",
        textarea: false,
        placeholder: "Ваша электронная почта",
        maxlength: '',
        required: false
    },
    {
        text: "Адрес доставки",
        id: "address",
        pattern: ".*",
        type: "",
        textarea: true,
        placeholder: "Укажите адрес доставки",
        maxlength: '',
        required: false
    }   
];


export function getFormFields(){
    return formFields;
}