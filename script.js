// console.log("Merhaba");
// console.log([1,2,3]);
// console.warn("Uyarı");


//Variables(Değişkenler)

// var age;
// console.log(age)
// age=20;
// console.log(age)
// var fullName="Mehmet"
// console.log(fullName)

//Variable Type

//Primitive Types

//String
// let firstName="Mehmet";
// console.log(typeof firstName)

// //Number

// let age=20;
// console.log(typeof age)

// let money=100.5;

// console.log(typeof money)

// //Boolean

// let isActive=false;

// console.log(typeof isActive)

// //null

// let job=null

// console.log(typeof job)

// //undefined

// let car;

// console.log(typeof car)



// //Reference Types-Objects

// //Array
// let names=["Mehmet","Fatma","Onur"];

// console.log(typeof names);

// let adress={city:"Istanbul",country:"Turkey"}

// //Function

// var calculateAge=function () {
//     return;
// }

// console.log(typeof adress)

//Tür Dönüşümü

// let num1=Number("5");
// let num2=Number("10");
// let total=num1+num2;
// console.log(typeof total)
// console.log(total);
// console.log(total)

//Random sayı üretme

// var min=50;
// var max=100;

// console.log(min+Math.random()*(max-min))

//Template Literals

// const fullName="Mehmet Akbaba";
// const city="Istanbul";
// const yearOfBirth=1993;

// let val;

// val=`My name is ${fullName}  I'am ${2021-yearOfBirth>=18? "over 18":"under 18"} 
// years old and I live in ${city}`
// // console.log(val)

// // Demo : Strings

// var sentence = "  Template Literals or template strings is the ability Have multi-line strings without any funny business. ";

// var url = "http://sadikturan.com/Modern Javascipt KURSU sıfırdan ileri seviye ü ö ş";

// // // cümle kaç karakterlidir ?
// // console.log(sentence.length);

// // // kaç kelimeden oluşuyor ?
// // console.log(sentence.trim().split(' ').length);

// // // Tüm cümleyi küçük harfe çevirin.
// // console.log(sentence.toLowerCase())
// // console.log(sentence.toUpperCase());

// // // Cümlenin başındaki ve sonundaki boşlukları siliniz.
// // console.log(sentence.trim());

// // // '-' karakterini silin.
// // console.log(sentence.replace('-',''));

// // // url'nin içinden str kısmını çıkarınız.
// // var str = 'http://';
// // console.log(url.substr(str.length));
// // console.log(url.slice(str.length));

// // // url hangi protocol'u kullanmaktadır ? (http,https)
// // console.log(url.startsWith('http'));
// // console.log(url.startsWith('https'));

// // // url, '.com' ifadesini içeriyor mu?
// // console.log(url.indexOf('.com'));
// // console.log(url.includes('.com'));

// // // url string ifadesini geçerli bir url olarak düzenleyiniz.

// // console.log(url.toLowerCase()
// //                .replace(/ /g,'-') 
// //                .replace(/ı/g,'i')
// //                .replace(/ü/g,'u')
// //                .replace(/ö/g,'o')
// //                .replace(/ş/g,'s')
// //                .replace(/ç/g,'c')
// // );

// //Arrays

// let names=["Mehmet","Fatma","Onur"];

// let years=[1993,1963,1997];

// let mix=["Mehmet","Fatma",1993,null,undefined,["sinema","kitap"]];

// console.log(names);
// console.log(typeof names);
// console.log(names.length);

// console.log(years);

// console.log(mix)

// //Get array item

// console.log(names[0])

// //Set array item

// names[0]="Mustafa";

// //Add item

// names.push(1881);

// console.log(names)

// //Remove item

// names.pop(); //Sonda ki item silinir.
// names.shift(); //Başta ki item silinir.

// //Reverse= Dizide ki elemanlarının sırasını terse çevirir.
// names.reverse();

// console.log(names);

// //Sort=Alfabetik sıraya ve sayısal sıraya göre sıralama yapar.

// years.sort();

// console.log(years);

// //Concat dizileri birleştirmek için kullanılan metodtur.

// let val=years.concat(names);
// console.log()

// console.log(val);

// //Splice= İstenilen index numarasını belirterek o indexe atama yapma.
// //İndex numarası verildikten sonra başka index numarası verilerek belirtilen indexin silinmesi sağlanabilir.
// //Dizi içerisinde ki elemanlarıda silmek için kullanılabilir.
// names.splice(2,0,"Mustafa Kemal")
// console.log(names);


// function over18(year) {
//     let age=2018-year;
//     return age>=18;
// }

// //find=Örnek fonksiyonda 18 yaşını geçen bir kişiyi getirir sadece.

// // let value=years.find(over18)


// //filter=Örnek fonksiyonda 18 yaşını geçen kaç kişi varsa dizi olarak getirir.



// let value=years.filter(over18)

// console.log(value);

//Object Literals

// let val;
// let person={
//     firstName:"Mehmet",
//     lastName:"Akbaba",
//     age:27,
//     hobbies:["kitap","müzik"],
//     adress:{
//         city:"Istanbul",
//         country:"Turkey"
//     },

//     getBirthYear:function () {
//         return 2018-this.age
//     }
// }
// val=person.firstName;

// console.log(person);
// console.log(val);
// console.log(typeof person);


// let people=[
//     {firstName:"Mehmet",lastName:"Akbaba"},
//     {firstName:"Fatma",lastName:"Akbaba"}
// ]

// val=people[0];

// console.log(val)
// console.log(people)

//Functions

// function yasHesapla(dogumYili) {
//     return 2021-dogumYili;
// }

// let val=yasHesapla(1993);
// console.log(val);

// function Emeklilik(dogumYili,isim) {
//     let yas=yasHesapla(dogumYili);
//     let emekli=65-yas;

//     if (emekli>0) {
//         console.log(`${isim}Emekli olmanıza ${emekli} yıl kaldı`)
//     }
//     Emeklilik(1993,"Mehmet");
// }

//Function Declarations

// function sum(a,b) {
//     var c=a+b;
//     return c;
    
// }

//  console.log(sum(10,20));

//Funciton Expressions

// const sum=function(a,b){
//     var c=a+b;
//     return c;
// }

// console.log(sum(10,20));

//Create Element

// const li=document.createElement("li");

// //Add Class
// li.className="list-group-item";

// //attribute
// li.setAttribute("title","New item");
// li.setAttribute("data-id","5");

// //Text node

// const text=document.createTextNode("New item");
// li.appendChild(text);



// console.log(li);

//Remove Element

// const taskList=document.querySelector("#task-list");

// taskList.remove();


// Keyboard Events

// const input = document.querySelector('#txtTaskName');
// const form = document.querySelector('form');
// const select = document.querySelector('#select');

// input.addEventListener('keydown',eventHandler);
// input.addEventListener('keyup',eventHandler);
// input.addEventListener('keypress',eventHandler);
// input.addEventListener('focus',eventHandler);
// input.addEventListener('blur',eventHandler);
// input.addEventListener('cut',eventHandler);
// input.addEventListener('paste',eventHandler);
// input.addEventListener('select',eventHandler);
// form.addEventListener('submit',eventHandler);

// select.addEventListener('change',eventHandler);

// function eventHandler(e){
//        console.log('event type '+ e.type);
//     // console.log('key code :'+e.keyCode);
//        console.log('value :'+e.target.value);

//     // e.target.style.backgroundColor='yellow';

//     e.preventDefault();
// }