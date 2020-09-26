class Book{
constructor(title,author,isbn){
  this.title = title ;
  this.author = author ;
  this.isbn = isbn
}
}

class Ui{
  
  addBookToList(book){
      // console.log(book);
      const list = document.getElementById('book-list') ;
      const row = document.createElement('tr') ;
      // console.log(row);

      row.innerHTML =`<td>${book.title}</td> 
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</a></td>

      ` ;
      list.appendChild(row)
      
  }

  clearFildes(){
    document.getElementById('title').value='';
    document.getElementById('author').value='';
    document.getElementById('isbn').value='';
  }


 

  validaeFaildes(massage,className){
        // create div
    let div = document.createElement('div') ;

    // add classes to div
      div.className=`alert ${className}`;

      // add massage to div
      div.appendChild(document.createTextNode(massage)) ;

    // get container from html
      let container = document.querySelector('.container') ;

      // get form from html
      let form = document.querySelector('#book-form') ;
      // insert div to container 
      container.insertBefore(div,form) ;
      
      // remove alert after few seconed
      setTimeout( function() {
        document.querySelector('.alert').remove()
      }, 3000);
  }

  removeRow(target){
    if(target.className==='delete'){
      target.parentElement.parentElement.remove()

     }
  }
}



// local storage class

class Store{

  // get from LS
      static getBooks(){
          let  books ;

          if(localStorage.getItem('book')===null){
            books=[]
          }else{
            books = JSON.parse(localStorage.getItem('book'))
          }
          return books ;
        
        }
        // display from LS
      static    displayBooks(){
        const books = Store.getBooks() ;
          books.forEach(book => {
            const ui = new Ui()
            ui.addBookToList(book)
          });
        }
        // add from LS
      static  addBooks(book){
      const books = Store.getBooks() ;
          books.push(book)
          localStorage.setItem("book",JSON.stringify(books))
        }
        // remove from LS
      static  removeBooks(isbn){
        const books = Store.getBooks() ;
        books.forEach((book,index)=> {
        if(book.isbn===isbn){
          books.splice(index,1)
        }
        });
        localStorage.setItem("book",JSON.stringify(books))

        }

}


// DOM Load event

document.addEventListener('DOMContentLoaded',Store.displayBooks)

document.getElementById("book-form").addEventListener('submit',function(e){

  const title = document.getElementById('title').value ,
  author = document.getElementById('author').value ,
  isbn = document.getElementById('isbn').value ;


// create object from Book
const book = new Book(title,author,isbn)

// create object from UI 

const ui = new Ui()


if (title==='' || author==='' || isbn==='' ) {
  ui.validaeFaildes("Please Fill All Falides !".toUpperCase(),'error')
}else{
// add list to book 
ui.addBookToList(book)


// add book to ls

Store.addBooks(book)


// clear form function
ui.validaeFaildes("add Success!".toUpperCase(),'success')

ui.clearFildes()
}

  e.preventDefault()
})


document.getElementById('book-list').addEventListener('click',function(e){
  // create object from UI 
const ui = new Ui() ;

// delete function
ui.removeRow(e.target) ;


// delete book from LS
Store.removeBooks(e.target.parentElement.previousElementSibling.textContent) ;

// function show alert 
ui.validaeFaildes("delete Success!".toUpperCase(),'success')

e.preventDefault()
})




































































































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



