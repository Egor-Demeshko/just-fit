import fs from "fs";
import dotenv from 'dotenv';
dotenv.config();


let path = process.env.YML_PATH;
console.log("YML_PATH", path);
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

let ymlStart = `<?xml version="1.0" encoding="UTF-8"?>
<yml_catalog date="${year}-${(month < 10 ? '0' + month : month)}-${(day < 10 ? '0' + day : day)}T${(hour < 10 ? '0' + hour : hour)}:${(minute < 10 ? '0' + minute : minute)}:${(second < 10 ? '0' + second : second)}+03:00">
<shop>
<name>Just-fit</name>
<company>Самозанятый Демешко Е.Д.</company>
<url>https://just-fit.by</url>
<platform>SvelteKit</platform>
<categories>
    <category id="1">Мужское нижнее белье</category>
    <category id="10" parentId="1">Мужские трусы слипы</category>
    <category id="11" parentId="1">Мужские трусы стринги</category>
    <category id="12" parentId="1">Мужские трусы боксеры</category>
    <category id="13" parentId="1">Кружевное мужское белье</category>
</categories>
<delivery-options>
    <option cost="6" days="7"/>
    <option cost="0" days="7"/>
</delivery-options>
<pickup-options>
    <option cost="0" days="7"/>
</pickup-options>
<offers>`;

let ymlEnd = `</offers>
</shop>
</yml_catalog>`;

if(!dotenv) {
    console.error("нет dotenv файла");
} else {
    const PUBLIC_STRAPI_ORIGIN = process.env.STRAPISDK_HOST;

    createFile(PUBLIC_STRAPI_ORIGIN); 
}

async function createFile(apiRoute){

    /**@type {object} обьект содержащий массив данных под свойством data*/
    const data = await fetch(apiRoute + "/api/goods?populate=images")
                        .then( response => response.json());

    /**
     * {
        id: 1,
        attributes: {
        fitid: 'slipy_classic_white',
        name: 'Слипы классические .JF',
        prices: { current: '32' },
        advantages: {
        ids: [Array],
        textile: 'Хлопок 92%, Лайкра 8%',
        soft: 'Приятные тактильно'
        },
        description: 'Классические мужские слипы из высококачественной хлопкой ткани. Впереди присуствует выточка, изнутри все швы закрыты. Нет болтающихся кусков ткани.\n' +
        'Трусы крепкого и строго кроя. Очень приятные тактильно. Ощущаются уверенно и крепко. Вы можете выбрать цвет при заказе, а также изменить резинку сверху. Ее можно сделать вшитой и тонкой.',
        category: { sleepy: 'sleepy' },
        createdAt: '2023-06-30T08:05:00.162Z',
        updatedAt: '2023-08-13T13:13:25.701Z',
        publishedAt: '2023-06-30T08:05:04.748Z',
        images: { data: [Array] }
  }
}*/
const arr = data.data;

arr.forEach( good => {

    const {id, attributes: {name, prices, category, fitid, images, description}} = good;
    console.log(images.data[0].attributes.formats.medium.url);  
        let offer = `<offer id="${id}">
        <name>${name}</name>
        <vendor>JF</vendor>

        <url>https://just-fit.by/good/${fitid}</url>
        <price>${prices.current}</price>
        <oldprice>${prices.current}</oldprice>
        <enable_auto_discounts>false</enable_auto_discounts>
        <currencyId>BYN</currencyId>
        <categoryId>${ (category["sleepy"]) ? "10" : 
        category["boxer"] ? "12" : 
        category["stringy"] ? "11" : "13" }</categoryId>
        <available>true</available>
        <picture>https://api.just-fit.by${images.data[0].attributes.formats.medium.url}</picture>
        <delivery>true</delivery>
        <description>
        <![CDATA[          
            <p>${description}</p>
        ]]>
        </description>                
        <manufacturer_warranty>true</manufacturer_warranty>
        <weight>0.2</weight>
        <dimensions>5/5/5</dimensions>
        </offer>`;

        ymlStart += offer;
    });
        
       fs.writeFileSync(path, ymlStart + ymlEnd, 'utf8');
    }
