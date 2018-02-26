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
        .groupBy("type")
        .render();
        console.log(vis);
      }

d3.json("data/contexto-general/ambiental/ContextoAmbiental-EmisionCO2percapita.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz1(loaded_data,"#viz_1");
      });

      function makeViz1(data,container){
        var vis = new d3plus.LinePlot()
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
            var txt = d.country;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          }
        })
        .select(container)
        .x("year")
        .xConfig({
          title:"Año"
        })
        .y("value")
        .yDomain([0,30])
        .yConfig({
          title:"Porcentaje de la población adulta (18-64 años)"
        })
        .groupBy("country")
        .render();
      }