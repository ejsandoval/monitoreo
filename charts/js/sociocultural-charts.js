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
        .select(container)
        .y("value")
        .yConfig({
          title:"Porcentaje (%)"
        })
        .x("conflict")
        .xConfig({
          title:"Conflicto"
        })
        .groupBy("year")
        .render();
      }

      // function makeViz(data,container){
      //   var vis = new d3plus.BarChart()
      //   .data(data)
      //   .tooltipConfig({
      //     body: function(d) {
      //       var table = "<table class='tooltip-table'>";;
      //       table += "<tr><td class='title'>Porcentaje:</td><td class='data'>" + d.opinion + "</td></tr>";
      //       table += "<tr><td class='title'>Porcentaje:</td><td class='data'>" + d.value + "%</td></tr>";
      //       table += "</table>";
      //       return table;
      //     },
      //     footer: function(d) {
      //       return "<sub class='tooltip-footer'></sub>";
      //     },
      //     title: function(d) {
      //       var txt = d.activity;
      //       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
      //     }
      //   })
      //   .select(container)
      //   .y("value")
      //   .yConfig({
      //     title:"Porcentaje(%)"
      //   })
      //   .x("year")
      //   .xConfig({
      //     title:"Año"
      //   })
      //   .groupBy("conflict")
      //   .render();
      // }

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
        .groupBy("year")
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
        .select(container)
        .x("phrase")
        .xConfig({
          title:"Frase"
        })
        .y("value")
        .yConfig({
          title:"Porcentaje %"
        })
        .groupBy("opinion")
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
        .select(container)
        .y("value")
        .yDomain([0,100])
        .yConfig({
          title:"Porcentaje (%)"
        })
        .x("opinion")
        .xConfig({
          title:"opinion"
        })
        .groupBy("date")
        .render();
      }

d3.json("data/contexto-general/socio-cultural/ClimaSocial-Satisfaccionpropiavsotros.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz4(loaded_data,"#viz_4");
      });

      function makeViz4(data,container){
        var vis4 = new d3plus.BarChart()
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
        .select(container)
        .y("value")
        .yDomain([0,100])
        .yConfig({
          title:"Porcentaje (%)"
        })
        .x("opinion")
        .xConfig({
          title:"opinion"
        })
        .groupBy("answer")
        .render();
      }

d3.json("data/contexto-general/socio-cultural/Confianzaenlasinstituciones-Confianzaenlasinstituciones2.json", function(error, loaded_data) {
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
        .groupBy("date")
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

d3.json("data/contexto-general/socio-cultural/ConfianzaInterpersonal-ConfianzaenlosdemasPregunta 3.json", function(error, loaded_data) {
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
        .groupBy("date")
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
        .groupBy("date")
        .render();
      }

d3.json("data/contexto-general/socio-cultural/DimensionHumana-IndicedeDesarrolloHumano-IDH.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz13(loaded_data,"#viz_13");
      });

      function makeViz13(data,container){
        var vis13 = new d3plus.Plot()
        .data(data)
        .size("idh")
        .sizeMin(1)
        .sizeMax(10)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>"; 
            table += "<tr><td class='title'>Ranking:</td><td class='data'>" + d.ranking + "</td></tr>";
            table += "<tr><td class='title'>IDH:</td><td class='data'>" + d.idh + "</td></tr>";
            table += "</table>";
            return table;
          }
        })
        .select(container)
        .discrete("x")
        .x("country")
        .xConfig({
          title:"País"
        })
        .y("ranking")
        .yConfig({
          title:"Ranking"
        })
        .yDomain([0,130])
        .render();
      }


d3.json("data/contexto-general/socio-cultural/DimensionHumana-TheGlobalGenderGapIndex 17-Evolucion.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz14(loaded_data,"#viz_14");
      });

      function makeViz14(data,container){
        var vis14 = new d3plus.Plot()
        .data(data)
        .size("score")
        .sizeMin(5)
        .sizeMax(15)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>"; 
            table += "<tr><td class='title'>Variable:</td><td class='data'>" + d.category + "</td></tr>";
            table += "<tr><td class='title'>Ranking:</td><td class='data'>" + d.ranking + "</td></tr>";
            table += "<tr><td class='title'>Puntaje:</td><td class='data'>" + d.score + "</td></tr>";
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
        .y("ranking")
        .yConfig({
          title:"Ranking"
        })
        .yDomain([0,130])
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
        .select(container)
        .discrete("x")
        .x("country")
        .xConfig({
          title:"País"
        })
        .render();
      }

