import React from 'react'

const StoreData = [

    {
        id: 1, name: 'Disney 100 - Happy Faces', price:'149.00' ,cover: 'https://static.wixstatic.com/media/38036e_0dbb74e49c8e417e948a619f77384ccf~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/38036e_0dbb74e49c8e417e948a619f77384ccf~mv2.webp'
    },
    {
        id: 2, name: 'Disney 100 - Platinum Princesses', price:'149.00' , cover: 'https://static.wixstatic.com/media/38036e_f63ffdf9f9014d3e9c6898940bfa6092~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/38036e_f63ffdf9f9014d3e9c6898940bfa6092~mv2.webp'
    },
    {
        id: 3, name: 'Be My Valentine', price:'149.00' ,cover: 'https://static.wixstatic.com/media/38036e_bce8c45ad34549eea84080996cd27364~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/38036e_bce8c45ad34549eea84080996cd27364~mv2.webp'
    },
    {
        id: 4, name: 'Encanto Candle', price:'149.00' , cover: 'https://static.wixstatic.com/media/38036e_b7f122d0da2947cc8bd19db2e092313b~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/38036e_b7f122d0da2947cc8bd19db2e092313b~mv2.webp'
    },
    {
        id: 5, name: 'Disney 100 - Mickey Mouse', price:'149.00' , cover: 'https://static.wixstatic.com/media/38036e_86ee94a42af842b09ed3747d40719bcb~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/38036e_86ee94a42af842b09ed3747d40719bcb~mv2.webp'
    },
    {
        id: 6, name: 'Encanto Birds', price:'149.00' , cover: 'https://static.wixstatic.com/media/38036e_c03a7f2002274e228871c0d0fd591963~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/38036e_c03a7f2002274e228871c0d0fd591963~mv2.webp'
    },
    {
        id: 7, name: 'Disney 100 - Cute Celebrations', price:'149.00' , cover: 'https://static.wixstatic.com/media/38036e_6e50ad3531fc4ac7902521770f316e3c~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/38036e_6e50ad3531fc4ac7902521770f316e3c~mv2.webp'
    },
    {
        id: 8, name: 'Mickey Colour Wheel', price:'149.00' , cover: 'https://static.wixstatic.com/media/38036e_c4668eebc8be495b8b6c1f298eb37785~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/38036e_c4668eebc8be495b8b6c1f298eb37785~mv2.webp'
    },
    {
        id: 9, name: 'Finding Nemo', price:'149.00' , cover: 'https://static.wixstatic.com/media/38036e_e4b79886abfc4ff5ae967ea62276fc63~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/38036e_e4b79886abfc4ff5ae967ea62276fc63~mv2.webp'
    },
    {
        id: 10, name: 'Tinkerbell Purple', price:'149.00' , cover: 'https://static.wixstatic.com/media/38036e_8594d30cfd954f27aa71ea0acce0d48c~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/38036e_8594d30cfd954f27aa71ea0acce0d48c~mv2.webp'
    },
    {
        id: 11, name: 'Encanto Trio', price:'149.00' , cover: 'https://static.wixstatic.com/media/38036e_7866633615454557b29f249638a19f83~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/38036e_7866633615454557b29f249638a19f83~mv2.webp'
    },
    {
        id: 12, name: 'Stitch Pink', price:'149.00' , cover: 'https://static.wixstatic.com/media/38036e_a41238ab1c6d4aefaf3f7fefb8c0a10f~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/38036e_a41238ab1c6d4aefaf3f7fefb8c0a10f~mv2.webp'
    },
    {
        id: 13, name: 'Tinkerbell Boho', price:'149.00' , cover: 'https://static.wixstatic.com/media/38036e_32c7b97b938543ab8e251b14a98930d7~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/38036e_32c7b97b938543ab8e251b14a98930d7~mv2.webp'
    },
    {
        id: 14, name: 'Jack Skellington', price:'149.00' , cover: 'https://static.wixstatic.com/media/38036e_ca4061f580d044538c9d591bc449dbdf~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/38036e_ca4061f580d044538c9d591bc449dbdf~mv2.webp'
    },
    {
        id: 15, name: 'Simba', price:'149.00' , cover: 'https://static.wixstatic.com/media/38036e_14990161ea4a4b3a8e2f20011ded2d87~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/38036e_14990161ea4a4b3a8e2f20011ded2d87~mv2.webp'
    },
    {
        id: 16, name: 'Mickey Stripes', price:'149.00' , cover: 'https://static.wixstatic.com/media/38036e_9bd816b2e76d4be8ab848f4d2f088e7d~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/38036e_9bd816b2e76d4be8ab848f4d2f088e7d~mv2.webp'
    },
    {
        id: 17, name: 'Jason Naylor', price:'149.00' , cover: 'https://static.wixstatic.com/media/38036e_ddb1d5416a274941a64115f02fa574aa~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/38036e_ddb1d5416a274941a64115f02fa574aa~mv2.webp'
    },
    {
        id: 18, name: 'Star Wars 70s', price:'149.00' , cover: 'https://static.wixstatic.com/media/38036e_9cf060ebf33c48788be8704c9e9de255~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/38036e_9cf060ebf33c48788be8704c9e9de255~mv2.webp'
    },
    {
        id: 19, name: 'Star Wars Ships', price:'149.00' , cover: 'https://static.wixstatic.com/media/38036e_c5255956c163489e8ea458b996ec1c8f~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/38036e_c5255956c163489e8ea458b996ec1c8f~mv2.webp'
    },
    {
        id: 20, name: 'Star Wars Comic', price:'149.00' , cover: 'https://static.wixstatic.com/media/38036e_d5a1c900d9994488946b30525d070ad5~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/38036e_d5a1c900d9994488946b30525d070ad5~mv2.webp'
    },
    {
        id: 21, name: 'Carolyn Gavin', price:'149.00' , cover: 'https://static.wixstatic.com/media/38036e_f53ebc9e895f46c69b978d3c78d6d960~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/38036e_f53ebc9e895f46c69b978d3c78d6d960~mv2.webp'
    }
]

export default StoreData