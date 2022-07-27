<!-->
*{
    margin:0;
    padding:0;
    box-sizing:border-box  
  }
  body{
      background-color: #600505;
      font-family:'Gill Sans', 'Gill Sans MT','Trebuchet MS', sans-serif;
  width: 100%;
  min-height:100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content:center ;
  
  }
  .header{
      background-color: #600505;
      width:100%;
    height:5rem;
      border:5px solid double white;
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      background: #600505;
  }
  .banner{
    width:100%;
    display: block;
    background-image: url(/Movie-Music-Magic/assets/imgs/mmm.webp);
    background-size: cover;
    background-position: center center;
    top:100px;
    height:15vh;
    width:100%;
 
  }
  .banner .banner-image{
    width:100%;
    display:block;
    height: 100%;


  }
  .btn:hover{
  transition: .6s;
  color: #600505;
  background-color: white;
  cursor: pointer;
  }
  .btn{
      transition: .6s;
      color: #fff;
      background-color: #600505;
      cursor: pointer;
      }
  .card{
width: 25%;
height: 25%;
  }
  .card

  
  .card-image{
  color:white;
  height: 25%;
  width:25%;
  }
  .brand-logo{
      color: white;
      background-color: #600505;
      width:100%;
    
      display: block;
  }

  
  .row{
      color: white;
      position:relative;
      
  }
  
  .material-icon{
      color:white;
  }
  .label-icon{
      color:white;
  }
  .column{
    align-items: right;
  }

.column1{
    width:323px;
    height: 477px;
    margin:100px;
    border:6px double black;
    float:right;
    color: white;
}
.column1:hover{
    transition: .5s;
    cursor: pointer;

}.column2{
    width:323px;
    height: 477px;
    margin:100px;
    border:6px double black;
    float:right;
    color: white;
}
.column2:hover{
    transition: .5s;
    cursor: pointer;
    scale: 1.5;
    
}

.Title{
    font-weight: bold;
    font-size: larger;
    display: center;
    align-items: center;
    flex-wrap: wrap;

}
.movie{
    width:323px;
    height: 477px;
    margin:100px;
    border:6px double black;
    float:left;
    
}
.row::after{
    content:'';
    display: table;
    clear:both;

}

.page-footer{
    margin-bottom:-1949px;
    padding-right: -30px;
    padding-bottom: -44px;
    display: absolute;
    font-size:15px;
}
.center{
    color:white;
}
.card-content{
    color: white;
}
























<div class="column">
<div class="column1">
  <img src="/Movie-Music-Magic/assets/imgs/Thor img.jpg" >
  <p class="Title"> Thor: Love and Thunder</p>
  <p class="time"> 1 HR 59 MIN|PG13</p>
  <p class="time"> Released Jul,8,2022 </p>
</div>
  <div class="column1">
    <img src="/Movie-Music-Magic/assets/imgs/Elvis.jpg" >
  </div>
    <div class="column1">
      <img src="/Movie-Music-Magic/assets/imgs/Where the Crowdads.webp" >
    </div>
    <div class="column1">
      <img src="/Movie-Music-Magic/assets/imgs/The Black Phone.webp" >
    </div>
    <div class="column2">
      <img src="/Movie-Music-Magic/assets/imgs/Paws of Fury.jpg" >
    </div>
      <div class="column2">
        <img src="/Movie-Music-Magic/assets/imgs/Mrs.Harris.webp" >
      </div>
      <div class="column2">
        <img src="/Movie-Music-Magic/assets/imgs/Thor img.jpg" >
        <p class="Title"> Thor: Love and Thunder</p>
        <p class="time"> 1 HR 59 MIN|PG13</p>
        <p class="time"> Released Jul,8,2022 </p>

        <div class="column2">
          <img src="/Movie-Music-Magic/assets/imgs/top gun.webp" >
          <p class="Title"> Thor: Love and Thunder</p>
          <p class="time"> 1 HR 59 MIN|PG13</p>
          <p class="time"> Released Jul,8,2022 </p>
}
ul{
    list-style:none;
}
a{
    text-decoration:none;
}
::selection{
    background-color: red;
    color: black;
}
.navigation{
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 30px 50px;
    max-width:1400px;
    margin:auto;
    width:100%;
 
}
.navigation .menu-icon{
    cursor:pointer;
    float:right;
    padding:20px 10px;
    z-index:103;

}
.navigation .menu-icon .nav-icon{
    background-color: white;
    display:block;
    height: 2px;
    width: 25px;
    position: relative;
    transition: background .2s ease-out;
}

.navigation .menu-icon .nav-icon::before,
.navigation .menu-icon .nav-icon::after{
    background-color: white;
    content:'';
    position: absolute;
    display: block;
    width:100%;
    height:100%;
    transition: all ease-out .2s;
}
.navigation .menu-icon .nav-icon::before{
    top: 8px;
}
.navigation .menu-icon .nav-icon::after{
    top: -8px;
}
.navigation .menu-btn:checked ~ .menu-cino .nav-icon{
    background-color:transparent;
}
.navigation .menu-btn:checked ~ .menu-icon .nav-icon::before{
    transform:rotate(-45deg);
    top:0px;
}
.navigation .menu-btn:checked ~ .menu-icon .nav-icon::after{
    transform: rotate(45deg);
    top:0px;
}
.menu-btn{
    display:none
}
.menu{
    position: fixed;
    left: 0px;
    top: 0px;
    width:100%;
    height:100%;
    background-color: black;
    z-index:102;
    display:none;
    justify-content: center;
    align-items: center;
    animation:both .3s;

}
.menu li a{
    color:white;
    margin:0px 40px;
    font-size:2rem ;
    transition: all ease .3s;

}

.menu li a:hover{
    font-size: 2.2rem;
    color:red;
    transition: all ease .3s;
}

.navigation .menu-btn:checked ~ .menu{
    display:flex;
}

@keframes fades{
    0%{
        opacity:0;
    }
    100%{
        opacity:1;
    }
}
.logo{
    color:red;
    text-transform:uppercase;
    font-size:3rem;
    font-weight: 400;
    margin:0px auto 0px 40px;
    display:flex;
    align-items: center;
    font-family: poppins;
    letter-spacing: 1px;
}
.logo span{
    font-size: 1rem;
    margin-left:5px;
    font-weight: ;
}

.search-box{
background-color:black;
padding:3px 20px;
border-radius: 20px;
height:40px;
display: flex;
justify-content: space-between;
align-items: center;
margin-right: 20px;
}

<!!--

  <nav class="navigation">

    <input type="checkbox" class ="menu-btn" id="menu-btn">
    <label for="menu-btn" class="menu-icon">
      <span class="nav-icon"></span>
    </label>
  </nav>


  <!-- logo  --
     <a href="/Movie-Music-Magic/assets/imgs/mmm.webp" class="logo">
      Movies <span> Music Magic</span>

      
<!-- Menu--
<ul class="menu">
  <li><a href="#"> Home</a></li>
  <li><a href="#"> Search</a></li>
  <li><a href="#"> Movies</a></li>
  <li><a href="#"> Music</a></li>
  </ul>

<form action =""class="search-box">
  <input type="text" name="search" placeholder="Search Movie or Track" class="search-input" required>
  <!--btn--
  <button type="submit">
  <i class="fas fa-search">Search</i></button>
</form>









