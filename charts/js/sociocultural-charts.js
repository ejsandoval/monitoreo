d3.json("data/contexto-general/socio-cultural/ClimaSocial-Percepciondeconflictos.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz(loaded_data,"#viz_0");
      });

      function makeViz(data,container){
        var vis = new d3plus.BarChart()
        .data(data)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";;
            table += "<tr><td class='data'>" + d.conflict + "</td></tr>";
            table += "<tr><td class='title'>Porcentaje:</td><td class='data'>" + d.value + "%</td></tr>";
            table += "</table>";
            return table;
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          }
        })
        .legendTooltip({
          title: function(d) {
            var txt = d.year;
            return txt;
          },
          body: function(d) {
            return null;
          }
        })
        .select(container)
        .y("value")
        .yConfig({
          title:"Porcentaje (%)"
        })
        .x("conflict")
        .yDomain([0,100])
        .xConfig({
          title:"Conflicto"
        })
        .shapeConfig({
          label: function(d) {
            return d.value+"%";
          }
        })
        .groupBy("year") 
        .groupPadding(20)
        .render();
      }

d3.json("data/contexto-general/socio-cultural/ClimaSocial-Resoluciondeconflictos.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz1(loaded_data,"#viz_1");
      });

      function makeViz1(data,container){
        var vis1 = new d3plus.BarChart()
        .data(data)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";
            table += "<tr><td class='data'>" + d.conflict + "</td></tr>";
            table += "<tr><td class='title'>Porcentaje:</td><td class='data'>" + d.value + "%</td></tr>";
            table += "</table>";
            return table;
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          }
        })
        .legendTooltip({
          title: function(d) {
            var txt = d.year;
            return txt;
          },
          body: function(d) {
            return null;
          }
        })
        .select(container)
        .y("value")
        .yDomain([0,100])
        .yConfig({
          title:"Porcentaje (%)"
        })
        .x("conflict")
        .xConfig({
          title:"Conflicto"
        })
        .shapeConfig({
          label: function(d) {
            return d.value+"%";
          }
        })
        .groupBy("year")
        .groupPadding(20)
        .render();
      }

d3.json("data/contexto-general/socio-cultural/ClimaSocial-Respetoytolerancia.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz2(loaded_data,"#viz_2");
      });

      function makeViz2(data,container){
        var vis2 = new d3plus.BarChart()
        .data(data)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";
            table += "<tr><td class='title'>Respuesta:</td><td class='data'>" + d.opinion + "</td></tr>";
            table += "<tr><td class='title'>Porcentaje:</td><td class='data'>" + d.value + "%</td></tr>";
            table += "</table>";
            return table;
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          },
          title: function(d) {
            var txt = d.phrase;
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
        .y("phrase")
        .yConfig({
          title:"Frase",
          width: 150
        })
        .x("value")
        .xDomain([0,100])
        .xConfig({
          title:"Porcentaje %"
        })
        .discrete("y")
        .groupBy("opinion")
        .groupPadding(20)
        .shapeConfig({
          label: function(d) {
            return d.value+"%";
          },
          Bar: {
            height: 26.8
          }
        })
        .render();
      }


d3.json("data/contexto-general/socio-cultural/ClimaSocial-Satisfaccionconlavida.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz3(loaded_data,"#viz_3");
      });

      function makeViz3(data,container){
        var vis3 = new d3plus.BarChart()
        .data(data)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";
            table += "<tr><td class='data'>" + d.opinion + "</td></tr>";
            table += "<tr><td class='title'>Porcentaje:</td><td class='data'>" + d.value + "%</td></tr>";
            table += "</table>";
            return table;
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          }
        })
        .legendTooltip({
          title: function(d) {
            var txt = d.date;
            return txt;
          },
          body: function(d) {
            return null;
          }
        })
        .select(container)
        .y("value")
        .yDomain([0,100])
        .yConfig({
          title:"Porcentaje (%)"
        })
        .x("opinion")
        .xConfig({
          title: null
        })
        .shapeConfig({
          label: function(d) {
            return d.value+"%"
          },
        })
        .groupBy("date")
        .render();
      }


