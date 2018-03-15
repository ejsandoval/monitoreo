d3.json("data/contexto-general/ambiental/ContextoAmbiental-HuellaEcologica.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz(loaded_data,"#viz_0");
      });

      function makeViz(data,container){
        d3plus.colorContrast(["#969696", "#849BA1", "#B3B3B3", "#C8C8C8", "#9F6B7A", "#9F8655"]);
        var vis = new d3plus.LinePlot()
        .data(data)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";
            table += "<tr><td class='title'>Año:</td><td class='data'>" + d.year + "</td></tr>";
            table += "<tr><td class='title'>Valor:</td><td class='data'>" + d.value + "</td></tr>";
            table += "</table>";
            return table;
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          },
          title: function(d) {
            var txt = d.type;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          }
        })
        .legendTooltip({
          title: function(d) {
            var txt = d.type;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          },
          body: function(d) {
            return null;
          }
        })
        .select(container)
        .x("year")
        .xConfig({
          title:"Año"
        })
        .y("value")
        .yDomain([3.2,4.8])
        .yConfig({
          title:"Hectáreas globales por persona"
        })
        .shapeConfig({
          Line: {
            strokeWidth: 3
          }
        })
        .groupBy("type")
        .render();
      }

d3.json("data/contexto-general/ambiental/ContextoAmbiental-EmisionCO2percapita.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz1(loaded_data,"#viz_1");
      });

      function makeViz1(data,container){
        var vis = new d3plus.LinePlot()
        .data(data)
        .legendTooltip({
          title: function(d) {
            var txt = d.country;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          },
          body: function(d) {
            return null;
          }
        })
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";
            table += "<tr><td class='title'>Año:</td><td class='data'>" + d.year + "</td></tr>";
            table += "<tr><td class='title'>Toneladas de CO2 por habitante:</td><td class='data'>" + d.value + "</td></tr>";
            table += "</table>";
            return table;
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          },
          title: function(d) {
            var txt = d.country;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          }
        })
        .select(container)
        .x("year")
        .discrete("x")
        .xDomain([1990,2015])
        .xConfig({
          title:"Año"
        })
        .y("value")
        .yDomain([0,5])
        .yConfig({
          title:"En toneladas de CO2 por habitante"
        })
        /*.size(0)
        .sizeMin(0)
        .sizeMax(10)*/
        .shapeConfig({
          Line: {
            strokeWidth: d => (d.country === 'Chile' ? 3 : 1),
          }
        })
        .groupBy("country")
        .render();
      }

d3.json("data/contexto-general/ambiental/ContextoAmbiental-EmisionCO2PIB.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz2(loaded_data,"#viz_2");
      });

      function makeViz2(data,container){
        var vis = new d3plus.LinePlot()
        .data(data)
        .legendTooltip({
          title: function(d) {
            var txt = d.country;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          },
          body: function(d) {
            return null;
          }
        })
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";
            table += "<tr><td class='title'>Año:</td><td class='data'>" + d.year + "</td></tr>";
            table += "<tr><td class='title'>Toneladas de CO2 por habitante:</td><td class='data'>" + d.value + "</td></tr>";
            table += "</table>";
            return table;
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          },
          title: function(d) {
            var txt = d.country;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          }
        })
        .select(container)
        .x("year")
        .discrete("x")
        .xDomain([1990,2015])
        .xConfig({
          title:"Año"
        })
        .y("value")
        .yDomain([0,1.25])
        .yConfig({
          title:"Toneladas de CO2 por cada 1.000 dólares de PIB"
        })
        /*.size(0)
        .sizeMin(0)
        .sizeMax(10)*/
        .shapeConfig({
          Line: {
            strokeWidth: d => (d.country === 'Chile' ? 3 : 1),
          }
        })
        .groupBy("country")
        .render();
      }

d3.json("data/contexto-general/ambiental/ContextoAmbiental-ParticipacionpoliticaenMA2016.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz3(loaded_data,"#viz_3");
      });

      function makeViz3(data,container){
        var vis3 = new d3plus.BarChart()
        .data(data)
        .tooltipConfig({
          body: function(d) {
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          },
          title: function(d) {
            let txt = d.activity;
            txt = txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            txt = + d.value + '%<br>' + txt;
            return txt;
          }
        })
        .select(container)
        .x("value")
        .xDomain([0,45])
        .xConfig({
          title:"Porcentaje"
        })
        .y("activity")
        .yConfig({
          title: null,
          width: 150
        })
        .shapeConfig({
          label: function(d) {
            return d.value+"%"
          },
        })
        .discrete("y")
        .groupBy("activity")
        .title("2016")
        .legend(false)
        //.barPadding(5)
        //.groupPadding(40)
        .render();
      }

