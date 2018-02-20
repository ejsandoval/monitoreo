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
            table += "<tr><td class='title'>Porcentaje:</td><td class='data'>" + d.opinion + "</td></tr>";
            table += "<tr><td class='title'>Porcentaje:</td><td class='data'>" + d.value + "%</td></tr>";
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
          title:"Actividad"
        })
        .groupBy("opinion")
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
            table += "<tr><td class='title'>Porcentaje:</td><td class='data'>" + d.date + "</td></tr>";
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
        .x("date")
        .xConfig({
          title:"Fecha"
        })
        .y("value")
        .yConfig({
          title:"porcentaje"
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
            table += "<tr><td class='title'>Percepción:</td><td class='data'>" + d.opinion + "</td></tr>";
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
        .x("category")
        .xConfig({
          title:"Idea"
        })
        .y("value")
        .yConfig({
          title:"Porcentaje %"
        })
        .groupBy("opinion")
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

d3.json("data/contexto-general/politico-institucional/Corrupcion-Corrupcionorgpubli2.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz5(loaded_data,"#viz_5");
      });

      function makeViz5(data,container){
        var vis5 = new d3plus.BarChart()
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
        .select(container)
        .x("year")
        .xConfig({
          title:"Fecha"
        })
        .y("value")
        .yConfig({
          title:"porcentaje"
        })
        .groupBy("category")
        .render();
      }

d3.json("data/contexto-general/politico-institucional/Corrupcion-Transparenciaensectorpublico.json", function(error, loaded_data) {
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
        .select(container)
        .x("year")
        .xConfig({
          title:"Fecha"
        })
        .y("value")
        .yConfig({
          title:"porcentaje"
        })
        .groupBy("category")
        .render();
      }


d3.json("data/contexto-general/politico-institucional/ParticipacionSocial-Participacionenactcomunitarias.json", function(error, loaded_data) {
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
            var txt = d.activity;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
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
          title:"Actividad"
        })
        .groupBy("answer")
        .render();
      }