d3.json("data/contexto-general/socio-cultural/Confianzaenlasinstituciones-Confianzaenlasinstituciones.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz5(loaded_data,"#viz_5");
      });

      function makeViz5(data,container){
        var vis5 = new d3plus.BarChart()
        .data(data)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";
            table += "<tr><td class='data'>" + d.institution + "</td></tr>";
            table += "<tr><td class='title'>Porcentaje:</td><td class='data'>" + d.value + "%</td></tr>";
            table += "</table>";
            return table;
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          }
        })
        .legendTooltip({
          title: function(d) {
            var txt = d.date;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          },
          body: function(d) {
            return null;
          }
        })
        .select(container)
        .y("value")
        .yDomain([0,100])
        .yConfig({
          title:"Porcentaje que confía (%)"
        })
        .x("institution")
        .xConfig({
          title:"Institución"
        })
        .shapeConfig({
          label: function(d) {
            return d.value+"%"
          },
        })
        .groupBy("date")
        .groupPadding(25)
        .render();
      }

d3.json("data/contexto-general/socio-cultural/Confianzaenlasinstituciones-Percepciondecorrupcioneninstituciones.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz6(loaded_data,"#viz_6");
      });

      function makeViz6(data,container){
        var vis6 = new d3plus.BarChart()
        .data(data)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";
            table += "<tr><td class='data'>" + d.institution + "</td></tr>";
            table += "<tr><td class='title'>Porcentaje:</td><td class='data'>" + d.value + "%</td></tr>";
            table += "</table>";
            return table;
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          }
        })
        .legendTooltip({
          title: function(d) {
            var txt = d.date;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          },
          body: function(d) {
            return null;
          }
        })
        .select(container)
        .y("value")
        .yDomain([0,100])
        .yConfig({
          title:"Porcentaje (%)"
        })
        .x("institution")
        .xConfig({
          title:"institution"
        })
        .shapeConfig({
          label: function(d) {
            return d.value+"%";
          },
          Bar: {
            width: 15
          }
        })
        .groupPadding(20)
        .groupBy("date")
        .render();
      }

d3.json("data/contexto-general/socio-cultural/ConfianzaInterpersonal-ConfianzaenlosdemasPregunta 1.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz7(loaded_data,"#viz_7");
      });

      function makeViz7(data,container){
        d3.select("#preg1").text(data[0].question);
        var vis7 = new d3plus.Pie()
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
            var txt = d.opinion;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          }
        })
        .select(container)
        .groupBy("opinion")
        .render();
      }

d3.json("data/contexto-general/socio-cultural/ConfianzaInterpersonal-ConfianzaenlosdemasPregunta 2.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz8(loaded_data,"#viz_8");
      });

      function makeViz8(data,container){
        d3.select("#preg2").text(data[0].question);
        var vis8 = new d3plus.Pie()
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
            var txt = d.opinion;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          }
        })
        .select(container)
        .groupBy("opinion")
        .render();
      }

d3.json("data/contexto-general/socio-cultural/ConfianzaInterpersonal-ConfianzaenlosdemasPregunta 3.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz9(loaded_data,"#viz_9");
      });

      function makeViz9(data,container){
        d3.select("#preg3").text(data[0].question);
        var vis9 = new d3plus.Pie()
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
            var txt = d.opinion;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          }
        })
        .select(container)
        .groupBy("opinion")
        .render();
      }

d3.json("data/contexto-general/socio-cultural/ConfianzaInterpersonal-Confianzaenlosdemas2.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz10(loaded_data,"#viz_10");
      });

      function makeViz10(data,container){
        d3.select("#preg4").text(data[0].question);
        var vis10 = new d3plus.Pie()
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
            var txt = d.opinion;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          }
        })
        .select(container)
        .groupBy("opinion")
        .render();
      }

d3.json("data/contexto-general/socio-cultural/ConfianzaInterpersonal-Evoluciondelaconfianzasocial.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz11(loaded_data,"#viz_11");
      });

      function makeViz11(data,container){
        var vis11 = new d3plus.BarChart()
        .data(data)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";
            table += "<tr><td class='data'>" + d.perception + "</td></tr>";
            table += "<tr><td class='title'>Porcentaje:</td><td class='data'>" + d.value + "%</td></tr>";
            table += "</table>";
            return table;
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          }
        })
        .select(container)
        .y("value")
        .yDomain([0,100])
        .yConfig({
          title:"Porcentaje (%)"
        })
        .x("perception")
        .xConfig({
          title:"Percepción"
        })
        .shapeConfig({
          label: function(d) {
            return d.value+"%";
          }
        })
        .legendTooltip({
          title: function(d) {
            var txt = d.date;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          },
          body: function(d) {
            return null;
          }
        })
        .groupBy("date")
        .groupPadding(30)
        .render();
      }

