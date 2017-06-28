disegnaGrafici();

function disegnaGrafici() {
    nv.addGraph(function() {
      var chart = nv.models.discreteBarChart()
          .x(function(d) { return d.label })    //Specify the data accessors.
          .y(function(d) { return d.value })
          .valueFormat(d3.format(".0%"))
          .staggerLabels(true)    //Too many bars and not enough room? Try staggering labels.
          .showValues(true)       //...instead, show the bar value right on top of each bar.
          ;

      d3.select('#chart_segmenti_mercato svg')
          .datum(data_segmentiMercato())
          .call(chart);

      nv.utils.windowResize(chart.update);

      return chart;
    });

  nv.addGraph(function() {
    var chart = nv.models.discreteBarChart()
        .x(function(d) { return d.label })    //Specify the data accessors.
        .y(function(d) { return d.value })
        .valueFormat(d3.format(".0%"))
        .staggerLabels(true)    //Too many bars and not enough room? Try staggering labels.
        .showValues(true)       //...instead, show the bar value right on top of each bar.
        ;

    d3.select('#chart_tipi_dati_usati svg')
        .datum(data_tipidati())
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
  });


  nv.addGraph(function() {
    var chart = nv.models.discreteBarChart()
        .x(function(d) { return d.label })    //Specify the data accessors.
        .y(function(d) { return d.value })
        .valueFormat(d3.format(".0%"))
        .staggerLabels(true)    //Too many bars and not enough room? Try staggering labels.
        .showValues(true)       //...instead, show the bar value right on top of each bar.
        ;

    d3.select('#chart_prodotti_creati svg')
        .datum(data_prodotti())
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
  });
    
  nv.addGraph(function() {
    var chart = nv.models.discreteBarChart()
        .x(function(d) { return d.label })    //Specify the data accessors.
        .y(function(d) { return d.value })
        .valueFormat(d3.format(".0%"))
        .staggerLabels(true)    //Too many bars and not enough room? Try staggering labels.
        .showValues(true)       //...instead, show the bar value right on top of each bar.
        ;

    d3.select('#chart_uso_opendata svg')
        .datum(data_uso())
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
  });

function data_uso() {
 return  [ 
    {
      key: "Uso degli Open Data",
      values: [
        { 
          "label" : "Elaborazione dati",
          "value" : 0.27
        } , 
        { 
          "label" : "API e apps" , 
          "value" : 0.24
        } , 
        { 
          "label" : "Analitiche e visualizzazioni" , 
          "value" : 0.21
        } ,
        { 
          "label" : "Piattaforme, portali, datastore" , 
          "value" : 0.17
        } ,
        { 
          "label" : "Pubblicazione opendata" , 
          "value" : 0.11
        } 
        ]
    }
  ]
  }

function data_prodotti() {
 return  [ 
    {
      key: "prodotti creati",
      values: [
        { 
          "label" : "Sviluppo web e mobile" ,
          "value" : 0.34
        } , 
        { 
          "label" : "Strumenti di visualizzazione dati" , 
          "value" : 0.29
        } , 
        { 
          "label" : "Analisi supporto decisioni strategiche" , 
          "value" : 0.15
        } ,
        { 
          "label" : "Servizi di consulenza" , 
          "value" : 0.09
        } ,
        { 
          "label" : "Servizi di rating / analisi predittive" , 
          "value" : 0.08
        } ,
        { 
          "label" : "Servizi di formazione" , 
          "value" : 0.04
        }
        ]
    }
  ]
  }

function data_tipidati() {
 return  [ 
    {
      key: "tipologia di dati",
      values: [
        { 
          "label" : "Geospaziale" ,
          "value" : 0.23
        } , 
        { 
          "label" : "Turismo e culturale" , 
          "value" : 0.12
        } , 
        { 
          "label" : "Ambientali" , 
          "value" : 0.12
        } ,
        { 
          "label" : "Censimento" , 
          "value" : 0.09
        } ,
        { 
          "label" : "Imprese" , 
          "value" : 0.09
        } ,
        { 
          "label" : "Trasporto" , 
          "value" : 0.07
        } ,
        { 
          "label" : "Bilancio" , 
          "value" : 0.07
        } ,
        { 
          "label" : "Spesa" , 
          "value" : 0.05
        } ,
        { 
          "label" : "Salute" , 
          "value" : 0.05
        } ,
        { 
          "label" : "Commercio internazionale" , 
          "value" : 0.04
        } ,
        { 
          "label" : "Legislativi" , 
          "value" : 0.03
        } ,
        { 
          "label" : "Istruzione" , 
          "value" : 0.03
        } ,  { 
          "label" : "Elettorali" , 
          "value" : 0.02
        } 
      ]
    }
  ]
  }

//Each bar represents a single discrete quantity.
function data_segmentiMercato() {
 return  [ 
    {
      key: "Segmenti di mercato",
      values: [
        { 
          "label" : "B2G" ,
          "value" : 0.36
        } , 
        { 
          "label" : "B2B" , 
          "value" : 0.47
        } , 
        { 
          "label" : "B2C" , 
          "value" : 0.17
        } 
      ]
    }
  ]
  }
}