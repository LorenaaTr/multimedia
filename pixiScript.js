const app = new PIXI.Application({
    antialias: true,
    background: "#ffffff",
  });

  const detailsPhoto = document.querySelector(".detailsPhoto");

  detailsPhoto.appendChild(app.view);

  const stageHeight = app.screen.height;
  const stageWidth = app.screen.width;

  app.stage.hitArea = app.screen;

  const sliderWidth = 320;
  const slider = new PIXI.Graphics()
    .beginFill(0x272d37)
    .drawRect(0, 0, sliderWidth, 4);

  slider.x = (stageWidth - sliderWidth) / 2;
  slider.y = stageHeight * 0.75;


  const handle = new PIXI.Graphics().beginFill(0xf2f2f2).drawCircle(0, 0, 8);

  handle.y = slider.height / 2;
  handle.x = sliderWidth / 2;
  handle.interactive = true;
  handle.cursor = "pointer";

  handle
    .on("pointerdown", onDragStart)
    .on("pointerup", onDragEnd)
    .on("pointerupoutside", onDragEnd);

  app.stage.addChild(slider);
  slider.addChild(handle);

  
  const headphones = app.stage.addChild(
    PIXI.Sprite.from("https://i.ibb.co/37Y74kv/showcase.jpg")
  );

  headphones.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
  headphones.scale.set(0.3);
  headphones.anchor.set(0.5);
  headphones.x = stageWidth / 2;
  headphones.y = stageHeight / 2;

  
  const title = new PIXI.Text(
    "Drag the handle to change the scale of headphones.",
    {
      fill: "#272d37",
      fontFamily: "Catamaran",
      fontSize: 20,
      align: "center",
    }
  );

  title.roundPixels = true;
  title.x = stageWidth / 2;
  title.y = 40;
  title.anchor.set(0.5, 0);
  app.stage.addChild(title);


  function onDragStart() {
    app.stage.interactive = true;
    app.stage.addEventListener("pointermove", onDrag);
  }

  
  function onDragEnd(e) {
    app.stage.interactive = false;
    app.stage.removeEventListener("pointermove", onDrag);
  }

  
  function onDrag(e) {
    const halfHandleWidth = handle.width / 2;
    

    handle.x = Math.max(
      halfHandleWidth,
      Math.min(slider.toLocal(e.global).x, sliderWidth - halfHandleWidth)
    );
    
    const t = 2 * (handle.x / sliderWidth - 0.5);

    headphones.scale.set(0.2 * (1.1 + t));
  }





// App 2



const detailsInfoHeadphones = document.querySelector('.detailsInfoHeadphones');

const appTwo = new PIXI.Application({ background: '#ffffff', resizeTo: detailsInfoHeadphones });

detailsInfoHeadphones.appendChild(appTwo.view);

const texture = PIXI.Texture.from("./assets/colorfulHeadphones.png");


texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

for (let i = 0; i < 6; i++)
{
    createHeadphones(
        Math.floor(Math.random() * appTwo.screen.width),
        Math.floor(Math.random() * appTwo.screen.height),
    );
}

function createHeadphones(x, y)
{
    
    const allHeadphones = new PIXI.Sprite(texture);

    
    allHeadphones.interactive = true;

    
    allHeadphones.cursor = 'pointer';

    
    allHeadphones.anchor.set(0.5);

    
    allHeadphones.scale.set(0.1);

    allHeadphones.on('pointerdown', onDragStartTwo, allHeadphones);

    
    allHeadphones.x = x;
    allHeadphones.y = y;

    
    appTwo.stage.addChild(allHeadphones);
}

let dragTarget = null;

appTwo.stage.interactive = true;
appTwo.stage.hitArea = appTwo.screen;
appTwo.stage.on('pointerup', onDragEndTwo);
appTwo.stage.on('pointerupoutside', onDragEndTwo);

function onDragMoveTwo(event)
{
    if (dragTarget)
    {
        dragTarget.parent.toLocal(event.global, null, dragTarget.position);
    }
}

function onDragStartTwo()
{
    this.alpha = 0.5;
    dragTarget = this;
    appTwo.stage.on('pointermove', onDragMoveTwo);
}

