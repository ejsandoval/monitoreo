d3.json("data/contexto-general/politico-institucional/ContextoPolitico-Consumodepolitica.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz(loaded_data,"#viz_0");
      });

      function makeViz(data,container){
        var vis = new d3plus.BarChart()
        .data(data)
        .stacked(true)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";;
            table += "<tr>" + d.opinion + " " + d.value + "%</tr>";
            table += "</table>";
            return table;
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          },
          title: function(d) {
            var txt = d.activity;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          }
        })
        .select(container)
        .x("value")
        .xConfig({
          title:"Porcentaje(%)"
        })
        .discrete("y")
        .y("activity")
        .yConfig({
          title: null,
          width: 250
        })
        .groupBy("opinion")
        /*.stackOrder(function (d) {
          return ["Frecuentemente", "A veces", "Nunca", "NS/NR"].indexOf(d.opinion);
        })*/
        .stackOrder(["Frecuentemente", "A veces", "Nunca", "NS/NR"])
        .shapeConfig({
          label: function(d) {
            return d.value+"%"
          },
        })
        .legendTooltip({
          title: function(d) {
            var txt = d.opinion;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          },
          body: function(d) {
            return null;
          }
        })
        .render();
      }

d3.json("data/contexto-general/politico-institucional/ContextoPolitico-Funcionamientodelademocracia.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz1(loaded_data,"#viz_1");
      });

      function makeViz1(data,container){
        var vis1 = new d3plus.BarChart()
        .data(data)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";;
            table += "<tr><td class='title'>Período:</td><td class='data'>" + d.date + "</td></tr>";
            table += "</table>";
            return table;
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          },
          title: function(d) {
            var txt = d.category;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() + '<br>' + d.value + '%';
          }
        })
        .legendTooltip({
          title: function(d) {
            var txt = d.category;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          },
          body: function(d) {
            return null;
          }
        })
        .select(container)
        .x("date")
        .xConfig({
          title:"Fecha"
        })
        .y("value")
        .yDomain([0,100])
        .yConfig({
          title:"porcentaje"
        })
        .shapeConfig({
          label: function(d) {
            return d.value+"%";
          },
          Bar: {
            width: 37
          }
        })
        .groupBy("category")
        .render();
      }

d3.json("data/contexto-general/politico-institucional/ContextoPolitico-Libertadesciviles.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz2(loaded_data,"#viz_2");
      });

      function makeViz2(data,container){
        var vis2 = new d3plus.BarChart()
        .data(data)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";
            table += "<tr><td class='data'>" + d.opinion + "</td></tr>";
            table += "<tr><td class='data'>" + d.value + "%</td></tr>";
            table += "</table>";
            return table;
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          },
          title: function(d) {
            var txt = d.category;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          }
        })
        .legendTooltip({
          title: function(d) {
            var txt = d.opinion;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          },
          body: function(d) {
            return null;
          }
        })
        .select(container)
        .y("category")
        .yConfig({
          title: null
        })
        .x("value")
        .xDomain([0,100])
        .xConfig({
          title:"Porcentaje %"
        })
        .discrete("y")
        .shapeConfig({
          label: function(d) {
            return d.value+"%";
          },
          Bar: {
            height: 26.8
          }
        })
        .legendPosition("right")
        .groupBy("opinion")
        .groupPadding(20)
        .render();
      }


d3.json("data/contexto-general/politico-institucional/ContextoPolitico-Votanteselecciones20171eravuelta.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz3(loaded_data,"#viz_3");
      });

      function makeViz3(data,container){
        var vis3 = new d3plus.Pie()
        .data(data)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";;
            table += "<tr><td class='title'>Porcentaje:</td><td class='data'>" + d.value + "%</td></tr>";
            table += "</table>";
            return table;
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          },
          title: function(d) {
            var txt = d.category;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          }
        })
        .select(container)
        .groupBy("category")
        .render();
      }

