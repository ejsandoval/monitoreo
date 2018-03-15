d3.json("data/contexto-general/cti/CTI-Actividademprendedora.json", function(error, loaded_data) {
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
            table += "<tr><td class='title'>Porcentaje:</td><td class='data'>" + d.value + "%</td></tr>";
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
        .yDomain([0,30])
        .yConfig({
          title:"Porcentaje de la población adulta (18-64 años)"
        })
        .shapeConfig({
          Line: {
            strokeWidth: 3
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
        .groupBy("type")
        .render();
      }

d3.json("data/contexto-general/cti/CTI-AportedelaCTenInnovacion.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz1(loaded_data,"#viz_1");
      });

      function makeViz1(data,container){
        var vis1 = new d3plus.BarChart()
        .data(data)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";
            table += "<tr><td class='title'>Área:</td><td class='data'>" + d.area + "</td></tr>";
            table += "<tr><td class='title'>Porcentaje:</td><td class='data'>" + d.value + "%</td></tr>";
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
        .x("area")
        .xConfig({
          title:"Área"
        })
        .y("value")
        .yDomain([0,100])
        .yConfig({
          title:"% de respuestas"
        })
        .shapeConfig({
          label: function(d) {
            return d.value+"%"
          },
          Bar: {
            width: 40
          },
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
        .groupBy("type")
        .groupPadding(20)
        .render();
      }
d3.json("data/contexto-general/cti/CTI-BeneficiosdelaCTI.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz2(loaded_data,"#viz_2");
      });

      function makeViz2(data,container){
        var vis2 = new d3plus.Pie()
        .data(data)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";
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

d3.json("data/contexto-general/cti/CTI-ContribuciondelaCTI.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz3(loaded_data,"#viz_3");
      });

      function makeViz3(data,container){
        var vis3 = new d3plus.BarChart()
        .data(data)
        .tooltipConfig({
          body: function(d) {
            return null;
          },
          footer: function(d) {
            return null;
          },
          title: function(d) {
            var txt =  d.value + '% <br>' + d.opinion;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        })
        .select(container)
        .y("idea")
        .yConfig({
          title: null,
          "width": 220,
        })
        .x("value")
        .xDomain([0,100])
        .xConfig({
          title:"% de respuestas"
        })
        .discrete("y")
        .shapeConfig({
          label: function(d) {
            return d.value+"%"
          },
        })
        .groupBy("opinion")
        .render();
      }

d3.json("data/contexto-general/cti/CTI-Prestigioprofesionescientific.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz4(loaded_data,"#viz_4");
      });

      function makeViz4(data,container){
        var vis4 = new d3plus.BarChart()
        .data(data)
        .stacked(true)
        .tooltipConfig({
          body: function(d) {
            return 'Valoración ' + d.opinion;
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          },
          title: function(d) {
            var txt = d.value + '%';
            return txt;
          }
        })
        .select(container)
        .x("value")
        .xConfig({
          title:"Porcentaje"
        })
        .discrete("y")
        .y("profesion")
        .yConfig({
          title:"Profesión"
        })
        .groupBy("opinion")
        .shapeConfig({
          label: function(d) {
            return d.value+"%"
          },
        })
        .render();
      }

d3.json("data/contexto-general/cti/CTI-RazonesparatrabajarenCTI.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz5(loaded_data,"#viz_5");
      });

      function makeViz5(data,container){
        var vis5 = new d3plus.BarChart()
        .data(data)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";
            table += "<tr><td class='title'>Área:</td><td class='data'>" + d.area + "</td></tr>";
            table += "<tr><td class='title'>Porcentaje:</td><td class='data'>" + d.value + "%</td></tr>";
            table += "</table>";
            return table;
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          },
          title: function(d) {
            var txt = d.razon;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          }
        })
        .select(container)
        .x("razon")
        .xConfig({
          title: null,
        })
        .y("value")
        .yConfig({
          title:"Porcentaje"
        })
        .groupBy("area")
        .barPadding(5)
        .groupPadding(20)
        .shapeConfig({
          label: function(d) {
            var text = +d.value+'%';
            return text;
          },
          Bar: {
            width: 46,
          },
        })
        .render();
      }

d3.json("data/contexto-general/cti/CTI-BeneficiosdelaCTI.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz6(loaded_data,"#viz_6");
      });

      function makeViz6(data,container){
        var vis6 = new d3plus.Pie()
        .data(data)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";
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

d3.json("data/contexto-general/cti/CTI-motivacionparaemprender.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz7(loaded_data,"#viz_7");
      });

      function makeViz7(data,container){
        var vis7 = new d3plus.BarChart()
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
            var txt = d.idea;
            return txt;
          }
        })
        .legendTooltip({
          title: function(d) {
            var txt = d.idea;
            return txt;
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
        .yConfig({
          title:"Porcentaje (%)"
        })
        .groupBy("idea")
        .groupPadding(20)
        .render();
      }

d3.json("data/contexto-general/cti/CTI-atributospersonales.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz8(loaded_data,"#viz_8");
      });

      function makeViz8(data,container){
        var vis8 = new d3plus.BarChart()
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
            var txt = d.idea;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          }
        })
        .legendTooltip({
          title: function(d) {
            var txt = d.idea;
            return txt;
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
        .yConfig({
          title:"Porcentaje (%)",
        })
        .groupPadding(20)
        .groupBy("idea")
        .render();
      }