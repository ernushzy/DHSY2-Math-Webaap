$(function () {
			$(".dragx").draggable({
				grid: [80, 80],
				scroll: false
			});
		});
var x1z,x1m,x2z,x2m = 0;
  var canvas = document.getElementById("qw");
  var ctx = canvas.getContext("2d");
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
function refresh()
{location.reload(true);}  
/*function factor(m)
  {
  if (m<0) {h = -m;} else {h = m;}
  var n = [];var i = 2;var k = 1;
  n[0] = 1;
  while (h % i == 0) 
  {
    n[k] = i;
	k++;
	h = Math.floor(h/i) ;
  }
  i = 3;
  while (i < Math.round(Math.sqrt(Math.abs(m)))){
    while (h % i == 0)
	{n[k] = i;
	k++;
	h = Math.floor(h/i);}
	i = i + 2;
  }
  if (h > 1) {n[k] = h;}
  return n;
}*/
function solve(q,w,e)
  {
  x1z = -w + Math.round(Math.sqrt(w * w- 4 * q * e));
  x1m = 2 * q;
  x2z = -w - Math.round(Math.sqrt(w * w- 4 * q * e));
  x2m = 2 * q;
}
function factorise(a,b,c)
  {
  document.getElementById("demo").innerHTML ="";
  //ctx.restore();
  ctx.clearRect(0,0,canvas.width,canvas.height);
  if (a == 0 || a % 1 != 0 || b % 1 != 0 || c % 1 != 0) {document.getElementById("demo").innerHTML ="Error.";return;}
  if (b*b-4*a*c<0) {document.getElementById("demo").innerHTML ="Cannot.";return;}
  if (Math.sqrt(b*b-4*a*c) % 1 != 0) {document.getElementById("demo").innerHTML ="Cannot.";return;}
  if (a<0) {document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML+"-";
  a = -a; b = -b; c = -c; var pin = -1;} else {var pin = 1;}
  solve(a,b,c);
  
  x1z = x1z / x1m;
  x2z = x2z / x2m;
  var num = 1;
  while (x1z*num % 1 !=0) {num++;}
  x1z = x1z * num;
  x1m = num;
  num = 1;
  while (x2z*num % 1 !=0) {num++;}
  x2z = x2z * num;
  x2m = num;
  pin = pin * a/x1m/x2m;
  if (Math.abs(pin) != 1) {document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML+Math.abs(pin);}
  if (x1z != 0) {document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML+"(";}
  if (x1m != 1) {document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML+x1m+"x";} 
  else {document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML+"x";}
  
  if (x1z < 0) {document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML+"+"+ -x1z +")";}
  if (x1z > 0) {document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML+"-"+ x1z +")";}
  
  if (x2z != 0) {document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML+"(";}
  if (x2m != 1) {document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML+x2m+"x";}
   else {document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML+"x";}
  
  if (x2z < 0) {document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML+"+"+ -x2z +")";}
  if (x2z > 0) {document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML+"-"+ x2z +")";}
  
  ctx.moveTo(0,0);
  var xhg = pin * x1m;lhg = -pin * x1z;xsg = x2m;lsg = -x2z;
  line = xhg * 65 + lhg * 25;shu=xsg * 65 + lsg * 25;
  if (xhg < 0 || lhg < 0 || xsg < 0 || lsg < 0) {return;}
  for (var yp = 0; yp <= xhg; yp++)
  {
    ctx.moveTo(yp * 65 ,0);
	ctx.lineTo(yp * 65 ,shu);
	ctx.stroke();
  }
  for (yp = xhg + 1; yp-xhg <= lhg; yp++ )
  {
    ctx.moveTo((yp-xhg) * 25 + xhg * 65,0);
	ctx.lineTo((yp-xhg) * 25 + xhg * 65,shu);
	ctx.stroke();
  }
  for (yp = 0; yp <= xsg; yp++)
  {
    ctx.moveTo(0,yp * 65);
	ctx.lineTo(line,yp * 65);
	ctx.stroke();
  }
  for (yp = xsg + 1; yp-xsg <= lsg; yp++)
  {
    ctx.moveTo(0,(yp-xsg) * 25 + xsg * 65);
	ctx.lineTo(line,(yp-xsg) * 25 + xsg * 65);
	ctx.stroke();
  }
}
