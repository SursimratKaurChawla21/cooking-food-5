var food=0
var title,button,input;
var gameState=0
var score = 0
var timer = 1000

function preload(){
  cake = loadImage("cake 1.png")
  flour = loadImage("flour.png")
  sugar = loadImage("sugar.jpg")
  cocoapowder = loadImage("chocolate powder..png")
  bakingpowder = loadImage("baking powder.png")
  bakingsoda = loadImage("baking soda 1.png")
  salt = loadImage("salt.png")
  buttermilk =loadImage("butter milk.jpg")
  canolaoil  =loadImage("canola oil.jpg")
  vanillaextract = loadImage("vanilla extract.PNG")
  boilingwater = loadImage ("boilingwater.PNG")
basket = loadImage("basket.png")

kidneybeans = loadImage ("kidney beans.PNG")
onions = loadImage("onion.jpg")
garlic = loadImage("garlic 1.jpg")
pepper = loadImage("pepper.png")
oregano = loadImage("oregano.PNG")
chilliflakes = loadImage("chilli flakes.jpg")
cuminpowder = loadImage("cumin powder.jpg") 
tacoshells = loadImage("taco shells.png")
tomatosalsa = loadImage ("tomato salsa.jpg")
sourcream = loadImage("sour cream.png")
cheddarcheese = loadImage("cheese.png")

cloves = loadImage("cloves.png")
butter = loadImage("butter 1.png")
cardomom = loadImage("cardomom.png")
ginger = loadImage("ginger 1.jpg")
tomato = loadImage("tomato.png")
cashew = loadImage("cashew.PNG")
bayleaf = loadImage("bay leaf.PNG")
chilli = loadImage ("chillies.png")
turmeric = loadImage("turmeric 1.jpg")
coriander = loadImage("coriander.PNG")
kasurimethi = loadImage("kasuri mthi.png")



  pbm = loadImage("pbm 2.png")
  taco=loadImage("taco 1.png")
  bg1=loadImage("formbg.jpg")
  bg2=loadImage("bg.jpg")
  l1=loadImage("list1.PNG")
  l2=loadImage("list2.PNG")
  l3=loadImage("list3.PNG")
}
function setup(){
  createCanvas(600,600)
  bg=createSprite(300,300,600,600)
  bg.addImage("a",bg1)
  bg.scale=0.5
  title=createElement('h2')
  title.html("COOKING FEVER")
  title.position(180,10)
  input=createInput('Enter Your Name')
  input.position(200,200)
  button=createButton('Start')
  button.position(280,250)
  greet= createElement('h3')
  food1=createSprite(200,200,10,10)
  food1.addImage(cake)
  food1.scale=0.1
  food1.visible=false
  food2=createSprite(200,320,10,10)
  food2.addImage(pbm)
  food2.scale=0.2
  food2.visible=false
  food3=createSprite(200,400,10,10)
  food3.addImage(taco)
  food3.scale=0.5
  food3.visible=false
  list1=createSprite(300,300)
  list1.visible=false
  list2=createSprite(300,300)
  list2.visible=false
  list3=createSprite(300,300)
  list3.visible=false
  ingredientsGroup=new Group()
  ingredients1Group=new Group()
  ingredients2Group=new Group()
  player=createSprite(300,550,10,10)
  player.visible=false
  player.addImage(basket)
  player.scale=0.5
  player.setCollider("rectangle",0,0,100,100)
  edges=createEdgeSprites()
}