d3.json("data/contexto-general/politico-institucional/ContextoPolitico-Votanteselecciones20172davuelta.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz4(loaded_data,"#viz_4");
      });

      function makeViz4(data,container){
        base_text = d3.select(".elecciones .support").text();
        d3.select(".elecciones .support").text(base_text + '\n Total de votantes: ' + data[4].total);
        var vis4 = new d3plus.Pie()
        .data(data)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";;
            table += "<tr><td class='title'>Porcentaje:</td><td class='data'>" + d.value + "%</td></tr>";
            table += "</table>";
            return table;
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          },
          title: function(d) {
            var txt = d.category;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          }
        })
        .select(container)
        .groupBy("category")
        .render();
      }

d3.json("data/contexto-general/politico-institucional/ContextoPolitico-Corrupcionorgpubli2.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz5(loaded_data,"#viz_5");
      });

      function makeViz5(data,container){
        var vis5 = new d3plus.BarChart()
        .data(data)
        .tooltipConfig({
          body: function(d) {
            var txt = "Año: " + d.year + "<br>";
            txt += d.value + "%";
            return txt;
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          },
          title: function(d) {
            var txt = d.category;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          }
        })
        .legendTooltip({
          title: function(d) {
            var txt = d.category;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          },
          body: function(d) {
            return null;
          }
        })
        .select(container)
        .x("year")
        .xConfig({
          title:"Fecha"
        })
        .y("value")
        .yDomain([0,100])
        .yConfig({
          title:"porcentaje"
        })
        .groupBy("category")
        .groupPadding(30)
        .shapeConfig({
          label: function(d) {
            return d.value+"%";
          },
        })
        .render();
      }

d3.json("data/contexto-general/politico-institucional/ContextoPolitico-Transparenciaensectorpublico.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz6(loaded_data,"#viz_6");
      });

      function makeViz6(data,container){
        var vis6 = new d3plus.BarChart()
        .data(data)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";;
            table += "<tr><td class='title'>Año:</td><td class='data'>" + d.year + "</td></tr>";
            table += "<tr><td class='title'>Porcentaje:</td><td class='data'>" + d.value + "%</td></tr>";
            table += "</table>";
            return table;
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          },
          title: function(d) {
            var txt = d.category;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          }
        })
        .legendTooltip({
          title: function(d) {
            var txt = d.category;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          },
          body: function(d) {
            return null;
          }
        })
        .select(container)
        .x("year")
        .xConfig({
          title:"Fecha"
        })
        .y("value")
        .yDomain([0,100])
        .yConfig({
          title:"porcentaje"
        })
        .groupBy("category")
        .groupPadding(25)
        .shapeConfig({
          label: function(d) {
            return d.value+"%"
          },
        })
        .render();
      }


d3.json("data/contexto-general/politico-institucional/ContextoPolitico-Participacionenactcomunitarias.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz7(loaded_data,"#viz_7");
      });

      function makeViz7(data,container){
        var vis7 = new d3plus.BarChart()
        .data(data)
        .stacked(true)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";;
            table += "<tr><td class='title'>Respuesta:</td><td class='data'>" + d.answer + "</td></tr>";
            table += "<tr><td class='title'>Porcentaje:</td><td class='data'>" + d.value + "%</td></tr>";
            table += "</table>";
            return table;
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          },
          title: function(d) {
            return null;
          }
        })
        .legendTooltip({
          title: function(d) {
            var txt = d.activity;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          },
          body: function(d) {
            return null;
          }
        })
        .select(container)
        .x("value")
        .xConfig({
          title:"Porcentaje (%)"
        })
        .discrete("y")
        .y("activity")
        .yConfig({
          title:"Actividad",
          width: 170
        })
        .stackOrder(["Pertenece y participa activamente", "Pertenece pero no participa activamente", "Antes pertenecía pero ya no","Nunca he pertenecido", "NS/NR"])
        .groupBy("answer")
        .shapeConfig({
          label: function(d) {
            return d.value+"%"
          },
        })
        .render();
      }