 var mto = 0.5;
 var lab_imp = [],
     dat_imp = [],
     lab_step = [],
     dat_step = [],
     lab_stepc = [],
     dat_stepc = [],
     lab_final = [];



var integral = 0;
var prev_error = 0;
var stepeqn,coneqn="";
var eqn;
var poles = [],
    roots = [];
var kpi,essi,esss,kp;
 
 var conclusion;

 function addval() {
    lab_step = [];
    dat_step = [];
    lab_stepc = [];
    dat_stepc = [];
    lab_final = [];
     lab = [];
     dat = [];
     a = "0";
     var nums, dens;
     var b = document.getElementById("numc").value;
     var r = document.getElementById("denc").value;
    //  var p = document.getElementById("dena").value;
     var q = document.getElementById("denb").value;
     var k = document.getElementById("k").value;
     var ki = document.getElementById("ki").value;
     var kd = document.getElementById("kd").value;
     roots = [];
     poles = [];
     var x1, y1;
     var ni = 0,
         di = 0;

     b1 = parseInt(b);
    
     b2 = parseInt(q);
     c2 = parseInt(r);
     k = parseInt(k);
     kd = parseInt(kd);
     ki = parseInt(ki);
     var A = b1, B = b2, C = c2;
     console.log(A);
     var a2=0, p=0;


     stepresponse(b1, b2, c2);
     stepresponsec(A,B,C,k,kd,ki);
     
     

     
     lc = 1;
     document.getElementById("line1").setAttribute("style", "color:blue");
     document.getElementById("chartcont").setAttribute("style", "display:none");
     document.getElementById("tanswer").setAttribute("style", "display:none;");
     document.getElementById("chartcont1").setAttribute("style", "display:none;");
     for (let i = 1; i < 3; i++) {
         let out = "out" + i;
         let ln = "line" + (i + 1);
         document.getElementById(ln).setAttribute("Style", "color:black");
         document.getElementById(out).setAttribute("style", "display:none");
     }
     document.getElementById("out3").setAttribute("style", "display:none");
     if (mto) {
         document.getElementById("fconclusions").innerHTML = "Conclusions will show here";
         document.getElementById("matwork").title = "";
         document.getElementById("mrun").disabled = false;
         document.getElementById("matwork").setAttribute("style", "opacity:1");
         document.getElementById("mrun").classList.remove("mrundisabled", "mrunenabled");
         document.getElementById("mrun").classList.add("mrunenabled");
         document.getElementById("matwork").classList.remove('mat');
         var numerator = "$${\\frac{";
         if (a != 0)
             numerator = numerator + a + "s^2";
         if (b != 0)
             if (a != 0)
                 numerator = numerator + " + " + b;
             else
                 numerator = numerator + b;
         numerator = numerator + "}";
         var denominator = "{";
         if (a2 != 0)
             denominator = denominator + a2.toFixed() + "s^2";
         if (b2 != 0)
             if (a2 != 0)
                 denominator = denominator + " + " + b2.toFixed() + "s";
             else
                 denominator = denominator + b2.toFixed() + "s";
         if (c2 != 0)
             if (b2 != 0)
                 denominator = denominator + " + " + c2.toFixed();
             else
                 denominator = denominator + c2.toFixed();
         denominator = denominator + "}}$$";
         var eqn = numerator + denominator;
         den2 = denominator;

         document.getElementById("out1").innerHTML = eqn;
         
         
         q=B; r=A+C;
         
         denominator = "{";
         if (p != 0)
             denominator = denominator + p + "s^2";
         if (q != 0)
             if (p != 0)
                 denominator = denominator + " + " + q + "s";
             else
                 denominator = denominator + q + "s";
         if (r != 0)
             if (q != 0)
                 denominator = denominator + " + " + r;
             else
                 denominator = denominator + r;
         denominator = denominator + " }}$$";
        eqn = numerator + denominator;
        document.getElementById("out2").innerHTML = eqn;

        numerator = "$${\\frac{";
        denominator="{";

        var n2 = A*kd; var n1 = A*k; var n0 = A*ki;
        var d2 = B+A*kd; var d1 = C+A*k; var d0 = A*ki;

        if(n2!=0)
numerator=numerator+n2+"s^2";
if(n1!=0)
  if(n2!=0)
    if(n1>0)
      numerator=numerator+ " + " + n1+"s";
    else
    numerator=numerator + n1+"s";
  else
  numerator=numerator+ n1+"s";
if(n0!=0)
  if(n2!=0||n1!=0)
  if(n0>0)
  numerator=numerator+ " + " + n0;
    else
    numerator=numerator + n0;
else
numerator=numerator+ n0;

if(d2!=0)
denominator=denominator+d2+"s^2";
if(d1!=0)
  if(d2!=0)
    if(d1>0)
    denominator=denominator+ " + " + d1+"s";
    else
    denominator=denominator + d1+"s";
  else
  denominator=denominator+ d1+"s";
if(d0!=0)
  if(d2!=0||d1!=0)
  if(d0>0)
  denominator=denominator+ " + " + d0;
    else
    denominator=denominator + d0;
else
denominator=denominator+ d0;

denominator = denominator + " }}$$";


  
        eqn = numerator+"}"+denominator;
        
        document.getElementById("out3").innerHTML = eqn;
        
        
         document.getElementById("tanswer").innerHTML ="<br> Step Response in time domain:"+ stepeqn +"<br>Kp:"+kp.toFixed(2)+"<br>ess:"+esss.toFixed(2)+"<br><br>"+ "Response after adding the controller to the system : <br><br>"+coneqn;
         var j, k;

         if (kd==0&&ki==0)
         conclusion = "The controller is a P controller.";
         else if (kd!=0&&ki==0)
         conclusion = "The controller is a PD controller.";
         else if (kd==0&&ki!=0)
         conclusion = "The controller is a PI controller.";
         else
         conclusion = "The controller is a PID controller.";

         if (k!=0)
         conclusion = conclusion+"<br> The proportional controller tends to amplify the amplitude and thus, shifts the response upwards.";
         if (kd!=0)
         conclusion = conclusion+"<br> The differential controller reduces the overshoot of the response."
         if (ki!=0)
         conclusion= conclusion+"<br> The integral controller increses the settling time of the response.";





         var ms = window.matchMedia("(max-width:950px)");
         cwidth(ms);
         ms.addListener(cwidth);

        MathJax.Hub.Queue(["Typeset", MathJax.Hub, "out1"]);
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, "out2"]);
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, "out3"]);
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, "tanswer"]);
     } else {
         mto = 1;

         document.getElementById("fconclusions").innerHTML = "Conclusions will show here";
         document.getElementById("mrun").disabled = true;
         document.getElementById("mrun").classList.remove('mrunenabled', 'mrundisabled');
         document.getElementById("tanswer").setAttribute("style", "display:none");
         document.getElementById("mrun").classList.add('mrundisabled');
         document.getElementById("matwork").classList.add('mat');
         document.getElementById("matwork").setAttribute("style", "opacity:0.5");
         document.getElementById("matwork").title = "Please enter the values of coeffecients of the equation first";
     }
 };



 function showval() {
     genval("numc", "lc");
     genval("denb", "lq");
     genval("denc", "lr");
     genval("k", "lk");
     genval("kd", "lkd");
     genval("ki", "lki");
 };

 function genval(idofinput, idofspan) {
     var x;
     x = document.getElementById(idofinput).value;
     //var x1 = x.toFixed(2);
     document.getElementById(idofspan).innerHTML = x;
 };

 var lc = 1;

 function runprog(i) {
     lc = lc + 1;
     if (lc <= 3)
         highlightline(lc);
     else {
        document.getElementById("out3").setAttribute("style", "display:block;");
         document.getElementById("fconclusions").innerHTML = conclusion;
         document.getElementById("line3").setAttribute("style", "color:black;");
         document.getElementById("mrun").disabled = true;
         var ms = window.matchMedia("screen and (max-width:950px)");
         widthcheck(ms);
         ms.addListener(widthcheck);
         document.getElementById("mrun").disabled = true;
         document.getElementById("mrun").classList.remove("mrunenabled");
         document.getElementById("mrun").classList.add("mrundisabled");
     }
 };

 function cwidth(ms) {

     if (ms.matches) {
         var chartplot1 = document.getElementById("chartmine1").getContext("2d");
         
     } else {
         var chartplot1 = document.getElementById("myChart1").getContext("2d");
         
     }
     if (window.ch1 != undefined)
         window.ch1.destroy();
     
     const labelstep = lab_final;
     const datastep = {
         labels: labelstep,

         datasets: [{
             label: "Without Controller",
             data: dat_step,
             fill: false,
             pointRadius: 1,
             borderColor: 'rgb(192, 75, 192)',
             tension: 0.1
         },
        {
            label: "With Controller",
            data: dat_stepc,
            fill: false,
            pointRadius: 1,
            borderColor: 'rgb(123,255, 201)',
            tension: 0.1
        }]
     };
     window.ch1 = new Chart(chartplot1, {
         type: "line",
         data: datastep,
         options: {
             title: {
                 display: true,
                 text: "Step Response",
                 fontSize: 14,
             },
             maintainAspectRatio: false,
             scales: {
                 xAxes: [{
                     scaleLabel: {
                         display: "Time" !== ' ',
                         labelString: "Time"
                     },

                 }],
                 yAxes: [{
                     stacked: false, // `true` for stacked area chart, `false` otherwise
                     beginAtZero: false,
                     scaleLabel: {
                         display: "Amplitude" !== '',
                         labelString: "Amplitude"
                     },


                 }]
             },
         }
     });
     const labelimp = lab_imp;
    
     
     
 }

 function widthcheck(ms) {
     if (ms.matches){
         document.getElementById("chartcont").setAttribute("style", "display:block;");
     
     document.getElementById("tanswer").setAttribute("style", "display:block");}
     else {
         document.getElementById("chartcont1").setAttribute("style", "display:block;");
         document.getElementById("tanswer").setAttribute("style", "display:block");
     }
 }

 function highlightline(l) {
     var ln = "line" + l;
     var out = "out" + (l-1);
     document.getElementById(ln).setAttribute("style", "color:blue;");
     document.getElementById(out).setAttribute("style", "display:block;");
     if (lc != 1)
         ln = "line" + (l - 1);
     document.getElementById(ln).setAttribute("style", "color:black;");
 };

 var menu_score = 0;

 function dispmenu(val) {
     val.classList.toggle("change");
     menu_score = menu_score + 1;
     if (menu_score == 1) {
         document.getElementById("navbar").setAttribute("style", "display:block");
         document.getElementById("simulation-cont").setAttribute("style", "opacity:0.5");
         if (mto != 1)
             document.getElementById("matwork").setAttribute("style", "opacity:1");
         menu_score = -1;
         document.body.style.backgroundColor = "black";
     } else {
         if (mto != 1)
             document.getElementById("matwork").setAttribute("style", "opacity:0.5");
         document.body.style.backgroundColor = "white";
         document.getElementById("simulation-cont").setAttribute("style", "opacity:01");
         document.getElementById("navbar").setAttribute("style", "display:none");
     }
 }

 function stepresponse(A,B,C) {
     lab_step = [];
     dat_step = [];
     lab_final = [];
     var co1, co2, co3, co4;
     var stepl, maxl;
     kp = A/(A+C);
     console.log(kp);
     esss = 1/(1+A/(A+C));
     stepeqn="";
    //  var det = 4 * a2 * c2 - Math.pow(b2, 2);
    //  if (det < 0)
    //      det = -1 * det;
    //  var sqd = Math.sqrt(det)
     //if (det != 0) {
         co1 = A/(A+C);
         co2 = (A+C)/B;
        //  co3 = sqd / 2 / a2;
        //  co4 = b1 * b2 / 2 / a2 / c2 / co3;
         stepeqn = "$${" + co1.toFixed(2)+" - "+ co1.toFixed(2)+"*e^{-1*"+co2.toFixed(2)+"*t} }$$";
         if (amplitudes1(co1, co2, 1, 10) == amplitudes1(co1, co2, 1, 9.8)) {
             maxl = 10;
             stepl = 0.05;
         } else if (amplitudes1(co1, co2, 1, 25) == amplitudes1(co1, co2, 1, 24.5)) {
             maxl = 25;
             stepl = 0.125;
         } else if (amplitudes1(co1, co2, 1, 50) == amplitudes1(co1, co2, 1, 49)) {
             maxl = 50;
             stepl = 0.25;
         } else if (amplitudes1(co1, co2, 1, 100) == amplitudes1(co1, co2, 1, 98)) {
             maxl = 100;
             stepl = 0.5;
         } else if (amplitudes1(co1, co2, 1, 200) == amplitudes1(co1, co2, 1, 196)) {
             maxl = 200;
             stepl = 1;
         } else {
             maxl = 1;
             stepl = 0.005;
         }

         for (let i = 0; i <= maxl; i = i + stepl) {

             dat_step.push(amplitudes1(co1, co2, 0, i));
             lab_step.push(i.toFixed(1));
         }
    
 }

 function stepresponsec(A,B,C,k,kd,ki) {
    lab_stepc = [];
    dat_stepc = [];
    lab_final = [];
    var c1, c2, c3, c4;
    var stepl, maxl;
    //kp = b1/c2;
    console.log(kp);
    //esss = 1/(1+b1/c2);
    coneqn="";
    var det = 4 * (A*kd+B)*A*ki - (A*k+C)*(A*k+C);
    if (det < 0)
        det = -1 * det;
    var sqd = Math.sqrt(det)
    if (det != 0) {
        co1 = B/(B+A*kd);
        console.log(co1);
        co2 = (A*k+C)/(2*A*kd+2*B);
        co3 = sqd/(2*A*kd+2*B);
        co4 = co1*(2*A*C*kd+B*C-A*B*k)/(B*sqd);
        // co5 = sqd/(2*B);
        // co6 = (2*kd*D*D-3*ki*C*C-k*D*C-2*ki*B*D)/sqd;
        coneqn = "$${ 1 - "+ co1.toFixed(2)+"e^{-1*"+co2.toFixed(2)+"*t} &emsp;*cos("+co3.toFixed(2)+"*t) - " + co4.toFixed(2) +"e^{-1*"+co2.toFixed(2)+"*t} &emsp;*sin("+co3.toFixed(2)+"*t)}$$";
        console.log(coneqn);
        if (amplitudesc1(co1, co2, co3, co4, 1, 10) == amplitudesc1(co1, co2, co3, co4, 1, 9.8)) {
            maxl = 10;
            stepl = 0.05;
        } else if (amplitudesc1(co1, co2, co3, co4, 1, 25) == amplitudesc1(co1, co2, co3, co4, 1, 24.5)) {
            maxl = 25;
            stepl = 0.125;
        } else if (amplitudesc1(co1, co2, co3, co4, 1, 50) == amplitudesc1(co1, co2, co3, co4, 1, 49)) {
            maxl = 50;
            stepl = 0.25;
        } else if (amplitudesc1(co1, co2, co3, co4, 1, 100) == amplitudesc1(co1, co2, co3, co4, 1, 98)) {
            maxl = 100;
            stepl = 0.5;
        } else if (amplitudesc1(co1, co2, co3, co4, 1, 200) == amplitudesc1(co1, co2, co3, co4, 1, 196)) {
            maxl = 200;
            stepl = 1;
        } else {
            maxl = 200;
            stepl = 1;
        }

        if (lab_step[lab_step.length - 1] > maxl) {
             maxl = lab_step[lab_step.length - 1];
             stepl = maxl / 200;
            }
        for (let i = 0; i <= maxl; i = i + stepl) {
            dat_stepc.push(amplitudesc1(co1, co2, co3, co4, 0, i));
            lab_stepc.push(i.toFixed(1));
            lab_final.push(i.toFixed(1));
            }
        // for (let i = 0; i <= maxl; i = i + stepl) {

        //     dat_stepc.push(amplitudesc1(co1, co2, co3, co4, 0, i));
        //     lab_stepc.push(i.toFixed(1));
        // }
    } else {
        co1 = B/(B+Akd);
        console.log(co1);
        co2 = (Ak+C)/(2*A*kd+2*B);
        // co3 = -co1;
        // co4 = C/(2*B);
        coneqn = "$${ 1 - "+ co1.toFixed(2) +"* e^{-1*" + co2.toFixed(2)+"* t}}$$";
        if (amplitudesc2(co1, co2, 1, 10) == amplitudesc2(co1, co2, 1, 9.8)) {
            maxl = 10;
            stepl = 0.05;
        } else if (amplitudesc2(co1, co2, 1, 25) == amplitudesc2(co1, co2, 1, 24.5)) {
            maxl = 25;
            stepl = 0.125;
        } else if (amplitudesc2(co1, co2, 1, 50) == amplitudesc2(co1, co2, 1, 49)) {
            maxl = 50;
            stepl = 0.25;
        } else if (amplitudesc2(co1, co2, 1, 100) == amplitudesc2(co1, co2, 1, 98)) {
            maxl = 100;
            stepl = 0.5;
        } else if (amplitudesc2(co1, co2, 1, 200) == amplitudesc2(co1, co2, 1, 196)) {
            maxl = 200;
            stepl = 1;
        } else {
            maxl = 200;
            stepl = 1;
        }
        if (lab_step[lab_step.length - 1] > maxl) {
            maxl = lab_step[lab_step.length - 1];
            stepl = maxl / 200;
           }
       for (let i = 0; i <= maxl; i = i + stepl) {
           dat_stepc.push(amplitudesc2(co1, co2, 0, i));
           lab_stepc.push(i.toFixed(1));
           lab_final.push(i.toFixed(1));
           }

        

        
    }
}




 function amplitudes1(v1, v2, str, t) {
     var cal = v1 - v1 * Math.pow(Math.E, -v2 * t);
     if (str)
         return cal.toFixed(4);
     else
         return cal;
 }

 function amplitudes2(v1, v2, str, t) {
    var cal = v1 - v1 * Math.pow(Math.E, -v2 * t);
     if (str)
         return cal.toFixed(4);
     else
         return cal;
 }

 function amplitudesc1(v1, v2, v3, v4, str, t) {
    var cal = 1 - v1*Math.pow(Math.E,-v2*t)*Math.cos(v3*t) - v4*Math.pow(Math.E,-v3*t)*Math.sin(v3*t);
    if (str)
        return cal.toFixed(4);
    else
        return cal;
}

function amplitudesc2(v1, v2, str, t) {
    var cal = 1 - v1*Math.pow(Math.E,-v2*t);
    if (str)
        return cal.toFixed(4);
    else
        return cal;
}