function draw(){
  background("lightblue")
  if(gameState===0){
  button.mousePressed(()=> {
    input.hide()
    button.hide()
    var name = input.value()
    greet.html("Welcome "+name)
    greet.position(200,100)
    food1.visible = true
    food2.visible = true
    food3.visible = true
    gameState=1
  })
}
if(gameState===1){
 
  if(mousePressedOver(food1)){
    list1.visible=true
    list1.addImage(l1)
    playbutton()
    greet.hide()
    food=1
  }
  if(mousePressedOver(food2)){    
    list2.visible=true
    list2.addImage(l3)
    list2.scale=0.8
    playbutton()
    greet.hide()
    food=2
  }
  if(mousePressedOver(food3)){
    list3.visible=true
    list3.addImage(l2)
    list3.scale=0.7
    playbutton()
    greet.hide()
    food=3
  }
}
drawSprites();
  if(gameState===2){
        greet.hide()
        
        player.visible=true
        if(keyDown("right")){
                player.x=player.x+5
        }
        if(keyDown("left")){
                player.x=player.x-5
                }
        startbutton.hide()
        bg.visible=true
        bg.addImage("b",bg2)
        bg.changeImage("b",bg2)
        bg.scale=2
        list1.visible=false
        list2.visible=false
        list3.visible=false
        console.log(food)
        if(food===1){
        spawningredients1()
        
        }

        else if(food===2){
        spawningredients2()
        }
        else if(food===3){
        spawningredients3()
        }
        for(var i = 0; i<ingredientsGroup.length;i++){
                if(ingredientsGroup.get(i).isTouching(player)){
                         score = score+1
                         ingredientsGroup.get(i).destroy()
                         
                 }
                 
        }
        for(var i = 0; i<ingredients1Group.length;i++){
                if(ingredients1Group.get(i).isTouching(player)){
                         score = score+1
                         ingredients1Group.get(i).destroy()
                         
                 }
                 
        }
        for(var i = 0; i<ingredients2Group.length;i++){
                if(ingredients2Group.get(i).isTouching(player)){
                         score = score+1
                         ingredients2Group.get(i).destroy()
                         
                 }
             player.debug=true    
        }
    timer=timer-1
    fill("white")
textSize(15)
  text("Timer:"+timer,400,150)
  fill("white")
textSize(15)
  text("score:"+score,500,150)
  if(timer<=0){
        timer=0
        gameState=3
  }

  }
  if(gameState===3){
          player.visible=false
          ingredientsGroup.setVelocityYEach(0)
          ingredients1Group.setVelocityYEach(0)
          ingredients2Group.setVelocityYEach(0)
          fill("white")
          textSize(20)
            text("GAME ENDED",300,300)
  }
  
player.collide(edges)

}
function playbutton(){
  startbutton=createButton("PLAY")
  startbutton.position(450,450)
  startbutton.mousePressed(()=>{
    
    gameState=2
    food1.visible = false
    food2.visible = false
    food3.visible = false
   
  })

  
}


