const wishlist = [
    {
        name: 'Barbie The Movie Official “I Am Kenough” Unisex Hoodie',
        url: 'https://creations.mattel.com/en-es/products/barbie-the-movie-i-am-kenough-unisex-hoodie-hyn77',
        image: 'https://creations.mattel.com/cdn/shop/products/ceifjw9jookgvrixoxbc_47b5e288-1355-4466-94a1-eeb239139eb1.jpg?v=1708504092'
    },
    {
        name: 'MASTER SWORD REPLICA 105 CM THE LEGEND OF ZELDA PROPLICA',
        url: 'https://www.sddistribuciones.com/MASTER-SWORD-REPLICA-105-CM-THE-LEGEND-OF-ZELDA-PROPLICA-Isbn-4573102664501-Codigo-BDI,SD664501',
        image: 'https://www.sddistribuciones.com/Portadas/BDISD664501_1.JPG'
    },
    {
        name: 'BANDAI- Logotipo japonés Original de Tamagotchi - Alimentación, Cuidado, nutrición - Mascota Virtual con Cadena para Jugar sobre la Marcha, Color Japanese Logo (42816)',
        url: 'https://www.amazon.es/dp/B08DRYQYM6/?coliid=I2A8AZE89OGVKV&colid=1CPPEBQLJWVGT&ref_=list_c_wl_lv_ov_lig_dp_it&th=1',
        image: 'https://m.media-amazon.com/images/I/716TPFn8nLL._AC_SL1500_.jpg'
    },
    {
        name: 'Barbie The Movie - Ken Muñeco Signature Coleccionable de la película con Chaleco a Rayas y Tabla de Surf, Juguete de colección, Regalo +3 años (Mattel HPJ97)',
        url: 'https://www.amazon.es/dp/B0BHFDT5Y8/?coliid=I1J6HWHCJJEX6O&colid=1CPPEBQLJWVGT&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it',
        image: 'https://m.media-amazon.com/images/I/912CENiP+qL._AC_SL1500_.jpg'
    },
    {
        name: 'Barbie The Movie - Margot Robbie Muñeca Signature Coleccionable de la película, Vestido Vintage a Cuadros, Juguete de colección, Regalo +3 años (Mattel HPJ96)',
        url: 'https://www.amazon.es/dp/B0BHFG4756/?coliid=I35P5G5I3TGKJR&colid=1CPPEBQLJWVGT&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it',
        image: 'https://m.media-amazon.com/images/I/71+I3hfh5mL._AC_SL1500_.jpg'
    },
    {
        name: 'Disney Kingdom Hearts Poster Logo Camiseta',
        url: 'https://www.amazon.es/dp/B0971WMGLF/?coliid=I1K4UCHWSJHJ0M&colid=1CPPEBQLJWVGT&psc=0&ref_=list_c_wl_lv_ov_lig_dp_it',
        image: 'https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C91VVXACN0SL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX679_.png'
    },
    {
        name: 'ZOJIRUSHI Premium Olla arrocera NL-GAQ10-1,0 litros - con función de mantenimiento del calor - incl. taza medidora, cuchara arrocera y vaporera - con cable de red europeo',
        url: 'https://www.amazon.es/dp/B0879YFT89/?coliid=IHF07FKK3CBGT&colid=1CPPEBQLJWVGT&psc=0&ref_=list_c_wl_lv_ov_lig_dp_it',
        image: 'https://m.media-amazon.com/images/I/8116xT3hEOL._AC_SL1500_.jpg'
    },
    {
        name: 'A TODA LECHE Gorro',
        url: 'https://www.amazon.es/dp/B08BXLWW62/?coliid=I24MTRR349V66V&colid=1CPPEBQLJWVGT&ref_=list_c_wl_lv_ov_lig_dp_it&th=1&psc=1',
        image: 'https://m.media-amazon.com/images/I/815m-ztvQsL._AC_SX679_.jpg'
    }
];

const wishlistElement = document.getElementById('wishlist');

wishlist.forEach(item => {
    const li = document.createElement('li');
    
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    
    const link = document.createElement('a');
    link.href = item.url;
    link.target = '_blank';
    link.textContent = item.name;
    
    li.appendChild(img);
    li.appendChild(link);
    wishlistElement.appendChild(li);
});
