(function( $ ) {
    $.fn.keyboard = function(set) {
        this.config={};
        if(set){
            this.config.show=set.show;
        }
        var dom="<div class='keyboard'>";
        dom+="<div class='number'></div>";
        dom+="<div class='letter'></div>";
        dom+="</div>";
        this.after(dom);
        var kb=$(this).next();
        var dn="<div>";
        dn+="<button>1</button>";
        dn+="<button>2</button>";
        dn+="<button>3</button>";
        dn+="<button>4</button>";
        dn+="<button>5</button>";
        dn+="<button>6</button>";
        dn+="<button>7</button>";
        dn+="<button>8</button>";
        dn+="<button>9</button>";
        dn+="<button>0</button>";
        dn+="<button id='bs'>&lt;-</button>";
        dn+="<button id='cl'>Clear</button>";
        dn+="</div>";
        kb.find(".number").append(dn);
        var dl="<div>";
        dl+="<button>A</button>";
        dl+="<button>B</button>";
        dl+="<button>C</button>";
        dl+="<button>D</button>";
        dl+="<button>E</button>";
        dl+="<button>F</button>";
        dl+="<button>G</button>";
        dl+="<button>H</button>";
        dl+="<button>I</button>";
        dl+="<button>J</button>";
        dl+="<button>K</button>";
        dl+="<button>L</button>";
        dl+="<button>M</button>";
        dl+="</div>";
        dl+="<div>";
        dl+="<button>N</button>";
        dl+="<button>O</button>";
        dl+="<button>P</button>";
        dl+="<button>Q</button>";
        dl+="<button>R</button>";
        dl+="<button>S</button>";
        dl+="<button>T</button>";
        dl+="<button>U</button>";
        dl+="<button>V</button>";
        dl+="<button>W</button>";
        dl+="<button>X</button>";
        dl+="<button>Y</button>";
        dl+="<button>Z</button>";
        dl+="</div>";
        kb.find(".letter").append(dl);
        var input=this;
        kb.find("button").click(function(){
            var t=input.val();
            if($(this).attr('id')=='bs'){
                t=t.substring(0,t.length-1);
            }else if($(this).attr('id')=='cl'){
                t="";
            }else{
                t+=$(this).text();
            }
            input.val(t);
            input.trigger("change");
        });
        return this;
    };
    $.fn.show = function() {
        this.find(".keyboard").show();
        return this;
    };
    $.fn.hide = function() {
        this.find(".keyboard").hide();
        return this;
    };
}( jQuery ));