function spawningredients1(){
  if(frameCount % 60 === 0) {
    var ingredients = createSprite(random(100,500),5,10,40);
    //obstacle.debug = true;
    ingredients.velocityY = 6;
    
    //generate random obstacles
    var rand = Math.round(random(1,10));
    switch(rand) {
      case 1: ingredients.addImage(flour);
              ingredients.scale=0.3
              break;
      case 2: ingredients.addImage(sugar);
              ingredients.scale=0.4
              break;
      case 3: ingredients.addImage(cocoapowder);
      ingredients.scale=0.5
              break;
      case 4: ingredients.addImage(bakingpowder);
      ingredients.scale=0.5
              break;
      case 5: ingredients.addImage(bakingsoda);
      ingredients.scale=0.5
              break;
      case 6: ingredients.addImage(salt);
              ingredients.scale=0.3
              break;
      case 7: ingredients.addImage(buttermilk);
              ingredients.scale=0.2
              break;
      case 8: ingredients.addImage(canolaoil);
      ingredients.scale=0.4
              break;
      case 9: ingredients.addImage(vanillaextract);
      ingredients.scale=0.35
              break;
      case 10: ingredients.addImage(boilingwater);
      ingredients.scale=0.2
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
  
    ingredients.lifetime = 300;
    //add each obstacle to the group
    ingredientsGroup.add(ingredients);
  }

}

  function spawningredients3(){
    if(frameCount % 60 === 0) {
      var ingredients1 = createSprite(random(100,500),5,10,40);
      //obstacle.debug = true;
      ingredients1.velocityY = 6;
      
      //generate random obstacles
      var rand = Math.round(random(1,14));
      switch(rand) {
        case 1: ingredients1.addImage(kidneybeans);
                ingredients1.scale=0.2
                break;
        case 2: ingredients1.addImage(onions);
                ingredients1.scale=0.3
                break;
        case 3: ingredients1.addImage(garlic);
                ingredients1.scale=0.2
                break;
        case 4: ingredients1.addImage(pepper);
                ingredients1.scale=0.3
                break;
        case 5: ingredients1.addImage(oregano);
                ingredients1.scale=0.3
                break;
        case 6: ingredients1.addImage(salt);
                ingredients1.scale=0.15
                break;
        case 7: ingredients1.addImage(chilliflakes);
                ingredients1.scale=0.3
                break;
        case 8: ingredients1.addImage(canolaoil);
                ingredients1.scale=0.3
                break;
        case 9: ingredients1.addImage(cuminpowder);
                ingredients1.scale=0.3
                break;
        case 10: ingredients1.addImage(tacoshells);
                ingredients1.scale=0.3
                break;

        case 11: ingredients1.addImage(boilingwater);
                ingredients1.scale=0.1
                break;
        case 12: ingredients1.addImage(tomatosalsa);
                ingredients1.scale=0.3
                break;
        case 13: ingredients1.addImage(sourcream);
                ingredients1.scale=0.2
                break;
        case 14: ingredients1.addImage(cheddarcheese);
                ingredients1.scale=0.3
                break;
       



        default: break;
      }
      
    ingredients1.lifetime = 300;
    //add each obstacle to the group
    ingredients1Group.add(ingredients1);

    }
}


    function spawningredients2(){
      if(frameCount % 60 === 0) {
        var ingredients = createSprite(random(100,500),5,10,40);
        //obstacle.debug = true;
        ingredients.velocityY = 6;
        
        //generate random obstacles
        var rand = Math.round(random(1,18));
        switch(rand) {
          case 1: ingredients.addImage(canolaoil);
                  ingredients.scale=0.2
                  break;
         
          case 2: ingredients.addImage(cloves);
                ingredients.scale=0.1
                  break;
          case 3: ingredients.addImage(butter);
          ingredients.scale=0.3
                  break;
          case 4: ingredients.addImage(cardomom);
          ingredients.scale=0.2
                  break;
          case 5: ingredients.addImage(onions);
                  ingredients.scale=0.3
                  break;
          case 6: ingredients.addImage(ginger);
                  ingredients.scale=0.2
                  break;
          case 7: ingredients.addImage(tomato);
          ingredients.scale=0.1
                  break;
          case 8: ingredients.addImage(cashew);
          ingredients.scale=0.3
                  break;
          case 9: ingredients.addImage(bayleaf);
          ingredients.scale=0.3
                  break;
                  
          case 10: ingredients.addImage(turmeric);
                  ingredients.scale=0.2
                  break;
          case 11: ingredients.addImage(coriander);
          ingredients.scale=0.2
                  break;
          case 12: ingredients.addImage(cuminpowder);
          ingredients.scale=0.2
                  break;
          case 13: ingredients.addImage(salt);
          ingredients.scale=0.2
                  break;
          case 14: ingredients.addImage(boilingwater);
                  ingredients.scale=0.1
                  break;
          case 15: ingredients.addImage(sourcream);
                  ingredients.scale=0.2
                  break;
          case 16: ingredients.addImage(cheddarcheese);
          ingredients.scale=0.2
                  break;
          case 17: ingredients.addImage(kasurimethi);
          ingredients.scale=0.3
                  break;
        case 18: ingredients.addImage(chilli);
                  ingredients.scale=0.1
                  break;
                  
          
          default: break;
        }
        
    ingredients.lifetime = 300;
    //add each obstacle to the group
    ingredients2Group.add(ingredients);
}
    }
    