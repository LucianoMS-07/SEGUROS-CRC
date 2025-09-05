module.exports = {
    name: "Grupo CRC - Seguros",
    email: "contacto@grupocrcseguros.com ",
    phoneForTel: "+52 999 947 32 69",
    phoneFormatted: "(999) 947-3269",
    address: {
        lineOne: "Plaza Laureles. Local 14",
        lineTwo: "Calle 21 por 25. Col.México",
        city: "Mérida",
        state: "Yucatán",
        zip: "97125",
        country: "MX",
        mapLink: "https://share.google/TIhRzkUFzJHogZ0w9",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