function onDragEndTwo()
{
    if (dragTarget)
    {
        appTwo.stage.off('pointermove', onDragMoveTwo);
        dragTarget.alpha = 1;
        dragTarget = null;
    }
}


//App3

var single360App = new PIXI.Application(530, 530, {transparent: true});

const loader = window.PIXI.Assets;

var single360FileName9 = 'amir-shaikh-headphones-4k'
var extension = '.jpg';

console.log(window);

// loader.add('headphone1', './assets/Headphones3DImg-0.json');
// loader.add('headphone2', './assets/Headphones3DImg-1.json');
// loader.add('headphone3', './assets/Headphones3DImg-2.json');
// loader.add('headphone4', './assets/Headphones3DImg-3.json');
// loader.load(onAssetsLoaded());


    

var target = document.getElementById("target");
target.appendChild(single360App.view);


loader.load([
  './assets/headphone-0.json'
]).then(() => {
  // var frames = [];
  // for (let i = 0; i < 4; i++) { 
    
  //     frames.push(PIXI.Texture.from(`./assets/Headphones3DImg-${i}.png`));
    
  // }

  // var singleProduct360Anim = new PIXI.AnimatedSprite(frames);
  
  const animations = PIXI.Assets.cache.get('./assets/headphone-0.json').data.animations;

  const singleProduct360Anim = PIXI.AnimatedSprite.fromFrames(animations["frame"]);

  singleProduct360Anim.x = single360App.renderer.width / 2;
  singleProduct360Anim.y = single360App.renderer.height / 2;
  singleProduct360Anim.anchor.set(0.5);
  singleProduct360Anim.scale.set(0.6);
  singleProduct360Anim.loop = false;
  singleProduct360Anim.animationSpeed = 0.15;

  var target = document.getElementById('target'),
      proxyTrigger = document.getElementById('proxyTrigger'),
      proxy = document.getElementById('proxy'),
      textureNum = 0;

  single360App.stage.addChild(singleProduct360Anim);

  Draggable.create(proxy, {
    type: 'x',
    // throwProps: true,
    trigger: proxyTrigger,
    onDrag: updateImage,
    // onThrowUpdate: updateImage,
    cursor: "ew-resize",
    // maxDuration: 0.65,
    lockAxis: true
  });
  
  function updateImage() { 
    // CHECK IF LEFT OR RIGHT INCREMENT TO CURRENT TEXTURE ACCORDINGLY, 
    // THEN MANUALLY CHANGE THE TEXTURE TO THAT NUMBER
    direction = this.getDirection('velocity');
    if ( direction === 'left' ) { 
      textureNum--;
      checkOuterLimits();
    }
    if ( direction === 'right' ) {
      textureNum++;
      checkOuterLimits();
    }
    singleProduct360Anim.texture = singleProduct360Anim.textures[textureNum];
  }

  function checkOuterLimits() {  // RESET THE FRAME YOU'RE ON TO LOOP IF NEED BE, THERE ARE 45 FRAMES
    if ( textureNum > 28 ) { textureNum = 0; }
    if ( textureNum < 0 ) { textureNum = 28; }
  }
  
  // singleProduct360Anim.texture = singleProduct360Anim.textures[textureNum];
  
  
  
  // window.addEventListener("keydown", (event) => {
  //   if (event.key === "ArrowRight") {
  //     if (textureNum < 4) {
  //       singleProduct360Anim.texture = singleProduct360Anim.textures[textureNum++];  
  //     }
  //     else {
  //       textureNum = 0
  //       singleProduct360Anim.texture = singleProduct360Anim.textures[textureNum];
  //     }
  //   }
  //   else if (event.key === "ArrowLeft") {
  //     if (textureNum >= 0) {
  //       singleProduct360Anim.texture = singleProduct360Anim.textures[textureNum--];
  //     }
  //     else {
  //       textureNum = 3
  //       singleProduct360Anim.texture = singleProduct360Anim.textures[textureNum];
  //     }
  //   }
  // })
  
  // single360App.ticker.add(function () {
  //   singleProduct360Anim.texture = singleProduct360Anim.textures[textureNum];
  //   setTimeout(() => {
  //     textureNum++;
  //   },"10000")
  // });
})

// function onAssetsLoaded() {


// }