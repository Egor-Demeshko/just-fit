import fs from "fs";
import dotenv from 'dotenv';
dotenv.config();

const ORIGIN = "https://just-fit.by";
const path = process.env.SITEMAP_FILE_PATH;


const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;

const PUBLIC_STRAPI_ORIGIN = process.env.STRAPISDK_HOST;
const data = await fetch(PUBLIC_STRAPI_ORIGIN + "/api/seo-straniczs")
                    .then(response => {
                        if(response.statusText === "OK"){ 
                            return response.json();
                        }
                    });
const goods = await fetch(PUBLIC_STRAPI_ORIGIN + "/api/goods?fields[0]=fitid")
                    .then(response => {
                        if(response.statusText === "OK"){ 
                            return response.json();
                        }
                    })
                    
                    
const siteData = data.data;
const goodsArr = goods.data;
                    

sitemap += createStringWithSiteIds(siteData);
sitemap += createStringWithGoods(goodsArr);

fs.writeFileSync(path, sitemap + '</urlset>', 'utf8');


function createStringWithSiteIds(siteData){
    let string = "";

    siteData.forEach(site => {
        const id = site.attributes.page_id;
        string += `<url>
            <loc>${ORIGIN}/${id}</loc>
            <lastmod>${year}-${(month < 10) ? "0" + month : month}-${(day < 10) ? "0" + day : day}T${(hour < 10) ? "0" + hour : hour}:${(minute < 10) ? "0" + minute : minute}:${(second < 10) ? "0" + second : second}+00:00</lastmod>
            <priority>${ (id === "main") ? "1.00" : "0.80"}</priority>
        </url>\n`
    })

    return string;
}

function createStringWithGoods(goodsArr){
    let string = "";

    goodsArr.forEach(good => {
        const id = good.attributes.fitid;
        string += `<url>
            <loc>${ORIGIN}/good/${id}</loc>
            <lastmod>${year}-${(month < 10) ? "0" + month : month}-${(day < 10) ? "0" + day : day}T${(hour < 10) ? "0" + hour : hour}:${(minute < 10) ? "0" + minute : minute}:${(second < 10) ? "0" + second : second}+00:00</lastmod>
            <priority>1.00</priority>
        </url>\n`;
    })

    return string;
}
                    