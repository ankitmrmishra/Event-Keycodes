const container = document.getElementById('container');

window.addEventListener(

  "keydown",
  (event) => {
  
container.innerHTML= `
 <div class="dis" id="dis">
           event.key
            <div class="display " id="display1">
               ${event.key}
            </div>
        </div>
        <div class="dis" id="dis">
            event.keyCode
            <div class="display display2" id="display2">
                 ${event.keyCode}
            </div>
        </div>
        <div class="dis" id="dis">
        event.code
            <div class="display display3" id="display3">
                 ${event.code}
            </div>
        </div>
`

  },
  
);