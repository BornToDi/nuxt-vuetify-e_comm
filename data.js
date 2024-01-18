const products = [
    {
        id: "1",
        name: "calvin alpha shirt",
        price: 25999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmXmbvXZFZHyyuO08bB7AcGQ411HlG4eT1yQ&usqp=CAU",
        description: "A shirt is a cloth garment for the upper body (from the neck to the waist). Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments."
    },
    {
        id: "2",
        name : "calvin zebra shirt",
        price: 20999,
        image: "https://cdn01.nnnow.com/web-images/medium/styles/P3PVHM5F9U7/1675745172769/1.JPG",
        description: "A shirt is a cloth garment for the upper body (from the neck to the waist). Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments."
    },
    {
        id: "3",
        name : "calvin pichachu shirt",
        price: 29999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfELxF-eeHPpqBmanOSMKHDukBG91tGAm9A&usqp=CAU",
        description: "A shirt is a cloth garment for the upper body (from the neck to the waist). Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments."
    },
    {
        id: "4",
        name : "calvin goku shirt",
        price: 39999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmrBiZW4N3WTCXu6XYwhqqxkTG9QJnD3C3tw&usqp=CAU",
        description: "A shirt is a cloth garment for the upper body (from the neck to the waist). Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments."
    },
    {
        id: "5",
        name : "calvin riyad shirt",
        price: 37999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Pbjmr91OW9eHv08i_4bIn-EHZANXIveWpA&usqp=CAU",
        description: "A shirt is a cloth garment for the upper body (from the neck to the waist). Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments."
    },
    {
        id: "6",
        name : "calvin abir shirt",
        price: 27999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmXmbvXZFZHyyuO08bB7AcGQ411HlG4eT1yQ&usqp=CAU",
        description: "A shirt is a cloth garment for the upper body (from the neck to the waist). Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments."
    },
    {
        id: "7",
        name : "calvin naeem shirt",
        price: 27999,
        image: "https://cdn01.nnnow.com/web-images/medium/styles/P3PVHM5F9U7/1675745172769/1.JPG",
        description: "A shirt is a cloth garment for the upper body (from the neck to the waist). Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments."
    },
    {
        id: "8",
        name : "calvin salman shirt",
        price: 23999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfELxF-eeHPpqBmanOSMKHDukBG91tGAm9A&usqp=CAU",
        description: "A shirt is a cloth garment for the upper body (from the neck to the waist). Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments."
    },
    {
        id: "9",
        name : "calvin mushfiq shirt",
        price: 39999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmrBiZW4N3WTCXu6XYwhqqxkTG9QJnD3C3tw&usqp=CAU",
        description: "A shirt is a cloth garment for the upper body (from the neck to the waist). Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments."
    },
    {
        id: "10",
        name : "calvin pobon shirt",
        price: 38999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Pbjmr91OW9eHv08i_4bIn-EHZANXIveWpA&usqp=CAU",
        description: "A shirt is a cloth garment for the upper body (from the neck to the waist). Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments."
    },
    {
        id: "11",
        name : "calvin hello pant",
        price: 16999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC4Fl9nwx-tovwbZhRj2Qi5hB761KBVVD-WA&usqp=CAU",
        description: "A shirt is a cloth garment for the upper body (from the neck to the waist). Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments."
    },
    {
        id: "12",
        name : "calvin kakaron pant",
        price: 9999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtvR-WoUOeGz3Gh0TinMFWv0vqbE1fAlCEdg&usqp=CAU",
        description: "A shirt is a cloth garment for the upper body (from the neck to the waist). Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments."
    },
    {
        id: "13",
        name : "calvin dragon pant",
        price: 19999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCw9E8EjhkfEow5CUJf0LjQLygBUjvEl4s8w&usqp=CAU",
        description: "A shirt is a cloth garment for the upper body (from the neck to the waist). Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments."
    },
    {
        id: "14",
        name : "calvin hero pant",
        price: 7999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmlMib2DZfisEKHsn_jIsT7wiyG-v2JvluOw&usqp=CAU",
        description: "A shirt is a cloth garment for the upper body (from the neck to the waist). Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments."
    },
    {
        id: "15",
        name : "calvin hero pant",
        price: 8999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmlMib2DZfisEKHsn_jIsT7wiyG-v2JvluOw&usqp=CAU",
        description: "A shirt is a cloth garment for the upper body (from the neck to the waist). Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments."
    },
    {
        id: "16",
        name : "calvin hero pant",
        price: 2999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmlMib2DZfisEKHsn_jIsT7wiyG-v2JvluOw&usqp=CAU",
        description: "A shirt is a cloth garment for the upper body (from the neck to the waist). Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments."
    },
    {
        id: "17",
        name : "calvin hero pant",
        price: 5999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmlMib2DZfisEKHsn_jIsT7wiyG-v2JvluOw&usqp=CAU",
        description: "A shirt is a cloth garment for the upper body (from the neck to the waist). Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments."
    },
];
export default products;