d3.json("data/contexto-general/socio-cultural/ConfianzaInterpersonal-Evoluciondelaconfianzasocial2.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz12(loaded_data,"#viz_12");
      });

      function makeViz12(data,container){
        var vis12 = new d3plus.BarChart()
        .data(data)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";
            table += "<tr><td class='data'>" + d.perception + "</td></tr>";
            table += "<tr><td class='title'>Porcentaje:</td><td class='data'>" + d.value + "%</td></tr>";
            table += "</table>";
            return table;
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          }
        })
        .select(container)
        .y("value")
        .yDomain([0,100])
        .yConfig({
          title:"Porcentaje (%)"
        })
        .x("perception")
        .xConfig({
          title:"Percepción"
        })
        .shapeConfig({
          label: function(d) {
            return d.value+"%";
          }
        })
        .legendTooltip({
          title: function(d) {
            var txt = d.date;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          },
          body: function(d) {
            return null;
          }
        })
        .groupBy("date")
        .groupPadding(30)
        .render();
      }

d3.json("data/contexto-general/socio-cultural/DimensionHumana-IndicedeDesarrolloHumano-IDH.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz13(loaded_data,"#viz_13");
      });

      function makeViz13(data,container){
        var vis13 = new d3plus.Plot()
        .data(data)
        .sizeMin(10)
        .sizeMax(10)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>"; 
            table += "<tr><td class='title'>Ranking:</td><td class='data'>" + d.ranking + "</td></tr>";
            table += "<tr><td class='title'>IDH:</td><td class='data'>" + d.idh + "</td></tr>";
            table += "</table>";
            return table;
          },
          title: function(d) {
            var txt = d.country;
            return txt;
          }
        })
        .shapeConfig({
          Circle: {
            fill: d => (d.country === 'Chile' ? '#CA3650' : 'gray'),
          }
        })
        .select(container)
        .discrete("x")
        .x("country")
        .xSort(function (a, b) {
          return b.idh - a.idh;
        })
        //.xSort(['Chile','Argentina','Uruguay','Panamá',''])
        .xConfig({
          title:"País"
        })
        .y("idh")
        .yConfig({
          title:"Indice de Desarrollo Humano"
        })
        .legend(false)
        .yDomain([0.6,1])
        .render();
        console.log(vis13.xSort());
      }


d3.json("data/contexto-general/socio-cultural/DimensionHumana-TheGlobalGenderGapIndex 17-Evolucion.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz14(loaded_data,"#viz_14");
      });

      function makeViz14(data,container){
        var vis14 = new d3plus.Plot()
        .data(data)
        .sizeMin(5)
        .sizeMax(5)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>"; 
            table += "<tr><td class='title'>Variable:</td><td class='data'>" + d.category + "</td></tr>";
            table += "<tr><td class='title'>Ranking:</td><td class='data'>" + d.ranking + "</td></tr>";
            table += "</table>";
            return table;
          }
        })
        .select(container)
        .discrete("x")
        .x("category")
        .xConfig({
          title:"Variable"
        })
        .y("score")
        .yConfig({
          title:"Puntaje"
        })
        .yDomain([0,1])
        .groupBy("year")
        .render();
      }

d3.json("data/contexto-general/socio-cultural/DimensionHumana-TheGlobalGenderGapIndex17-Ranking.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz15(loaded_data,"#viz_15");
      });

      function makeViz15(data,container){
        /*data = data.sort(function(a,b){
          return b.ranking - a.ranking;
        })
        console.log(data);*/

        var vis15 = new d3plus.Plot()
        .data(data)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>"; 
            table += "<tr><td class='title'>Ranking:</td><td class='data'>" + d.country + "</td></tr>";
            table += "<tr><td class='title'>Ranking:</td><td class='data'>" + d.ranking + "</td></tr>";
            table += "</table>";
            return table;
          }
        })
        .y("ranking")
        .yConfig({
          title:"Ranking"
        })
        .annotations([
          {
            data: [
              {
                x: 'Bolivia',
                y: 63,
              },
              {
                x: 'Paraguay',
                y: 63,
              },
            ],
            shape: 'Line',
            stroke: '#ca3650',
            strokeDasharray: 5,
            strokeWidth: 1,
          },
        ])
        .select('#viz_15')
        .shapeConfig({
          fill: d => (d.country === 'Chile' ? '#ca3650' : 'gray'),
        })
        .legend(false)
        .discrete('x')
        .yDomain([100, 1])
        .x('country')
        .xSort(function (a, b) {
          return a.ranking - b.ranking;
        })
        .xConfig({
          title: 'País',
        })
        .render();
      }

