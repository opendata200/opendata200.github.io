function drawChords (matrix, mmap,destination,colorsrange) {
    var screenWidth = $(window).innerWidth(), 
    mobileScreen = (screenWidth > 300 ? false : true);

    var margin = {left: 50, top: 10, right: 50, bottom: 10},
    width = Math.min(screenWidth, 768) - margin.left - margin.right,
    height = (mobileScreen ? 300 : Math.min(screenWidth, 768)*5/6) - margin.top - margin.bottom;
    var w = width, h = height, r1 = h / 2, r0 = r1 - 110;

    var fill = d3.scale.ordinal()
        .domain(d3.range(2))
        .range(colorsrange);

    var chord = d3.layout.chord()
        .padding(.02)
        .sortSubgroups(d3.descending)

    var arc = d3.svg.arc()
        .innerRadius(r0)
        .outerRadius(r0 + 15);

    var svg = d3.select(destination).append("svg:svg")
        .attr("width", w)
        .attr("height", h)
        .append("svg:g")
        .attr("id", "circle")
        .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");

    svg.append("circle").attr("r", r0 + 15);

    var wrapper = svg.append("g").attr("class", "chordWrapper")
        .attr("transform", "translate(" + (width / 2 + margin.left) + "," + (height / 2 + margin.top) + ")");;
        
    var outerRadius = Math.min(width, height) / 2  - (mobileScreen ? 80 : 100),
        innerRadius = outerRadius * 0.95,
        opacityDefault = 0.7, //default opacity of chords
        opacityLow = 0.02; //hover opacity of those chords not hovered over
        
    //How many pixels should the two halves be pulled apart
    var pullOutSize = (mobileScreen? 20 : 50)


  ////////////////////////////////////////////////////////////
  /////////////////// Animated gradient //////////////////////
  ////////////////////////////////////////////////////////////

  var defs = wrapper.append("defs");
  var linearGradient = defs.append("linearGradient")
    .attr("id","animatedGradient")
    .attr("x1","0%")
    .attr("y1","0%")
    .attr("x2","100%")
    .attr("y2","0")
    .attr("spreadMethod", "reflect");

  linearGradient.append("animate")
    .attr("attributeName","x1")
    .attr("values","0%;100%")
  //  .attr("from","0%")
  //  .attr("to","100%")
    .attr("dur","7s")
    .attr("repeatCount","indefinite");

  linearGradient.append("animate")
    .attr("attributeName","x2")
    .attr("values","100%;200%")
    .attr("dur","7s")
    .attr("repeatCount","indefinite");

  linearGradient.append("stop")
    .attr("offset","5%")
    .attr("stop-color","#E8E8E8");
  linearGradient.append("stop")
    .attr("offset","45%")
    .attr("stop-color","#A3A3A3");
  linearGradient.append("stop")
    .attr("offset","55%")
    .attr("stop-color","#A3A3A3");
  linearGradient.append("stop")
    .attr("offset","95%")
    .attr("stop-color","#E8E8E8");
    
    var defs = wrapper.append("defs");
    var linearGradient = defs.append("linearGradient")
      .attr("id","animatedGradient")
      .attr("x1","0%")
      .attr("y1","0%")
      .attr("x2","100%")
      .attr("y2","0")
      .attr("spreadMethod", "reflect");

    linearGradient.append("animate")
      .attr("attributeName","x1")
      .attr("values","0%;100%")
      .attr("dur","7s")
      .attr("repeatCount","indefinite");

    linearGradient.append("animate")
      .attr("attributeName","x2")
      .attr("values","100%;200%")
      .attr("dur","7s")
      .attr("repeatCount","indefinite");

    linearGradient.append("stop")
      .attr("offset","5%")
      .attr("stop-color","#E8E8E8");
    linearGradient.append("stop")
      .attr("offset","45%")
      .attr("stop-color","#A3A3A3");
    linearGradient.append("stop")
      .attr("offset","55%")
      .attr("stop-color","#A3A3A3");
    linearGradient.append("stop")
      .attr("offset","95%")
      .attr("stop-color","#E8E8E8");


    var rdr = chordRdr(matrix, mmap);
        chord.matrix(matrix);

    var g = svg.selectAll("g.group")
        .data(chord.groups())
        .enter().append("svg:g")
        .attr("class", "group")
        .on("mouseover", mouseover)
        .on("mouseout", function (d) { d3.select("#tooltip").style("visibility", "hidden") });

    g.append("svg:path")
        .style("stroke", "grey")
        .style("fill", function(d) { return fill(d.index); })        
        .attr("d", arc);

    g.append("svg:text")
        .each(function(d) { d.angle = (d.startAngle + d.endAngle) / 2; })
        .attr("dy", ".35em")
        .style("font-family", "Montserrat, helvetica, arial, sans-serif")
        .style("font-size", mobileScreen ? "8px" : "10px" )
        .attr("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
        .attr("transform", function(d) {
          return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
              + "translate(" + (r0 + 26) + ")"
              + (d.angle > Math.PI ? "rotate(180)" : "");
        })
        .text(function(d) { return rdr(d).gname; });

          var chordPaths = svg.selectAll("path.chord")
                .data(chord.chords())
              .enter().append("svg:path")
                .attr("class", "chord")
                .style("stroke","none")
                .style("fill", "url(#animatedGradient)")
                .attr("d", d3.svg.chord().radius(r0))
                .on("mouseover", function (d) {
                  d3.select("#tooltip")
                    .style("visibility", "visible")
                    .html(chordTip(rdr(d)))
                    .style("top", function () { return (d3.event.pageY - 100)+"px"})
                    .style("left", function () { return (d3.event.pageX - 100)+"px";})
                })
                .on("mouseout", function (d) { d3.select("#tooltip").style("visibility", "hidden") });

          function chordTip (d) {
            var p = d3.format(".2%"), q = d3.format(",.3r")
            return "Chord Info:<br/>"
              + p(d.svalue/d.stotal) + " (" + q(d.svalue) + ") of "
              + d.sname + " prefer " + d.tname
              + (d.sname === d.tname ? "": ("<br/>while...<br/>"
              + p(d.tvalue/d.ttotal) + " (" + q(d.tvalue) + ") of "
              + d.tname + " prefer " + d.sname))
          }
          function groupTip (d) {
            var p = d3.format(".1%"), q = d3.format(",.3r")
            return "Group Info:<br/>"
                + d.gname + " : " + q(d.gvalue) + "<br/>"
                + p(d.gvalue/d.mtotal) + " of Matrix Total (" + q(d.mtotal) + ")"
          }

          function mouseover(d, i) {
            d3.select("#tooltip")
              .style("visibility", "visible")
              .html(groupTip(rdr(d)))
              .style("top", function () { return (d3.event.pageY - 80)+"px"})
              .style("left", function () { return (d3.event.pageX - 130)+"px";})

            chordPaths.classed("fade", function(p) {
              return p.source.index != i
                  && p.target.index != i;
            });
          }
      }
