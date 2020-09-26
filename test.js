// // constructor function 

// //  


// function Book(title,author,isbn){
//   this.title = title ;
//   this.author = author ;
//   this.isbn = isbn
// }


// // UI function 

// function Ui(){

// }

// Ui.prototype.addBookToList = function(book){
//   // console.log(book);
//   const list = document.getElementById('book-list') ;
//   const row = document.createElement('tr') ;
//   console.log(row);

//   row.innerHTML =`<td>${book.title}</td> 
//   <td>${book.author}</td>
//   <td>${book.isbn}</td>
//   <td><a href="#" class="delete">X</a></td>
//   <td><a href="#" class="update">up</a></td>

//   ` ;
//   list.appendChild(row)

// }

// Ui.prototype.clearFildes = function(){
//   document.getElementById('title').value='';
//   document.getElementById('author').value='';
//   document.getElementById('isbn').value='';

// }
// // validation function 
// Ui.prototype.validaeFaildes=function(massage,className){
// // create div
// let div = document.createElement('div') ;

// // add classes to div
//   div.className=`alert ${className}`;

//   // add massage to div
//   div.appendChild(document.createTextNode(massage)) ;

// // get container from html
//   let container = document.querySelector('.container') ;

//   // get form from html
//   let form = document.querySelector('#book-form') ;
//   // insert div to container 
//   container.insertBefore(div,form) ;
  
//   // remove alert after few seconed
//   setTimeout( function() {
//     document.querySelector('.alert').remove()
//   }, 3000);
// }

// // remove row
// Ui.prototype.removeRow = function(target){

// if(target.className==='delete'){
//    target.parentElement.parentElement.remove()
//   }
  
//   }



// document.getElementById("book-form").addEventListener('submit',function(e){

//   const title = document.getElementById('title').value ,
//   author = document.getElementById('author').value ,
//   isbn = document.getElementById('isbn').value ;


// // create object from Book
// const book = new Book(title,author,isbn)

// // create object from UI 

// const ui = new Ui()


// if (title==='' || author==='' || isbn==='' ) {
//   ui.validaeFaildes("Please Fill All Falides !".toUpperCase(),'error')
// }else{
// // add list to book 
// ui.addBookToList(book)
// // clear form function
//   ui.validaeFaildes("add Success!".toUpperCase(),'success')

// ui.clearFildes()
// }

//   e.preventDefault()
// })


// document.getElementById('book-list').addEventListener('click',function(e){
//   // create object from UI 
// const ui = new Ui() ;

// // delete function
// ui.removeRow(e.target) ;

// // function show alert 
// ui.validaeFaildes("delete Success!".toUpperCase(),'success')

// e.preventDefault()
// })


// document.getElementById('book-list').previousElementSibling

// Ui.prototype.upDateRow= function(target){
//   console.log(target)
//   // console.log(document.querySelector('#book-list').firstElementChild.secondElementChild.innerText)

//   // console.log(update.id==="isbn")

//   if(target.className==='update'){

// //     document.getElementById('title').value=;
// // document.getElementById('author').value='y';
// // document.getElementById('isbn').value='z';
//     title.value=document.querySelector('#book-list').firstElementChild.firstElementChild.innerText ;
//     // author.value=document.querySelector('#book-list').firstElementChild.secondElementChild.innerText ;
//     isbn.value=document.querySelector('#book-list').firstElementChild.lastElementChild.innerText


//   }
// }
// document.getElementById('book-list').addEventListener('click',function(e){
//   // create object from Book
// const book = new Book(title,author,isbn)
//   // create object from UI 
// const ui = new Ui() ;

// // delete function
// ui.upDateRow(e.target) ;

// e.preventDefault()
// })

// document.getElementById('submit').addEventListener('click',function(){

//  // create object from UI 
//   const ui = new Ui() ;
// // function show alert 
//   ui.validaeFaildes("add Success!".toUpperCase(),'success')

// })