d3.json("data/contexto-general/ambiental/ContextoAmbiental-ParticipacionpoliticaenMA2018.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz31(loaded_data,"#viz_3_1");
      });

      function makeViz31(data,container){
        var vis31 = new d3plus.BarChart()
        .data(data)
        .tooltipConfig({
          body: function(d) {
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          },
          title: function(d) {
            let txt = d.activity;
            txt = txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            txt = + d.value + '%<br>' + txt;
            return txt;
          }
        })
        .select(container)
        .x("value")
        .xDomain([0,45])
        .xConfig({
          title:"Porcentaje"
        })
        .y("activity")
        .yConfig({
          title: null,
          width: 150
        })
        .shapeConfig({
          label: function(d) {
            return d.value+"%"
          },
        })
        .discrete("y")
        .title("2018")
        .legend(false)
        .groupBy("activity")
        //.barPadding(5)
        //.groupPadding(40)
        .render();
      }

d3.json("data/contexto-general/ambiental/ContextoAmbiental-nivelderesponsabilidad.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz5(loaded_data,"#viz_5");
      });

      function makeViz5(data,container){
        var vis5 = new d3plus.Plot()
        .data(data)
        .legendTooltip({
          title: function(d) {
            var txt = d.group;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          },
          body: function(d) {
            return null;
          }
        })
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";
            table += "<tr><td class='title'>Responsabilidad de ocurrencia:</td><td class='data'>" + d.responsability + "%</td></tr>";
            table += "<tr><td class='title'>Responsabilidad de solucionarlo:</td><td class='data'>" + d.solution + "%</td></tr>";
            table += "</table>";
            return table;
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          },
          title: function(d) {
            var txt = d.group;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        })/*
        .annotations([{
          data: [
            {x: d.solution, y: d.responsability}
          ],
          label: d.group,
          labelConfig: {
            textAnchor: "middle",
            verticalAlign: "middle"
          }
        }])*/
        .select(container)
        .x("solution")
        .xDomain([30,60])
        .xConfig({
          title:"Responsabilidad en la solución al Cambio Climático (% completamente responsables)"
        })
        .y("responsability")
        .yDomain([20,60])
        .yConfig({
          title:"Responsabilidad Cambio Climático estés ocurriendo (% completamente responsables)"
        })
        .groupBy("group")
        .render();
      }

d3.json("data/contexto-general/ambiental/ContextoAmbiental-Principalesproblemasambiental.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz6(loaded_data,"#viz_6");
      });

      function makeViz6(data,container){
        var vis6 = new d3plus.BarChart()
        .data(data)
        .legendTooltip({
          title: function(d) {
            var txt = d.year;
            return 'Respuestas para el año ' + txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          },
          body: function(d) {
            return null;
          }
        })
        .tooltipConfig({
          body: function(d) {
            return d.value + '%';
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          },
          title: function(d) {
            var txt = d.problem;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          }
        })
        .select(container)
        .y("problem")
        .yConfig({
          title: null
        })
        .x("value")
        .xConfig({
          title:"Porcentaje"
        })
        .discrete("y")
        .groupBy("year")
        .render();
      }

d3.json("data/contexto-general/ambiental/ContextoAmbiental-Respaldodemedidas.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz8(loaded_data,"#viz_8");
      });

      function makeViz8(data,container){
        var vis8 = new d3plus.BarChart()
        .data(data)
        .tooltipConfig({
          body: function(d) {
            return null;
          },
          footer: function(d) {
            return null;
          },
          title: function(d) {
            const txt = d.value + '%<br>Respuestas '+ d.opinion.substr(2).toLowerCase();
            return txt;
          }
        })
        .select(container)
        .y("idea")
        .yConfig({
          title: null,
          width: 250
        })
        .x("value")
        .xConfig({
          title:"Porcentaje %"
        })
        .shapeConfig({
          label: function(d) {
            return d.value+"%"
          },
        })
        .discrete("y")
        .groupBy("opinion")
        .render();
      }