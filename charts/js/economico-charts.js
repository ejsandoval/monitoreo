d3.json("data/contexto-general/economico/ContextoEconomico-EvoluciondelindicedeGini.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz(loaded_data,"#viz_0");
      });

      function makeViz(data,container){
        var vis = new d3plus.LinePlot()
        .data(data)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";
            table += "<tr><td class='title'>Año:</td><td class='data'>" + d.year + "</td></tr>";
            table += "<tr><td class='title'>Valor:</td><td class='data'>" + d.value + "%</td></tr>";
            table += "</table>";
            return table;
          }
        })
        .select(container)
        .x("year")
        .xConfig({
          title:"Año"
        })
        .y("value")
        .yDomain([44,60])
        .yConfig({
          title:"Índice de Gini"
        })
        .shapeConfig({
          Line: {
            strokeWidth: 3
          }
        })
        .render();
      }

d3.json("data/contexto-general/economico/ContextoEconomico-EvolucionPIBpercapitaChile-PPP.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz1(loaded_data,"#viz_1");
      });

      function makeViz1(data,container){
        var vis1 = new d3plus.Plot()
        .data(data)
        .size("value")
        .sizeMin(5)
        .sizeMax(20)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";
            table += "<tr><td class='title'>Año:</td><td class='data'>" + d.year + "</td></tr>";
            table += "<tr><td class='title'>PIB en billones de dólares:</td><td class='data'>" + d.value + "</td></tr>";
            table += "</table>";
            return table;
          }
        })
        .select(container)
        .discrete("x")
        .x("year")
        .xConfig({
          title:"Año"
        })
        .y("ppp")
        .yConfig({
          title:"Precios de paridad de compra [$]"
        })
        .render();
      }

d3.json("data/contexto-general/economico/ContextoEconomico-EvolucionPIBpercapitaChile.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz2(loaded_data,"#viz_2");
      });

      function makeViz2(data,container){
        var vis2 = new d3plus.Plot()
        .data(data)
        .size("value")
        .sizeMin(1)
        .sizeMax(20)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";
            table += "<tr><td class='title'>Año:</td><td class='data'>" + d.year + "</td></tr>";
            table += "<tr><td class='title'>PIB en billones de dólares:</td><td class='data'>" + d.value + "</td></tr>";
            table += "</table>";
            return table;
          }
        })
        .select(container)
        .discrete("x")
        .x("year")
        .xConfig({
          title:"Año"
        })
        .y("pibpc")
        .yConfig({
          title:"PIB per capita ($)"
        })
        .render();
      }

d3.json("data/contexto-general/economico/ContextoEconomico-Exportaciondealtatecnologia.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz3(loaded_data,"#viz_3");
      });

      function makeViz3(data,container){
        var vis3 = new d3plus.Plot()
        .data(data)
        .size("value")
        .sizeMin(1)
        .sizeMax(20)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";
            table += "<tr><td class='title'>Año:</td><td class='data'>" + d.year + "</td></tr>";
            table += "<tr><td class='title'>PIB en millones de dólares:</td><td class='data'>" + d.value + "</td></tr>";
            table += "</table>";
            return table;
          }
        })
        .select(container)
        .discrete("x")
        .x("year")
        .xConfig({
          title:"Año"
        })
        .y("percentage")
        .yConfig({
          title:"Porcentaje del total de exportaciones manufacturadas (%)"
        })
        .render();
      }

d3.json("data/contexto-general/economico/ContextoEconomico-PobrezaExtremaCasen2015.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz4(loaded_data,"#viz_4");
      });

      function makeViz4(data,container){
        var vis4 = new d3plus.BarChart()
        .data(data)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";
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
        .select(container)
        .x("year")
        .xConfig({
          title:"Año"
        })
        .y("value")
        .yDomain([0,100])
        .yConfig({
          title:"Porcentaje (%)"
        })
        .shapeConfig({
          label: function(d) {
            return Math.round(d.value) + '%';
          },
          Bar: {
            width: 36
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
        .groupBy("category")
        .groupPadding(20)
        .render();
      }

d3.json("data/contexto-general/economico/ContextoEconomico-PobrezaMultidimensionalCasen2015.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz5(loaded_data,"#viz_5");
      });

      function makeViz5(data,container){
        var vis5 = new d3plus.BarChart()
        .data(data)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";
            table += "<tr><td class='title'>Año:</td><td class='data'>" + d.year + "</td></tr>";
            table += "<tr><td class='title'>Porcentaje:</td><td class='data'>" + d.value + "%</td></tr>";
            table += "</table>";
            return table;
          }
        })
        .select(container)
        .x("year")
        .xConfig({
          title:"Año"
        })
        .y("value")
        .yDomain([0,100])
        .yConfig({
          title:"Porcentaje de la población total (%)"
        })
        .shapeConfig({
          label: function(d) {
            return Math.round(d.value) + '%';
          }
        })
        .render();
      }

d3.json("data/contexto-general/economico/ContextoEconomico-GiniLatam.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz6(loaded_data,"#viz_6");
      });

      function makeViz6(data,container){
        var vis6 = new d3plus.Plot()
        .data(data)
        .legendConfig({
          label: function(d) {
            var txt = d.category === 'extremepovertypercentage' ? "Porcentaje de Pobreza Extrema" : "Porcentaje de Indigencia" ;
            return txt;
          }
        })
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";
            table += "<tr><td class='title'>Año de registro del Gini:</td><td class='data'>" + d.year_gini + "</td></tr>";
            table += "<tr><td class='title'>Valor:</td><td class='data'>" + d.gini + "%</td></tr>";
            table += "</table>";
            return table;
          },
          title: function(d) {
            var txt = d.category === 'extremepovertypercentage' ? "Porcentaje de Pobreza Extrema" : "Porcentaje de Indigencia";
            return txt;
          }
        })
        .legendTooltip({
          title: function(d) {
            var txt = d.category === 'extremepovertypercentage' ? "Porcentaje de Pobreza Extrema" : "Porcentaje de Indigencia" ;
            return null;
          },
          body: function(d) {
            return null;
          }
        })
        .legend({
          title: function(d) {
            var txt = d.category === 'extremepovertypercentage' ? "Porcentaje de Pobreza Extrema" : "Porcentaje de Indigencia" ;
            return txt;
          },
          body: function(d) {
            return null;
          }
        })
        .select(container)
        .x("country")
        .discrete("x")
        .xConfig({
          title:"País"
        })
        .y("gini")
        .yDomain([0,100])
        .yConfig({
          title:"Valor índice de Gini"
        })
        .groupBy("category")
        .size("value")
        .sizeMin(1)
        .sizeMax(10)
        .render();
      }