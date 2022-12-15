export interface Contact {
    id: Number,
    Name: string,
    LastName: string,
    avatar?: string,
    Description: string,
    Email: string,
    TelephoneNumber: number,
    CelularNumber: number,
    UserName: string,
}

// Agregar geo a la interface geo: Geo y crear interface Geo con sus características
// Crear el resto de las interfaces que necesito



export const contactos:Contact [] = []
// [{
//   //   "id": 19,
//   //   "first_name": "Niven",
//   //   "last_name": "Jolland",
//   //   "avatar": "https://media.istockphoto.com/photos/passport-picture-of-a-cool-guy-in-a-blue-shirt-picture-id481864562?k=20&m=481864562&s=612x612&w=0&h=T7L0CtliqKR5zJlLyxIKEV-c0VtOk7bT-Aug3Hkx1bQ=",
//   //   "description": "hijo",
//   //   "email": "njolland0@tripod.com",
//   //   "TelephoneNumber": "+351 (356) 949-8099",
//   //   "CelularNumber": "+251 (598) 382-8391"
//   // }, {
//   //   "id": 80,
//   //   "first_name": "Elmore",
//   //   "last_name": "Glencorse",
//   //   "avatar":"https://fotomanias.com.ar/wp-content/uploads/2019/03/foto-carnet-fondo-celeste.jpg",
//   //   "description": "madre",
//   //   "email": "eglencorse1@nbcnews.com",
//   //   "TelephoneNumber": "+54 (631) 501-5856",
//   //   "CelularNumber": "+86 (858) 796-7340"
//   // }, {
//   //   "id": 61,
//   //   "first_name": "Farlie",
//   //   "last_name": "Aulds",
//   //   "avatar":"https://media.istockphoto.com/photos/passport-photo-of-african-american-businessman-picture-id1196211150?k=20&m=1196211150&s=612x612&w=0&h=RzAU68adYjZrlsvCB11iHoPPZSVmKMZj4vPZId9gg9Y=",
//   //   "description": "amigo",
//   //   "email": "faulds2@aol.com",
//   //   "TelephoneNumber": "+60 (419) 705-6442",
//   //   "CelularNumber": "+33 (255) 222-7412"
//   // }, {
//   //   "id": 53,
//   //   "first_name": "Irwin",
//   //   "last_name": "Burberye",
//   //   "avatar":"https://venteaviviraunpueblo.com/app/uploads/2020/09/maria.jpg",
//   //   "description": "profesor",
//   //   "email": "iburberye3@godaddy.com",
//   //   "TelephoneNumber": "+93 (674) 230-0676",
//   //   "CelularNumber": "+86 (190) 781-7971"
//   // }, {
//   //   "id": 35,
//   //   "first_name": "Kirby",
//   //   "last_name": "Reeveley",
//   //   "avatar":"https://media.istockphoto.com/photos/passport-photo-of-latin-american-man-with-beard-picture-id1287598154?k=20&m=1287598154&s=612x612&w=0&h=P3sqRBXOIstqwE5z0ocmcBuERAC-v2FFwbGOA3u6G2A=",
//   //   "description": "compañero trabajo",
//   //   "email": "kreeveley4@timesonline.co.uk",
//   //   "TelephoneNumber": "+62 (496) 599-0196",
//   //   "CelularNumber": "+86 (480) 549-2260"
//   // }, {
//   //   "id": 4,
//   //   "first_name": "Way",
//   //   "last_name": "Krolle",
//   //   "avatar":"https://media.istockphoto.com/photos/official-portrait-of-a-blonde-woman-picture-id484023190?k=20&m=484023190&s=612x612&w=0&h=jdrzClLw1OV4rLvu8PeOKtvK_Vm-BbMd8M9DyckqE64=",
//   //   "description": "vecina",
//   //   "email": "wkrolle5@goo.gl",
//   //   "TelephoneNumber": "+81 (633) 232-3878",
//   //   "CelularNumber": "+46 (377) 123-1967"
//   // }, {
//   //   "id": 82,
//   //   "first_name": "Malachi",
//   //   "last_name": "Howerd",
//   //   "avatar":"https://image.shutterstock.com/image-photo/cheerful-young-arab-man-credit-260nw-2011652018.jpg",
//   //   "description": "cuñado",
//   //   "email": "mhowerd6@addtoany.com",
//   //   "TelephoneNumber": "+62 (384) 136-8746",
//   //   "CelularNumber": "+86 (658) 107-5765"
//   // }, {
//   //   "id": 14,
//   //   "first_name": "Sergio",
//   //   "last_name": "Ephgrave",
//   //   "avatar":"https://thumbs.dreamstime.com/b/joven-con-gafas-y-su%C3%A9ter-rojo-bigote-sosteniendo-dos-manos-delante-de-%C3%A9l-muestra-el-tama%C3%B1o-enorme-la-venta-167981119.jpg",
//   //   "description": "jefe",
//   //   "email": "pephgrave7@163.com",
//   //   "TelephoneNumber": "+86 (684) 108-8763",
//   //   "CelularNumber": "+81 (216) 350-6997"
//   // }, {
//   //   "id": 30,
//   //   "first_name": "Joscelin",
//   //   "last_name": "Stanway",
//   //   "avatar":"https://www.lavanguardia.com/files/image_449_220/files/fp/uploads/2021/04/13/6075bf447ada6.r_d.638-384.jpeg",
//   //   "description": "vecina",
//   //   "email": "jstanway8@pinterest.com",
//   //   "TelephoneNumber": "+7 (305) 146-2427",
//   //   "CelularNumber": "+7 (634) 670-2206"
//   // }, {
//   //   "id": 71,
//   //   "first_name": "Edwin",
//   //   "last_name": "Malham",
//   //   "avatar":"https://us.123rf.com/450wm/stylephotographs/stylephotographs2006/stylephotographs200601718/150512849-el-joven-con-camisa-mira-seriamente-a-la-c%C3%A1mara-.jpg?ver=6",
//   //   "description": "primo",
//   //   "email": "smalham9@telegraph.co.uk",
//   //   "TelephoneNumber": "+84 (650) 381-8574",
//   //   "CelularNumber": "+965 (411) 882-5379"
//   }]