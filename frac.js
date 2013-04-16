<html>
    <head>
        <script type = "text/javascript">
            window.onload = doload;

            //function dragon_string(string_array, n){
            //   for(int i = 0; i < string_array.length; i++){
            //        
            //    }
            //}

            function doload(){
                var c=document.getElementById("m");
                var ctx=c.getContext("2d");

                draw_string = 'fx+yf+fx-yf+fx+yf-fx-yf+fx+yf+fx-yf-fx+yf-fx-yf+fx+yf+fx-yf+fx+yf-fx-yf-fx+yf+fx-yf-fx+yf-fx-yf+fx+yf+fx-yf+fx+yf-fx-yf+fx+yf+fx-yf-fx+yf-fx-yf-fx+yf+fx-yf+fx+yf-fx-yf-fx+yf+fx-yf-fx+yf-fx-yf+fx+yf+fx-yf+fx+yf-fx-yf+fx+yf+fx-yf-fx+yf-fx-yf+fx+yf+fx-yf+fx+yf-fx-yf-fx+yf+fx-yf-fx+yf-fx-yf-fx+yf+fx-yf+fx+yf-fx-yf+fx+yf+fx-yf-fx+yf-fx-yf-fx+yf+fx-yf+fx+yf-fx-yf-fx+yf+fx-yf-fx+yf-fx-yf+fx+yf+fx-yf+fx+yf-fx-yf+fx+yf+fx-yf-fx+yf-fx-yf+fx+yf+fx-yf+fx+yf-fx-yf-fx+yf+fx-yf-fx+yf-fx-yf+fx+yf+fx-yf+fx+yf-fx-yf+fx+yf+fx-yf-fx+yf-fx-yf-fx+yf+fx-yf+fx+yf-fx-yf-fx+yf+fx-yf-fx+yf-fx-yf-fx+yf+fx-yf+fx+yf-fx-yf+fx+yf+fx-yf-fx+yf-fx-yf+fx+yf+fx-yf+fx+yf-fx-yf-fx+yf+fx-yf-fx+yf-fx-yf-fx+yf+fx-yf+fx+yf-fx-yf+fx+yf+fx-yf-fx+yf-fx-yf-fx+yf+fx-yf+fx+yf-fx-yf-fx+yf+fx-yf-fx+yf-fx-yf+fx+yf+fx-yf+fx+yf-fx-yf+fx+yf+fx-yf-fx+yf-fx-yf+fx+yf+fx-yf+fx+yf-fx-yf-fx+yf+fx-yf-fx+yf-fx-yf+fx+yf+fx-yf+fx+yf-fx-yf+fx+yf+fx-yf-fx+yf-fx-yf-fx+yf+fx-yf+fx+yf-fx-yf-fx+yf+fx-yf-fx+yf-fx-yf+fx+yf+fx-yf+fx+yf-fx-yf+fx+yf+fx-yf-fx+yf-fx-yf+fx+yf+fx-yf+fx+yf-fx-yf-fx+yf+fx-yf-fx+yf-fx-yf-fx+yf+fx-yf+fx+yf-fx-yf+fx+yf+fx-yf-fx+yf-fx-yf-fx+yf+fx-yf+fx+yf-fx-yf-fx+yf+fx-yf-fx+yf-fx-yf-fx+yf+fx-yf+fx+yf-fx-yf+fx+yf+fx-yf-fx+yf-fx-yf+fx+yf+fx-yf+fx+yf-fx-yf-fx+yf+fx-yf-fx+yf-fx-yf+fx+yf+fx-yf+fx+yf-fx-yf+fx+yf+fx-yf-fx+yf-fx-yf-fx+yf+fx-yf+fx+yf-fx-yf-fx+yf+fx-yf-fx+yf-fx-yf-fx+yf+fx-yf+fx+yf-fx-yf+fx+yf+fx-yf-fx+yf-fx-yf+fx+yf+fx-yf+fx+yf-fx-yf-fx+yf+fx-yf-fx+yf-fx-yf-fx+yf+fx-yf+fx+yf-fx-yf+fx+yf+fx-yf-fx+yf-fx-yf-fx+yf+fx-yf+fx+yf-fx-yf-fx+yf+fx-yf-fx+yf-fx-yf'

                ctx.fillStyle="#000000";
                x = 200;
                y = 200;
                bearing = 1;
                ctx.moveTo(x, y);
                
                for(var i = 0; i < draw_string.length; i++){
                    if(draw_string.charAt(i) == 'f'){
                    console.log(draw_string.charAt(i));
                        coords = drawto(x, y, bearing, 10);
                        x = coords[0];
                        y = coords[1];
                        ctx.lineTo(x, y);
                        ctx.stroke();
                    }else if(draw_string.charAt(i) == '+'){
                        console.log(draw_string.charAt(i));
                        bearing = right(bearing);
                    }else if(draw_string.charAt(i) == '-'){
                        console.log(draw_string.charAt(i));
                        bearing = left(bearing);
                    }
                }

                /*for(var j = 0; j < 30; j++){
                    for(var i = 0; i < 2; i++){
                        coords = drawto(x, y, bearing, 40);
                        x = coords[0];
                        y = coords[1];

                        ctx.lineTo(x, y);
                        ctx.stroke();

                        bearing = right(bearing);
                    }

                    for(var k = 0; k < 2; k++){
                        coords = drawto(x, y, bearing, 20);
                        x = coords[0];
                        y = coords[1];

                        ctx.lineTo(x, y);
                        ctx.stroke();

                        bearing = right(bearing);
                    }
                }*/
                //while true{
                //    coords = drawto(x, y, bearing, 10)
                //    ctx.moveTo(x,y);
                //    ctx.stroke();
                //}
            }

            function drawto(x, y, bearing, distance){
                if(bearing == 0){
                    y = y - distance;
                }else if(bearing == 1){
                    x = x + distance;
                }else if(bearing == 2){
                    y = y + distance;
                }else if(bearing == 3){
                    x = x - distance;
                }
                return [x, y];
                
            }

            function right(bearing){
                if(bearing != 3){
                    return bearing+=1;
                }else{
                    return bearing = 0;
                }
            }

            function left(bearing){
                if(bearing != 0){
                    return bearing-=1;
                }else{
                    return bearing = 3;
                }
            }

        </script>

    </head>
    </body>
        <canvas id="m" width=1000 height=1000></canvas>
    </body>
</html>
