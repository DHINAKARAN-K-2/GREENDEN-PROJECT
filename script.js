const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', function() {
    mobileMenu.classList.remove('translate-x-full');
});

closeBtn.addEventListener('click', function() {
    mobileMenu.classList.add('translate-x-full');
});

//Adding search Functionality

var search=document.getElementById("search")
var productlist=document.querySelectorAll(".productlist")
 search.addEventListener("keyup",function()
    {
        var enteredValue = event.target.value.toUpperCase()
        for(var i=0;i<productlist.length;i++)
        {
            console.log(productlist)
          var productname=productlist[i].querySelector("h1").textContent
          if(productname.toUpperCase().indexOf(enteredValue)<0)
          {
            productlist[i].style.display="none"
          }
          else
          {
            productlist[i].style.display="block"
          }

        }
    }
)