// built constructor Book
function Book(){
  this.getBook=function(){
      this.title =  document.getElementById('title').value ;
      this.isbn =  document.getElementById('isbn').value ;
      this.author =  document.getElementById('author').value ;
  
        // return `${this.title } and ${this.isbn} and ${this.author}`
  }
  }
  

  // built constructor UI
  function UI(){
  
       this.getfun=function(book){
          let row = document.createElement('tr');
          row.innerHTML = `<td>${book.title }</td><td>${book.author}</td><td>${book.isbn}</td><td><a class='delete' >X</a></td>`  
          let table  =  document.getElementById('book-list');   
          table.appendChild(row);

          document.getElementById('book-list').addEventListener('click',function(e){
            if(e.target.className==='delete'){
              e.target.parentElement.parentElement.remove();
              console.log("delete item");
            }
            let books;
            if(localStorage.getItem('items')===null){
            books=[]
            }else{
              books= JSON.parse(localStorage.getItem('items'))
            }
            books.forEach(function(element,index){
            //   if(book.textContent===element){
            //   books.splice(index,1)
            // }
            console.log(element);

            })
            // books.splice()
             
        })

      
      
      }
        this.clearInputs = function(){
            this.title =  document.getElementById('title').value='' ;
            this.isbn =  document.getElementById('isbn').value ='';
            this.author =  document.getElementById('author').value='' ;
    }

  }

  

   UI.prototype.alertFunction = function(massage,className){
    var box = document.createElement('div');
    box.className=`alert ${className}` ;
    box.appendChild(document.createTextNode(massage))
    let container = document.querySelector('.container') ;
    let form= document.getElementById('book-form') ;
    setTimeout(() => {
      document.querySelector('.alert').remove()
     }, 3000);
     return container.insertBefore(box,form)

  }
UI.prototype.validateInputs=function(book){
 
    if(book.title==='' || book.isbn==='' || book.author===''){
      // alert("sorry fill it !")
    this.alertFunction("Please Fill All  Input  !",`error`)
    }else{

      const book = new Book()
      // to work function getBook in  object book 
      book.getBook()
     // create object from UI
      const ui = new UI()
       // send object from input values to table 
      ui.getfun(book)
      this.alertFunction("Add Book Success ",`success`)

   
      storeBooks(book)

       // clear inputs 
     ui.clearInputs();
    }

    function storeBooks(book){
      let books;

      if(localStorage.getItem('items')==null){
        books=[];
      }else{
        books=JSON.parse(localStorage.getItem('items'));
      }
      console.log(book);
      books.push(book);

      localStorage.setItem('items',JSON.stringify(books));
    }

 
}

UI.prototype.displayBooks = function(book){

  let books;

  if(localStorage.getItem('items')==null){
    books=[];
  }else{
    books=JSON.parse(localStorage.getItem('items'));
   }
  
      books.forEach(function(element){
  //  console.log(element)

      let row = document.createElement('tr');
      row.innerHTML = `<td>${element.title }</td><td>${element.author}</td><td>${element.isbn}</td><td><a class='delete'>X</a></td>`  
      let table  =  document.getElementById('book-list');   
      table.appendChild(row);

      document.getElementById('book-list').addEventListener('click',function(e){
      if(e.target.className==='delete'){
      e.target.parentElement.parentElement.remove();
    }

    })
 })
}

let ui = new UI()

 document.addEventListener('DOMContentLoaded',ui.displayBooks)


  // event function 
  document.getElementById('submit').addEventListener('click',(e)=>{
      // create object from Book
  const book = new Book()
  // to work function getBook in  object book 
  book.getBook()
 // create object from UI
  const ui = new UI()

  ui.validateInputs(book) 
  e.preventDefault()
  })


//   function  deleteItemFromLs(book){
// let books;
// if(localStorage.getItem('items')===null){
// books=[]
// }else{
//   books= JSON.parse(localStorage.getItem('items'))
// }
// if(){}
//   }