var mmap_settori_tipodati = {
  "Energia":{"name":"Energia","id":0,"data":"settore"},
  "Ambiente e Clima":{"name":"Ambiente e clima","id":1,"data":"settore"},
  "Finanza e Investimenti":{"name":"Finanza","id":2,"data":"settore"},
  "Sanità":{"name":"Sanità","id":3,"data":"settore"},
  "Formazione":{"name":"Formazione","id":4,"data":"settore"},
  "Servizi legali":{"name":"Servizi legali","id":5,"data":"settore"},
  "Immobiliare":{"name":"Immobiliare","id":6,"data":"settore"},
  "Turismo":{"name":"Turismo e Cultura","id":7,"data":"settore"},
  "Trasporti":{"name":"Trasporti","id":8,"data":"settore"},
  "Mappe/Geospaziale":{"name":"Mappe/Geospaziale","id":9,"data":"settore"},
  "Comunicazione e media":{"name":"Cominicazione e media","id":10,"data":"settore"},
  "Agricoltura e settore alimentare":{"name":"Agricoltura e settore alimentare","id":11,"data":"settore"},
  "Ricerca e consulenza":{"name":"Ricerca e consulenza","id":12,"data":"settore"},
  "Ricerca scientifica":{"name":"Ricerca scientifica","id":13,"data":"settore"},
  "Governo e pubblica amministrazione":{"name":"Governo e pubblica amministrazione","id":14,"data":"settore"},
  "Tecnologia e dati":{"name":"Tecnologia e dati","id":15,"data":"settore"},
  "Software":{"name":"Software","id":16,"data":"settore"},
  "Dati Geospaziali":{"name":"Dati Geospaziali","id":17,"data":"tipo"},
  "Dati sui Trasporti":{"name":"Dati sui Trasporti","id":18,"data":"tipo"},
  "Dati sul Commercio Internazionale":{"name":"Dati sul Commercio Internazionale","id":19,"data":"tipo"},
  "Dati sulla Salute":{"name":"Dati sulla Salute","id":20,"data":"tipo"},
  "Dati su Istruzione":{"name":"Dati su Istruzione","id":21,"data":"tipo"},
  "Dati Ambiente e Clima":{"name":"Dati Ambiente e Clima","id":22,"data":"tipo"},
  "Dati del Censimento":{"name":"Dati del Censimento","id":23,"data":"tipo"},
  "Dati Legali":{"name":"Dati Legali","id":24,"data":"tipo"},
  "Dati Elettorali":{"name":"Dati Elettorali","id":25,"data":"tipo"},
  "Dati del bilancio":{"name":"Dati del bilancio","id":26,"data":"tipo"},
  "Dati della spesa pubblica":{"name":"Dati della spesa pubblica","id":27,"data":"tipo"},
  "Dati sulle imprese":{"name":"Dati sulle imprese","id":28,"data":"tipo"},
  "Dati su Turismo e Cultura":{"name":"Dati su Turismo e Cultura","id":29,"data":"tipo"},
  "Altro":{"name":"Altra tipologia di dati","id":30,"data":"tipo"}
};

var matrix_settori_tipodati = [
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,0,0,0,2,1,0,0,1,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1,0,0,0,4,0,0,0,0,0,1,1,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,1,0,0,1,1,1,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,1,0,0,0,1,0,1,1,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,2,0,0,1,1,1,1,0,0,0,1,5,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,0,0,0,1,0,0,0,0,0,1,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,3,0,1,0,7,5,1,0,0,0,0,6,2],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,1,0,1,0,3,3,1,1,2,2,3,3,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,2,0,3,1,0,0,0,0,0,1,1],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,2,4,2,1,1,2,0,1,2,1,3,3,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,1,0,2,1,2,2,0,1,1,1,1,3,2],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,2,1,3,1,5,5,2,1,4,2,2,3,1],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21,7,5,4,3,10,9,5,2,8,7,10,11,6],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,4,6,5,3,7,6,3,2,7,5,10,8,4],
[2,3,2,1,1,1,2,6,2,11,4,3,6,4,7,21,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[1,1,0,0,0,0,0,2,3,3,1,0,2,1,2,7,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,4,0,1,5,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,1,1,2,2,2,3,4,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[2,4,0,0,0,0,1,1,1,7,3,3,1,2,5,10,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[1,0,1,0,0,1,0,1,0,5,3,1,2,2,5,9,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,1,0,1,0,1,1,0,0,0,2,5,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[1,0,1,0,0,1,1,0,0,0,2,0,2,1,4,8,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,1,0,0,1,0,0,0,0,2,0,1,1,2,7,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,1,1,0,0,1,1,1,1,0,3,0,3,1,2,10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,1,0,1,1,0,1,5,0,6,3,1,3,3,3,11,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,1,0,0,0,0,0,2,0,1,0,2,1,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

colorsrange_settori_tipodati = [
        "#5F9EA0", "#5F9EA0","#5F9EA0", "#5F9EA0", "#5F9EA0", "#5F9EA0", "#5F9EA0", "#5F9EA0", "#5F9EA0", "#5F9EA0",
        "#5F9EA0", "#5F9EA0","#5F9EA0", "#5F9EA0", "#5F9EA0", "#5F9EA0", "#5F9EA0", "#ffb2b0", "#ffb2b0", "#ffb2b0",
        "#ffb2b0", "#ffb2b0","#ffb2b0", "#ffb2b0", "#ffb2b0", "#ffb2b0", "#ffb2b0", "#ffb2b0", "#ffb2b0", "#ffb2b0",
        "#ffb2b0"
          ];

drawChords(matrix_settori_tipodati,mmap_settori_tipodati,"#chart_settori_tipodati",colorsrange_settori_tipodati);