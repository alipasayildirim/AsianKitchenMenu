const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];

  let menuSet = new Set(["All"]) // Navbar için kategorileri çekiyoruz.

  let menuDOM = document.querySelector('.btn-container')//Navbarı ekleyeceğimiz yere ulaştık

  let btnStyle = `
display: inline-block;
font-weight: 400;
line-height: 1.5;
text-align: center;
text-decoration: none;
vertical-align: middle;
user-select: none;
background-color: transparent;
border: 1px solid;
padding: 0.375rem 0.75rem;
font-size: 1rem;
border-radius: 0.25rem;
color: #212529
cursor: pointer;
`

//menu objesinden kategorileri çekmek için

menu.forEach (function(element){ 
    menuSet.add(element.category)
})

//set'deki bilgilerle buton oluşturma

menuSet.forEach(function (element){ 
    let btnDOM = document.createElement('span') //buton için span oluşturma
    btnDOM.classList.add("btn-item")               //butona class ekleme
    btnDOM.style = btnStyle                     //butona style özelleiklerini ekleme
    btnDOM.setAttribute('id',`${element}`)           //id atama
    btnDOM.innerHTML = `${element}`                   //buton değeri
    menuDOM.appendChild(btnDOM)                  //butonu ekleme
})

let foodDOM = document.querySelector('.section-center')     //yemek listesini ekleyeceğimiz yere ulaştık
menu.forEach(addList)                                       //yemek listesini ekleyeceğimiz fonksiyon
function addList(element){
    let divDOM =document.createElement('div')               //iç içe div yapısı ekledik
    divDOM.classList.add("menu-items","col-lg-6","col-sm-12")   //style classlarıyla boyut ayarladık
    divDOM.setAttribute('name',element.category)            //name ataması yaptık
    divDOM.setAttribute('id',element.id)                    //id atadık


    let imgDOM = document.createElement('img')              //img oluşturma
    imgDOM.src = element.img                                //img adresini atadık
    imgDOM.alt = element.title                              //img açıklaması
    imgDOM.classList.add("photo")                           //img classı  
    divDOM.appendChild(imgDOM)                              //divin içine img atama div>img


    let infoDOM = document.createElement('div')             //yemek bilgileri için div
    infoDOM.classList.add('menu-info')

    let dtitleDOM = document.createElement('div')           //yemek ismi ve parası için div
    dtitleDOM.classList.add('menu-title')

    let titleDOM = document.createElement ('h4')            //yemek ismi için tag
    titleDOM.innerHTML = element.title                      //nesnemizden yemek ismini aldık
    dtitleDOM.appendChild(titleDOM)                         //titleDOM'u dtitleDOM'a ekledik

    let priceDOM = document.createElement('h4')             //Fiyat bilgisi için tag
    priceDOM.innerHTML = element.price                      //nesnemizden fiyat bilgisi aldık
    dtitleDOM.appendChild(priceDOM)                         //priceDOM'u dtitleDOM'a ekledik

    infoDOM.appendChild(dtitleDOM)                          //ekleme

    let textDOM = document.createElement ('div')            //açıklama için div oluşturduk
    textDOM.classList.add('menu-text')
    textDOM.innerHTML = element.desc
    infoDOM.appendChild(textDOM)

    divDOM.appendChild(infoDOM)

    foodDOM.appendChild(divDOM)
}   

let newMenu = [...menu]     //seçilen kategoride değişecek bilgiler için yeni object oluşturduk.
let beforeSelected = ""     //Önceki seçilmiş kategorideki bilgileri temizlemek için(eski kategori ismi)


//kullanılan dinleyiciler ve style özellikleri buttondaki efect için (her button için ayrı yapmamız lazım)

document.getElementById('All').addEventListener("mouseenter",() => {        //mouse üstündeyken
    document.getElementById('All').style.backgroundColor = "black"          //arka plan
    document.getElementById('All').style.color = "white"                    //Yazı rengi
})

document.getElementById('All').addEventListener("mouseleave",() => {        //mouse ayrıldıktan sonra
    document.getElementById('All').style.backgroundColor = "transparent"
    document.getElementById('All').style.color = "black"
})

//Diğer kategoriler için

//KOREA

document.getElementById('Korea').addEventListener("mouseenter",() => {
    document.getElementById('Korea').style.backgroundColor = "black"
    document.getElementById('Korea').style.color = "white"
})

document.getElementById('Korea').addEventListener("mouseleave",() => {
    document.getElementById('Korea').style.backgroundColor = "transparent"
    document.getElementById('Korea').style.color = "black"
})

//JAPAN

document.getElementById('Japan').addEventListener("mouseenter",() => {
    document.getElementById('Japan').style.backgroundColor = "black"
    document.getElementById('Japan').style.color = "white"
})

document.getElementById('Japan').addEventListener("mouseleave",() => {
    document.getElementById('Japan').style.backgroundColor = "transparent"
    document.getElementById('Japan').style.color = "black"
})
    

//CHİNA

document.getElementById('China').addEventListener("mouseenter",() => {
    document.getElementById('China').style.backgroundColor = "black"
    document.getElementById('China').style.color = "white"
})

document.getElementById('China').addEventListener("mouseleave",() => {
    document.getElementById('China').style.backgroundColor = "transparent"
    document.getElementById('China').style.color = "black"
})


document.addEventListener('click',(selected) => {   //tıklandığızı zaman olacaklar için
    if (selected.target.matches('span')){           //sadece butonlarda devreye girmesi için
        if (beforeSelected){                        //önceden kategori seçilmişse buton bilgileri silinir
            document.getElementById(beforeSelected).style.boxShadow = "" //buton için gölge
        }
        
        document.getElementById(selected.target.innerHTML).style.boxShadow = "0px 0px 0px 4px #898d91" //butona gölge oluşturma 
        document.getElementById(selected.target.innerHTML).style.border = "1px solid black"

        beforeSelected = selected.target.innerHTML             //Tıklanan kategori ismini sonradan ulaşmak için değişkene atama

        if(beforeSelected){                                    //Önceden kategori seçilmişse bilgileri silme
            
            newMenu.forEach(function (item){                    // önceki listeyi silmek için
                let id = document.getElementById(item.id)       // id ataması
                id.remove()                                     //silme
            })
        }
        if (selected.target.innerHTML == 'All'){                //All kategorisi için
            newMenu = [...menu]                                 //listeyi yeni objecte atadık
            newMenu.forEach(addList)                            //ekleme fonksiyonun çağırdık
        }
        else {
            newMenu = menu.filter(function(element){                 //'All' dışındaki kategoriler için yemek listesini filteledik
                return element.category == selected.target.innerHTML //seçilen kategori eşit ise yeni objecte atadık
            })
            newMenu.forEach(addList)                                  //ekleme fonksiyonunu çağırdık
        }
    }
    else {
        menuSet.forEach(function(element){
            document.getElementById(element).style.boxShadow == ""  //buttondan başka yere tıklandığında gölgeyi kaldırmak için
        })
    }
})

