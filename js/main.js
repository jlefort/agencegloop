
/* Cursor JS */

let cursor = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: (window.innerWidth / 2),
    endY: (window.innerHeight / 2),
    cursorVisible: true,
    cursorEnlarged: false,
    $dot: document.querySelector('.cursor-dot'),
    $outline: document.querySelector('.cursor-dot-outline'),
    
    
    init: function() {
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;
        
        this.setupEventListeners();
        this.animateDotOutline();
    },
    
    setupEventListeners: function() {
        let self = this;
        
        // Anchor hovering
        document.querySelectorAll('a').forEach(function(el) {
            el.addEventListener('mouseover', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
        });
        
        // Click events
        document.addEventListener('mousedown', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        document.addEventListener('mouseup', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });
  
        document.addEventListener('mousemove', function(e) {
            // Show the cursor
            self.cursorVisible = true;
            self.toggleCursorVisibility();
  
            // Position the dot
            self.endX = e.pageX;
            self.endY = e.pageY;
            self.$dot.style.top = self.endY + 'px';
            self.$dot.style.left = self.endX + 'px';
        });
        
        // Hide/show cursor
        document.addEventListener('mouseenter', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        });
        
        document.addEventListener('mouseleave', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        });
    },
    
    animateDotOutline: function() {
        let self = this;
        
        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + 'px';
        self.$outline.style.left = self._x + 'px';
        
        requestAnimationFrame(this.animateDotOutline.bind(self));
    },
    
    toggleCursorSize: function() {
        let self = this;
        
        if (self.cursorEnlarged) {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(2)';
            self.$outline.style.background = 'transparent';
        } else {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
            self.$outline.style.background = 'none';
        }
    },
    
    toggleCursorVisibility: function() {
        let self = this;
        
        if (self.cursorVisible) {
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        } else {
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        }
    }
  };
  if (screen.width > 900) {
    cursor.init();
  }
  
  // CHANGE TITLE
  document.addEventListener("mouseleave", mouseleave);
  function mouseleave(event){
    if (mouseleave = true){
        document.title = 'Vous êtes partis ?';
    };
  }
  
  let defaultTitle = document.title;
  document.addEventListener("mouseenter", mouseenter);
  function mouseenter(event){
    if (mouseenter = true){
        document.title = defaultTitle;
    };
  }
  
  // INIT PRELOADER
  var initPreloader = function (e) {
    e.preventDefault();
    var url = e.currentTarget.href;
    document.getElementById("preloader--before").classList.add("is-active");
    setTimeout(() => {
      window.open(url, '_self')
    }, 900);
  }
  
  var preloaderLinks = document.querySelectorAll('.js-preloader');
  for (let i = 0; i < preloaderLinks.length; i++) {
    var link = preloaderLinks[i];
    link.addEventListener('click', initPreloader)
  }
  
  setTimeout(function(){ 
    document.getElementById("preloader--after").classList.add("is-active");
  },  500);
  
  
// WAYPOINT 
var caseElementsTest = document.querySelectorAll(".is-hidden"),
    elementsArray = [];
for (var e = 1; e < caseElementsTest.length + 1; e++) {
    caseElementsTest[e];
    elementsArray.push(`element-0${e}`)
}
elementsArray.forEach(e => {
    var t = document.getElementById(e);
    new Waypoint({
        element: t,
        handler: function (e) {
            t.classList.toggle("is-visible")
        },
        offset: "95%"
    })
});

//Copy
const copyMailId = document.querySelectorAll('span>a.mail-text');

copyMailId.forEach(copyText => {
    copyText.addEventListener('click', () => {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(copyText);
        selection.removeAllRanges();
        selection.addRange(range);

        try {
            document.execCommand('copy');
            selection.removeAllRanges();

            const mailId = copyText.textContent;
            copyText.textContent = 'Copié !';
            copyText.classList.add('success');

            setTimeout(() => {
                copyText.textContent = mailId;
                copyText.classList.remove('success');
            }, 1000);
        } catch (e) {
            copyText.textContent = 'Couldn\'t copy, hit Ctrl+C!';
            copyText.classList.add('error');

            setTimeout(() => {
                errorMsg.classList.remove('show');
            }, 1200);
        }
    });
});

//Disable


//PROGRESS BAR 
var progressbar = document.querySelector(".progress__bar"); 
document.onscroll = function(){ 
  var pos = showPosition(document.body); progressbar.style.height = pos + "%"; }; 
  function showPosition(bar){ 
    var parent = bar.parentNode, pos = (bar.scrollTop || parent.scrollTop) / (parent.scrollHeight - parent.clientHeight ) * 100; 
    return pos; };


console.log("%c HELLO DEVELOPER,  \n" + "%c THIS PORTFOLIO IS DEVELOPED & DESIGNED WITH ♥  \n" + "%c BY JULIEN LEFORT  %c", "background: #ff66a5; padding:5px 0; color: #000;", "background: #000; padding:5px 0; color: #ff66a5;", "color: #000; background: var(--gen4); padding:5px 0;", "color: #ff66a5; background: #ff66a5; padding:5px 0;");